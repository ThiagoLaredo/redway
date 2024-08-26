export default class LanguageSwitcher {
    constructor(translations, initialLang = 'pt', serviceId) {
        this.translations = translations;
        this.currentLang = initialLang; // Usa o idioma inicial diretamente
        this.serviceId = serviceId;
        this.initDropdown();
        this.updateCurrentLangButton(this.currentLang); // Inicializa o botão com o idioma atual
    }

    initDropdown() {
        const dropdownButton = document.getElementById('language-dropdown');
        const languageOptions = document.getElementById('language-options');

        dropdownButton.addEventListener('click', () => {
            this.toggleLanguageOptions();
        });

        languageOptions.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', () => {
                const selectedLang = button.textContent.toLowerCase();
                this.switchLanguage(selectedLang);
                this.updateCurrentLangButton(selectedLang);
                this.toggleLanguageOptions();

                if (this.serviceId) {
                    const serviceLoader = new ServiceLoader(this.translations);
                    serviceLoader.loadService(this.serviceId, selectedLang);
                }
            });
        });

        window.onclick = (event) => {
            if (!event.target.matches('#language-dropdown, #language-dropdown *, .language-button, .language-button *')) {
                languageOptions.style.display = 'none';
            }
        };
    }

    toggleLanguageOptions() {
        const languageOptions = document.getElementById('language-options');
        languageOptions.style.display = (languageOptions.style.display === 'block') ? 'none' : 'block';
    }

    updateCurrentLangButton(lang) {
        const currentLangDisplay = document.getElementById('current-lang');
        currentLangDisplay.textContent = lang.toUpperCase();
        this.updateVisibleLanguageOptions(lang);
    }

    updateVisibleLanguageOptions(currentLang) {
        const languageOptions = document.getElementById('language-options');
        languageOptions.querySelectorAll('button').forEach(button => {
            if (button.textContent.toLowerCase() === currentLang) {
                button.style.display = 'none';
            } else {
                button.style.display = 'block';
            }
        });
    }

    switchLanguage(lang) {
        this.currentLang = lang;
        this.applyTranslations();
    }

    applyTranslations() {
        document.querySelectorAll("[data-translate]").forEach(elem => {
            const keys = elem.getAttribute("data-translate").split('.');
            let translation = this.translations[this.currentLang];

            keys.forEach(key => {
                if (translation && translation[key]) {
                    translation = translation[key];
                } else {
                    translation = null;
                }
            });

            if (translation) {
                if (elem.tagName.toLowerCase() === 'input' || elem.tagName.toLowerCase() === 'textarea') {
                    elem.placeholder = translation;
                } else {
                    elem.textContent = translation;
                }
            } else {
                console.error('Translation missing for', keys.join('.'));
            }
        });
    }
}
