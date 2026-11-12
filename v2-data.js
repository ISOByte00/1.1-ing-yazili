/* ISOByte Study Lab v2 — original instructional material, companion to the supplied textbook excerpt. */
const BOOST = {
  alternateAudioUrl: 'https://www.ingilizcehocam.net/index.php/11-sinif/11-sinif-audio',
  sourceNotice: 'Kaynak: Yıldırım 11. Sınıf İngilizce kitabı s.9–36. Konu açıklamaları ve alıştırmalar ISOByte Study Lab için özgün hazırlanmıştır; dinleme seslerinin dökümleri PDF içinde bulunmaz.',
  lessons: {
    future: [
      {name:'1. Gelecek tahmini mi, plan mı?', kind:'explain', body:'Will ve be going to ikisi de geleceğe gönderme yapar. Sınavda önce cümleye bak: Karar konuşurken mi veriliyor? Önceden yapılmış bir plan mı var? Tahmin için açık bir kanıt mı verilmiş? Gelecek anlamını görmek tek başına yeterli değil.'},
      {name:'2. Will: düşünce, teklif, anlık karar',kind:'examples', examples:[['I think I will become a scientist.','Kendi tahminim.'],['The phone is ringing. I will answer it.','Şimdi karar verdim.'],['I will help you with your project.','Yardım teklifi / söz.'],['Will you call me tomorrow?','Will ile soru.'],['She will not (won’t) give up.','Olumsuz cümle.']]},
      {name:'3. Going to: plan ve kanıt',kind:'examples',examples:[['I am going to study tonight.','Önceden verdiğim karar.'],['They are going to apply for a job.','Planlanmış bir eylem.'],['Look! The glass is falling. It is going to break.','Gözle görülen kanıta dayalı tahmin.'],['Is she going to visit the university?','Soru için am/is/are başa alınır.'],['I am not going to work there.','Olumsuz form.']]},
      {name:'4. Aynı fiil, farklı bağlam',kind:'examples',examples:[['I will buy a notebook.','Konuşurken karar verdim.'],['I am going to buy a notebook.','Daha önce karar verdim.'],['I think it will rain tomorrow.','Kişisel hava tahmini.'],['Look at the clouds! It is going to rain.','Gözlemlenen işaret.']]},
      {name:'5. Soru/olumsuz ve fiil hataları',kind:'examples',examples:[['Will he study? / He won’t study.','Will tüm özneler için aynıdır.'],['Are you going to work? / I am not going to work.','Going to öncesi yardımcı fiil gerekir.'],['She will be a doctor.','Will be + isim olabilir.'],['She is going to be a doctor.','Going to be + isim olabilir.'],['She will goes. ✕ → She will go. ✓','Will sonrasında V1.']]},
      {name:'6. Karıştırılan ipuçları',kind:'explain',body:'I think / I hope / I believe / probably sıklıkla will ile gelir fakat bunlar mekanik bir kural değildir. Karar verilmişse will yerine going to da doğru olabilir. Present continuous da kesinleşmiş düzenlemelerde gelecek anlatabilir, ama bu modül kitabın hedefi olan will/going to ayrımına odaklanır.'}
    ],
    preference: [
      {name:'1. Prefer: genel beğeni',kind:'examples',examples:[['I prefer tea to coffee.','İsim + to + isim.'],['I prefer reading to watching films.','V-ing + to + V-ing.'],['I prefer to read rather than watch films.','to + V1 ... rather than + V1.'],['Do you prefer skiing or snowboarding?','Kitabın 28. sayfasındaki soru kalıbı.'],['She prefers unicycles to bicycles.','Kitap s.32: Leslie Mann örneği.']]},
      {name:'2. Would rather: yalın fiil',kind:'examples',examples:[['I would rather stay than leave.','V1 ... than ... V1.'],['I’d rather study science today.','Kısa biçimi I’d.'],['Would you rather play chess or checkers?','Kitap s.28 soru kalıbı.'],['I’d rather not go out.','Olumsuz: would rather not + V1.'],['Would you rather have tea?','Kibar bir tercih sorusu.']]},
      {name:'3. Would prefer: to + fiil',kind:'examples',examples:[['I’d prefer to stay at home.','Would prefer + to + V1.'],['I’d prefer to drink tea rather than drink coffee.','İki eylemi karşılaştırma.'],['Would you prefer to go now?','Soru biçimi.'],['I’d prefer not to wait.','Olumsuz tercih.'],['I’d prefer tea to coffee.','Would prefer + isim de kullanılabilir.']]},
      {name:'4. İki şeyi karşılaştır',kind:'explain',body:'Prefer X to Y, would rather X than Y; fiil biçimlerini ayrıca kontrol et. “Prefer reading than watching” yanlış; “would rather to read” yanlış. “Would prefer reading” bazı bağlamlarda mümkün olsa da sınavdaki güvenli kalıp “would prefer to read”dir.'},
      {name:'5. Tek bir tercihi söylemek',kind:'examples',examples:[['I prefer swimming.','Genel olarak yüzmeyi severim.'],['I prefer to swim.','Bu da gramer açısından doğru.'],['I’d rather swim.','Şu durumda yüzmeyi seçerdim.'],['I’d prefer to swim.','Kibar veya duruma özgü tercih.'],['I prefer swimming to cycling.','İki hobi karşılaştırılıyor.']]},
      {name:'6. Anlam farkı mutlak değil',kind:'explain',body:'Prefer genel alışkanlıkta, would rather / would prefer belirli durumda yaygındır; yine de bağlamlara göre örtüşebilirler. Puan getirecek en sağlam ayrım “to / than” ve fiilin biçimidir. Kitabın bu PDF kesitinde would prefer açıklaması yok; bu anlatım dış kaynaklı genel dil bilgisidir.'}
    ],
    ability: [
      {name:'1. Can: bugün yapabildiğim şey',kind:'examples',examples:[['I can solve physics problems.','Şimdiki yetenek.'],['Can she paint? — Yes, she can.','Soru ve kısa cevap.'],['He cannot (can’t) swim.','Olumsuz.'],['I can speak English.','Can sonrası yalın fiil.']]},
      {name:'2. Could: geçmişteki genel yetenek',kind:'examples',examples:[['Feza Gürsey could solve difficult problems.','Kitap s.34 bağlamı.'],['I could ride a bicycle when I was seven.','Geçmişte yapabildiğim şey.'],['Could you write beautifully at primary school?','Kitap s.31 soru fikri.'],['She couldn’t drive at sixteen.','Geçmişte yapamıyordu.']]},
      {name:'3. Can/could başka anlamlara da gelir',kind:'explain',body:'Can izin veya olasılık, could daha kibar rica için kullanılabilir (“Could you help me?”). Ancak kitabın bu kısmındaki temel kazanım “şimdiki ve geçmişteki yetenekler”dir. Tek seferlik geçmiş başarı için was/were able to nüansı vardır; bu yazılı notunun ana hedefi değildir.'},
      {name:'4. Hatalar',kind:'examples',examples:[['He can plays tennis. ✕','Doğrusu: He can play tennis.'],['Could you to swim? ✕','Doğrusu: Could you swim?'],['She don’t can skate. ✕','Doğrusu: She cannot/can’t skate.']]}
    ],
    hobbies: [
      {name:'1. Like, love, enjoy, dislike',kind:'examples',examples:[['I enjoy reading.','Enjoy + V-ing.'],['She dislikes watching reality shows.','Dislike + V-ing.'],['I love gardening.','Love + V-ing doğal bir biçimdir.'],['They like cycling.','Like + V-ing; like + to V1 de kullanılabilir.']]},
      {name:'2. Fond of, keen on, interested in',kind:'examples',examples:[['I am fond of gardening.','be fond of + V-ing'],['She is keen on learning languages.','be keen on + V-ing'],['He is interested in painting.','be interested in + V-ing'],['I am crazy about fencing.','be crazy about + V-ing']]},
      {name:'3. Good at, skilled at, gifted in',kind:'examples',examples:[['I am good at solving problems.','be good at + V-ing'],['Jackie is skilled at embroidery.','be skilled at + isim veya V-ing'],['David Beckham is gifted in football.','Kitap s.32 gifted in.'],['I am bad at drawing.','be bad at + V-ing']]},
      {name:'4. Hobi kelimelerini cümlede kullan',kind:'examples',examples:[['Pottery is an indoor hobby.','Pottery = çömlekçilik.'],['Hiking is an outdoor activity.','Hiking = doğa yürüyüşü.'],['She is keen on astronomy.','Astronomy = gökbilim.'],['We are interested in arts and crafts.','Arts and crafts = sanat ve el işleri.']]},
      {name:'5. Edatların görevi',kind:'explain',body:'Fond OF, keen ON, interested IN, good AT, skilled AT: Bu edatlardan sonra fiil gelecekse -ing biçimi kullanılır. Çünkü edattan sonra fiilin isimleşmiş biçimi (gerund) gelir. “I am interested in learn” değil “I am interested in learning”.'}
    ]
  },
  readingHighlights: {
    portfolio:{patterns:[['be able to + V1','yapabilmek'],['in addition','ek olarak'],['get feedback','geri bildirim almak'],['evaluate progress','gelişimi değerlendirmek']],keywords:[['assignment','ödev'],['showcase','sergilemek'],['academic','akademik'],['feedback','geri bildirim'],['evaluate','değerlendirmek'],['progress','ilerleme']],note:'E-portfolio metni için konu bir teknoloji ürününden çok “öğrenme çalışmalarını paylaşmak ve değerlendirmek”tir.'},
    robin:{patterns:[['apply for a position','bir işe başvurmak'],['cope with a crisis','krizle başa çıkmak'],['do my best','elimden geleni yapmak'],['in addition / furthermore','ayrıca'],['be determined to + V1','... yapmaya kararlı olmak']],keywords:[['temporary','geçici'],['achieve','başarmak'],['valuable','değerli'],['upgrade','geliştirmek'],['competent','yetkin'],['determined','kararlı'],['ambitious','hırslı']],note:'Bu diyalog kitap s.17’de Video 1.1 etkinliğinin yanında yazılıdır; ses/video transkriptiyle aynı olduğuna dair ek doğrulama yapılmadı.'},
    vlog:{patterns:[['take control of','kontrolünü ele almak'],['provide opportunities','fırsat sağlamak'],['peer evaluation','akran değerlendirmesi'],['fluency and accuracy','akıcılık ve doğruluk']],keywords:[['assignment','ödev'],['record','kaydetmek'],['beforehand','önceden'],['fluency','akıcılık'],['accuracy','doğruluk']],note:'Akran değerlendirme formundaki iki terim: fluency ve accuracy.'},
    ads:{patterns:[['responsibilities / qualifications','görevler / aranan nitelikler'],['relevant experience','ilgili iş deneyimi'],['apply for','başvurmak'],['be good at','... konusunda iyi olmak']],keywords:[['collaborate','iş birliği yapmak'],['evaluate','değerlendirmek'],['investigation','araştırma'],['interpersonal','kişiler arası'],['leadership','liderlik'],['campaign','kampanya']],note:'İş ilanlarında hangi işin hangi görevi gerektirdiğine bak: makine mühendisliği ≠ reklam kampanyaları.'},
    cv:{patterns:[['work experience','iş deneyimi'],['professional skills','mesleki beceriler'],['references on request','istenirse referans verilir'],['come up with ideas','fikir üretmek']],keywords:[['critical thinking','eleştirel düşünme'],['strategic','stratejik'],['references','referanslar'],['product development','ürün geliştirme'],['client relations','müşteri ilişkileri']],note:'Catherine = PR / David = mechanical engineer. CV sorularında eğitim ve deneyim bölümlerini karşılaştır.'},
    wendy:{patterns:[['be regarded as','olarak kabul edilmek'],['due to / because of','... yüzünden'],['get awards','ödül almak'],['set up / found an organization','kuruluş kurmak']],keywords:[['disadvantaged','dezavantajlı'],['volunteer','gönüllü'],['donation','bağış'],['expand','genişlemek'],['approximately','yaklaşık'],['entrepreneur','girişimci']],note:'Sarı kelime etkinliği s.24: volunteers, donations, expanded, approximately, entrepreneurs. Bu kelimelerin hem anlamını hem türünü bil.'},
    celeb:{patterns:[['be fond of + V-ing','... yapmaya düşkün olmak'],['be crazy about + V-ing','çok sevmek'],['prefer X to Y','X’i Y’ye tercih etmek'],['be skilled at','becerikli olmak']],keywords:[['typewriter','daktilo'],['fencing','eskrim'],['unicycle','tek tekerlekli bisiklet'],['philanthropy','hayırseverlik'],['dedicate','adamak'],['beneficial','faydalı']],note:'Kitap s.32’de prefer kullanımı gerçek bağlamda görülür: Leslie Mann prefers unicycles to bicycles.'},
    feza:{patterns:[['be gifted in','bir alanda yetenekli olmak'],['be keen on','bir şeyle yakından ilgilenmek'],['carry out research','araştırma yürütmek'],['pass away','vefat etmek'],['be known worldwide for','dünya çapında ... ile tanınmak']],keywords:[['particularly','özellikle'],['admiration','hayranlık'],['incredibly','inanılmaz derecede'],['scholarship','burs'],['pass away','vefat etmek'],['inspiration','ilham']],note:'Kariyer kronolojisi: 1921 doğum; 1944 üniversite; 1950 doktora; 1961 ODTÜ; 1974 Yale; 1991 emeklilik; 1992 vefat.'}
  }
};

