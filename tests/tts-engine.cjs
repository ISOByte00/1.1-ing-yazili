'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const code=fs.readFileSync(path.join(__dirname,'../tts.js'),'utf8');
const memory=new Map();
const localStorage={getItem:k=>memory.get(k)||null,setItem:(k,v)=>memory.set(k,v)};
const voices=[{name:'System English',lang:'en-US',localService:true},{name:'Google US English',lang:'en-US',localService:false},{name:'Turkish Natural',lang:'tr-TR',localService:true}];
let lastUtterance=null, lastAudio=null, manifests=0;
class FakeUtterance{constructor(text){this.text=text;}}
class FakeAudio{
 constructor(src){this.src=src;this.playbackRate=1;lastAudio=this;}
 play(){setImmediate(()=>this.onended?.());return Promise.resolve();}
 pause(){}
 removeAttribute(){}
}
const speechSynthesis={getVoices:()=>voices,addEventListener(){},removeEventListener(){},speak(u){lastUtterance=u;setImmediate(()=>u.onend?.());},cancel(){}};
const manifest={version:1,items:Array.from({length:17},(_,i)=>({word:i===0?'achieve':`word${i}`,meaning:i===0?'başarmak, ulaşmak':`meaning${i}`,en:`audio/core/${String(i+1).padStart(2,'0')}-en.mp3`,tr:`audio/core/${String(i+1).padStart(2,'0')}-tr.mp3`}))};
function setup(fetchResponse){
 const context={window:{speechSynthesis},speechSynthesis,localStorage,SpeechSynthesisUtterance:FakeUtterance,setTimeout,clearTimeout,fetch:fetchResponse,Audio:FakeAudio};
 vm.runInNewContext(code,context);
 return context.window.StudyVoice;
}
(async()=>{
 const voice=setup(async(url)=>{manifests++;assert.equal(url,'audio/manifest.json');return {ok:true,json:async()=>manifest};});
 assert.equal(voice.prefs.rate,1);
 assert.equal(voice.prefs.mode,'en');
 assert.equal(voice.prefs.provider,'recorded');
 assert.equal(voice.bestVoice('en-US').name,'Google US English');
 assert.equal(await voice.prepare(),'ready');
 assert.equal(voice.status().count,17);
 let id=voice.start();assert.equal(await voice.say('achieve','en-US',1,id),true);
 assert.equal(lastAudio.src,'audio/core/01-en.mp3');assert.equal(lastAudio.playbackRate,1);
 id=voice.start();assert.equal(await voice.say('başarmak, ulaşmak','tr-TR',.9,id),true);
 assert.equal(lastAudio.src,'audio/core/01-tr.mp3');assert.equal(lastAudio.playbackRate,.9);
 assert.equal(manifests,1);
 id=voice.start();assert.equal(await voice.say('not in the fixed vocabulary','en-US',1,id),true);
 assert.equal(lastUtterance.voice.name,'Google US English');
 voice.setPref('mode','pair');voice.setPref('rate',.9);
 assert.equal(JSON.parse(memory.get('isobyte_tts_prefs_v3')).mode,'pair');
 assert.equal(JSON.parse(memory.get('isobyte_tts_prefs_v3')).rate,.9);
 const noPack=setup(async()=>({ok:false}));
 assert.equal(await noPack.prepare(),'missing');
 id=noPack.start();assert.equal(await noPack.say('achieve','en-US',1,id),true);
 assert.equal(lastUtterance.voice.name,'Google US English');
 console.log('PASS: recorded EN/TR paths, 1× speed, fallback, no paid runtime calls, saved preferences.');
})().catch(e=>{console.error(e);process.exit(1)});