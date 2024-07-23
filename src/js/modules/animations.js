import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

export const initAnimations = () => {
  // Animação para a seção de introdução ao carregar a página
    gsap.from(".header", { duration: 1, opacity: 0, ease: "power1.inOut" });
    gsap.from("[data-menu='logo']", { duration: 1, delay: 0.5, opacity: 0, ease: "power1.inOut" });
    gsap.from("#menu li", {
      duration: 0.5,
      delay: 1,
      opacity: 0,
      stagger: 0.2, // Efeito dominó
      ease: "power1.out"
    });

  
    gsap.from(".background-image", {
      duration: 1.5,
      x: 200,
      opacity: 0,
      ease: "power1.out",
      delay: 1.5
    });
    gsap.from(".introducao-texto h1, .introducao-texto p, .btn-intro", {
      duration: 1,
      x: -100,
      opacity: 0,
      stagger: 0.2,
      ease: "power1.out",
      delay: 2
    });
  };
  

  // gsap.from(".sobre-texto h2, .sobre-texto p.", {
  //   scrollTrigger: {
  //     trigger: ".sobre",
  //     start: "top 90%", // Inicia quando a parte superior da seção atinge o final da viewport
  //     toggleActions: "play none none none",
  //     markers: true // Opcional para debugging
  //   },
  //   duration: 1,
  //   x: -100, // Entrada da esquerda para a direita
  //   opacity: 0,
  //   stagger: 0.2,
  //   ease: "power2.out" // Suaviza a transição
  // });



  const sections = document.querySelectorAll('section, footer');
  sections.forEach(section => {
    gsap.from(section.querySelectorAll('h2, p, img, h3, ul, button, div'), {
      scrollTrigger: {
        trigger: section,
        start: "top 80%", // Inicia um pouco antes de entrar completamente na viewport
        end: "bottom 100%", // Termina um pouco depois de estar totalmente visível
        toggleActions: "play none none none",
        markers: false // Defina como true para debugging
      },
      duration: 0.5,
      opacity: 0,
      y: 20,
      stagger: 0.2, // Efeito dominó
      ease: "power1.out"
    });
  });

