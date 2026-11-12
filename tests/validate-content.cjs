'use strict';
const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict'),path=require('path');
const root=path.join(__dirname,'..');
const src=fs.readFileSync(path.join(root,'data.js'),'utf8')+'\n'+fs.readFileSync(path.join(root,'v2-data.js'),'utf8')+'\n;({D:STUDY_DATA,B:BOOST})';
const {D,B}=vm.runInNewContext(src,{});
const core=D.vocab.filter(x=>x.group==='yellow');
assert.equal(core.length,17);
assert.equal(new Set(core.map(x=>x.w)).size,17);
assert.equal(D.audio.length,11);
assert.equal(D.readings.length,8);
assert.equal(D.lessons.length,4);
assert.equal(B.bank.length>=150,true);
assert.equal(B.readingHighlights&&Object.keys(B.readingHighlights).length,8);
assert.equal(Object.keys(B.lessons).length,4);
assert.ok(B.alternateAudioUrl.startsWith('https://'));
const types=new Set(B.bank.map(q=>q.type));
for (const t of ['mcq','tf','fill','order','match','classify','listen']) assert.ok(types.has(t),`Missing type ${t}`);
for(const q of B.bank){
 assert.ok(q.id&&q.prompt&&q.why,`Incomplete item ${q.id}`);
 if(q.type==='mcq'||q.type==='listen'){assert.ok(q.options.length>=2,`No options ${q.id}`);assert.ok(q.answer>=0&&q.answer<q.options.length,`Bad answer ${q.id}`);}
 if(q.type==='fill')assert.ok(q.answers.length&&q.answers.every(Boolean),`No accepted answers ${q.id}`);
 if(q.type==='tf')assert.equal(typeof q.answer,'boolean',`Bad true/false ${q.id}`);
 if(q.type==='order')assert.equal(q.tokens.length,q.answer.length);
 if(q.type==='match')assert.ok(q.pairs.length>1);
 if(q.type==='classify')assert.ok(q.items.length>1);
}
for(const r of D.readings)assert.ok(B.readingHighlights[r.id]&&B.readingHighlights[r.id].patterns.length>0);
for(const a of D.audio)assert.ok(a.url.startsWith('https://'));
const scenario={standard:[['grammar',15],['vocabulary',6],['reading',4]],grammar:[['future',10],['preference',10],['ability',5],['hobbies',5]],vocab:[['vocabulary',17],['reading',8]],written:[['fill',12],['order',5],['match',3]],full:[['grammar',22],['vocabulary',12],['reading',6]]};
for (const [name,plan] of Object.entries(scenario)) for(const [topic,required] of plan){
 const pool=B.bank.filter(q=>topic==='grammar'?['future','preference','ability','hobbies'].includes(q.topic):['fill','order','match'].includes(topic)?q.type===topic:q.topic===topic);
 assert.ok(pool.length>=required,`${name}: not enough ${topic} questions`);
}
console.log(`PASS: ${B.bank.length} unique questions across ${types.size} exercise types; 17 yellow words; 11 listening references; 8 reading guides; 5 exam scenarios.`);