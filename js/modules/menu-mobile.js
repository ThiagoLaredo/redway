import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "active";

    // define touchstart e click como argumento padrão
    // de events caso o usuário não define
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
  }

  addLinkClickEvents() {
    const links = this.menuList.querySelectorAll('a'); // Seleciona todos os links no menu
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Previne a navegação padrão
        this.menuList.classList.remove(this.activeClass); // Fecha o menu
        this.menuButton.classList.remove(this.activeClass); // Altera o botão do menu para o estado não ativo
  
        // Extrai o ID do href do link
        const targetId = link.getAttribute('href').substring(1); // Remove o '#'
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          // Calcula o offsetTop considerando a altura de um possível cabeçalho fixo
          const offsetTop = targetSection.offsetTop - (document.querySelector('.header')?.offsetHeight || 0);
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  
  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
      this.addLinkClickEvents(); 
    }
    return this;
  }
}


