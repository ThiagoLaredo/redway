
import MenuMobile from './modules/menu-mobile.js';
// import FormHandler from './modules/formHandler.js';
import LanguageSwitcher from './modules/languageSwitcher.js';
import translations from '../translations.json';
import { initAnimations } from './modules/animations.js';
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
import "../css/servicos.css";
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
    console.log("Service ID:", serviceId);  // Verifique se o serviceId está correto

    const menuMobile = new MenuMobile('[data-menu="logo"]', '[data-menu="button"]', '[data-menu="list"]', '[data-menu="contato-mobile"]', '[data-menu="linkedin"]');
    menuMobile.init();

    initAnimations();

    const subMenu = new SubMenu('#menu');

    // Definir currentLang corretamente aqui
    currentLang = 'pt'; // Força o idioma inicial como 'PT'
    const languageSwitcher = new LanguageSwitcher(translations, currentLang);
    const serviceLoader = new ServiceLoader(translations, languageSwitcher);

    if (serviceId) {
        serviceLoader.loadService(serviceId, currentLang);
    } else {
        console.error('Service ID is undefined or null on page load');
    }

    // Chama a função para configurar os links de serviços
    setupServiceLinks(serviceLoader, currentLang);
});