/* A large, locally generated question bank: authored exercises, not textbook test copies. */
(function () {
  const bank=[];
  const add=(topic,type,prompt,data,why)=>bank.push({id:`q${bank.length+1}`,topic,type,prompt,...data,why});
  const mc=(t,q,choices,correct,why)=>add(t,'mcq',q,{options:choices,answer:correct},why);
  const fill=(t,q,answers,why)=>add(t,'fill',q,{answers:Array.isArray(answers)?answers:[answers]},why);
  const tf=(t,q,a,why)=>add(t,'tf',q,{answer:a},why);
  const order=(t,text,why)=>add(t,'order','Kelimeleri doğru sıraya yerleştir.',{tokens:text.split(' | '),answer:text.split(' | ')},why);
  const match=(t,pairs,why)=>add(t,'match','Kavramları doğru açıklamalarla eşleştir.',{pairs:pairs.map(x=>({left:x[0],right:x[1]}))},why);
  const classify=(t,items,labels,why)=>add(t,'classify','İfadelerin hangi yapıyı anlattığını seç.',{items:items.map(x=>({text:x[0],label:x[1]})),labels},why);
  // Future jobs and predictions
  mc('future','I already planned my holiday. I ___ travel in June.',['will','am going to','would rather'],1,'Önceden plan: am going to.');
  mc('future','The phone is ringing. I ___ answer it.',['am going to','will','prefer'],1,'Anlık karar: will.');
  mc('future','I promise I ___ call you tonight.',['will','am','prefer'],0,'Söz verme: will.');
  mc('future','Look at the dark sky! It ___ rain.',['will','is going to','can'],1,'Görünür kanıt: is going to.');
  mc('future','Which sentence is grammatically correct?',['He will goes.','He will go.','He going to go.'],1,'Will sonrası yalın fiil.');
  mc('future','She ___ going to become an architect.',['are','is','will'],1,'She is going to.');
  mc('future','___ you going to apply for a job?',['Do','Are','Will'],1,'Going to sorusunda are başa alınır.');
  mc('future','I think robots ___ become more common.',['will','are going','prefers'],0,'Kişisel tahmin: will.');
  mc('future','Which sentence describes an immediate decision?',["I am going to study next week.","I will open the window now.","I have arranged an appointment."],1,'Şimdi verilen karar: will.');
  mc('future','We have bought our tickets. We ___ leave tomorrow.',['will','are going to','would'],1,'Hazırlığı yapılmış plan.');
  fill('future','She ___ (not / will) become a pilot.',['won’t','will not','wont'],'Will olumsuzu: will not veya won’t.');
  fill('future','I ___ going to learn Spanish.','am','I öznesi am ile kullanılır.');
  fill('future','They ___ going to work at a hospital.','are','They öznesi are alır.');
  fill('future','He will ___ (study) engineering.','study','Will sonrasında V1 kullan.');
  fill('future','___ she going to be a surgeon?','is','She için Is başa gelir.');
  tf('future','Will bütün şahıslar için değişmeden kullanılır.',true,'I will, he will, they will.');
  tf('future','Going to öncesinde hiçbir zaman am / is / are kullanılmaz.',false,'Going to öncesi am/is/are gerekir.');
  tf('future','“I will to study” doğru bir gelecek zaman yapısıdır.',false,'Doğrusu: I will study.');
  tf('future','“I hope I’ll be a vet.” umut bildiren bir ifadedir.',true,'Kitap s.13–14 benzeri cümlelerle umut ve plan ayrımını işler.');
  order('future','She | is | going | to | study | medicine','Özne + is going to + V1.');
  order('future','I | will | help | you | tomorrow','Will sonrası V1.');
  order('future','Are | they | going | to | apply','Are + özne + going to + V1.');
  match('future',[['will','anlık karar / söz'],['going to','önceden yapılan plan'],['won’t','will not'],['probably','muhtemelen']],'Kullanım farklarını kavra.');
  classify('future',[['Look at the clouds!','going to'],['I promise to help.','will'],['We bought the tickets.','going to'],['I guess robots will change jobs.','will']],['will','going to'],'Kanıt ve önceden plan going to; umut/tahmin ve vaatlerde will sık kullanılır.');
  // Prefer patterns
  mc('preference','I prefer ___ to dancing.',['sing','singing','to sing'],1,'Prefer + V-ing to V-ing.');
  mc('preference','I would rather ___ than run.',['walk','walking','to walk'],0,'Would rather + V1.');
  mc('preference','I would prefer ___ outside.',['playing','play','to play'],2,'Would prefer + to V1.');
  mc('preference','I prefer apples ___ oranges.',['than','to','rather'],1,'Prefer ... to ... .');
  mc('preference','I’d rather go now ___ wait.',['to','rather','than'],2,'Would rather ... than ... .');
  mc('preference','I’d prefer to read ___ watch TV.',['rather than','to','than to'],0,'Would prefer + to V1 + rather than + V1.');
  mc('preference','Which sentence is correct?',['I would rather to swim.','I would rather swimming.','I would rather swim.'],2,'Would rather + V1.');
  mc('preference','Which sentence is correct?',['I prefer swimming to cycling.','I prefer swimming than cycling.','I prefer to swimming.'],0,'Prefer V-ing to V-ing.');
  mc('preference','In “I prefer tea to coffee”, why is -ing absent?',['Tea and coffee are nouns.','Because of than.','Prefer never takes -ing.'],0,'İsimlerle -ing kullanılmaz.');
  mc('preference','Which expresses a polite preference?',['I’d prefer to sit here.','I good at sitting.','I can to sit.'],0,'Would prefer to + V1.');
  fill('preference','I prefer reading ___ listening to podcasts.','to','Prefer ... to ... .');
  fill('preference','I’d rather study ___ play games.','than','Would rather ... than ... .');
  fill('preference','I would prefer ___ stay here.','to','Would prefer to + V1.');
  fill('preference','I prefer ___ (swim) to running.','swimming','Prefer + V-ing.');
  fill('preference','I’d rather ___ (drink) water.','drink','Would rather + V1.');
  fill('preference','I’d prefer ___ (go) home.','to go','Would prefer to + V1.');
  tf('preference','“I prefer to learn rather than watch.” dil bilgisi bakımından mümkündür.',true,'Prefer + to V1 + rather than + V1.');
  tf('preference','“I would rather to leave.” doğru biçimdir.',false,'Doğrusu “I would rather leave.”');
  tf('preference','“I prefer tea to coffee” cümlesinde tea ve coffee isimdir.',true,'Bu nedenle -ing gerekmiyor.');
  tf('preference','Would prefer sonrasında sadece -ing gelir.',false,'Yaygın ve sınavlık kalıp: would prefer to + V1.');
  order('preference','I | prefer | reading | to | swimming','Prefer + V-ing to V-ing.');
  order('preference','I | would | rather | stay | than | leave','Would rather + V1 than V1.');
  order('preference','I | would | prefer | to | walk','Would prefer to + V1.');
  match('preference',[['prefer','doing ... to doing'],['would rather','do ... than do'],['would prefer','to do ... rather than do'],['I’d','I would']],'Üç kalıbı birbirine karıştırma.');
  classify('preference',[['I prefer singing to dancing.','prefer'],['I’d rather sing than dance.','would rather'],['I’d prefer to sing rather than dance.','would prefer']],['prefer','would rather','would prefer'],'Fiil şekli ve bağlaçlar yapıyı belirler.');
  // Ability
  mc('ability','At primary school I ___ write very quickly.',['can','could','am'],1,'Geçmişteki yetenek için could.');
  mc('ability','She ___ speak English now.',['can','could to','can to'],0,'Can + V1.');
  mc('ability','Which is correct?',['Could you draw?','Could you drew?','Could you to draw?'],0,'Could + V1.');
  mc('ability','Feza Gürsey ___ solve difficult maths problems when he was young.',['could','going to','prefer'],0,'Kitabın geçmiş yetenek bağlamı: could.');
  mc('ability','He ___ play chess at the age of four.',['couldn’t to','could','can to'],1,'Could sonrası yalın fiil.');
  fill('ability','When I was six, I ___ (can, past) read short stories.','could','Can geçmiş yetenekte could olur.');
  fill('ability','He ___ not swim when he was five.','could','Olumsuz geçmiş yetenek: could not.');
  fill('ability','I can ___ (paint) landscapes.','paint','Can + V1.');
  tf('ability','Can ve could sonrasında fiil yalın biçimdedir.',true,'Can paint, could solve.');
  tf('ability','“She can to dance” doğru bir cümledir.',false,'Can dance.');
  tf('ability','Could, 2. ünitede geçmişteki yetenekleri anlatmak için kullanılır.',true,'Talking about present and past abilities.');
  order('ability','She | could | solve | difficult | problems','Could + V1.');
  order('ability','Can | you | ride | a | bicycle','Can + özne + V1.');
  match('ability',[['can','şimdiki yetenek'],['could','geçmişteki genel yetenek'],['can’t','şimdiki yetersizlik'],['couldn’t','geçmişteki yetersizlik']],'Şimdiki ve geçmişteki yeteneği ayır.');
  // Hobbies and likes
  mc('hobbies','I am interested ___ learning English.',['at','in','of'],1,'Interested in + V-ing.');
  mc('hobbies','She is fond ___ reading books.',['on','at','of'],2,'Fond of + V-ing.');
  mc('hobbies','He is keen ___ photography.',['on','of','at'],0,'Keen on.');
  mc('hobbies','I am good ___ solving puzzles.',['at','on','in'],0,'Good at + V-ing.');
  mc('hobbies','My friend enjoys ___ jewellery.',['make','making','to making'],1,'Enjoy + V-ing.');
  mc('hobbies','Jackie is skilled ___ embroidery.',['to','at','on'],1,'Skilled at.');
  mc('hobbies','Which describes disliking something?',['I am crazy about chess.','I dislike painting.','I am fond of hiking.'],1,'Dislike = hoşlanmamak.');
  fill('hobbies','I am fond ___ gardening.','of','Fond of.');
  fill('hobbies','She is keen ___ cycling.','on','Keen on.');
  fill('hobbies','He is skilled ___ pottery.','at','Skilled at.');
  fill('hobbies','I enjoy ___ (read) books.','reading','Enjoy + V-ing.');
  fill('hobbies','We are interested in ___ (learn) calligraphy.','learning','Interested in + V-ing.');
  tf('hobbies','“I’m keen on swimming” doğru bir cümledir.',true,'Keen on + V-ing.');
  tf('hobbies','“I’m interested in learn” doğru bir cümledir.',false,'Interested in learning.');
  tf('hobbies','Pottery çömlekçilik anlamına gelir.',true,'Hobi kutusu s.27.');
  order('hobbies','I | am | interested | in | learning | languages','Interested in + V-ing.');
  order('hobbies','She | is | fond | of | gardening','Fond of + V-ing.');
  match('hobbies',[['pottery','çömlekçilik'],['hiking','doğa yürüyüşü'],['embroidery','nakış'],['astronomy','gökbilim']],'Kitap s.27 sarı hobi kutusu.');
  classify('hobbies',[['fond ___','of'],['keen ___','on'],['interested ___','in'],['good ___','at']],['of','on','in','at'],'Edatları ezberle: of/on/in/at.');
  // Reading-focused language recognition
  match('reading',[['cope with','başa çıkmak'],['think outside the box','yaratıcı düşünmek'],['pass away','vefat etmek'],['make up your mind','karar vermek']],'Deyimler ünite 1–2 okuma ve deyim köşelerinden.');
  match('reading',[['typewriter','daktilo'],['unicycle','tek tekerlekli bisiklet'],['fencing','eskrim'],['philanthropy','hayırseverlik']],'Kitap s.32.');
  mc('reading','Which expression means “evaluate progress”?',['gelişimi değerlendirmek','işe başvurmak','mülakat planlamak'],0,'E-portfolio metni.');
  mc('reading','Which means “job requirements”?',['responsibilities','qualifications','donations'],1,'Qualifications = aranan nitelikler.');
  mc('reading','“be determined to work” ne demek?',['çalışmaya kararlı olmak','işi bırakmak','mesleği seçmek'],0,'Determined to + V1.');
  mc('reading','“in addition” ne demek?',['buna rağmen','ek olarak','en sonunda'],1,'In addition = ek olarak.');
  tf('reading','Robin iş görüşmesi metninde “cope with a crisis” kalıbını kullanır.',true,'Kitap s.17.');
  tf('reading','“The nuts and bolts” yalnızca fiziksel somun ve cıvata anlamına gelir.',false,'Deyim olarak bir işin temel ayrıntıları anlamına gelir.');
  // Vocabulary generated question sets: each pair yields both meaning and reverse recall
  const core=STUDY_DATA.vocab.filter(x=>x.group==='yellow');
  for (const w of core){
    const choices=[w.tr,...core.filter(x=>x.w!==w.w&&x.tr!==w.tr).slice((core.indexOf(w)*3)%12,((core.indexOf(w)*3)%12)+3).map(x=>x.tr)];
    mc('vocabulary',`“${w.w}” hangi anlama gelir?`,choices,0,`${w.w} = ${w.tr}. Kitap s.${w.page}.`);
    fill('vocabulary',`“${w.tr}” anlamındaki İngilizce kelime nedir?`,[w.w],`Doğru karşılık: ${w.w}.`);
    const all=core.filter(x=>x.w!==w.w).slice(0,3).map(x=>x.w);
    mc('vocabulary',`“${w.tr}” için doğru İngilizce sözcük hangisi?`,[...all,w.w],3,`${w.w} = ${w.tr}.`);
    add('vocabulary','listen','Duyduğun İngilizce kelimenin Türkçesini seç.',{word:w.w,options:choices,answer:0},`Duyduğun kelime: ${w.w}; anlamı: ${w.tr}.`);
  }
  BOOST.bank=bank;
})();