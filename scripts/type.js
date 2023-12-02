/*
    Author: Jared Park
    Date: 10-17-2023
    Description: This script will target the catch pharse on the dom and type it out when loading the
    page
*/

// grab the input indicator element from the dom
const inputIndicator = document.querySelector('#input-indicator');

// grab the phrase element from the dom
const phraseElement = document.querySelector('#phrase');

// init a phrase variable with the pharse as it's value
const phrase = "Finding The Solutions In Data";

// init a variable for how many letters have been typed and index of that letter in the string
let typedPhrase = "";
let i = 0;
let present = true;

// this function will grab the letter of the corrisponding index in the phrase
function getLetter(pharse, index){
    return pharse[index];
}

function typeLetter() {
    if(i < phrase.length){
        // gets a letter
        typedPhrase += getLetter(phrase, i);
        // types the letter in to html
        phraseElement.textContent = typedPhrase;
        i += 1;
    }
    else{

        // stops the interval for typing
        clearInterval(typeInterval);

        // sets it so that the cursor blinks after every 530 milliseconds
        setInterval(blink, 530);
    }
}

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

// sets it so that each letter is typed after every 100 milliseconds
let typeInterval = setInterval(typeLetter, 100);
