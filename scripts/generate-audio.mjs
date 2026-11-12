/**
 * ISOByte Study Lab — ONE-TIME audio production (never run from the site).
 * Runs only when manually started from the private-secret-backed Actions job.
 * Missing MP3s are synthesized, existing MP3s are reused without API requests.
 * No user-entered text, no public runtime API, no credential logging.
 */
import { readFile, writeFile, mkdir, rename, stat } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const AUDIO_DIR = resolve(ROOT, 'audio');
const MANIFEST = resolve(AUDIO_DIR, 'manifest.json');
const MAX_SYNTHESIS_REQUESTS = 34;
const MAX_BILLABLE_CHARACTERS = 1200;
const API_URL = 'https://texttospeech.googleapis.com/v1/text:synthesize';
const englishVoice = 'en-US-Chirp3-HD-Aoede';
const turkishVoice = 'tr-TR-Chirp3-HD-Aoede';
const shortMeanings = new Map(Object.entries({
  achieve:'başarmak', temporary:'geçici', upgrade:'geliştirmek',
  cope:'başa çıkmak', competent:'yetkin', determined:'kararlı',
  volunteers:'gönüllüler', donations:'bağışlar', expanded:'genişledi',
  approximately:'yaklaşık olarak', entrepreneurs:'girişimciler',
  particularly:'özellikle', admiration:'hayranlık',
  incredibly:'inanılmaz derecede', scholarship:'burs',
  'pass away':'vefat etmek', inspiration:'ilham'
}));

export async function loadPlan(){
  const src = await readFile(resolve(ROOT,'data.js'),'utf8');
  const context=vm.createContext({});
  vm.runInContext(src+'\n;globalThis.__words = STUDY_DATA.vocab.filter(w => w.group === "yellow").map(w => ({word:w.w,meaning:w.tr}));', context, {timeout:1000});
  const vocab = context.__words;
  if (vocab.length!==17 || new Set(vocab.map(v=>v.word)).size!==17 || vocab.some(v=>!shortMeanings.has(v.word))){
    throw Error('Unexpected yellow vocabulary: review the audio generation plan before spending money.');
  }
  const items = vocab.map((w,i)=>{
    const order=String(i+1).padStart(2,'0');
    return {word:w.word,meaning:w.meaning,spokenMeaning:shortMeanings.get(w.word),
      en:`audio/core/${order}-en.mp3`,tr:`audio/core/${order}-tr.mp3`};
  });
  const characters=items.reduce((n,w)=>n+w.word.length+w.spokenMeaning.length,0);
  if(items.length*2>MAX_SYNTHESIS_REQUESTS || characters>MAX_BILLABLE_CHARACTERS)throw Error('Hard spending guard exceeded.');
  return {items,characters};
}
export function manifestFromPlan({items}){
 return {version:1,format:'MP3',source:'Google Cloud Text-to-Speech · Chirp 3 HD',
    generatedFor:'ISOByte Study Lab',items};
}
export function validateMp3(bytes){
  if(bytes.length<100) return false;
  const id3=bytes.subarray(0,3).toString('ascii')==='ID3';
  const frame=bytes[0]===0xff && (bytes[1]&0xe0)===0xe0;
  return id3||frame;
}
async function existsValid(path){
 try{const s=await stat(path);if(s.size<100)return false;
   const fd=await readFile(path);return validateMp3(fd);
 }catch(_){return false;}
}
async function synthesize(text,language,apiKey){
 const voice = language==='en-US'?englishVoice:turkishVoice;
 const res=await fetch(API_URL+'?key='+encodeURIComponent(apiKey),{
   method:'POST',headers:{'Content-Type':'application/json'},
   body:JSON.stringify({input:{text},voice:{languageCode:language,name:voice},audioConfig:{audioEncoding:'MP3'}})
 });
 if(!res.ok)throw Error(`Google TTS request failed (${res.status}). Review Cloud API configuration and billing.`);
 const json=await res.json();
 if(typeof json.audioContent!=='string')throw Error('Google TTS did not return MP3 audio.');
 const bytes=Buffer.from(json.audioContent,'base64');
 if(!validateMp3(bytes))throw Error('Google TTS returned an invalid MP3.');
 return bytes;
}
export async function generate({key=process.env.GOOGLE_TTS_API_KEY,dryRun=false}={}){
 const plan=await loadPlan();
 const tasks=plan.items.flatMap(item=>[
    {path:item.en,text:item.word,lang:'en-US'},
    {path:item.tr,text:item.spokenMeaning,lang:'tr-TR'}
 ]);
 const missing=[];
 for(const task of tasks)if(!(await existsValid(resolve(ROOT,task.path))))missing.push(task);
 const totalChars=missing.reduce((n,task)=>n+task.text.length,0);
 if(missing.length>MAX_SYNTHESIS_REQUESTS || totalChars>MAX_BILLABLE_CHARACTERS)throw Error('Per-run API usage hard limit reached.');
 console.log(`Word pairs: ${plan.items.length}. Existing valid files: ${tasks.length-missing.length}. Missing: ${missing.length}. Max characters this run: ${totalChars}.`);
 if(dryRun)return {plan,missing,totalChars};
 if(missing.length && !key)throw Error('GOOGLE_TTS_API_KEY secret missing. No API requests made.');
 await mkdir(resolve(AUDIO_DIR,'core'),{recursive:true});
 for(const [i,task] of missing.entries()){
   console.log(`Generating ${i+1}/${missing.length}: ${task.lang} · ${task.path}`);
   const bytes=await synthesize(task.text,task.lang,key);
   const abs=resolve(ROOT,task.path),tmp=abs+'.tmp';
   await writeFile(tmp,bytes);
   await rename(tmp,abs);
   if(i<missing.length-1)await new Promise(r=>setTimeout(r,220));
 }
 // The manifest is installed only after ALL audio files have been verified.
 for(const task of tasks)if(!(await existsValid(resolve(ROOT,task.path))))throw Error(`Incomplete recording pack: ${task.path}`);
 await writeFile(MANIFEST,JSON.stringify(manifestFromPlan(plan),null,2)+'\n','utf8');
 console.log(`Audio pack complete: ${tasks.length} local MP3 files. No website runtime API needed.`);
 return {plan,missing,totalChars};
}
if(process.argv[1] && resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  generate({dryRun:process.argv.includes('--dry-run')}).catch(err=>{
    console.error(err.message);process.exitCode=1;
  });
}