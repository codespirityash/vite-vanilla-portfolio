export default class Menu {
    menuToggle = document.getElementById("menu-toggle");
    navMenu = document.getElementById("nav-menu");

    constructor() {
        this.menuToggle.addEventListener("click", () => {
            this.navMenu.classList.toggle("active");
        });
    }
}