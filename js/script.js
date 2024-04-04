// import ScrollSuave from './modules/scroll-suave.js';
import MenuMobile from './modules/menu-mobile.js';
import ScrollAnima from './modules/scroll-anima.js';
import MySwiper from './modules/mySwiper.js';
import ConsoleTextEffect from './modules/text-effect.js';

// const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
// scrollSuave.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

new MySwiper();

const targetElement = document.getElementById('typing');


