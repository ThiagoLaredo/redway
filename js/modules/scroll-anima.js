import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default class ScrollAnima {
  constructor(sectionsSelector) {
    this.sections = document.querySelectorAll('.swiper-slide');
    this.animateSections = this.animateSections.bind(this);
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

  init() {
    if (this.sections.length) {
      this.animateSections();
    }
    return this; // Permite encadeamento de métodos
  }
}

