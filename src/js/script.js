import MenuMobile from './modules/menu-mobile.js';
// import FormHandler from './modules/formHandler.js';
import LanguageSwitcher from './modules/languageSwitcher.js';
import translations from '../translations.json';
import { initPageLoadAnimations, initButtonAnimations, initScrollAnimations } from './modules/animations.js';
import { ServiceLoader } from './modules/serviceLoader.js';
import { SubMenu } from './modules/subMenu.js';

// Importação de CSS
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

// Definição de variáveis globais
let currentLang = 'pt'; // Define o idioma padrão

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

// Função principal de inicialização
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM completamente carregado.");

  // Inicializa o menu mobile
  const menuMobile = new MenuMobile('[data-menu="logo"]', '[data-menu="button"]', '[data-menu="list"]', '[data-menu="contato-mobile"]', '[data-menu="linkedin"]');
  menuMobile.init();

  // Inicializa o submenu
  const subMenu = new SubMenu('#menu');

  // Inicializa o trocador de idiomas e aplica as traduções
  const languageSwitcher = new LanguageSwitcher(translations, currentLang);
  languageSwitcher.applyTranslations();

  // Inicializa o carregador de serviços
  const serviceLoader = new ServiceLoader(translations, languageSwitcher);

  // Carrega o serviço baseado no hash atual da URL na inicialização da página
  const serviceId = window.location.hash.substring(1); // Captura o ID do serviço do hash da URL
  if (serviceId) {
      console.log('Carregando serviço com ID:', serviceId);
      serviceLoader.loadService(serviceId, currentLang);
  } else {
      console.info('Nenhum Service ID encontrado na URL. Carregando conteúdo padrão...');
      // Opcional: Carregar um conteúdo padrão ou uma mensagem amigável para o usuário
  }

  // Adiciona um listener para o evento de mudança de hash
  window.addEventListener('hashchange', () => {
      const newServiceId = window.location.hash.substring(1);
      if (newServiceId) {
          console.log('Hash changed, carregando novo serviço com ID:', newServiceId);
          serviceLoader.loadService(newServiceId, currentLang);
      } else {
          console.warn('Service ID is undefined or null on hash change');
      }
  });

  // Chama a função para configurar os links de serviços
  setupServiceLinks(serviceLoader, currentLang);
});

// Inicializa as animações após o carregamento completo dos recursos
window.addEventListener('load', () => {
    initPageLoadAnimations();
    initButtonAnimations();
    initScrollAnimations();
});