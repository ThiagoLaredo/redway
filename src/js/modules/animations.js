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
    gsap.from(element.selector, element.props);
  });
};

// Função para animações dos botões
export const initButtonAnimations = () => {
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, { duration: 0.3, backgroundColor: 'var(--primary)', scale: 1.05 });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, { duration: 0.3, backgroundColor: 'var(--secondary)', scale: 1 });
    });
  });
};
// Função para animações de scroll usando ScrollTrigger
export const initScrollAnimations = () => {
  // Animação para cada seção com conteúdo
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const elementsToAnimate = section.querySelectorAll('h2, h3, p, img, .btn, a, .background-image, .background-img-seguranca, .link-produto, .plano');

    gsap.from(elementsToAnimate, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%", // Inicia um pouco antes do topo da seção atingir 80% da altura da viewport
        end: "bottom 60%", // Termina um pouco depois do fundo da seção atingir 60% da altura da viewport
        toggleActions: "play none none none", // Reativa a animação ao voltar
        markers: false 
      },
      opacity: 0,
      y: 20,
      stagger: 0.2, // Efeito dominó para elementos
      duration: 0.8,
      ease: "power2.out"
    });
  });

  // Animação para o footer
  gsap.from('.rodape h4, .rodape ul, .rodape li', {
    scrollTrigger: {
      trigger: '.rodape-background', // Gatilho específico para o footer
      start: "top 80%",
      toggleActions: "play none none none",
      markers: false
    },
    opacity: 0,
    y: 20,
    stagger: 0.1, // Menor atraso entre os elementos para uma transição mais rápida
    duration: 0.4,
    ease: "power2.out"
  });
};