/*
    Author: Jared Park
    Date: 10-17-2023
    Description: This script will target the input indicator and cause it to blink like typing on a computer
*/

const inputIndicator = document.querySelector('#input-indicator');
const lightBulb = document.querySelector('#bulb');
let present = true;
let lightOn = false;

function blink() {
    if(present){
        inputIndicator.style.visibility = 'hidden';
    }
    else{
        inputIndicator.style.visibility = '';
    }

    present = !present;
}

function bulbBlink(){
    if(lightOn){
        lightBulb.style.color = '';
    }
    else{
        lightBulb.style.color = '#e9ae2e';
    }

    lightOn = !lightOn
}

setInterval(blink, 530);
setInterval(bulbBlink, 1000);
