/*
    Author: Jared Park
    Date: 10-26-2023
    Description: this script tracks the section on the page and shows them if they intersect the viewport
*/

/*
    
*/ 

// creates an observer object
const observer = new IntersectionObserver((entities) => {
    entities.forEach((entity) => {
        console.log(entity)
        // checks to see if entity intersects the viewport
        if(entity.isIntersecting){
            entity.target.classList.add('show');
        }
        else {
            entity.target.classList.remove('show');
        }
    })
})

// create a value for the hidden sections on the webpage
const hiddenSections = document.querySelectorAll('.hidden');
hiddenSections.forEach((section) => {
    // track each hidden section
    observer.observe(section)
});
