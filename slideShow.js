/*
    Author: Jared Park
    Date: 11-09-2023
    Description: This script toggle which project is visable on the page
*/

// grabs all of the project card containers
const projects = document.querySelectorAll('.hiddenSlide');
const cardNums = document.querySelectorAll('.card-number');

// sets the initial index to 0
let projectIndex = 0;

// shows the project
showProject(projectIndex);

function addIndex(){
    // increments project index
    ++projectIndex;

    // checks to see project index is greater than the last element
    if(projectIndex > projects.length - 1){
        // resets project index
        projectIndex = 0;
    }
    showProject(projectIndex);
}

function subIndex(){
    // decrements project index
    --projectIndex;
    // checks to see if project index is less then 0
    if(projectIndex < 0){
        // makes project index the last element in the list
        projectIndex = projects.length - 1;
    }
    showProject(projectIndex);
}

function showProject(n){
    cardNums.forEach((cardNum) => {
        cardNum.style.display = 'none';
    })

    // sets all projects to have a display of none
    projects.forEach((project) => {
        project.classList.remove('down');
        project.style.display = 'none';
    })
    // for the current projectIndex n display the project
    projects[n].classList.add("down");
    projects[n].style.display = 'block';
    cardNums[n].style.display = 'block';
    cardNums[n].textContent = `${n + 1}/${projects.length}`
}