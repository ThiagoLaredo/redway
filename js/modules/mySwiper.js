export default class MySwiper {
  constructor() {
    this.swiper = null;

    // document.addEventListener('DOMContentLoaded', () => {
    //   this.initializeSwiper();
    // });
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
    // Verifica se o tamanho da tela é móvel e se o Swiper já foi inicializado
    if (this.isMobile() && this.swiper) {
      this.destroySwiper();
    } else if (!this.isMobile() && !this.swiper) {
      // Se não é móvel e o Swiper não foi inicializado, inicializa o Swiper
      this.initializeSwiper();
    }
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
        init: this.initialVisibility.bind(this),
      },
    });

    // const pagination = document.querySelector('.pagination');
    // const menuLateral = document.querySelector('.menu-lateral');

    // if (menuLateral) {
    //   menuLateral.addEventListener('mouseenter', () => {
    //     this.hidePagination();
    //     this.showProjectMenu();
    //   });

    //   menuLateral.addEventListener('mouseleave', () => {
    //     this.hideProjectMenu();
    //     this.showPagination();
    //   });
    // }

    // if (pagination) {
    //   pagination.addEventListener('mouseenter', () => {
    //     this.hidePagination();
    //     this.showProjectMenu();
    //   });
    //   pagination.addEventListener('mouseleave', () => {
    //     this.hideProjectMenu();
    //     this.showPagination();
    //   });
    // }
  }

  initialVisibility() {
    const pagination = document.querySelector('.swiper-pagination');

    // Esconde menu lateral e paginação inicialmente
    if (pagination) pagination.style.display = 'none';
}

  destroySwiper() {
    // Verifica se o Swiper existe antes de tentar destruí-lo
    if (this.swiper !== null) {
      this.swiper.destroy(true, true);
      this.swiper = null; // Reseta a referência do Swiper
    }
  }

  // slideChange() {
  //   // Primeiro, verifica se o Swiper está definido e inicializado corretamente.
  //   if (!this.swiper || typeof this.swiper.realIndex === 'undefined') {
  //       console.log("Swiper não inicializado.");
  //       return; // Sai do método se o Swiper não estiver inicializado
  //   }

  //   const currentSlideIndex = this.swiper.realIndex;
  //   const pagination = document.querySelector('.swiper-pagination');
  //   const menuLateral = document.querySelector('.menu-lateral');

  //   // Atualiza a visibilidade do menu lateral e da paginação
  //   const displayStyle = currentSlideIndex >= 1 ? 'flex' : 'none';
  //   if (menuLateral) menuLateral.style.display = displayStyle;
  //   if (pagination) pagination.style.display = displayStyle;

  //   // Aplica a classe 'menu-white' no slide 4 ou 6
  //   const shouldApplyMenuWhite = [3, 5].includes(currentSlideIndex);
  //   if (menuLateral) menuLateral.classList.toggle('menu-white', shouldApplyMenuWhite);
  //   if (pagination) pagination.classList.toggle('menu-white', shouldApplyMenuWhite);

  //   // Remove 'active' class de todos os itens do menu
  //   document.querySelectorAll('.project-menu-item').forEach(menuItem => {
  //       menuItem.classList.remove('active');
  //   });

  //   // Se o índice do slide atual for válido
  //   const currentSlide = this.swiper.slides[currentSlideIndex];
  //   if (currentSlide) {
  //       // Obtém o valor do hash do slide atual
  //       let currentSlideHash = currentSlide.getAttribute('data-hash');
  //       // Encontra o item de menu correspondente e adiciona a classe 'active'
  //       let correspondingMenuItem = document.querySelector(`.project-menu-item[href="#${currentSlideHash}"]`);
  //       if (correspondingMenuItem) {
  //           correspondingMenuItem.classList.add('active');
  //       }
  //   } 
  // }

  slideChange() {
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
}

updateHeaderAndApplyClasses(currentSlideIndex) {
  const header = document.querySelector('.header_menu');
  const logo = header.querySelector('a > img'); // Supondo que o logo seja o primeiro <img> dentro de um <a>
  const menuLinks = header.querySelectorAll('.menu a'); // Seleciona todos os links dentro do menu

  // Verifica e manipula a visibilidade do cabeçalho
  // header.style.display = currentSlideIndex === 0 ? 'block' : 'none';

  // Remove classes anteriores para evitar conflitos
  header.classList.remove('minimal', 'dark');
  logo.classList.remove('minimal', 'dark'); // Remover classes do logo
  menuLinks.forEach(link => link.classList.remove('minimal', 'dark')); // Remover classes dos links do menu

  // Aplica a classe "minimal" a partir do slide 1
  if (currentSlideIndex >= 1) {
      header.classList.add('minimal');
      logo.classList.add('minimal'); // Adiciona a classe ao logo
      menuLinks.forEach(link => link.classList.add('minimal')); // Adiciona a classe aos links do menu
  }

  // Aplica a classe "white" nos slides 2, 3 e 5
  if ([1, 2, 4].includes(currentSlideIndex)) {
      header.classList.add('dark');
      logo.classList.add('dark'); // Adiciona a classe ao logo
      menuLinks.forEach(link => link.classList.add('dark')); // Adiciona a classe aos links do menu
  }
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

// showHeader(header) {
//     if (header) {
//         header.style.display = 'block'; // Ou a classe que você usa para mostrar
//     }
// }


  // hideProjectMenu() {
  //   const projectMenu = document.querySelector('.project-menu-hover');
  //   const pagination = document.querySelector('.pagination');

  //   if (projectMenu) {
  //     projectMenu.classList.remove('show-element');
  //     pagination.style.display = 'flex';
  //   }
  // }

  // hidePagination() {
  //   const pagination = document.querySelector('.pagination');
  //   if (pagination) {
  //     pagination.classList.remove('show-element');
  //   }
  // }

  // showPagination() {
  //   const pagination = document.querySelector('.pagination');
  //   if (pagination) {
  //     pagination.classList.add('show-element');
  //   }
  // }

  // showProjectMenu() {
  //   const projectMenu = document.querySelector('.project-menu-hover');
  //   const pagination = document.querySelector('.pagination');

  //   if (projectMenu) {
  //     projectMenu.classList.add('show-element');
  //     pagination.style.display = 'none';
  //   }
  // }
}





