// import ScrollSuave from './modules/scroll-suave.js';
import MenuMobile from './modules/menu-mobile.js';
import HeaderScroll from './modules/header-scroll.js';
import ScrollAnima from './modules/scroll-anima.js';
import MySwiper from './modules/mySwiper.js';
import ConsoleTextEffect from './modules/text-effect.js';



const menuMobile = new MenuMobile('[data-menu="logo"]', '[data-menu="button"]', '[data-menu="list"]', '[data-menu="contato-mobile"]', '[data-menu="linkedin"]' );
menuMobile.init();

const headerScroll = new HeaderScroll('.header');
headerScroll.init();

const scrollAnima = new ScrollAnima('.swiper-slide');
scrollAnima.init();

// // Exemplo de classes dos países que deseja animar
// const classesPaises = ['Canada', 'China', 'Angola', 'Argentina'];

// // Cria uma instância da classe com as classes dos países
// const animacaoMapa = new MapaAnimacao(classesPaises);

// // Inicia a animação
// animacaoMapa.animarCores();


new MySwiper();

const targetElement = document.getElementById('typing');





