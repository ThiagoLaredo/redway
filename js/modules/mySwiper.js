import gsap from 'gsap';

export default class MySwiper {
  constructor() {
    this.swiper = null;
    this.currentSlideIndex = 0; // Inicializa com 0 ou o slide inicial desejado


    document.addEventListener('DOMContentLoaded', () => {
      // Adiciona um ouvinte de evento para redimensionamento da janela
      window.addEventListener('resize', this.handleResize.bind(this));
      this.handleResize();
    });
  }

  isMobile() {
    return window.innerWidth <= 768;
  }


handleResize() {
  if (this.isMobile()) {
    if (this.swiper) {
      this.destroySwiper();
      // Aplica o estado padrão do cabeçalho para mobile, independentemente do slide
      this.updateHeaderAndApplyClasses(-1); // Passa um valor específico que indica modo mobile
    }
    // if (this.swiper2) {
    //   this.destroySwiper2(); // Destrói o swiper2 em dispositivos móveis
    // }
  } else {
    if (!this.swiper) {
      this.initializeSwiper();
      this.updateHeaderAndApplyClasses(this.currentSlideIndex);
    }
    // Considera inicializar o swiper2 apenas quando não está em mobile
    // E se estamos no slide correto, #quemsomos. Isso pode ser verificado posteriormente
    // dentro da lógica específica onde você considera apropriado para inicializar o swiper2
  }
}


swiperInit() {
  // Usando setTimeout para garantir que o Swiper esteja completamente inicializado
  setTimeout(() => {
      if (this.swiper) {
        this.initialVisibility();
        // Agora estamos seguros para acessar this.swiper.realIndex
        this.updateHeaderAndApplyClasses(this.swiper.realIndex);
        // Anima o conteúdo do slide inicial
        const initialSlide = this.swiper.slides[this.swiper.activeIndex];
        this.animateContentIn(initialSlide);
        this.animateMap();
        this.animateSVG(slide);        
        // Verifica se o slide atual é #quemsomos para inicializar o swiper2
        // this.checkSlideForSwiper2(); // Assegura que esta função verifica o slide atual e decide sobre a inicialização do swiper2
        
      }
  }, 0); // Um atraso de 0 ms é suficiente para colocar esta chamada no fim da fila do event loop
}


  initializeSwiper() {
    this.swiper = new Swiper(".mySwiper", {
      direction: "vertical",
      speed: 1000,
      mousewheel: true,
      preventClicks: false,
      preventClicksPropagation: false,
      autoHeight: false,
      hashNavigation: {
        watchState: true,
      },
       on: {
        init: () => {
          this.swiperInit(); // Assume que swiperInit já faz o que está no método bind(this)
          // this.checkSlideForSwiper2(); // Adiciona a chamada aqui
        },
        slideChange: () => {
          this.slideChange(); // Atualiza conforme necessário, pode chamar outra lógica aqui também
          // this.checkSlideForSwiper2(); // Verifica em cada mudança de slide
        },
        
      
        slideChangeTransitionStart: () => {
          // Certifique-se de que o swiper está inicializado e o slide ativo está disponível
          if (this.swiper && this.swiper.slides && this.swiper.activeIndex !== undefined) {
            const activeSlide = this.swiper.slides[this.swiper.activeIndex];
            this.animateContentIn(activeSlide);
        
            // Verifique se o slide atual contém o mapa
            if (activeSlide.querySelector('svg')) { // Ajuste o seletor conforme necessário
              this.animateMap();
            }


    // Especificamente anima o SVG dentro da 'svg-background' se existir
    if (activeSlide.querySelector('.svg-quemsomos svg')) {
      this.animateSVG(activeSlide);
    }
          }
        },
      
        // Evento chamado quando a transição termina
        slideChangeTransitionEnd: () => {
          // Animação de entrada para o novo slide
          
        }     
      },

    });
  }

  // initializeSwiper2() {
  //   // Lógica para inicializar swiper2 aqui
  //   this.swiper2 = new Swiper(".mySwiper2", {
  //     direction: "horizontal",
  //     mousewheel: true,
  //     spaceBetween: 10,
  //     grabCursor: false,
  //     slidesPerView: 1,
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //   });
  // }

  initialVisibility() {
    const pagination = document.querySelector('.swiper-pagination');
    if (pagination) pagination.style.display = 'none';

    // Assumindo que você possa determinar o slide inicial aqui ou usar this.swiper.realIndex
    let initialSlideIndex = this.swiper ? this.swiper.realIndex : 0;
    this.updateHeaderAndApplyClasses(initialSlideIndex);
}

