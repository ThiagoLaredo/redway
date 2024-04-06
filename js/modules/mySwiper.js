export default class MySwiper {
  constructor() {
    this.swiper = null;
    this.currentSlideIndex = 0; // Inicializa com 0 ou o slide inicial desejado


    document.addEventListener('DOMContentLoaded', () => {
      // Adiciona um ouvinte de evento para redimensionamento da janela
      window.addEventListener('resize', this.handleResize.bind(this));
      this.handleResize();
      this.setupReducedMenuButton();
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
    } else {
        if (!this.swiper) {
            this.initializeSwiper();
            this.updateHeaderAndApplyClasses(this.currentSlideIndex);
        }
    }
}

swiperInit() {
  // Usando setTimeout para garantir que o Swiper esteja completamente inicializado
  setTimeout(() => {
      if (this.swiper) {
          this.initialVisibility();
          // Agora estamos seguros para acessar this.swiper.realIndex
          this.updateHeaderAndApplyClasses(this.swiper.realIndex);
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
      pagination: {
        el: '.swiper-pagination',
        clickable: false,
      }, 
      on: {
        slideChange: this.slideChange.bind(this),
        init: this.swiperInit.bind(this), // Use o novo método no evento init
      },
    });
  }

  initialVisibility() {
    const pagination = document.querySelector('.swiper-pagination');
    if (pagination) pagination.style.display = 'none';

    // Assumindo que você possa determinar o slide inicial aqui ou usar this.swiper.realIndex
    let initialSlideIndex = this.swiper ? this.swiper.realIndex : 0;
    this.updateHeaderAndApplyClasses(initialSlideIndex);
}


  destroySwiper() {
    // Verifica se o Swiper existe antes de tentar destruí-lo
    if (this.swiper !== null) {
      this.swiper.destroy(true, true);
      this.swiper = null; // Reseta a referência do Swiper
    }
  }


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
    const shouldApplyMenuWhite = [3, 5].includes(currentSlideIndex);
    if (pagination) pagination.classList.toggle('menu-white', shouldApplyMenuWhite);

    // Remove 'active' class de todos os itens do menu
    document.querySelectorAll('.project-menu-item').forEach(menuItem => {
        menuItem.classList.remove('active');
    });

    // Ativa o item do menu correspondente ao slide atual
  this.activateCurrentMenuItem(currentSlideIndex);
  this.updateHeaderAndApplyClasses(this.currentSlideIndex);

  }

  // updateHeaderAndApplyClasses(currentSlideIndex) {

  //   if (this.isMobile()) return;

  //   const header = document.querySelector('.header_menu');
  //   const logo = header.querySelector('a > img'); // Supondo que o logo seja o primeiro <img> dentro de um <a>
  //   const menuLinks = header.querySelectorAll('.menu a'); // Seleciona todos os links dentro do menu
  //   const menuButton = document.querySelector('.menu-button');
  //   // Define o caminho para os logos
  //   const originalLogoSrc = "./img/logo.svg";
  //   const reducedLogoSrc = "./img/logo-reduce.svg";

  //   // Remove classes anteriores para evitar conflitos
  //   menuButton.classList.remove('dark');
  //   header.classList.remove('minimal', 'dark');
  //   logo.classList.remove('minimal', 'dark'); // Remover classes do logo
  //   menuLinks.forEach(link => link.classList.remove('minimal', 'dark')); // Remover classes dos links do menu

  //   // Aplica a classe "minimal" a partir do slide 1
  //   if (currentSlideIndex >= 1) {
  //       header.classList.add('minimal');
  //       logo.src = reducedLogoSrc; // Muda o logo para a versão reduzida
  //       logo.classList.add('minimal'); // Adiciona a classe ao logo
  //       menuLinks.forEach(link => link.classList.add('minimal')); // Adiciona a classe aos links do menu
  //   } else {
  //       logo.src = originalLogoSrc; // Volta para o logo original
  //   }

  //   // Aplica a classe "dark" nos slides específicos
  //   if ([1, 2, 4].includes(currentSlideIndex)) {
  //       header.classList.add('dark');
  //       menuButton.classList.add('dark');
  //       logo.classList.add('dark'); // Adiciona a classe ao logo
  //       menuLinks.forEach(link => link.classList.add('dark')); // Adiciona a classe aos links do menu
  //   }

  // }

//   updateHeaderAndApplyClasses(currentSlideIndex) {
//     const header = document.querySelector('.header_menu');
//     const logo = header.querySelector('a > img'); // Supondo que o logo seja o primeiro <img> dentro de um <a>
//     const menuLinks = header.querySelectorAll('.menu a');
//     const menuButton = document.querySelector('.menu-button');

//     // Define o caminho para os logos
//     const originalLogoSrc = "./img/logo.svg";
//     const reducedLogoSrc = "./img/logo-reduce.svg";

//     // Remover classes anteriores para evitar conflitos
//     menuButton.classList.remove('dark');
//     header.classList.remove('minimal', 'dark');
//     logo.classList.remove('minimal', 'dark');
//     menuLinks.forEach(link => link.classList.remove('minimal', 'dark'));

//     if (this.isMobile()) {
//         // Para modo móvel, usa o logo original
//         logo.src = originalLogoSrc;
//     } else {
//         // Lógica para desktop
//         if (currentSlideIndex >= 1) {
//             header.classList.add('minimal');
//             logo.src = reducedLogoSrc;
//             logo.classList.add('minimal');
//             menuLinks.forEach(link => link.classList.add('minimal'));
//         } else {
//             logo.src = originalLogoSrc;
//         }

//         if ([1, 2, 4].includes(currentSlideIndex)) {
//             header.classList.add('dark');
//             menuButton.classList.add('dark');
//             logo.classList.add('dark');
//             menuLinks.forEach(link => link.classList.add('dark'));
//         }
//     }
// }

updateHeaderAndApplyClasses(currentSlideIndex) {
  const header = document.querySelector('.header_menu');
  const logo = header.querySelector('a > img'); // Assumindo que o logo é o primeiro <img> dentro de um <a>
  const menuLinks = header.querySelectorAll('.menu a');
  const menuButton = document.querySelector('.menu-button');

  // Caminhos para os logos
  const originalLogoSrc = "./img/logo.svg";
  const reducedLogoSrc = "./img/logo-reduce.svg";

  // Resetando classes para evitar conflitos
  header.classList.remove('minimal', 'dark');
  logo.classList.remove('minimal', 'dark');
  menuLinks.forEach(link => link.classList.remove('minimal', 'dark'));
  menuButton.classList.remove('dark');

  if (currentSlideIndex === -1 || this.isMobile()) {
      // Se estamos no modo mobile ou precisamos resetar para o estado padrão
      logo.src = originalLogoSrc; // Usar o logo original
  } else {
      // Ajustes com base no slide atual para desktop
      if (currentSlideIndex >= 1) {
          header.classList.add('minimal');
          logo.src = reducedLogoSrc; // Muda para o logo reduzido
          logo.classList.add('minimal');
          menuLinks.forEach(link => link.classList.add('minimal'));
      } else {
          logo.src = originalLogoSrc; // Garante que o logo original é usado no primeiro slide
      }

      // Aplica a classe "dark" em slides específicos
      if ([1, 2, 4].includes(currentSlideIndex)) {
          header.classList.add('dark');
          menuButton.classList.add('dark');
          logo.classList.add('dark');
          menuLinks.forEach(link => link.classList.add('dark'));
      }
  }
}



  
  // setupReducedMenuButton() {
  //   const menuButton = document.querySelector('.menu-button.minimal');
  //   if (!menuButton || this.isMobile()) return;

  //   const menu = document.querySelector('#menu'); // Ajuste o seletor conforme necessário

  //   menuButton.addEventListener('click', () => {
  //       menu.classList.toggle('is-expanded'); // Alterna a classe que controla a visibilidade do menu
  //   });
  // }

  setupReducedMenuButton() {
    // Isso assegura que o evento seja aplicado mesmo se o botão mudar
    document.addEventListener('click', (event) => {
        if (event.target.matches('.menu-button') || event.target.closest('.menu-button')) {
            const menu = document.querySelector('#menu'); // Ajuste o seletor conforme necessário
            if (menu) {
                menu.classList.toggle('is-expanded');
            }
        }
    });
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





