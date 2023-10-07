const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navlink-container a");

window.onscroll() = () => {
    let positionY = window.screenY;
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHieght = section.offsetHeight;
        const sectionID = section.getAttribute('id');
    })
}