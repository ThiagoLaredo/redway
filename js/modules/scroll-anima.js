import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default class ScrollAnima {
  constructor(sectionsSelector) {
    this.sections = document.querySelectorAll('.swiper-slide');
    this.animateSections = this.animateSections.bind(this);
    this.animateMapScroll = this.animateMapScroll.bind(this); 
  }

  animateSections() {
    this.sections.forEach(section => {
      const elements = section.querySelectorAll('h2, h3, p, li, .mySwiper2, .destaque__institucional, .experiencia, experiencia::before, img, svg, #contact-form');
      if (elements.length > 0) { // Verifica se há elementos para animar
        gsap.fromTo(elements, 
          { y: -30, opacity: 0 }, 
          {
            y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power1.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          }
          
        );
      }
    }); 
  }

  isMobile() {
    return window.innerWidth <= 768;
  }

  animateMapScroll() {
    const sectionMapa = document.querySelector('.svg-container'); // Assume que você tenha um ID específico para a seção que contém o mapa
    if (sectionMapa) {
      ScrollTrigger.create({
        trigger: sectionMapa,
        start: "top center",
        onEnter: () => { // Quando a seção do mapa entra na visão
          const mapaSVG = sectionMapa.querySelector('svg');
          const paises = ['DO', 'GT', 'Unitedstates', 'EC', 'BR', 'Chile', 'Argentina', 'Angola', 'SN', 'ES', 'PT','Indonesia'];

          if (mapaSVG) {
            paises.forEach((pais, index) => {
              let seletor = mapaSVG.querySelector(`.${pais}`) ? `.${pais}` : `#${pais}`;
              gsap.to(seletor, {
                fill: '#4E7A9B',
                delay: index * 0.2, // Ajuste o delay conforme necessário
                duration: 1,
              });
            });
          }
        }
      });
    }
  }

  init() {
    if (this.sections.length) {
      this.animateSections();
      if (this.isMobile()) {
        this.animateMapScroll();
      }    }
    return this;
  }
}
