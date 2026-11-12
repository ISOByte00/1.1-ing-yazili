/* ISOByte Speech v3 — keep provider credentials out of GitHub Pages. */
(function(){
'use strict';
const KEY='isobyte_tts_prefs_v3', defaults={rate:1,mode:'en',provider:'browser',endpoint:''};
let cached={};try{cached=JSON.parse(localStorage.getItem(KEY)||'{}')||{};}catch(_){}
const prefs={...defaults,...cached};
if(!['en','pair','triple'].includes(prefs.mode))prefs.mode='en';
if(!['browser','google'].includes(prefs.provider))prefs.provider='browser';
prefs.rate=Math.max(.6,Math.min(1.3,Number(prefs.rate)||1));
let token=0,activeAudio=null,abort=null,pending=null;
function setPref(key,value){
 if(!(key in defaults))return;
 if(key==='rate')value=Math.max(.6,Math.min(1.3,Number(value)||1));
 if(key==='provider'&&!['browser','google'].includes(value))return;
 if(key==='mode'&&!['en','pair','triple'].includes(value))return;
 if(key==='endpoint')value=String(value||'').trim().replace(/\/+$/,'');
 prefs[key]=value;try{localStorage.setItem(KEY,JSON.stringify(prefs));}catch(_){}
}
function stop(){
 token++;
 const audio=activeAudio;
 if(audio){audio.pause();audio.removeAttribute('src');activeAudio=null;}
 if(abort){abort.abort();abort=null;}
 if(pending){const finish=pending;pending=null;finish(false);}
 try{speechSynthesis.cancel();}catch(_){}
}
function start(){stop();return token;}
function isCurrent(id){return id===token;}
function voices(){try{return speechSynthesis.getVoices()||[];}catch(_){return[];}}
function score(v,language){
 const l=(v.lang||'').toLowerCase().replace('_','-'),target=language.toLowerCase();
 if(!l.startsWith(target.slice(0,2)))return -100;
 const name=(v.name||'').toLowerCase();let score=l===target?40:22;
 if(/neural|natural|online|enhanced|premium/.test(name))score+=45;
 if(/google/.test(name))score+=35;
 if(/microsoft/.test(name))score+=24;
 if(/siri|apple/.test(name))score+=22;
 if(/compact|espeak|festival|flite/.test(name))score-=35;
 if(v.localService===false)score+=6;
 return score;
}
function bestVoice(language){return voices().filter(v=>score(v,language)>-10).sort((a,b)=>score(b,language)-score(a,language))[0];}
async function loadVoices(){
 if(voices().length)return;
 await new Promise(resolve=>{
   if(!('speechSynthesis' in window)){resolve();return;}
   let completed=false;
   const finish=()=>{if(completed)return;completed=true;clearTimeout(timer);speechSynthesis.removeEventListener?.('voiceschanged',finish);resolve();};
   speechSynthesis.addEventListener?.('voiceschanged',finish,{once:true});
   const timer=setTimeout(finish,850);
 });
}
async function browserSay(text,lang,rate,id){
 if(!('speechSynthesis' in window))throw Error('Tarayıcıda seslendirme desteği yok.');
 await loadVoices();if(!isCurrent(id))return false;
 const available=voices().filter(v=>(v.lang||'').toLowerCase().replace('_','-').startsWith(lang.slice(0,2).toLowerCase()));
 if(lang.startsWith('tr')&&voices().length&&!available.length)throw Error('Türkçe ses paketi yüklü değil. Google Cloud sesini bağlamayı deneyebilirsin.');
 return new Promise(resolve=>{
  if(!isCurrent(id)){resolve(false);return;}
  const u=new SpeechSynthesisUtterance(text);
  u.lang=lang;u.rate=rate;u.pitch=1;u.volume=1;u.voice=bestVoice(lang)||null;
  let settled=false;
  function finish(success){if(settled)return;settled=true;pending=null;resolve(success);}
  pending=finish;u.onend=()=>finish(true);u.onerror=()=>finish(false);
  try{speechSynthesis.speak(u);}catch(_){finish(false);}
 });
}
async function cloudSay(text,lang,rate,id){
 const url=prefs.endpoint;
 if(!/^https:\/\/[a-z0-9.-]+(?::\d+)?(?:\/[^?#]*)?$/i.test(url)&&!/^http:\/\/localhost(?::\d+)?(?:\/[^?#]*)?$/i.test(url))
   throw Error('Google Cloud için Worker adresini kaydet. API anahtarını siteye değil Worker Secret alanına gir.');
 const controller=new AbortController();abort=controller;
 let response;
 try{response=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text,lang,rate}),signal:controller.signal});}
 catch(e){if(!isCurrent(id)||e.name==='AbortError')return false;throw Error('Worker sunucusuna ulaşılamadı. URL ve CORS ayarlarını denetle.');}
 if(!isCurrent(id))return false;
 if(!response.ok){let msg='';try{msg=String((await response.json()).error||'');}catch(_){}throw Error('Ses sunucusu '+response.status+' hatası: '+msg.slice(0,120));}
 const blob=await response.blob();if(!isCurrent(id))return false;
 const blobUrl=URL.createObjectURL(blob),audio=new Audio(blobUrl);activeAudio=audio;audio.playbackRate=rate;
 return new Promise((resolve,reject)=>{
  let finished=false;
  function finish(ok){if(finished)return;finished=true;pending=null;audio.onended=null;audio.onerror=null;URL.revokeObjectURL(blobUrl);activeAudio=null;resolve(ok);}
  pending=finish;audio.onended=()=>finish(true);audio.onerror=()=>finish(false);
  audio.play().catch(()=>finish(false));
 });
}
async function say(text,lang='en-US',rate=prefs.rate,id=token){
 if(!isCurrent(id))return false;
 return prefs.provider==='google'?cloudSay(text,lang,rate,id):browserSay(text,lang,rate,id);
}
window.StudyVoice={prefs,setPref,stop,start,isCurrent,say,bestVoice,getVoices:voices};
})();