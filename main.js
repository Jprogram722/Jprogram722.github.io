/**
 * Auhtor: Jared Park
 */

function removeActiveClass() {
    navLinks.forEach((navLink) => {
        console.log(navLink.classList);
        navLink.classList.remove("active");
    })
}

function addActiveClass(entries, observer) {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            removeActiveClass();
            document.querySelector("a[href*='#"+entry.target.id+"']").classList.add('active');
        }
    })
}

const options = {
    threshold: 0.8,
};

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navlinks');
console.log(navLinks);

const observer = new IntersectionObserver(addActiveClass, options);

sections.forEach((section) => {
    observer.observe(section);
})