    animateContentIn(slide) {

      // Verifica se está em um dispositivo móvel e retorna cedo se verdadeiro
      if (this.isMobile()) {
        return; // Retorna imediatamente, evitando animações em dispositivos móveis
      }
      
      const commonElements = slide.querySelectorAll('h2, h3, p, li, .destaque__institucional, img, .mySwiper2, .experiencia, experiencia::before, svg, #contact-form');
      if (commonElements.length > 0) { 
        gsap.fromTo(commonElements, 
          { y: -30, opacity: 0 }, 
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.5, 
            stagger: 0.2, 
            ease: "power1.out",
            onComplete: () => {
              if (!this.isMobile()) {
                this.animateMap();

              }
            }// Esta é a função que você chamará quando a animação dos elementos terminar
          }
        );
      }
    }

animateMap() {
  const slideMapa = this.swiper.slides[this.swiper.activeIndex];
  console.log(slideMapa);
  const mapaSVG = slideMapa.querySelector('svg'); // Selecione o SVG pelo elemento específico
  console.log(mapaSVG);
  const paises = ['DO', 'GT', 'Unitedstates', 'EC', 'BR', 'Chile', 'Argentina', 'Angola', 'SN', 'ES', 'PT','Indonesia']; // Exemplo de classes/ids

  if (mapaSVG) {

    paises.forEach((pais, index) => {
      let seletor = mapaSVG.querySelector(`.${pais}`) ? `.${pais}` : `#${pais}`;
      // Resetar as propriedades para os estados iniciais aqui, se necessário
      gsap.set(seletor, { fill: '#ececec' }); // Substitua 'cor_inicial' pela cor original dos países
    });
    // Adiciona um delay inicial antes de começar a animação dos países
    gsap.delayedCall(2, () => {
      paises.forEach((pais, index) => {
        // Verifica se o elemento é class ou id e ajusta o seletor
        let seletor = mapaSVG.querySelector(`.${pais}`) ? `.${pais}` : `#${pais}`;
        gsap.to(seletor, {
          fill: '#4E7A9B',
          delay: index * 0.3, // Mantém o delay existente entre as animações dos países
          duration: 1,
        });
      });
    });
  }
}

animateSVG(slide) {
  const paths = slide.querySelectorAll('.cls-2');

  paths.forEach(path => {
    if (path instanceof SVGPathElement) {  // Verificação para garantir que o elemento é um SVGPathElement
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      gsap.set(path, { fill: "none" });  // Define explicitamente o preenchimento inicial

      // Animação para "desenhar" o caminho
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 5,
        ease: "none",  // Uso de easing linear
    
      });
    } else {
      console.error('Elemento não é um SVGPathElement:', path);
    }
  });
}




  destroySwiper() {
    // Verifica se o Swiper existe antes de tentar destruí-lo
    if (this.swiper !== null) {
      this.swiper.destroy(true, true);
      this.swiper = null; // Reseta a referência do Swiper
    }
  }

  // destroySwiper2() {
  //   if (this.swiper2) {
  //     this.swiper2.destroy(true, true);
  //     this.swiper2 = null;
  //   }
  // }


  slideChange() {
     // Verifica se o Swiper está definido e inicializado corretamente antes de tentar acessar suas propriedades
     if (!this.swiper || typeof this.swiper.realIndex === 'undefined') {
      console.log("Swiper não inicializado.");
      return; // Sai do método se o Swiper não estiver inicializado
  }

     // Atualiza currentSlideIndex aqui
     this.currentSlideIndex = this.swiper.realIndex;

    // Primeiro, verifica se o Swiper está definido e inicializado corretamente.
    if (!this.swiper || typeof this.swiper.realIndex === 'undefined') {
        console.log("Swiper não inicializado.");
        return; // Sai do método se o Swiper não estiver inicializado
    }

    const currentSlideIndex = this.swiper.realIndex;

    // Atualiza a visibilidade e classes do cabeçalho baseado no slide atual
    this.updateHeaderAndApplyClasses(currentSlideIndex);

    const pagination = document.querySelector('.swiper-pagination');

    // Atualiza a visibilidade do menu lateral e da paginação
    const displayStyle = currentSlideIndex >= 1 ? 'flex' : 'none';
    if (pagination) pagination.style.display = displayStyle;

    // Aplica a classe 'menu-white' no slide 4 ou 6
    const shouldApplyMenuWhite = [4, 6].includes(currentSlideIndex);
    if (pagination) pagination.classList.toggle('menu-white', shouldApplyMenuWhite);

    // Remove 'active' class de todos os itens do menu
    document.querySelectorAll('.project-menu-item').forEach(menuItem => {
        menuItem.classList.remove('active');
    });

    // Ativa o item do menu correspondente ao slide atual
  this.activateCurrentMenuItem(currentSlideIndex);
  this.updateHeaderAndApplyClasses(this.currentSlideIndex);

  }


  updateHeaderAndApplyClasses(currentSlideIndex) {
    const header = document.querySelector('.header');
    const headerMenu = document.querySelector('.header_menu');
    const logo = document.querySelector('a > img'); // Assumindo que o logo é o primeiro <img> dentro de um <a>
    const menuLinks = document.querySelectorAll('.menu a');
  
    // Caminhos para os logos
    const originalLogoSrc = "./img/logo.svg";
    const reducedLogoSrc = "./img/logo-reduzido.svg";
  
    // Captura o estado atual antes de modificar
    const initialState = {
      headerClass: header.classList.contains('dark'),
      headerMenuClass: headerMenu.classList.contains('dark') || headerMenu.classList.contains('minimal'),
      logoSrc: logo.src,
      logoClass: logo.classList.contains('minimal'),
      menuLinksClass: Array.from(menuLinks).map(link => link.classList.contains('minimal') || link.classList.contains('dark')),
    };
  
    // Função para comparar os estados e decidir sobre animações
    const applyAnimationsIfNeeded = (newState) => {
      if (newState.headerClass !== initialState.headerClass ||
          newState.headerMenuClass !== initialState.headerMenuClass ||
          newState.logoSrc !== initialState.logoSrc ||
          newState.logoClass !== initialState.logoClass ||
          !newState.menuLinksClass.every((value, index) => value === initialState.menuLinksClass[index]) ||
          newState.menuButtonClass !== initialState.menuButtonClass) {
        // Animação de opacidade para transição, excluindo menuButton
        gsap.fromTo([header, headerMenu, logo, menuLinks], 
                    { opacity: 0 },
                    { duration: 0.5, opacity: 1 });
      }
    };
    
    
  
    // Resetando classes para evitar conflitos
    header.classList.remove('dark');
    headerMenu.classList.remove('minimal', 'dark');
    logo.classList.remove('minimal');
    menuLinks.forEach(link => link.classList.remove('minimal', 'dark'));
  
    if (currentSlideIndex === -1 || this.isMobile()) {
        logo.src = originalLogoSrc; // Usar o logo original
    } else {
        if (currentSlideIndex >= 1) {
            headerMenu.classList.add('minimal');
            logo.src = reducedLogoSrc;
            logo.classList.add('minimal');
            menuLinks.forEach(link => link.classList.add('minimal'));
        } else {
            logo.src = originalLogoSrc;
        }
  
        if ([1, 2, 3, 5].includes(currentSlideIndex)) {
            header.classList.add('dark');
            headerMenu.classList.add('dark');
            menuLinks.forEach(link => link.classList.add('dark'));
        }
    }
  
    // Captura o novo estado após modificações
    const newState = {
      headerClass: header.classList.contains('dark'),
      headerMenuClass: headerMenu.classList.contains('dark') || headerMenu.classList.contains('minimal'),
      logoSrc: logo.src,
      logoClass: logo.classList.contains('minimal'),
      menuLinksClass: Array.from(menuLinks).map(link => link.classList.contains('minimal') || link.classList.contains('dark')),
    };
  
    // Aplica animações se houver mudanças reais
    applyAnimationsIfNeeded(newState);
  }
  
  

