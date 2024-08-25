import MenuMobile from './modules/menu-mobile.js';
// import FormHandler from './modules/formHandler.js';
import LanguageSwitcher from './modules/languageSwitcher.js';
import translations from '../translations.json'
import { initAnimations } from './modules/animations.js';
import { ServiceLoader } from './modules/serviceLoader.js';
// import { adjustContainerWidth } from './modules/deviceStyleAdjuster.js';


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
import "../css/servicos.css";
import "../css/rodape.css";
import "../css/componentes.css";


// document.addEventListener('DOMContentLoaded', () => {
//     console.log("DOM completamente carregado.");

//     // Inicialização de componentes
//     const menuMobile = new MenuMobile('[data-menu="logo"]', '[data-menu="button"]', '[data-menu="list"]', '[data-menu="contato-mobile"]', '[data-menu="linkedin"]');
//     menuMobile.init();
  
//     // const formHandler = new FormHandler('contact-form');

//     console.log("Iniciando animações GSAP...");
  
//     initAnimations();
  
//     console.log("Animações GSAP iniciadas.");
  
//     const languageSwitcher = new LanguageSwitcher(translations);  

//     const serviceLoader = new ServiceLoader(translations);
//     const serviceId = window.location.hash.substring(1);
//     const currentLang = document.documentElement.lang || 'pt'; // Pega o idioma atual do documento

//     if (serviceId) {
//         serviceLoader.loadService(serviceId, currentLang);
//     }
   
//   });
  
// Definição global de variáveis para garantir o acesso em funções de callback
// Definição global para serviceId e currentLang
// Definição global para serviceId e currentLang
let serviceId = window.location.hash.substring(1);
let currentLang = 'pt'; // Define um idioma padrão

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM completamente carregado.");
    console.log("Service ID:", serviceId);  // Verifique se o serviceId está correto

    const menuMobile = new MenuMobile('[data-menu="logo"]', '[data-menu="button"]', '[data-menu="list"]', '[data-menu="contato-mobile"]', '[data-menu="linkedin"]');
    menuMobile.init();

    initAnimations();
 // Definir currentLang corretamente aqui
 currentLang = 'pt'; // Força o idioma inicial como 'PT'
 const languageSwitcher = new LanguageSwitcher(translations, currentLang);
 const serviceLoader = new ServiceLoader(translations);

 if (serviceId) {
     serviceLoader.loadService(serviceId, currentLang);
 } else {
     console.error('Service ID is undefined or null on page load');
 }
});