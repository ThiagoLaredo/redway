import MenuMobile from './modules/menu-mobile.js';
// import ConsoleTextEffect from './modules/text-effect.js';
// import FormHandler from './modules/formHandler.js';
import LanguageSwitcher from './modules/languageSwitcher.js';
import translations from '../translations.json'
import { initAnimations } from './modules/animations.js';


import "../css/global.css";
import "../css/header.css";
import "../css/introducao.css";
import "../css/text-typing.css";
import "../css/menu-mobile.css";
import "../css/cores.css";
import "../css/sobre.css";
import "../css/protecao.css";
import "../css/produtos.css";
import "../css/seguranca.css";
import "../css/fale-conosco.css";
import "../css/rodape.css";
import "../css/componentes.css";


document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM completamente carregado.");

  
    // Inicialização de componentes
    const menuMobile = new MenuMobile('[data-menu="logo"]', '[data-menu="button"]', '[data-menu="list"]', '[data-menu="contato-mobile"]', '[data-menu="linkedin"]');
    menuMobile.init();
  
    // const formHandler = new FormHandler('contact-form');

    console.log("Iniciando animações GSAP...");
  
    initAnimations();
  
    console.log("Animações GSAP iniciadas.");
  
    const languageSwitcher = new LanguageSwitcher(translations);  
   
  });
  