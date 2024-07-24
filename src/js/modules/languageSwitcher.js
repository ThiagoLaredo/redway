// export default class LanguageSwitcher {
//     constructor(translations) {
//       this.translations = translations;
//       this.currentLang = 'pt'; // Define o idioma padrão como português
//     }
  
//     switchLanguage(lang) {
//       this.currentLang = lang;
//       document.querySelectorAll("[data-translate]").forEach(elem => {
//         const key = elem.getAttribute("data-translate");
//         if (this.translations[lang][key]) {
//           if (elem.tagName.toLowerCase() === 'input' || elem.tagName.toLowerCase() === 'textarea') {
//             elem.placeholder = this.translations[lang][key];
//           } else if (key === "endereco") {
//             elem.innerHTML = this.translations[lang][key].replace(/\n/g, '<br>');
//           } else {
//             elem.textContent = this.translations[lang][key];
//           }
//         }
//       });
//     }
//   }


export default class LanguageSwitcher {
  constructor(translations) {
      this.translations = translations;
      this.currentLang = 'pt'; // Idioma padrão como português
      this.initDropdown(); // Inicializa o dropdown ao criar a instância
      this.updateVisibleLanguageOptions(this.currentLang); // Esconde o botão do idioma atual
  }

  initDropdown() {
      const dropdownButton = document.getElementById('language-dropdown');
      const languageOptions = document.getElementById('language-options');

      // Atualizar texto do botão com o idioma atual
      dropdownButton.addEventListener('click', () => {
          this.toggleLanguageOptions();
      });

      // Adiciona event listeners aos botões de mudança de idioma
      languageOptions.querySelectorAll('button').forEach(button => {
          button.addEventListener('click', () => {
              const selectedLang = button.textContent.toLowerCase();
              this.switchLanguage(selectedLang);
              this.updateCurrentLangButton(selectedLang);
              this.toggleLanguageOptions(); // Fecha o dropdown após selecionar
          });
      });

      // Fecha o dropdown se clicar fora dele
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

  // updateVisibleLanguageOptions(currentLang) {
  //     const languageOptions = document.getElementById('language-options');
  //     languageOptions.querySelectorAll('button').forEach(button => {
  //         button.style.display = button.textContent.toLowerCase() === currentLang ? 'none' : 'block';
  //     });
  // }

  updateVisibleLanguageOptions(currentLang) {
    const languageOptions = document.getElementById('language-options');
    languageOptions.querySelectorAll('button').forEach(button => {
        // Mostra apenas o botão que não corresponde ao idioma atual
        if (button.textContent.toLowerCase() === currentLang) {
            button.style.display = 'none';
        } else {
            button.style.display = 'block';
        }
    });
}


  switchLanguage(lang) {
      this.currentLang = lang;
      document.querySelectorAll("[data-translate]").forEach(elem => {
          const key = elem.getAttribute("data-translate");
          if (this.translations[lang][key]) {
              if (elem.tagName.toLowerCase() === 'input' || elem.tagName.toLowerCase() === 'textarea') {
                  elem.placeholder = this.translations[lang][key];
              } else if (key === "endereco") {
                  elem.innerHTML = this.translations[lang][key].replace(/\n/g, '<br>');
              } else {
                  elem.textContent = this.translations[lang][key];
              }
          }
      });
  }
}
