import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

// Função para animações de elementos visíveis na abertura da página
export const initPageLoadAnimations = () => {
  const pageElements = [
    { selector: ".header", props: { duration: 1, opacity: 0, ease: "power1.inOut" } },
    { selector: "[data-menu='logo'], [data-menu='button']", props: { duration: 1, delay: 0.5, opacity: 0, ease: "power1.inOut" } },
    { selector: "#menu > li", props: { duration: 0.5, delay: 1, opacity: 0, stagger: 0.2, ease: "power1.out" } },
    { selector: ".background-image, #serviceimage, .background-image-pg-interna", props: { duration: 1.5, x: 200, opacity: 0, ease: "power1.out", delay: 1.5 } },
    { selector: ".svg-overlay", props: { duration: 1.5, scale: 0, opacity: 0, ease: "power1.out", delay: 1.8 } },
    { selector: ".introducao-texto h1, .introducao-texto p, .introducao-texto button, .servicos-lista, #logo-fiqueAlerta-v", props: { duration: 1, x: -100, opacity: 0, stagger: 0.2, ease: "power1.out", delay: 2 } },
    { selector: "form, .beneficios, .servico-beneficios", props: { duration: 1.5, opacity: 0, ease: "power1.out", delay: 2.2 } }
  ];

  // Executa animações para cada elemento configurado
  pageElements.forEach(element => {
    const targets = document.querySelectorAll(element.selector);
    if (targets.length > 0) {
      gsap.from(targets, element.props);
    } else if (element.selector === '.svg-overlay' || element.selector.includes('form, .beneficios, .servico-beneficios')) {
      // Verifica se elementos são opcionais e ignoram mensagens de aviso para eles
      console.info(`Optional GSAP target '${element.selector}' not found on this page.`);
    }
  });
};

// Função para animações dos botões
export const initButtonAnimations = () => {
  const buttons = document.querySelectorAll('.btn');
  if (buttons.length > 0) {
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, { duration: 0.3, backgroundColor: 'var(--primary)', scale: 1.05 });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, { duration: 0.3, backgroundColor: 'var(--secondary)', scale: 1 });
      });
    });
  } else {
    console.info("No buttons found for GSAP animation.");
  }
};

// Função para animações de scroll usando ScrollTrigger
export const initScrollAnimations = () => {
  const sections = document.querySelectorAll('section');
  if (sections.length > 0) {
    sections.forEach(section => {
      const elementsToAnimate = section.querySelectorAll('h2, h3, p, img, .btn, a, .background-image, .background-img-seguranca, .link-produto, .plano');
      if (elementsToAnimate.length > 0) {
        gsap.from(elementsToAnimate, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
            markers: false 
          },
          opacity: 0,
          y: 20,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out"
        });
      } else {
        console.info(`No elements found for animation in section: ${section.className}`);
      }
    });
  } else {
    console.info("No sections found for GSAP scroll animations.");
  }

  if (document.querySelectorAll(".highlight").length > 0) {
    document.querySelectorAll(".highlight").forEach(element => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top center",
                toggleActions: "play none none none",
                markers: false
            },
            duration: 2,
            width: "100%",
            ease: "none",
            repeat: 0,
            yoyo: false
        });
    });
} else {
    console.info("GSAP targets for highlight animation not found.");
}


  const footerElements = document.querySelectorAll('.rodape h4, .rodape ul, .rodape li');
  if (footerElements.length > 0) {
    gsap.from(footerElements, {
      scrollTrigger: {
        trigger: '.rodape-background',
        start: "top 80%",
        toggleActions: "play none none none",
        markers: false
      },
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.4,
      ease: "power2.out"
    });
  } else {
    console.info("GSAP targets for footer animation not found.");
  }
};