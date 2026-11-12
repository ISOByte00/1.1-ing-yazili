/* Kaynak: 2026–2027 11. Sınıf Yıldırım İngilizce, kitap s. 9–36 / PDF s. 1–28. */
const STUDY_DATA = {
  units: [
    {id:1, name:'Future Jobs', pages:'9–24', focus:'Will · Going to · meslekler · iş başvuruları'},
    {id:2, name:'Hobbies and Skills', pages:'25–36', focus:'Prefer · Would rather · Would prefer · can/could · hobiler'}
  ],
  lessons:[
    {
      id:'future', number:'01', category:'1. ÜNİTE', title:'Will vs Be Going To', kicker:'Gelecek planları ve tahminler', book:'12–14', pdf:'4–6', duration:'12 dk',
      intro:'İkisi de geleceği anlatır. Fark çoğunlukla kararın ne zaman verildiği ve tahminin dayanağıdır.',
      blocks:[
        {type:'compare', heading:'Aynı gelecek, farklı gerekçe', left:{title:'WILL + V1',sub:'Tahmin · anlık karar · söz / teklif',example:'I think robots will do more jobs.',translation:'Bence robotlar daha çok iş yapacak.',tip:'I think / I guess / probably gibi ifadelerle sık görülür.'},right:{title:'AM / IS / ARE GOING TO + V1',sub:'Önceden yapılmış plan · kanıta dayalı tahmin',example:'I am going to study engineering.',translation:'Mühendislik okuyacağım (planım bu).',tip:'Look at those clouds! It is going to rain.'}},
        {type:'rule',heading:'Will nasıl kurulur?',formula:'Özne + will / won’t + V1',points:['I will work. → Çalışacağım.','She won’t travel. → Seyahat etmeyecek.','Will you study? → Ders çalışacak mısın?','I’ll = I will · won’t = will not']},
        {type:'rule',heading:'Going to nasıl kurulur?',formula:'Özne + am/is/are + (not) going to + V1',points:['I am going to become a vet. → Veteriner olmayı planlıyorum.','He isn’t going to leave. → Ayrılmayı planlamıyor.','Are they going to travel? → Seyahat edecekler mi?','“I going to” YANLIŞ. “I am going to” DOĞRU.']},
        {type:'note',heading:'Sınav tuzağı',text:'I think / I hope / I believe ifadeleri will ile sık kullanılır, ama bunlar katı yasak/izin kuralları değildir. Kesin ipucu: önceden plan ya da gözle görülür kanıt varsa going to güçlü adaydır.'},
        {type:'source',heading:'Kitapta geçtiği yer',text:'S.13’te “I’m going to be a vet” (plan) ve “I hope I’ll be an architect” (umut/tahmin); s.14’te I’m, I’ll, won’t telaffuzları.'}
      ],
      checks:[
        {q:'Look at that broken glass! He ___ hurt his hand.',options:['will','is going to','would rather'],a:1,why:'Gözle görülür kanıta dayalı tahmin: is going to.'},
        {q:'I think she ___ be a brilliant engineer.',options:['will','is going to','prefers'],a:0,why:'Fikir/tahmin için will en doğal cevap.'},
        {q:'We have already bought the tickets. We ___ fly on Saturday.',options:['will','are going to','would'],a:1,why:'Biletler alınmış; önceden yapılmış plan.'},
        {q:'“She going to study” cümlesi doğru mudur?',options:['Doğru','Yanlış'],a:1,why:'She IS going to study olmalı.'}
      ]
    },
    {
      id:'preference',number:'02',category:'2. ÜNİTE',title:'Prefer · Would Rather · Would Prefer',kicker:'Üç farklı tercih kalıbı',book:'28, 32–33, 36',pdf:'20, 24–25, 28',duration:'18 dk',
      intro:'En çok karıştırılan konu: to / than ve fiilin -ing / yalın / to + yalın biçimi. Aradaki tek fark “than” değil!',
      blocks:[
        {type:'compare',heading:'Önce ikisini ayır',left:{title:'PREFER',sub:'Çoğunlukla genel tercihler',example:'I prefer drinking tea to drinking coffee.',translation:'Kahve içmektense çay içmeyi tercih ederim.',tip:'prefer + V-ing + TO + V-ing'},right:{title:'WOULD RATHER',sub:'Genellikle belirli durumdaki tercih',example:'I’d rather drink tea than drink coffee.',translation:'Çay içmeyi tercih ederim.',tip:'would rather + V1 + THAN + V1'}},
        {type:'rule',heading:'Üçüncü yapı: Would prefer',formula:'would prefer + to V1 + rather than + V1',points:['I’d prefer to stay rather than go. → Gitmektense kalmayı tercih ederim.','I’d prefer to study now. → Şimdi çalışmayı tercih ederim.','Would prefer daha kibar bir tercih bildirmek için de kullanılır.','NOT: would prefer to studying ❌ / would prefer to study ✅']},
        {type:'rule',heading:'Prefer neden bazen -ing almıyor?',formula:'prefer + isim + to + isim   |   prefer + V-ing + to + V-ing',points:['I prefer tea to coffee. → İsim + isim; -ing gerekmiyor.','I prefer drinking tea to drinking coffee. → Fiil + fiil; -ing kullanılıyor.','I prefer to drink tea rather than drink coffee. → Bu da DOĞRU başka bir kalıp.','Prefer her zaman -ing alır diye ezberleme.']},
        {type:'rule',heading:'Üç kalıbı ezberle',formula:'prefer DOING to DOING  /  would rather DO than DO  /  would prefer TO DO rather than DO',points:['I prefer swimming to cycling.','I’d rather swim than cycle.','I’d prefer to swim rather than cycle.','Üçünde de tercih bildirilir, fiil biçimleri aynı değildir.']},
        {type:'note',heading:'Kitaptan örnekler',text:'S.28 “I prefer skiing to snowboarding” ve “I’d rather play checkers than chess”. S.32 Leslie Mann tek tekerlekli bisikleti bisiklete tercih eder. Would prefer üçüncü karşılaştırma kalıbı olarak eklendi; PDF’nin bu kesitinde ayrı bir would prefer konu açıklaması yok.'}
      ],
      checks:[
        {q:'I prefer ___ to ___ .',options:['swim / run','swimming / running','to swim / running'],a:1,why:'prefer + V-ing + to + V-ing.'},
        {q:'I’d rather ___ home than ___ out.',options:['staying / going','to stay / go','stay / go'],a:2,why:'would rather + yalın fiil + than + yalın fiil.'},
        {q:'I’d prefer ___ home rather than go out.',options:['staying','to stay','stay'],a:1,why:'would prefer + to V1.'},
        {q:'I prefer tea to coffee. Bu cümle neden -ing almıyor?',options:['Tea ve coffee isim olduğu için','Prefer hiçbir zaman -ing almaz','Because would rather'],a:0,why:'İsimlerde -ing arama; fiilin -ing şekli ayrı konu.'},
        {q:'“I prefer to read rather than watch TV.” dil bilgisi bakımından doğru mu?',options:['Doğru','Yanlış'],a:0,why:'Prefer + to V1 + rather than + V1 de doğru bir kullanım.'},
        {q:'“I’d rather to drink water” doğru mu?',options:['Doğru','Yanlış'],a:1,why:'Would rather’dan sonra to yok: I’d rather drink water.'}
      ]
    },
    {
      id:'ability',number:'03',category:'2. ÜNİTE',title:'Can / Could',kicker:'Şimdiki ve geçmişteki yetenekler',book:'31, 34–36',pdf:'23, 26–28',duration:'9 dk',
      intro:'Can şimdiki yetenek, could ise geçmişteki genel yetenek için kullanılır. İkisinden sonra da V1 gelir.',
      blocks:[
        {type:'compare',heading:'Yetenekleri ayır',left:{title:'CAN + V1',sub:'Şimdiki genel yetenek',example:'I can solve these problems.',translation:'Bu problemleri çözebilirim.',tip:'can / can’t + V1'},right:{title:'COULD + V1',sub:'Geçmişteki genel yetenek',example:'I could swim when I was eight.',translation:'Sekiz yaşımdayken yüzebiliyordum.',tip:'could / couldn’t + V1'}},
        {type:'rule',heading:'Soru ve olumsuz',formula:'Can/Could + özne + V1?',points:['Can you draw? / Yes, I can.','Could you read at the age of five?','I can’t drive. / I couldn’t ride a bike as a child.','“Could to solve” ❌ / “Could solve” ✅']},
        {type:'note',heading:'Kitap bağlantısı',text:'S.34 Feza Gürsey’in öğrenciyken zor matematik problemlerini kolay çözebilmesi “could” ile anlatılıyor. S.36 ilkokul ve ortaokuldaki yeteneklerin sorulduğu etkinlikler var.'}
      ],
      checks:[
        {q:'When I was a child, I ___ ride a bike.',options:['could','can','am going to'],a:0,why:'Geçmişte genel yetenek: could.'},
        {q:'She ___ speak German now.',options:['could to','can','can to'],a:1,why:'Can + V1, to yok.'},
        {q:'“Could you solved maths problems?” doğru mu?',options:['Doğru','Yanlış'],a:1,why:'Could + solve (V1) gerekir.'}
      ]
    },
    {
      id:'hobbies',number:'04',category:'2. ÜNİTE',title:'Like / Enjoy / Fond Of',kicker:'Sevdiğin şeyleri anlatma',book:'27–28, 30–32',pdf:'19–20, 22–24',duration:'10 dk',
      intro:'Hobi ve ilgi alanlarını anlatırken fiillerden sonra gelen -ing yapılarını bilmen gerekiyor.',
      blocks:[
        {type:'rule',heading:'Sevme ve hoşlanma',formula:'like / love / enjoy / dislike + V-ing',points:['I enjoy drawing. → Resim çizmekten keyif alırım.','She loves gardening. → Bahçeciliği çok sever.','He dislikes watching reality shows. → Reality şov izlemeyi sevmez.','Not: like/love + to V1 kullanımları da mümkündür; bu ünitenin örnekleri -ing üzerine kurulu.']},
        {type:'rule',heading:'Edatı ezberle',formula:'fond OF · keen ON · interested IN · good AT · skilled AT + V-ing',points:['I am fond of collecting stamps.','She is keen on cycling.','We are interested in learning Spanish.','He is good at solving puzzles.','They are skilled at making pottery.']},
        {type:'rule',heading:'Sık kullanılan diğer ifadeler',formula:'be into + V-ing / take up + hobi',points:['I am into hiking. → Doğa yürüyüşüyle ilgileniyorum.','She took up calligraphy. → Kaligrafiye başladı.','Pastime = boş zaman etkinliği.','Indoor / outdoor activities = iç / dış mekân etkinlikleri.']},
        {type:'note',heading:'Kitabın örnek kişileri',text:'S.27 Roger ve Jackie’nin hobileri; s.30 Tina’nın kaligrafi ve yardım faaliyetleri; s.32 ünlülerin hobileri anlatılıyor.'}
      ],
      checks:[
        {q:'I am interested in ___ languages.',options:['learn','learning','to learning'],a:1,why:'interested in + V-ing.'},
        {q:'She is fond ___ gardening.',options:['of','to','at'],a:0,why:'fond OF.'},
        {q:'They are skilled ___ making models.',options:['on','at','in'],a:1,why:'skilled AT + V-ing.'},
        {q:'I enjoy ___ magazines.',options:['read','reading','to reading'],a:1,why:'enjoy + V-ing.'}
      ]
    }
  ],
  vocab:[
    {w:'achieve',tr:'başarmak, ulaşmak',example:'achieve success',phrase:'başarıya ulaşmak',page:17,group:'yellow'},
    {w:'temporary',tr:'geçici',example:'a temporary job',phrase:'geçici bir iş',page:17,group:'yellow'},
    {w:'upgrade',tr:'geliştirmek, iyileştirmek',example:'upgrade skills',phrase:'becerileri geliştirmek',page:17,group:'yellow'},
    {w:'cope',tr:'başa çıkmak',example:'cope with a crisis',phrase:'krizle başa çıkmak',page:17,group:'yellow'},
    {w:'competent',tr:'yetkin, yeterli',example:'a competent team member',phrase:'yetkin ekip üyesi',page:17,group:'yellow'},
    {w:'determined',tr:'kararlı',example:'be determined to work',phrase:'çalışmaya kararlı olmak',page:17,group:'yellow'},
    {w:'volunteers',tr:'gönüllüler',example:'more volunteers',phrase:'daha fazla gönüllü',page:23,group:'yellow'},
    {w:'donations',tr:'bağışlar',example:'charity donations',phrase:'hayır bağışları',page:23,group:'yellow'},
    {w:'expanded',tr:'genişledi, yayıldı',example:'The network expanded.',phrase:'Ağ genişledi.',page:23,group:'yellow'},
    {w:'approximately',tr:'yaklaşık olarak',example:'approximately 100 people',phrase:'yaklaşık 100 kişi',page:23,group:'yellow'},
    {w:'entrepreneurs',tr:'girişimciler',example:'successful entrepreneurs',phrase:'başarılı girişimciler',page:23,group:'yellow'},
    {w:'particularly',tr:'özellikle',example:'particularly physics',phrase:'özellikle fizik',page:34,group:'yellow'},
    {w:'admiration',tr:'hayranlık, takdir',example:'gain admiration',phrase:'takdir kazanmak',page:34,group:'yellow'},
    {w:'incredibly',tr:'inanılmaz derecede',example:'incredibly intelligent',phrase:'inanılmaz derecede zeki',page:34,group:'yellow'},
    {w:'scholarship',tr:'burs',example:'win a scholarship',phrase:'burs kazanmak',page:34,group:'yellow'},
    {w:'pass away',tr:'vefat etmek',example:'passed away in 1992',phrase:'1992’de vefat etti',page:34,group:'yellow'},
    {w:'inspiration',tr:'ilham, esin kaynağı',example:'an inspiration to others',phrase:'başkaları için ilham kaynağı',page:34,group:'yellow'},
    {w:'reading magazines',tr:'dergi okumak',page:27,group:'hobbies'},
    {w:'pottery',tr:'çömlekçilik',page:27,group:'hobbies'},
    {w:'camping',tr:'kamp yapmak',page:27,group:'hobbies'},
    {w:'embroidery',tr:'nakış işleme',page:27,group:'hobbies'},
    {w:'gardening',tr:'bahçecilik',page:27,group:'hobbies'},
    {w:'making jewellery',tr:'takı yapmak',page:27,group:'hobbies'},
    {w:'writing blogs',tr:'blog yazmak',page:27,group:'hobbies'},
    {w:'astronomy',tr:'astronomi',page:27,group:'hobbies'},
    {w:'hiking',tr:'doğa yürüyüşü',page:27,group:'hobbies'},
    {w:'origami',tr:'kâğıt katlama sanatı',page:27,group:'hobbies'},
    {w:'cycling',tr:'bisiklete binmek',page:27,group:'hobbies'},
    {w:'arts and crafts',tr:'sanat ve el işleri',page:27,group:'hobbies'},
    {w:"I'm",tr:'I am (ben ...)',page:14,group:'pronounce'},
    {w:"I'll",tr:'I will (... yapacağım)',page:14,group:'pronounce'},
    {w:"won't",tr:'will not (... yapmayacak)',page:14,group:'pronounce'},
    {w:'speaks',tr:'konuşur',page:29,group:'pronounce'},
    {w:'enjoys',tr:'keyif alır',page:29,group:'pronounce'},
    {w:'fixes',tr:'tamir eder',page:29,group:'pronounce'},
    {w:'needs',tr:'ihtiyaç duyar',page:29,group:'pronounce'},
    {w:'teaches',tr:'öğretir',page:29,group:'pronounce'},
    {w:'starts',tr:'başlar',page:29,group:'pronounce'},
    {w:'flowers',tr:'çiçekler',page:29,group:'pronounce'},
    {w:'books',tr:'kitaplar',page:29,group:'pronounce'},
    {w:'glasses',tr:'gözlük',page:29,group:'pronounce'},
    {w:'beaches',tr:'plajlar',page:29,group:'pronounce'},
    {w:'birds',tr:'kuşlar',page:29,group:'pronounce'},
    {w:'tents',tr:'çadırlar',page:29,group:'pronounce'}
  ],
  audio:[
    {id:'1.1',type:'audio',unit:1,title:'Career counselor: Jason, Melanie ve Judy',page:11,pdf:3,url:'https://www.eba.gov.tr/c?q=UEXcf540325',focus:'Gelecek meslek planları; statisyen, mühendis, cerrah vb.',key:'career counselor · mechanical engineer · statistician'},
    {id:'1.2',type:'audio',unit:1,title:'Geleceğin popüler meslekleri',page:12,pdf:4,url:'https://www.eba.gov.tr/c?q=UEXd6458169',focus:'Teknolojik gelişmeler, talep ve yenilenebilir enerji.',key:'advances · decline · demand · employment · renewable'},
    {id:'1.3',type:'audio',unit:1,title:'Kısaltmaların telaffuzu',page:14,pdf:6,url:'https://www.eba.gov.tr/c?q=UEX38e58433',focus:"I’m, I’ll, won’t seslerini ayırt et.",key:"I'm · I'll · won't"},
    {id:'1.4',type:'audio',unit:1,title:'Gelecek planı cümlelerinin telaffuzu',page:14,pdf:6,url:'https://www.eba.gov.tr/c?q=UEXf46fc142',focus:'Olumsuz be going to ve will cümlelerini tekrar et.',key:'isn’t going to · aren’t going to · won’t'},
    {id:'1.5',type:'audio',unit:1,title:'Robin randevu için telefon ediyor',page:16,pdf:8,url:'https://www.eba.gov.tr/c?q=UEX6f20089d',focus:'İş görüşmesi tarihi ve saati belirleme.',key:'appointment · available · schedule · letter of intent'},
    {id:'1.1',type:'video',unit:1,title:'Robin’in iş görüşmesi',page:17,pdf:9,url:'https://www.eba.gov.tr/c?q=UEX4a2588a0',focus:'Kendini anlatma, güçlü yönler, işe alınma gerekçesi.',key:'strengths · cope · competent · determined'},
    {id:'2.1',type:'audio',unit:2,title:'TV sunucusu: hobi türleri',page:27,pdf:19,url:'https://www.eba.gov.tr/c?q=UEX680c1b6a',focus:'Sarı hobi kutusundaki aktiviteleri duyunca tanı.',key:'pottery · astronomy · embroidery · camping'},
    {id:'2.2',type:'audio',unit:2,title:'Roger ve Jackie’nin hobileri',page:27,pdf:19,url:'https://www.eba.gov.tr/c?q=UEX1fd8f94f',focus:'Bahçecilik ve doğayla temas; prefer / interested in.',key:'gardening · fond of · keen on · skilled at'},
    {id:'2.3',type:'audio',unit:2,title:'Fiillerde -s / -es sesleri',page:29,pdf:21,url:'https://www.eba.gov.tr/c?q=UEX734b664a',focus:'speaks /s/, loves /z/, watches /ɪz/.',key:'speaks · loves · watches'},
    {id:'2.4',type:'audio',unit:2,title:'Çoğul kelimelerde -s / -es sesleri',page:29,pdf:21,url:'https://www.eba.gov.tr/c?q=UEXc646a952',focus:'gifts /s/, items /z/, boxes /ɪz/.',key:'gifts · items · boxes'},
    {id:'2.5',type:'audio',unit:2,title:'Tina’nın hobileri röportajı',page:30,pdf:22,url:'https://www.eba.gov.tr/c?q=UEX0cefc560',focus:'Kaligrafi, yeni hobi, yardım kuruluşu.',key:'calligraphy · altruism · charity · sculpture'}
  ],
  readings:[
    {id:'portfolio',unit:1,title:'E-Portfolio',page:14,pdf:6,kind:'Bilgilendirici paragraf',summary:'Elektronik portfolyo; öğrencilerin ödev, proje ve akademik çalışmalarını sergilemesine, geri bildirim almasına ve ilerlemesini görmesine yardımcı olur.',words:[['showcase','sergilemek'],['feedback','geri bildirim'],['evaluate','değerlendirmek'],['progress','ilerleme']],facts:['Çalışmalar dijital olarak paylaşılabilir.','Öğretmen geri bildirimi yararlıdır.'],questions:[{q:'E-portfolio çalışmalarını paylaşmaya yarar.',a:true,why:'Metin paylaşma ve geri bildirim özelliklerini açıklıyor.'},{q:'E-portfolyo yalnızca basılı kâğıtlardan oluşur.',a:false,why:'Elektronik/dijital bir portfolyodur.'}]},
    {id:'robin',unit:1,title:'Robin’s Job Interview',page:17,pdf:9,kind:'Video / diyalog metni',summary:'Robin, web tasarımı alanındaki deneyimlerini, geçici işlerini, problem çözme yeteneğini, ekip çalışmasını ve şirketteki hedefini anlatır.',words:[['temporary','geçici'],['achieve','başarmak'],['cope','başa çıkmak'],['competent','yetkin']],facts:['Robin daha önce geçici işler yapmıştır.','Krizlerle başa çıkabildiğini söyler.'],questions:[{q:'Robin hiç geçici iş deneyimi yaşamadığını söylüyor.',a:false,why:'Tatil dönemlerinde geçici işlerde çalıştığını anlatıyor.'},{q:'Robin takım çalışmasını önemli görüyor.',a:true,why:'Teamwork konusuna olumlu yaklaşıyor.'}]},
    {id:'vlog',unit:1,title:'Video Blog Entry',page:19,pdf:11,kind:'Bilgilendirici metin',summary:'Vloglar öğrencilerin kendi öğrenme süreçlerine katılmasını sağlayan kısa videolardır. Kayıtlar paylaşılmadan önce öğretmen tarafından kontrol edilebilir.',words:[['assignment','ödev'],['fluency','akıcılık'],['accuracy','doğruluk'],['peer evaluation','akran değerlendirmesi']],facts:['Öğrenciler kısa videolar kaydedebilir.','Akran değerlendirmesinde akıcılık ve doğruluk vardır.'],questions:[{q:'Vlog yalnızca profesyonel kamera ile çekilebilir.',a:false,why:'Telefon veya bilgisayarla da kaydedilebilir.'},{q:'Etkinlikte fluency ve accuracy değerlendiriliyor.',a:true,why:'İkisi değerlendirme ölçütü olarak geçiyor.'}]},
    {id:'ads',unit:1,title:'Job Advertisements',page:20,pdf:12,kind:'İş ilanları',summary:'Makine mühendisi, dijital reklam yöneticisi, halkla ilişkiler direktörü ve laboratuvar teknisyeni için sorumluluklar ve aranan nitelikler verilir.',words:[['responsibilities','sorumluluklar'],['qualifications','nitelikler'],['relevant experience','ilgili deneyim'],['leadership','liderlik']],facts:['İlanlar görevler ve nitelikler olarak iki bölüme ayrılır.','Makine mühendisi pazarlama kampanyası planlamaz.'],questions:[{q:'Mechanical Engineer işinin bir görevi pazarlama kampanyalarını planlamaktır.',a:false,why:'Bu görev Digital Advertising Manager ilanında yer alır.'},{q:'İlanlarda Responsibilities ve Qualifications bölümleri bulunur.',a:true,why:'İş ilanları bu iki başlıkla ayrılmıştır.'}]},
    {id:'cv',unit:1,title:'Catherine and David’s CVs',page:22,pdf:14,kind:'Özgeçmiş',summary:'Catherine halkla ilişkiler, David makine mühendisliği geçmişine sahiptir. CV’lerde eğitim, deneyim, beceriler ve referans bilgileri karşılaştırılır.',words:[['references','referanslar'],['critical thinking','eleştirel düşünme'],['strategic planning','stratejik planlama'],['experience','deneyim']],facts:['Catherine halkla ilişkiler alanında deneyimlidir.','David mekanik sistem ve ürün geliştirmeyle ilgilidir.'],questions:[{q:'David bir makine mühendisidir.',a:true,why:'CV’sinde Mechanical Engineer olarak geçer.'},{q:'Catherine’in mesleği laboratuvar teknisyenliğidir.',a:false,why:'Halkla ilişkiler alanındadır.'}]},
    {id:'wendy',unit:1,title:'Wendy Kopp — Teach For America',page:23,pdf:15,kind:'Biyografi',summary:'Wendy Kopp, dezavantajlı bölgelerdeki öğrencilere destek için Teach For America’yı geliştirir. Girişim büyür ve 2007’de Teach For All uluslararası ağı başlatılır.',words:[['volunteers','gönüllüler'],['donations','bağışlar'],['expanded','genişledi'],['entrepreneurs','girişimciler']],facts:['Projesi eğitimde fırsat eşitsizliğiyle ilgilidir.','Teach For All 2007 yılında kurulmuştur.'],questions:[{q:'Teach For All 2007’de kurulmuştur.',a:true,why:'Kitaptaki tarih 2007.'},{q:'Wendy Kopp’un projesi yalnızca spor eğitimi üzerineydi.',a:false,why:'Dezavantajlı bölgelerde genel okul eğitimi üzerineydi.'}]},
    {id:'celeb',unit:2,title:'Celebrities and Their Hobbies',page:32,pdf:24,kind:'Kişiler / hobiler',summary:'Tom Hanks daktilo koleksiyonu yapar; David Beckham eskrimle, Leslie Mann tek tekerlekli bisikletle, Oprah Winfrey ise hayırseverlikle ilgilenir.',words:[['typewriter','daktilo'],['fencing','eskrim'],['unicycle','tek tekerlekli bisiklet'],['philanthropy','hayırseverlik']],facts:['Tom Hanks daktilo koleksiyonu yapar.','Leslie Mann tek tekerlekli bisikleti tercih eder.'],questions:[{q:'Leslie Mann unicycle kullanmayı seviyor.',a:true,why:'Metinde unicycles to bicycles tercihi yer alır.'},{q:'David Beckham’ın hobisi daktilo koleksiyonudur.',a:false,why:'Bu Tom Hanks’in hobisidir; Beckham eskrimle ilgilenir.'}]},
    {id:'feza',unit:2,title:'Feza Gürsey — The Inspirational Turkish Scientist',page:34,pdf:26,kind:'Biyografi',summary:'Feza Gürsey 1921’de İstanbul’da doğar; 1944’te üniversiteden mezun olur, 1950’de doktorasını tamamlar; ODTÜ ve Yale’de çalışır, 1992’de vefat eder.',words:[['scholarship','burs'],['admiration','hayranlık'],['particularly','özellikle'],['inspiration','ilham']],facts:['1944 mezuniyet, 1950 doktora, 1974 Yale, 1991 emeklilik, 1992 vefat.','Teorik fizik ve matematik alanındaki başarılarıyla tanınır.'],questions:[{q:'Feza Gürsey 1950’de doktorasını tamamlamıştır.',a:true,why:'Metnin eğitim kronolojisinde 1950 yazıyor.'},{q:'Feza Gürsey 1993 yılında vefat etmiştir.',a:false,why:'1992’de vefat etti; bilim merkezi 1993’te kuruldu.'}]}
  ],
  bonus:[
    ['make up your mind','karar vermek',13],['on top of the world','çok mutlu olmak',13],['think outside the box','yaratıcı düşünmek',13],['my pleasure','rica ederim',28],['you can say that again','kesinlikle katılıyorum',28],['the nuts and bolts','işin temel ayrıntıları',28],['renewable','yenilenebilir',12],['demand','talep',12],['decline','azalmak',12],['employment','istihdam / iş',12],['advances','gelişmeler',12],['calligraphy','kaligrafi / güzel yazı',30],['altruism','özgecilik',30],['charity','yardım kuruluşu',30],['appointment','randevu',16],['vacancy','açık iş pozisyonu',15],['cover letter','başvuru mektubu',15]
  ]
};