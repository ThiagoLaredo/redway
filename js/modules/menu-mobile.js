import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(logoMobile, menuButton, menuList, contatoMobile, linkedinMobile, events) {
    this.logoMobile = document.querySelector(logoMobile);
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.contatoMobile = document.querySelector(contatoMobile);
    this.linkedinMobile = document.querySelector(linkedinMobile);
    this.activeClass = "active";

    // define touchstart e click como argumento padrão
    // de events caso o usuário não define
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }

 isMobile() {
    // Essa função verifica se o usuário está em um dispositivo móvel
    // Pode ser ajustada para usar uma verificação mais sofisticada
    return window.innerWidth <= 800; // Exemplo de breakpoint para mobile
  }

  openMenu(event) {
    event.preventDefault();
    this.logoMobile.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    this.contatoMobile.classList.add(this.activeClass);
    this.linkedinMobile.classList.add(this.activeClass);

    this.animateElementsSequentially();


    outsideClick(this.menuList, this.events, () => {
    this.closeMenu();
    });
  }

  closeMenu(event) {
    this.logoMobile.classList.remove(this.activeClass);
    this.menuList.classList.remove(this.activeClass);
    this.menuButton.classList.remove(this.activeClass);
    this.contatoMobile.classList.remove(this.activeClass);
    this.linkedinMobile.classList.remove(this.activeClass);

  }


  addMenuMobileEvents() {
    this.events.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
    this.menuList.addEventListener('click', (event) => {
      console.log('Menu list item clicked');
      this.closeMenu();
    });
  }

  addLinkClickEvents() {
    const links = this.menuList.querySelectorAll('a'); // Seleciona todos os links no menu
    links.forEach(link => {
    link.addEventListener('click', (event) => {
      // Checa se está em um dispositivo móvel
      if (this.isMobile()) {
        event.preventDefault(); // Previne a navegação padrão apenas em dispositivos móveis
        this.menuList.classList.remove(this.activeClass); // Fecha o menu
        this.menuButton.classList.remove(this.activeClass); // Altera o botão do menu para o estado não ativo

         // Extrai o ID do href do link para mobile ou desktop
         const modifiedTargetId = `mobile-${link.getAttribute('href').substring(1)}`;
         const targetSection = document.getElementById(modifiedTargetId);

        if (targetSection) {
          // Calcula o offsetTop considerando a altura de um possível cabeçalho fixo
          const offsetTop = targetSection.offsetTop - (document.querySelector('.header')?.offsetHeight || 0);
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      } // Não é necessário um else, pois a navegação padrão do Swiper em desktop deve funcionar
    });
  });
}

animateElementsSequentially() {
  const elementsToAnimate = [
    ...this.menuList.querySelectorAll('li'),
    this.contatoMobile,
    this.linkedinMobile
  ];

  elementsToAnimate.forEach((element, index) => {
    // Defina a duração da animação e o delay baseado na posição do elemento na sequência
    element.style.animation = `fadeIn 0.5s forwards ${index * 0.3}s`;
  });
}

  init() {
    if (this.logoMobile && this.menuButton && this.menuList  && this.contatoMobile && this.linkedinMobile) {
      this.addMenuMobileEvents();
      this.addLinkClickEvents(); 
    }
    return this;
  }
}


