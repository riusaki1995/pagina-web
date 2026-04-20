(function () {
    'use strict';

    var STORAGE_LANG = 'interactive-lang';
    var STORAGE_THEME = 'interactive-theme';

    var STRINGS = {
        es: {
            doc_title: 'Livecoins | Juega. Compite. Domina.',
            aria_download: 'Ir a la descarga',
            aria_theme: 'Cambiar tema claro u oscuro',
            hero_h1_a: 'Juega. Compite.',
            hero_h1_b: 'Domina.',
            hero_sub: 'La plataforma para mejorar tus streams. Experiencia interactiva para streamers. ¡Sé una leyenda!',
            hero_dl: 'Descargar v1.0.81 ➔',
            hero_mini: 'Ver Mini-Juegos',
            hero_streamers: '+900 streamers',
            img_alt: 'Mando Interactive personalizado',
            install_title_1: 'Fácil ',
            install_title_2: 'Instalación',
            install_disclaimer: 'Esta aplicación no está firmada digitalmente debido al alto costo de los certificados. Planeamos adquirir uno en el futuro, pero te aseguramos que la aplicación es completamente segura.',
            install_p1: 'La descarga se realiza desde el repositorio de GitHub de la aplicación.',
            install_p2: 'Durante la instalación, es normal que Windows muestre un mensaje advirtiendo que la aplicación es desconocida. Esto ocurre porque no está certificada digitalmente, lo que es similar a instalar un APK fuera de Google Play.',
            install_p3_html: 'Para continuar, simplemente haz clic en <strong>«Más información»</strong> y luego en el botón <strong>«Ejecutar de todas formas»</strong>.',
            ss_title: 'Windows protegió su PC',
            ss_body: 'SmartScreen de Microsoft Defender evitó que se iniciara una aplicación desconocida. Ejecutar esta aplicación puede suponer un riesgo para tu PC.',
            ss_app: 'Aplicación:',
            ss_pub: 'Editor:',
            ss_unknown: 'Editor desconocido',
            ss_more: 'Más información',
            ss_no: 'No ejecutar',
            ss_run: 'Ejecutar de todas formas',
            feat_title_1: 'Características ',
            feat_title_2: 'Destacadas',
            feat_sub: 'Descubre por qué Interactive es la aplicación preferida por cientos de streamers en todo el mundo.',
            feat_1h: 'Overlays Personalizables',
            feat_1p: 'Accede a varios widgets personalizables para mejorar la experiencia de tus espectadores.',
            feat_2h: 'Alertas',
            feat_2p: 'Crea alertas que hagan sentir únicos a tus espectadores y los animen a volver.',
            feat_3h: 'Minijuegos Interactivos',
            feat_3p: 'Agrega contenido más diverso y rompe la rutina del directo.',
            feat_4h: 'Soporte',
            feat_4p: '¿Dudas? Te ayudamos en todo para que arranques sin estrés.',
            comm_title: '¿Listo para unirte a la comunidad?',
            comm_sub: 'Forma parte de la comunidad de streamers que ya están mejorando su contenido con Livecoins. ¡No te quedes atrás!',
            contact_line: 'Contáctame en',
            contact_info: '¿Tienes problemas con el enlace? Envíame una solicitud a:',
            pricing_title_1: 'Planes ',
            pricing_title_2: 'Livecoins',
            pricing_sub: 'Compara el acceso gratuito, Premium Plus o desbloquea todo al unirte a la agencia.',
            plan_free_name: 'FREE',
            plan_free_tag: 'Acceso al panel en modo gratuito',
            plan_free_price: '$0',
            plan_free_f1: 'Hasta 5 alertas sonoras',
            plan_free_f2: 'Hasta 5 acciones',
            plan_free_f3: 'Overlays y perfiles básicos',
            plan_free_f4: 'Hasta 2 perfiles en el panel',
            plan_free_note: 'Incluido sin suscripción de pago',
            plan_badge_popular: 'MÁS POPULAR',
            plan_premium_name: 'PREMIUM PLUS',
            plan_premium_tag: 'Panel completo + periodo de suscripción con cuenta atrás',
            plan_premium_price: '$10',
            plan_premium_period: ' / mes',
            plan_premium_f1: 'Todo lo del plan Free +',
            plan_premium_f2: 'Alertas y acciones ilimitadas',
            plan_premium_f3: 'Hasta 30 perfiles en el panel',
            plan_premium_f4: 'Prioridad y beneficios según tu campaña',
            plan_premium_f5: 'Rol Premium Plus en Discord (al coordinar pago)',
            plan_premium_cta: 'Suscribirse',
            plan_agency_name: 'AGENCIA',
            plan_agency_badge: 'SIN COSTE',
            plan_agency_highlight: 'Unirte a la agencia no tiene precio.',
            plan_agency_body: 'Al unirte a la agencia se desbloquea el modo premium y todos los beneficios del modo premium.',
            plan_agency_list_label: 'Beneficios incluidos'
        },
        en: {
            doc_title: 'Livecoins | Play. Compete. Dominate.',
            aria_download: 'Go to download',
            aria_theme: 'Toggle light or dark theme',
            hero_h1_a: 'Play. Compete.',
            hero_h1_b: 'Dominate.',
            hero_sub: 'The platform to level up your streams. Interactive experience for streamers. Become a legend!',
            hero_dl: 'Download v1.0.74 ➔',
            hero_mini: 'View mini-games',
            hero_streamers: '+900 streamers',
            img_alt: 'Custom Interactive controller',
            install_title_1: 'Easy ',
            install_title_2: 'Installation',
            install_disclaimer: 'This app is not digitally signed due to the high cost of certificates. We plan to get one in the future, but we assure you the app is completely safe.',
            install_p1: 'The download is done from the app’s GitHub repository.',
            install_p2: 'During installation, Windows may warn that the app is unknown. That happens because it is not digitally certified—similar to installing an APK outside Google Play.',
            install_p3_html: 'To continue, click <strong>More info</strong> and then <strong>Run anyway</strong>.',
            ss_title: 'Windows protected your PC',
            ss_body: 'Microsoft Defender SmartScreen prevented an unrecognized app from starting. Running this app might put your PC at risk.',
            ss_app: 'App:',
            ss_pub: 'Publisher:',
            ss_unknown: 'Unknown publisher',
            ss_more: 'More info',
            ss_no: "Don't run",
            ss_run: 'Run anyway',
            feat_title_1: 'Standout ',
            feat_title_2: 'Features',
            feat_sub: 'See why Interactive is the app hundreds of streamers worldwide prefer.',
            feat_1h: 'Customizable overlays',
            feat_1p: 'Use flexible widgets to improve the experience for your viewers.',
            feat_2h: 'Alerts',
            feat_2p: 'Create alerts that make viewers feel special and want to come back.',
            feat_3h: 'Interactive mini-games',
            feat_3p: 'Add variety and break the routine of your live stream.',
            feat_4h: 'Support',
            feat_4p: 'Questions? We help you get started stress-free.',
            comm_title: 'Ready to join the community?',
            comm_sub: 'Join streamers who are already improving their content with Livecoins. Don’t get left behind!',
            contact_line: 'Contact me on',
            contact_info: 'Problems with the link? Send me a request at:',
            pricing_title_1: 'Plans ',
            pricing_title_2: 'Livecoins',
            pricing_sub: 'Compare free access, Premium Plus, or unlock everything by joining the agency.',
            plan_free_name: 'FREE',
            plan_free_tag: 'Access to the dashboard in free mode',
            plan_free_price: '$0',
            plan_free_f1: 'Up to 5 sound alerts',
            plan_free_f2: 'Up to 5 actions',
            plan_free_f3: 'Basic overlays and profiles',
            plan_free_f4: 'Up to 2 profiles in the panel',
            plan_free_note: 'Included with no paid subscription',
            plan_badge_popular: 'MOST POPULAR',
            plan_premium_name: 'PREMIUM PLUS',
            plan_premium_tag: 'Full dashboard + subscription period with countdown',
            plan_premium_price: '$10',
            plan_premium_period: ' / month',
            plan_premium_f1: 'Everything in Free +',
            plan_premium_f2: 'Unlimited alerts and actions',
            plan_premium_f3: 'Up to 30 profiles in the panel',
            plan_premium_f4: 'Priority and perks based on your campaign',
            plan_premium_f5: 'Premium Plus role on Discord (when payment is coordinated)',
            plan_premium_cta: 'Subscribe',
            plan_agency_name: 'AGENCY',
            plan_agency_badge: 'NO COST',
            plan_agency_highlight: 'There is no cost to join the agency.',
            plan_agency_body: 'Joining the agency unlocks premium mode and every premium benefit.',
            plan_agency_list_label: 'Included benefits'
        }
    };

    function getStrings(lang) {
        return STRINGS[lang] || STRINGS.es;
    }

    function applyLang(lang) {
        var t = getStrings(lang);
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var k = el.getAttribute('data-i18n');
            if (t[k] !== undefined) {
                el.textContent = t[k];
            }
        });
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var k = el.getAttribute('data-i18n-html');
            if (t[k] !== undefined) {
                el.innerHTML = t[k];
            }
        });
        document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
            var k = el.getAttribute('data-i18n-alt');
            if (t[k] !== undefined) {
                el.setAttribute('alt', t[k]);
            }
        });
        document.title = t.doc_title;
        document.documentElement.lang = lang;

        var dl = document.getElementById('btn-nav-download');
        if (dl) dl.setAttribute('aria-label', t.aria_download);
        var th = document.getElementById('btn-theme-toggle');
        if (th) th.setAttribute('aria-label', t.aria_theme);
    }

    function initLang() {
        var sel = document.getElementById('lang-select');
        if (!sel) return;
        var saved = localStorage.getItem(STORAGE_LANG);
        if (saved === 'en' || saved === 'es') {
            sel.value = saved;
        }
        applyLang(sel.value);

        sel.addEventListener('change', function () {
            var lang = sel.value;
            localStorage.setItem(STORAGE_LANG, lang);
            applyLang(lang);
        });
    }

    function initTheme() {
        var saved = localStorage.getItem(STORAGE_THEME);
        if (saved === 'dark') {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }

        var btn = document.getElementById('btn-theme-toggle');
        if (!btn) return;
        btn.addEventListener('click', function () {
            var root = document.documentElement;
            var isLight = root.getAttribute('data-theme') === 'light';
            if (isLight) {
                root.removeAttribute('data-theme');
                localStorage.setItem(STORAGE_THEME, 'dark');
            } else {
                root.setAttribute('data-theme', 'light');
                localStorage.setItem(STORAGE_THEME, 'light');
            }
        });
    }

    function initDownloadNav() {
        var btn = document.getElementById('btn-nav-download');
        var target = document.getElementById('descarga');
        if (!btn || !target) return;
        btn.addEventListener('click', function () {
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            var mainBtn = document.querySelector('.btn-download-main');
            if (mainBtn && typeof mainBtn.focus === 'function') {
                try {
                    mainBtn.focus({ preventScroll: true });
                } catch (e) {
                    mainBtn.focus();
                }
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            initLang();
            initTheme();
            initDownloadNav();
        });
    } else {
        initLang();
        initTheme();
        initDownloadNav();
    }
})();
