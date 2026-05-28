(function () {
    // jQuery yüklü mü kontrol et
    if (typeof jQuery === "undefined") {
        // jQuery yoksa dinamik olarak bir <script> etiketi oluşturup HTML'e ekle
        var script = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-3.7.1.min.js";
        script.type = "text/javascript";
        
        // jQuery yüklenmesi tamamlandığında widget kodlarını tetikle
        script.onload = function () {
            console.log("jQuery JS dosyası tarafından otomatik olarak yüklendi.");
            // jQuery'nin çakışmasını önlemek için noConflict modunu alıp başlatıyoruz
            var jQueryWidget = window.jQuery.noConflict();
            initWidget(jQueryWidget);
        };
        
        // Script etiketini HTML'in <head> kısmına ekle
        document.getElementsByTagName("head")[0].appendChild(script);
    } else {
        // jQuery varsa doğrudan mevcut jQuery ile başlat
        console.log("Sitede halihazırda jQuery yüklü, o kullanılıyor.");
        initWidget(window.jQuery);
    }

    // Widget kodlarını sarmalayan ana fonksiyon
    function initWidget($) {
        "use strict";

        // =========================================================
        // CSS Stillerini Ekleme
        // =========================================================
        $("<style>")
            .prop("type", "text/css")
            .html("\                @import url('https://fonts.googleapis.com/css2?family=OpenDyslexic&display=swap');\                #acc-widget-toggle {\                    position: fixed !important;\                    left: 20px !important;\                    bottom: 20px !important;\                    width: 60px !important;\                    height: 60px !important;\                    min-width: 60px !important;\                    min-height: 60px !important;\                    max-width: 60px !important;\                    max-height: 60px !important;\                    padding: 0 !important;\                    margin: 0 !important;\                    box-sizing: border-box !important;\                    background-color: #0056b3 !important;\                    color: #ffffff !important;\                    border: 2px solid #ffffff !important;\                    border-radius: 12px !important;\                    box-shadow: 0 4px 10px rgba(0,0,0,0.3) !important;\                    cursor: pointer !important;\                    z-index: 999999 !important;\                    display: flex !important;\                    align-items: center !important;\                    justify-content: center !important;\                    transition: transform 0.2s ease, background-color 0.2s ease !important;\                    line-height: 0 !important;\                }\                #acc-widget-toggle:hover {\                    background-color: #003080 !important;\                    transform: scale(1.05) !important;\                }\                #acc-widget-toggle:focus {\                    outline: 3px solid #ffff00 !important;\                    outline-offset: 2px !important;\                }\                #acc-widget-toggle svg {\                    width: 45px !important;\                    height: 45px !important;\                    fill: currentColor !important;\                    margin: 0 !important;\                    padding: 0 !important;\                    display: block !important;\                }\                #acc-side-panel {\                    position: fixed !important; top: 0 !important; right: -350px !important; overflow-y: auto !important;\                    width: 320px !important; height: 100% !important;\                    background: #ffffff !important; box-shadow: -5px 0 15px rgba(0,0,0,0.1) !important;\                    z-index: 1000000 !important; transition: right 0.3s ease !important;\                    font-family: sans-serif !important; padding: 20px !important; box-sizing: border-box !important;\                }\                #acc-side-panel.open { right: 0 !important; }\                .acc-panel-header {\                    display: flex !important; justify-content: space-between !important;\                    align-items: center !important; border-bottom: 2px solid #eee !important;\                    padding-bottom: 10px !important; margin-bottom: 20px !important;\                }\                #acc-clean-close {\                    background: transparent !important;\                    border: none !important;\                    padding: 5px !important;\                    margin: 0 !important;\                    cursor: pointer !important;\                    display: flex !important;\                    align-items: center !important;\                    justify-content: center !important;\                    box-shadow: none !important;\                    visibility: visible !important;\                    opacity: 1 !important;\                    z-index: 9999999 !important;\                }\                #acc-clean-close svg {\                    width: 28px !important;\                    height: 28px !important;\                    stroke: #333333 !important;\                    transition: transform 0.2s ease, stroke 0.2s ease !important;\                }\                #acc-clean-close:hover svg {\                    stroke: #d32f2f !important;\                    transform: scale(1.1) !important;\                }\                #acc-clean-close:focus {\                    outline: 2px solid #0056b3 !important;\                    outline-offset: 2px !important;\                }\                .acc-panel-header h2 { margin: 0 !important; font-size: 18px !important; color: #333 !important; }\                .acc-option-item {\                    display: flex !important; align-items: center !important; justify-content: space-between !important;\                    padding: 12px !important; margin-bottom: 10px !important;\                    background: #f8f9fa !important; border-radius: 8px !important;\                    cursor: pointer !important; transition: background 0.2s !important;\                    border: 1px solid #ddd !important;\                }\                .acc-option-item:hover { background: #e9ecef !important; }\                .acc-option-item span { font-size: 14px !important; font-weight: 600 !important; color: #444 !important; }\                body.acc-highlight-links a { outline: 2px solid #0056b3 !important; text-decoration: underline !important; }\                body.acc-large-text, body.acc-large-text p, body.acc-large-text span, body.acc-large-text a, body.acc-large-text li, body.acc-large-text h1, body.acc-large-text h2, body.acc-large-text h3, body.acc-large-text h4, body.acc-large-text h5, body.acc-large-text h6 { font-size: 120% !important; }\                body.acc-highlight-headings h1, body.acc-highlight-headings h2, body.acc-highlight-headings h3, body.acc-highlight-headings h4, body.acc-highlight-headings h5, body.acc-highlight-headings h6 { border-left: 4px solid #ff9800 !important; padding-left: 8px !important; background-color: rgba(255, 152, 0, 0.08) !important; }\                body.acc-dyslexia-friendly, body.acc-dyslexia-friendly p, body.acc-dyslexia-friendly span, body.acc-dyslexia-friendly a, body.acc-dyslexia-friendly li, body.acc-dyslexia-friendly h1, body.acc-dyslexia-friendly h2, body.acc-dyslexia-friendly h3, body.acc-dyslexia-friendly h4, body.acc-dyslexia-friendly h5, body.acc-dyslexia-friendly h6, body.acc-dyslexia-friendly div:not(#acc-side-panel):not(.acc-option-item) {\                    font-family: 'OpenDyslexic', 'Comic Sans MS', sans-serif !important;\                    letter-spacing: 0.12em !important;\                    word-spacing: 0.25em !important;\                    line-height: 1.8 !important;\                }\                .acc-option-item.active { border-left: 5px solid #0056b3 !important; background: #e2e8f0 !important; }\                html.acc-high-contrast { filter: contrast(120%) !important; }\                body.acc-high-contrast { background-color: #000000 !important; color: #ffffff !important; }\                body.acc-high-contrast *:not(#acc-side-panel):not(.acc-option-item):not(.acc-option-item span) { \                    background-color: #000000 !important; \                    color: #ffffff !important; \                    border-color: #ffffff !important; \                }\                body.acc-high-contrast a { color: #ffff00 !important; text-decoration: underline !important; }\                body.acc-high-contrast img { filter: grayscale(100%) contrast(120%) !important; }\                body.acc-high-contrast button:not(#acc-widget-toggle):not(#acc-clean-close) { \                    background-color: #ffffff !important; \                    color: #000000 !important; \                    border: 2px solid #ffff00 !important; \                }\                body.acc-high-contrast .acc-option-item.active { \                    border: 3px solid #ffff00 !important; \                    background-color: #333333 !important; \                }\                body.acc-high-contrast .acc-option-item.active span { color: #ffffff !important; }\                body.acc-high-contrast #acc-clean-close svg {stroke: #ffffff !important;}\                html.acc-high-saturation {filter: saturate(200%) !important; }\                html.acc-low-saturation { filter: saturate(50%) !important; }\                body.acc-large-cursor, body.acc-large-cursor * { cursor: url('data:image/svg+xml;utf8,<svg width=%2248%22 height=%2248%22 viewBox=%220 0 28 28%22 xmlns=%22http://www.w3.org/2000/svg%22><path d=%22M4 2 L20 16 L13 17 L17 25 L13 27 L9 18 L4 23 Z%22 fill=%22white%22 stroke=%22black%22 stroke-width=%221.5%22/></svg>'), auto !important; }\                body.acc-large-cursor a:hover, body.acc-large-cursor .acc-option-item:hover span { text-decoration: underline !important; text-decoration-color: #0056b3 !important; text-decoration-thickness: 3px !important; text-underline-offset: 4px !important; }\                body.acc-align-left, body.acc-align-left * { text-align: left !important; }\                body.acc-reading-active .acc-reading-highlight { background-color: rgba(255, 255, 0, 0.4) !important; outline: 2px solid #0056b3 !important; }\            ")
            .appendTo("head");

            // Evrensel 'Mavi Adam' İkonu
            var accIconSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 497 502" fill="currentColor"><path d="M227.5 16.1c-42.6 2.4-82 16.7-115.5 42-48.8 36.8-78.7 86.5-88.8 147.4-2.4 14.7-2.3 54.1.1 68.9 5.2 30.8 17.7 62.8 34 87.1 9.2 13.8 14.3 20 25.7 31.9 31.5 32.6 66.1 52.6 108 62.5 16.4 3.9 23.6 4.8 41 5.6 74 3.3 144-31.6 188.6-94 18.8-26.3 31.9-58 37.6-91 1.9-11.1 2.2-16.6 2.2-37.5s-.3-26.3-2.2-37.2c-12.1-68.6-52.4-125.6-112.9-159.7-10.7-6-19.4-9.8-34.9-15.1-26.4-9.1-52.9-12.6-82.9-10.9m31.6 25c67.2 6.8 125.1 46.4 155.4 106.3 20.9 41.3 27.5 89.6 17.9 132-9.1 40.8-26.9 73.3-55.3 101.4-15.4 15.2-29.6 25.4-48.7 35-26.7 13.4-50.4 19.6-79.4 20.9-44.4 1.9-88.3-11.6-123.5-38-16.4-12.4-34.4-31.2-45.4-47.7-23.7-35.6-34.5-70.8-34.4-112.5.1-29.6 5.1-53.7 16.3-79.7 18.6-42.8 50.8-77.1 91.4-97.5 24.7-12.4 43.9-17.7 74.6-20.6 8-.8 21.4-.6 31.1.4"/><path d="M230 90.7c-6.2 2.2-15 11.3-17.3 17.8-1 2.8-1.7 7.9-1.7 11.7 0 5.5.5 7.7 3.3 12.9 11.6 22.5 43.1 22.1 53.9-.6 3.8-8 4-18.5.4-26-3.1-6.7-11.3-14-17.9-16-6.4-1.9-14.9-1.8-20.7.2"/><path d="M341 135.8c-1.9 1-6.9 3.7-11 5.9-16.1 8.9-45 18.3-67 22-14.5 2.4-52.2 2.4-71 0-15.5-2-35.7-6.7-47.2-10.8-10.1-3.7-14.6-3.8-18.9-.2-3.4 2.9-5.9 7.8-5.9 11.5 0 1.2.9 4.1 2.1 6.5 1.7 3.6 3.1 4.8 8.2 7.2 16.3 7.6 45 14.6 73 17.6l5.7.6v21.2c0 26.2.9 33 5.5 42.4 4.6 9.3 10.2 14.4 32.9 29.7 22.7 15.4 29.9 21.4 33 27.4 2 4 8.5 20.3 19.1 48.3 3.5 9.2 6.9 12.2 14.2 12.6 4.6.3 6.5 0 9.1-1.6 4.4-2.8 7.2-7.7 7.2-12.6 0-4-7.4-27.4-17.6-55.5l-4.8-13.5-17.3-17.1-17.3-17.1V193l2.8-.6c21.8-4.9 38.2-10.5 56.9-19.4 17.3-8.3 26-14.1 28-18.7 2.6-6.4.4-14.2-5-17.8-3.8-2.5-10.7-2.8-14.7-.7M207.3 280.2c-.5.7-2.6 5.8-4.7 11.3-7.5 19.4-9.1 21.8-30.7 44-16.2 16.6-19.9 21-20.4 23.9-1.5 7.6 1.8 14.6 8.1 17.2 4.5 1.9 11.4 1.8 14.4-.3 1.4-.9 11.9-10.7 23.3-21.7 14.4-13.8 22.3-22.2 25.8-27.4 5.1-7.7 12.9-23.1 12.9-25.4 0-.7-3.2-3.3-7.1-5.8s-10.1-7.3-13.8-10.7c-3.6-3.5-6.7-6.3-6.7-6.3-.1 0-.6.6-1.1 1.2"/></svg>';
        
        var $accButton = $('<button>', {
            'id': 'acc-widget-toggle',
            'aria-label': 'Erişilebilirlik Panelini Aç/Kapat',
            'title': 'Erişilebilirlik Seçenekleri'
        });

        $accButton.html(accIconSvg);
        $('body').append($accButton);

        // Panel HTML Yapısı
        var panelHtml = '\
            <div id="acc-side-panel">\
                <div class="acc-panel-header">\
                    <h2>Erişilebilirlik Paneli</h2>\
                    <button id="acc-clean-close" aria-label="Paneli Kapat">\
                        <svg viewBox="0 0 24 24" fill="none" stroke="#333333" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>\
                    </button>\
                </div>\
                <div class="acc-option-item" data-action="large-text">\
                    <span>Büyük Metin</span>\
                </div>\
                <div class="acc-option-item" data-action="dyslexia-friendly">\
                    <span>Disleksi Dostu</span>\
                </div>\
                <div class="acc-option-item" data-action="text-reader">\
                    <span>Metni Oku (Tıkla-Dinle)</span>\
                </div>\
                <div class="acc-option-item" data-action="high-contrast">\
                    <span>Kontrast (Yüksek)</span>\
                </div>\
                <div class="acc-option-item" data-action="large-cursor">\
                    <span>Büyük İmleç</span>\
                </div>\
                <div class="acc-option-item" data-action="highlight-headings">\
                    <span>Başlıkları Vurgula</span>\
                </div>\
                <div class="acc-option-item" data-action="align-left">\
                    <span>Metni Sola Hizala</span>\
                </div>\
                <div class="acc-option-item" data-action="high-saturation">\
                    <span>Yüksek Doygunluk</span>\
                </div>\
                <div class="acc-option-item" data-action="low-saturation">\
                    <span>Düşük Doygunluk</span>\
                </div>\
                <div class="acc-option-item" data-action="highlight-links">\
                    <span>Bağlantıları Vurgula</span>\
                </div>\
                <div class="acc-option-item" data-action="reset">\
                    <span style="color: #d32f2f;">Ayarları Sıfırla</span>\
                </div>\
            </div>';

        $('body').append(panelHtml);

        // Sıfırlama butonu hariç tüm seçenekleri otomatik klavye ve ekran okuyucu uyumlu yap
        $('.acc-option-item').not('[data-action="reset"]')
            .attr({ 'role': 'button', 'aria-pressed': 'false', 'tabindex': '0' });
        
        // Ayarları sıfırla butonuna rol ve odaklanma ver
        $('.acc-option-item[data-action="reset"]').attr({ 'role': 'button', 'tabindex': '0' });

        var $panel = $('#acc-side-panel');

        // --- Sayfa Yüklendiğinde Hafıza Kontrolü ---
        $('.acc-option-item').not('[data-action="reset"]').each(function() {
            var $this = $(this);
            var action = $this.data('action');
            var className = 'acc-' + action;
            
            if (localStorage.getItem(className) === 'true') {
                $('body').addClass(className);
                if (action === 'high-contrast' || action === 'high-saturation' || action === 'low-saturation') {
                    $('html').addClass(className);
                }
                $this.addClass('active').attr('aria-pressed', 'true');
            }
        });

        // --- Panel Açma / Kapatma Olayları ---
        $accButton.on('click', function() {
            $panel.toggleClass('open');
        });

        $(document).on('click', '#acc-clean-close', function() {
            $panel.removeClass('open');
        });

        // --- Central Feature Management (Tüm Özellikler İçin Tek Ortak Fonksiyon) ---
        $('.acc-option-item').not('[data-action="reset"]').on('click', function() {
            var $this = $(this);
            var action = $this.data('action'); 
            var className = 'acc-' + action;   
            var $body = $('body');
            
            $body.toggleClass(className);
            $this.toggleClass('active');
            
            // Yüksek kontrast için HTML etiketini de tetikle
            if (action === 'high-contrast' || action === 'high-saturation' || action === 'low-saturation') {
                $('html').toggleClass(className);
            }
            
            if ($body.hasClass(className)) {
                localStorage.setItem(className, 'true');
                $this.attr('aria-pressed', 'true');
            } else {
                localStorage.removeItem(className);
                $this.attr('aria-pressed', 'false');
            }
        }); // <-- Merkezi özellik yönetimi burada kapandı

        // --- Metin Okuma Mantığı ---
        var isReadingEnabled = false;
        var synth = window.speechSynthesis;

        $('.acc-option-item[data-action="text-reader"]').on('click', function() {
            isReadingEnabled = $(this).hasClass('active');
            
            if (isReadingEnabled) {
                // Okuma modu aktifse imleci değiştir ve kullanıcıyı bilgilendir
                $('body').css('cursor', 'help');
                alert('Metin okuma modu aktif. Okunmasını istediğiniz paragrafa veya başlığa tıklayın.');
            } else {
                $('body').css('cursor', 'default');
                synth.cancel(); // Okuma modundan çıkınca sesi durdur
            }
        });

        // Sayfa üzerindeki metinlere tıklandığında tetiklenir
        $(document).on('click', 'p, h1, h2, h3, h4, h5, h6, li, span, a', function(e) {
            if (!isReadingEnabled) return;
            
            // Panel içindeki butonlara tıklandığında okuma yapmasın
            if ($(this).closest('#acc-side-panel').length > 0) return;

            e.preventDefault();
            e.stopPropagation();

            // Mevcut okumayı durdur
            synth.cancel();

            var textToRead = $(this).text().trim();
            if (textToRead !== "") {
                var utterance = new SpeechSynthesisUtterance(textToRead);
                utterance.lang = 'tr-TR'; // Türkçe dil desteği
                utterance.rate = 1.0;     // Okuma hızı
                
                synth.speak(utterance);
            }
        }); 
        
        // --- Ayarları Sıfırla Fonksiyonu ---
        $('.acc-option-item[data-action="reset"]').on('click', function() {
            $('.acc-option-item').not('[data-action="reset"]').each(function() {
                var action = $(this).data('action');
                $('body').removeClass('acc-' + action);

                localStorage.removeItem('acc-' + action);
                if (action === 'high-contrast' || action === 'high-saturation' || action === 'low-saturation') {
                    $('html').removeClass('acc-' + action);
                }
            });
            
            $('.acc-option-item').removeClass('active').attr('aria-pressed', 'false');
            alert('Erişilebilirlik ayarları sıfırlandı.');
        });

        // Klavyeden ESC tuşuna basılınca paneli kapat
        $(document).on('keydown', function(e) {
            if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
                if ($panel.hasClass('open')) {
                    $panel.removeClass('open');
                    $('#acc-widget-toggle').focus();
                }
            }
        });
    }

})();