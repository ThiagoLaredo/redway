// export default class ScrollAnima {
//   constructor(sections) {
//     this.sections = document.querySelectorAll(sections);
//     this.windowMetade = window.innerHeight * 0.6;
//     this.checkDistance = this.checkDistance.bind(this);
//   }
//   // Pega a distância de cada item em relação
//   // ao topo do site
//   getDistance() {
//     this.distance = [...this.sections].map((section) => {
//       const offset = section.offsetTop;
//       return {
//         element: section,
//         offset: Math.floor(offset - this.windowMetade),
//       };
//     });
//   }

//   // Verifica a distância em cada objeto
//   // em relação ao scroll do site
//   checkDistance() {
//     this.distance.forEach((item) => {
//       if (window.scrollY > item.offset) {
//         item.element.classList.add('ativo');
//       } else if (item.element.classList.contains('ativo')) {
//         item.element.classList.remove('ativo');
//       }
//     });
//   }

//   init() {
//     if (this.sections.length) {
//       this.getDistance();
//       this.checkDistance();
//       window.addEventListener('scroll', this.checkDistance);
//     }
//     return this;
//   }

//   // Remove o event de scroll
//   stop() {
//     window.removeEventListener('scroll', this.checkDistance);
//   }
// }


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
      const elements = section.querySelectorAll('h2, h3, p, li, .destaque__institucional, .experiencia, img, svg, #contact-form');
      if (elements.length > 0) { // Verifica se há elementos para animar
        gsap.fromTo(elements, 
          { y: -30, opacity: 0 }, 
          {
            y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power1.out",
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

