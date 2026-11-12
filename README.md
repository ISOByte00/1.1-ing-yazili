# 1.1 İngilizce Yazılı — Study Lab

11. sınıf **1. Ünite: Future Jobs** ve **2. Ünite: Hobbies and Skills** için hazırlanmış etkileşimli bir çalışma sitesi.

## Site neler içeriyor?

- **4 etkileşimli konu anlatımı:** `will / going to`, `prefer / would rather / would prefer`, `can / could`, `like / enjoy / fond of / keen on / interested in`.
- **Anlık doğru/yanlış kontrolü** ve yanlış cevaplar için açıklamalar.
- **17 temel sarı kelime** (s. 17, 23 ve 34), ayrı **12 hobi** ve **15 telaffuz** kelimesi; arama, öğrenildi işareti, karıştırılabilen kelime kartları.
- **Alıştırma merkezi:** gramer, kelime ve okuma/doğru-yanlış testleri.
- **20 soruluk yazılı provası:** 8 gramer + 7 kelime + 5 okuma sorusu, cevap anahtarı ve açıklamaları.
- **8 okuma metninin** sayfa rehberi, özeti, zor kelimeleri ve kontrol soruları.
- **Audio 1.1–1.5, Audio 2.1–2.5, Video 1.1** için kitaptaki QR kodlarından çıkarılmış EBA bağlantıları.
- Çalışma ilerlemesini **tarayıcıda yerel olarak** kaydeder, sunucuya öğrenci verisi göndermez. Sıfırlama seçeneği bulunur.

## Çalıştırma

`index.html` dosyasını tarayıcıda açmanız yeterlidir. İnternet gerekmeyen bölümler çevrimdışı çalışabilir. EBA kayıtlarını açmak için internet bağlantısı gerekir.

İsterseniz basit bir sunucuyla da açabilirsiniz:

```bash
python -m http.server 8000
```

Ardından `http://localhost:8000` adresine gidin.

## GitHub'a yükleme ve GitHub Pages

1. GitHub hesabında **New repository** seçin. İsim için `1.1-ing-yazili` kullanın. Repo adı GitHub'da boşluk içeremez; istenen “1.1 ing yazili” adı bu biçimde yazılabilir.
2. Bu klasördeki `index.html`, `styles.css`, `data.js`, `app.js`, `.nojekyll` ve `README.md` dosyalarını (isteğe bağlı `tests` klasörüyle) yeni deponun **kök dizinine** yükleyin. **ZIP dosyasını tek başına yüklemeyin**; önce açın.
3. `Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main / (root) → Save` ayarlarını uygulayın.
4. GitHub Pages adresinin oluşmasını bekleyin. Tipik adres `https://KULLANICI.github.io/1.1-ing-yazili/` şeklindedir, ancak yayımlama tamamlanmadan bağlantı çalışmaz.

Komut satırından yüklemek için yeni ve boş repo açıldıktan sonra bu klasörde:

```bash
git init
git branch -M main
git add .
git commit -m "Add interactive English exam study site"
git remote add origin https://github.com/ISOByte00/1.1-ing-yazili.git
git push -u origin main
```

> Bağlantılı GitHub eklentisinin bu sohbetteki yetenekleri mevcut repolara dosya ekleyebiliyor ama **yeni repo oluşturamıyor**. Yeni repo oluşturulduktan sonra repo içine dosya yazılabilir.

## İçerik sınırları ve kaynak

- Kaynak: **2026–2027 Yıldırım 11. Sınıf İngilizce Ders Kitabı**, ilk iki tema, **kitap s. 9–36 / PDF s. 1–28**.
- Kitap, ayrıntılı dil bilgisi anlatımı için **s. 136–137**'ye yönlendirme yapıyor; bu sayfalar sağlanan PDF'de yer almıyor. Konu açıklamaları kitaptaki örneklerle birlikte genel İngilizce dil bilgisinden yararlanılarak hazırlanmıştır.
- `Would prefer` karşılaştırma örnekleri konuya yardımcı olmak için eklenmiştir; kitabın verilen kesitinde ayrı bir açıklama sayfası yoktur.
- Dinleme ve video kayıtları **bu repoya eklenmemiştir**. Sitede, orijinal kitap QR kodlarındaki EBA yönlendirmeleri vardır. EBA bazı içerikler için oturum açılmasını isteyebilir.
- Kitabın tam okuma metinleri ve sayfa görselleri kopyalanmamıştır; sitede öğrenmeye yönelik **özetler, anahtar kelimeler ve yeni yazılmış alıştırmalar** bulunur.

## Dosyalar

- `index.html`: arayüz iskeleti
- `styles.css`: mobil uyumlu açık/koyu görünüm
- `data.js`: konu, kelime, ses kaydı, okuma ve soru verileri
- `app.js`: etkileşim, testler, kontrol ve yerel ilerleme kaydı
- `tests/validate-content.cjs`: veri bütünlüğü kontrolleri (`node tests/validate-content.cjs`)

**Herhangi bir çatı, bağımlılık veya API anahtarı gerekmez.**