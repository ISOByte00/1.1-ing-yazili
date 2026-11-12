const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync(`${__dirname}/../data.js`, 'utf8');
const D = vm.runInNewContext(`${source}\nSTUDY_DATA`);
const count = group => D.vocab.filter(w => w.group === group).length;
assert.equal(D.lessons.length, 4, 'Dört konu anlatımı bulunmalı');
assert.equal(count('yellow'), 17, '17 temel sarı kelime bulunmalı');
assert.equal(count('hobbies'), 12, '12 hobi kelimesi bulunmalı');
assert.equal(count('pronounce'), 15, '15 telaffuz vurgusu bulunmalı');
assert.equal(D.audio.length, 11, '10 ses + 1 video bağlantısı bulunmalı');
assert.equal(D.audio.filter(x => x.type === 'video').length, 1);
assert.equal(D.readings.length, 8, '8 okuma rehberi olmalı');
assert.equal(new Set(D.vocab.map(v => v.w)).size, D.vocab.length, 'Tekrarlanan kelime var');
assert.equal(new Set(D.audio.map(a => a.type + a.id)).size, D.audio.length, 'Tekrarlanan kayıt var');
for(const a of D.audio) {
 assert.match(a.url, /^https:\/\/www\.eba\.gov\.tr\/c\?q=/);
 assert.equal(a.pdf, a.page - 8, 'PDF sayfa hesaplaması hatalı');
}
for(const l of D.lessons) for(const q of l.checks) {
 assert.ok(Number.isInteger(q.a) && q.a >= 0 && q.a < q.options.length, 'Geçersiz cevap anahtarı');
 assert.ok(q.q.length > 5 && q.why.length > 5, 'Açıklamasız soru var');
}
for(const r of D.readings) for(const q of r.questions){
 assert.equal(typeof q.a, 'boolean');
 assert.ok(q.why.length > 5);
}
console.log('OK: 4 konu · 17 sarı kelime · 12 hobi · 15 telaffuz · 11 kayıt · 8 okuma · cevap anahtarları');