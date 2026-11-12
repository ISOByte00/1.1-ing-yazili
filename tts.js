/* ISOByte Study Lab — static MP3 player with browser fallback.
 * Never sends a visitor's text to a paid API. The 34 recordings can be created
 * once using a MANUALLY triggered GitHub Action and stored in this repository.
 */
(function () {
  'use strict';
  const PREF_KEY = 'isobyte_tts_prefs_v3'; // preserve prior rate / mode choices
  const defaults = { rate: 1, mode: 'en', provider: 'recorded' };
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(PREF_KEY) || '{}') || {}; } catch (_) {}
  const prefs = {
    rate: Math.max(.6, Math.min(1.3, Number(saved.rate) || 1)),
    mode: ['en', 'pair', 'triple'].includes(saved.mode) ? saved.mode : 'en',
    provider: saved.provider === 'browser' ? 'browser' : 'recorded'
  };
  // Migrate away from previously offered live-API/Worker mode and drop its URL.
  try { localStorage.setItem(PREF_KEY, JSON.stringify(prefs)); } catch (_) {}
  let token=0, currentAudio=null, currentResolve=null;
  let manifest=null, manifestPromise=null, availability='idle';

  function setPref(name,value){
    if(!Object.prototype.hasOwnProperty.call(defaults,name))return;
    if(name==='rate')value=Math.max(.6,Math.min(1.3,Number(value)||1));
    if(name==='mode'&&!['en','pair','triple'].includes(value))return;
    if(name==='provider'&&!['recorded','browser'].includes(value))return;
    prefs[name]=value;
    try{localStorage.setItem(PREF_KEY,JSON.stringify(prefs));}catch(_){}
  }
  function stop(){
    token++;
    const old=currentAudio; currentAudio=null;
    if(old){old.pause();old.removeAttribute('src');}
    if(currentResolve){const finish=currentResolve;currentResolve=null;finish(false);}
    try{if('speechSynthesis' in window)speechSynthesis.cancel();}catch(_){}
  }
  function start(){stop();return token;}
  const isCurrent=t=>t===token;
  function getVoices(){
    if(!('speechSynthesis' in window))return [];
    try{return speechSynthesis.getVoices()||[];}catch(_){return []}
  }
  function scoreVoice(v, language){
    const lang=(v.lang||'').toLowerCase().replace('_','-'), wanted=language.toLowerCase();
    if(!lang.startsWith(wanted.slice(0,2)))return -100;
    let score=lang===wanted?40:22;
    const name=(v.name||'').toLowerCase();
    if(/neural|natural|online|enhanced|premium/.test(name))score+=45;
    if(/google/.test(name))score+=35;
    if(/microsoft/.test(name))score+=24;
    if(/siri|apple/.test(name))score+=22;
    if(/compact|espeak|festival|flite/.test(name))score-=35;
    if(v.localService===false)score+=6;
    return score;
  }
  function bestVoice(lang){return getVoices().filter(v=>scoreVoice(v,lang)>-10).sort((a,b)=>scoreVoice(b,lang)-scoreVoice(a,lang))[0]||null;}
  async function waitVoices(){
    if(getVoices().length||!('speechSynthesis' in window))return;
    await new Promise(resolve=>{
      let done=false;
      const finish=()=>{if(done)return;done=true;clearTimeout(timer);speechSynthesis.removeEventListener?.('voiceschanged',finish);resolve();};
      speechSynthesis.addEventListener?.('voiceschanged',finish,{once:true});
      const timer=setTimeout(finish,900);
    });
  }
  async function browserSay(text,lang,rate,id){
    if(!('speechSynthesis' in window))throw Error('Bu cihazda seslendirme desteği bulunmuyor.');
    await waitVoices();
    if(!isCurrent(id))return false;
    const v=bestVoice(lang);
    if(lang.startsWith('tr') && getVoices().length && !v)throw Error('Türkçe ses paketi bulunamadı; Türkçe MP3 kayıtları henüz eklenmediyse sistemine Türkçe ses yüklemelisin.');
    return new Promise(resolve=>{
      if(!isCurrent(id)){resolve(false);return;}
      const u=new SpeechSynthesisUtterance(text);u.lang=lang;u.rate=rate;u.pitch=1;u.volume=1;u.voice=v;
      let settled=false;
      const finish=ok=>{if(settled)return;settled=true;if(currentResolve===finish)currentResolve=null;resolve(ok);};
      currentResolve=finish;u.onend=()=>finish(true);u.onerror=()=>finish(false);
      try{speechSynthesis.speak(u);}catch(_){finish(false);}
    });
  }
  function validateManifest(j){
    if(!j||j.version!==1||!Array.isArray(j.items)||j.items.length!==17)return null;
    const safe=p=>typeof p==='string'&&/^audio\/core\/[0-9]{2}-(en|tr)\.mp3$/.test(p);
    if(j.items.some(x=>!x||typeof x.word!=='string'||typeof x.meaning!=='string'||!safe(x.en)||!safe(x.tr)))return null;
    return j;
  }
  async function prepare(){
    if(manifestPromise)return manifestPromise;
    availability='loading';
    manifestPromise=(async()=>{
      try{
        const res=await fetch('audio/manifest.json',{cache:'no-store'});
        if(!res.ok)throw Error('not published');
        manifest=validateManifest(await res.json());
        availability=manifest?'ready':'missing';
      }catch(_){manifest=null;availability='missing';}
      return availability;
    })();
    return manifestPromise;
  }
  function status(){return {availability,count:manifest?.items?.length||0,provider:prefs.provider};}
  function getRecordedPath(text,lang){
    if(!manifest)return null;
    const term=String(text).trim();
    if(lang==='en-US')return manifest.items.find(w=>w.word===term)?.en||null;
    if(lang==='tr-TR')return manifest.items.find(w=>w.meaning===term)?.tr||null;
    return null;
  }
  async function playRecorded(path,rate,id){
    if(!isCurrent(id))return false;
    return new Promise(resolve=>{
      if(!isCurrent(id)){resolve(false);return;}
      const audio=new Audio(path);currentAudio=audio;audio.playbackRate=rate;
      let settled=false;
      const finish=ok=>{if(settled)return;settled=true;audio.onended=null;audio.onerror=null;
        if(currentAudio===audio)currentAudio=null;if(currentResolve===finish)currentResolve=null;resolve(ok);};
      currentResolve=finish;audio.onended=()=>finish(true);audio.onerror=()=>finish(false);
      try{const p=audio.play();if(p?.catch)p.catch(()=>finish(false));}catch(_){finish(false);}
    });
  }
  async function say(text,lang='en-US',rate=prefs.rate,id=token){
    if(!isCurrent(id))return false;
    if(prefs.provider==='recorded'){
      await prepare();
      if(!isCurrent(id))return false;
      const path=getRecordedPath(text,lang);
      if(path){const played=await playRecorded(path,rate,id);if(played||!isCurrent(id))return played;}
    }
    // Missing or faulty MP3 => browser voice only. Never invoke Google API at runtime.
    return browserSay(text,lang,rate,id);
  }
  window.StudyVoice={prefs,setPref,stop,start,isCurrent,say,bestVoice,getVoices,prepare,status,getRecordedPath};
})();