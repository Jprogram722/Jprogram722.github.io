/*
    Author: Jared Park
    Date: 10-17-2023
    Description: This script will target the input indicator and cause it to blink like typing on a computer
*/

// grab the input indicator element from the dom
const inputIndicator = document.querySelector('#input-indicator');

// init a visability variable called present
let present = true;

function blink() {
    if(present){
        // hide the indicator
        inputIndicator.style.visibility = 'hidden';
    }
    else{
        // show the indicator
        inputIndicator.style.visibility = '';
    }

    present = !present;
}

// have the indicator blink every 530 milliseconds
setInterval(blink, 530);
