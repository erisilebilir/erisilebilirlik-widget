# Erişilebilirlik Yardımcı Paneli 

Web sitelerinde kullanıcıların arayüzü kendi ihtiyaçlarına göre kişiselleştirmelerine olanak tanıyan, kullanıcı deneyimini (UX) desteklemek amacıyla geliştirilmiş "tak-çalıştır" mantığında pratik bir JavaScript yardımcı aracıdır.

**Önemli Not:** Bu widget, kullanıcılar için arayüz düzeyinde kolaylaştırıcı seçenekler sunan bir yardımcı eklentidir. Tek başına bir web sitesini otomatik olarak WCAG veya diğer dijital erişilebilirlik standartlarına tam uyumlu hale getirmez.
---

## Özellikler

Widget, kullanıcıların web sitenizdeki metin, renk ve imleç gibi ögeleri kendi konforlarına göre geçici olarak özelleştirebilmeleri için 10 farklı işlev sunar:

1. **Büyük Metin:** Sayfa genelindeki yazı boyutlarını %120 oranında büyüterek görme zorluğu çeken kullanıcılara arayüzü okuma kolaylığı sağlar.
2. **Disleksi Dostu:** Yazı tipini `OpenDyslexic` fontu ile değiştirir; harf ve kelime boşluklarını düzenleyerek disleksi spektrumundaki bireylerin okuma takibine yardımcı olur.
3. **Metni Oku (Tıkla-Dinle):** Tarayıcının yerleşik *Web Speech API* altyapısını kullanarak, aktif edildiğinde tıklanan paragrafları, başlıkları veya listeleri Türkçe seslendirir.
4. **Yüksek Kontrast:** Arka planı siyah, metinleri beyaz ve bağlantıları sarı renk şemasına çekerek düşük görme keskinliği olan kullanıcılar için görsel ayrımı artırır.
5. **Büyük İmleç:** Fare imlecini görünürlüğü yüksek ve büyük bir özel SVG imleç tasarımı ile değiştirir.
6. **Başlıkları Vurgula:** Sayfadaki tüm başlık etiketlerinin (`h1` - `h6`) soluna belirgin bir şerit ekler ve arka planını hafifçe renklendirerek hiyerarşiyi belirginleştirir.
7. **Metni Sola Hizala:** Sayfa düzeni ne olursa olsun tüm metinleri sola hizalayarak okuma yönünü standartlaştırır.
8. **Yüksek / Düşük Doygunluk:** Renk yoğunluğunu artırarak veya azaltarak renk hassasiyeti olan kullanıcılara alternatif bir görünüm sunar.
9. **Bağlantıları Vurgula:** Sayfa içindeki tüm linklerin (`<a>`) etrafına belirgin bir çerçeve ekler ve altını çizer.
10. **Ayarları Sıfırla:** Tek bir tıklamayla uygulanan tüm arayüz modlarını temizler ve siteyi orijinal görünümüne döndürür.

---

## Kurulum ve Kullanım

Eklentiyi projenize dahil etmek için JavaScript dosyasını sitenizin kaynak koduna eklemeniz yeterlidir. Sistemde halihazırda jQuery yüklü değilse, script gerekli olan **jQuery 3.7.1** sürümünü dinamik olarak kendisi yükler ve çakışmasız (`noConflict`) modda başlatır. Aşağıdaki biçimde projenize ekleyebilirsiniz. 

<script src="path/to/erisilebilir-widget.js"></script>

## 📄 Lisans

Bu proje **MIT Lisansı** ile lisanslanmıştır. Kişisel veya ticari projelerinizde dilediğiniz gibi değiştirebilir, dağıtabilir ve ücretsiz olarak kullanabilirsiniz.
