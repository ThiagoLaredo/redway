export class SubMenu {
    constructor(menuSelector) {
        this.menu = document.querySelector(menuSelector);
        this.addSubMenuClass();
    }

    addSubMenuClass() {
        const menuItems = this.menu.querySelectorAll('li');
        menuItems.forEach(item => {
            if (item.querySelector('.submenu')) {
                item.classList.add('has-submenu');
            }
        });
    }
}