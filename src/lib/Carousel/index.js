export default class Carousel {
    projectCardsDom = document.querySelectorAll(".project-card");
    leftArrowDom = document.querySelector(".left-arrow")
    rightArrowDom = document.querySelector(".right-arrow")
    currentProjectIndex = 0;
    constructor() {
        this.leftArrowDom.addEventListener("click", () => { this.prevProject() });
        this.rightArrowDom.addEventListener("click", () => { this.nextProject() });
    }
    showProject() {
        this.projectCardsDom.forEach((card, i) => {
            card.classList.toggle("active", i === this.currentProjectIndex);
        })
    }
    prevProject() {
        this.currentProjectIndex = (this.currentProjectIndex - 1 + this.projectCardsDom.length) % this.projectCardsDom.length;
        this.showProject();
    }
    nextProject() {
        this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projectCardsDom.length;
        this.showProject();
    }
}