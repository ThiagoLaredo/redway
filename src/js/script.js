
import MenuMobile from './modules/menu-mobile.js';
// import FormHandler from './modules/formHandler.js';
import LanguageSwitcher from './modules/languageSwitcher.js';
import translations from '../translations.json';
import { initPageLoadAnimations, initButtonAnimations, initScrollAnimations } from './modules/animations.js';
import { ServiceLoader } from './modules/serviceLoader.js';
import { SubMenu } from './modules/subMenu.js';

import "../css/global.css";
import "../css/header.css";
import "../css/introducao.css";
import "../css/introducao-small.css";
import "../css/text-typing.css";
import "../css/menu-mobile.css";
import "../css/cores.css";
import "../css/sobre.css";
import "../css/protecao.css";
import "../css/produtos.css";
import "../css/seguranca.css";
import "../css/fale-conosco.css";
import "../css/fique-alerta.css";
import "../css/servicos.css";
import "../css/servico.css";
import "../css/rodape.css";
import "../css/componentes.css";

let serviceId = window.location.hash.substring(1);
let currentLang = 'pt'; // Define um idioma padrão

// Função para configurar os links dos serviços
function setupServiceLinks(serviceLoader, lang) {
    const serviceLinks = document.querySelectorAll('a[href*="servico.html"]');
    serviceLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Impede o comportamento padrão do link
            const serviceId = link.hash.substring(1); // Obtém o hash da URL (ID do serviço)

            if (window.location.pathname.includes('servico.html')) {
                // Se já estamos na página 'servico.html', apenas carrega o serviço dinamicamente
                serviceLoader.loadService(serviceId, lang);
            } else {
                // Caso contrário, redireciona para 'servico.html' com o hash apropriado
                window.location.href = `servico.html#${serviceId}`;
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM completamente carregado.");

  const menuMobile = new MenuMobile('[data-menu="logo"]', '[data-menu="button"]', '[data-menu="list"]', '[data-menu="contato-mobile"]', '[data-menu="linkedin"]');
  menuMobile.init();

  const subMenu = new SubMenu('#menu');

  // Definir currentLang corretamente aqui
  currentLang = 'pt'; // Força o idioma inicial como 'PT'
  const languageSwitcher = new LanguageSwitcher(translations, currentLang);
  languageSwitcher.applyTranslations();
  const serviceLoader = new ServiceLoader(translations, languageSwitcher);

  // Carrega o serviço baseado no hash atual na inicialização da página
  const serviceId = window.location.hash.substring(1); // Captura o ID do serviço do hash da URL
  if (serviceId) {
      serviceLoader.loadService(serviceId, currentLang);
  } else {
      console.error('Service ID is undefined or null on page load');
  }

  // Adiciona um listener para o evento de mudança de hash
  window.addEventListener('hashchange', () => {
      const newServiceId = window.location.hash.substring(1);
      if (newServiceId) {
          serviceLoader.loadService(newServiceId, currentLang);
      } else {
          console.error('Service ID is undefined or null on hash change');
      }
  });

  // Chama a função para configurar os links de serviços
  setupServiceLinks(serviceLoader, currentLang);
});

// Após o carregamento completo dos recursos, inicializa as animações e força a atualização do ScrollTrigger
window.addEventListener('load', () => {
    initPageLoadAnimations();
    initButtonAnimations();
    initScrollAnimations();
  
    // Força a atualização do ScrollTrigger após o carregamento completo
    ScrollTrigger.refresh(); 
  });
