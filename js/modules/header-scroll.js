export default class HeaderScroll {
  constructor(headerSelector) {
    this.header = document.querySelector(headerSelector);
    this.lastScrollTop = 0;
    this.scrollThreshold = 50; // ou qualquer valor que faça sentido para o seu site
  }

  handleScroll() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > this.lastScrollTop && currentScrollTop > this.scrollThreshold) {
      this.header.classList.add('header-scrolled');
    } else {
      this.header.classList.remove('header-scrolled');
    }

    this.lastScrollTop = currentScrollTop;
  }

  init() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
}




