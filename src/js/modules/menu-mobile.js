import gsap from "gsap";

export default class MenuMobile {
  constructor(logoMobile, menuButton, menuList, contatoMobile, linkedinMobile, events) {
    this.logoMobile = document.querySelector(logoMobile);
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.contatoMobile = document.querySelector(contatoMobile);
    this.linkedinMobile = document.querySelector(linkedinMobile);
    this.activeClass = "active";
    this.events = events || ["click"];
    this.menuOpened = false; // Flag para controle de estado
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  isMobile() {
    return window.innerWidth <= 800; // Exemplo de breakpoint para mobile
  }

  openMenu(event) {
    if (this.isMobile()) {
      event.stopPropagation(); // Impede a propagação do evento para o documento apenas em mobile
      console.log('Menu button clicked on mobile');
      
      if (this.menuOpened) {
        console.log('Menu already opened, closing menu now');
        this.closeMenu();
      } else {
        console.log('Opening menu on mobile');
        this.menuOpened = true;
        this.menuList.classList.add(this.activeClass);
        this.menuButton.classList.add(this.activeClass);
        this.contatoMobile.classList.add(this.activeClass);
        this.linkedinMobile.classList.add(this.activeClass);
        this.animateMenuItems();
        this.toggleMenuAnimation(true);
      }
    }
  }
  
  closeMenu() {
    if (this.isMobile()) {
      console.log('Closing menu on mobile');
      this.menuOpened = false;
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
      this.contatoMobile.classList.remove(this.activeClass);
      this.linkedinMobile.classList.remove(this.activeClass);
      this.toggleMenuAnimation(false);
    }
  }
  

  addMenuMobileEvents() {
    this.menuButton.addEventListener('click', this.openMenu);
  
    // Fechar o menu quando um item do menuList é clicado
    this.menuList.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {  // Garante que o menu feche apenas quando os links são clicados
        console.log('Menu list item clicked');
        this.closeMenu();
      }
    });
  }

  addLinkClickEvents() {
    // Seleciona todos os links no menu
    const links = this.menuList.querySelectorAll('a');
    // Adiciona os eventos aos links do menu
    links.forEach(link => this.addLinkEventListener(link));

    // Seleciona o link da frase de destaque do banner e adiciona o evento
    const highlightLink = document.querySelector('.sublinhado');
    if (highlightLink) {
      this.addLinkEventListener(highlightLink);
    }
  }

  // Função para adicionar evento de clique a um link
  addLinkEventListener(link) {
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
      } // Não é necessário um else, pois a navegação padrão em desktop deve funcionar
    });
  }

  animateMenuItems() {
    // Seleciona todos os itens do menu principal que você deseja animar
    const menuItems = document.querySelectorAll('.menu li');
    const totalItems = menuItems.length + 2; // +2 para email e Instagram

    // Animação para cada item do menu principal
    menuItems.forEach((item, index) => {
      gsap.fromTo(item, 
        { opacity: 0, y: 10 }, 
        { opacity: 1, y: 0, duration: 0.5, ease: "power1.out", delay: 0.1 + index * 0.1,
          onComplete: function() {
            gsap.set(item, { clearProps: "all" }); // Limpa os estilos aplicados pela animação
          }
        }
      );
    });

    // Animação para o email e Instagram com delay baseado no último item do menu
    gsap.fromTo(this.contatoMobile, 
      { opacity: 0, y: 10 }, 
      { opacity: 1, y: 0, duration: 0.5, ease: "power1.out", delay: 0.1 + menuItems.length * 0.1,
        onComplete: () => console.log('Email animation complete')
      }
    );

    gsap.fromTo( this.linkedinMobile, 
      { opacity: 0, y: 10 }, 
      { opacity: 1, y: 0, duration: 0.5, ease: "power1.out", delay: 0.1 + (menuItems.length + 1) * 0.1,
        onComplete: () => console.log('Instagram animation complete')
      }
    );
  }

  toggleMenuAnimation(show) {
    const menuList = document.querySelector('.js [data-menu="list"]');
    if (show) {
      gsap.to(menuList, {
        duration: 0.5,
        opacity: 1,
        visibility: 'visible',
        ease: 'power1.inOut',
        onStart: function() {
          menuList.style.display = 'flex'; // Mude para flex para iniciar a animação
        }
      });
    } else {
      gsap.to(menuList, {
        duration: 0.5,
        opacity: 0,
        visibility: 'hidden',
        ease: 'power1.inOut',
        onComplete: function() {
          menuList.style.display = 'none'; // Esconde novamente após animar
        }
      });
    }
  }

  init() {
    if (this.logoMobile && this.menuButton && this.menuList  && this.contatoMobile && this.linkedinMobile) {
      this.addMenuMobileEvents();
      this.addLinkClickEvents(); 
    }
    return this;
  }
}