// checkSlideForSwiper2() {
//   // Certifica-se de que o swiper está definido e possui slides.
//   if (!this.swiper || !this.swiper.slides) {
//     // Log removido para evitar mensagens desnecessárias, já que isso pode ocorrer em condições normais.
//     return;
//   }
  
//   // Aqui, nós obtemos diretamente o índice do slide #quemsomos
//   const indexOfQuemSomosSlide = this.swiper.slides.findIndex(slide => 
//     slide.getAttribute('data-hash') === 'quemsomos');

//   // Se não encontramos o slide #quemsomos (por exemplo, -1 retornado por findIndex), saímos da função.
//   // Isso evita a execução desnecessária em situações onde o slide relevante não está presente.
//   if (indexOfQuemSomosSlide === -1) {
//     return;
//   }

//   // Executa a lógica somente se estivermos no slide correto.
//   if (this.swiper.realIndex === indexOfQuemSomosSlide) {
//     if (!this.swiper2 || this.swiper2.destroyed) {
//       this.initializeSwiper2();
//     } // Não há necessidade de um else aqui, dado que a função agora sai cedo se não estamos no slide correto.
//   } else {
//     // Destruir o swiper2 se estiver inicializado e se não estivermos no slide #quemsomos.
//     if (this.swiper2 && !this.swiper2.destroyed) {
//       this.destroySwiper2();
//     }
//   }
// }




checkIfQuemSomosSlide(slide) {
  return window.location.hash === '#quemsomos' || slide.hash === 'quemsomos';
}





  activateCurrentMenuItem(currentSlideIndex) {
    // Se o índice do slide atual for válido
    const currentSlide = this.swiper.slides[currentSlideIndex];
    if (currentSlide) {
        // Obtém o valor do hash do slide atual
        let currentSlideHash = currentSlide.getAttribute('data-hash');
        // Encontra o item de menu correspondente e adiciona a classe 'active'
        let correspondingMenuItem = document.querySelector(`.project-menu-item[href="#${currentSlideHash}"]`);
        if (correspondingMenuItem) {
            correspondingMenuItem.classList.add('active');
        }
    }
  }
}





