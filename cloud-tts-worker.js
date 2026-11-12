/**
 * ISOByte Study Lab — optional Cloudflare Worker proxy for Google Cloud TTS.
 * The key is only in Cloudflare Worker secret GOOGLE_TTS_API_KEY.
 * Origin checks alone do NOT prevent automated abuse: configure Cloudflare
 * rate-limits and Google Cloud quotas/budget alerts before deploying.
 */
const ORIGIN='https://isobyte00.github.io';
const reply=(data,status,origin)=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json','Access-Control-Allow-Origin':origin,'Vary':'Origin','Cache-Control':'no-store'}});
function fromBase64(x){const s=atob(x),o=new Uint8Array(s.length);for(let i=0;i<s.length;i++)o[i]=s.charCodeAt(i);return o;}
export default {
 async fetch(request,env){
  const origin=env.ALLOWED_ORIGIN||ORIGIN;
  if(request.headers.get('Origin')!==origin)return reply({error:'Origin forbidden'},403,origin);
  if(request.method==='OPTIONS')return new Response(null,{status:204,headers:{'Access-Control-Allow-Origin':origin,'Access-Control-Allow-Methods':'POST,OPTIONS','Access-Control-Allow-Headers':'Content-Type','Access-Control-Max-Age':'86400'}});
  if(request.method!=='POST')return reply({error:'Method not allowed'},405,origin);
  if(Number(request.headers.get('content-length')||0)>1000)return reply({error:'Request too large'},413,origin);
  let body;try{body=await request.json();}catch(_){return reply({error:'Invalid JSON'},400,origin);}
  const text=typeof body.text==='string'?body.text.trim():'',lang=body.lang;
  if(!text||text.length>150||!['en-US','tr-TR'].includes(lang))return reply({error:'Invalid language/text'},400,origin);
  if(!env.GOOGLE_TTS_API_KEY)return reply({error:'GOOGLE_TTS_API_KEY secret missing'},503,origin);
  const voice=lang==='en-US'?'en-US-Chirp3-HD-Aoede':'tr-TR-Chirp3-HD-Aoede';
  let upstream;
  try{
   upstream=await fetch('https://texttospeech.googleapis.com/v1/text:synthesize?key='+encodeURIComponent(env.GOOGLE_TTS_API_KEY),{
    method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({input:{text},voice:{languageCode:lang,name:voice},audioConfig:{audioEncoding:'MP3'}})
   });
  }catch(_){return reply({error:'Google service unreachable'},502,origin);}
  if(!upstream.ok)return reply({error:'Google TTS returned '+upstream.status},502,origin);
  const payload=await upstream.json();
  if(!payload.audioContent)return reply({error:'No audio content'},502,origin);
  return new Response(fromBase64(payload.audioContent),{headers:{'Content-Type':'audio/mpeg','Access-Control-Allow-Origin':origin,'Vary':'Origin','Cache-Control':'public,max-age=86400','X-Content-Type-Options':'nosniff'}});
 }
};