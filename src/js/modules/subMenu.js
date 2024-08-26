// export class SubMenu {
//     constructor(menuSelector) {
//         this.menu = document.querySelector(menuSelector);
//         this.addHoverEffect();
//     }

//     addHoverEffect() {
//         // Encontra todos os itens de menu com submenu
//         const menuItems = this.menu.querySelectorAll('.has-submenu');

//         menuItems.forEach(item => {
//             item.addEventListener('click', (event) => this.redirectToServicePage(event, item));
//         });
//     }

//     redirectToServicePage(event, item) {
//         const link = item.querySelector('a');
//         if (link) {
//             window.location.href = link.href;
//         }
//     }
// }

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
