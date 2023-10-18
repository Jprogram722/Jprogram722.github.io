/*
    Author: Jared Park
    Date: 10-17-2023
    Description: This script will target the input indicator and cause it to blink like typing on a computer
*/

const inputIndicator = document.querySelector('#input-indicator');
let present = true;

function blink() {
    if(present){
        inputIndicator.style.visibility = 'hidden';
    }
    else{
        inputIndicator.style.visibility = '';
    }

    present = !present;
}

setInterval(blink, 530);
