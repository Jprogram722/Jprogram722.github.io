/*
    Author: Jared Park
    Date: 10-17-2023
    Description: This script will target the catch pharse on the dom and type it out when loading the
    page
*/

// grab the phrase element from the dom
const phraseElement = document.querySelector('#phrase');

// init a phrase variable with the pharse as it's value
const phrase = "Finding The Solutions In Data";

// init a variable for how many letters have been typed and index of that letter in the string
let typedPhrase = "";
let i = 0;

// this function will grab the letter of the corrisponding index in the phrase
function getLetter(pharse, index){
    return pharse[index];
}

// sets it so that each letter is typed after every 100 milliseconds
setInterval(() => {
    if(i < phrase.length){
        typedPhrase += getLetter(phrase, i);
        phraseElement.textContent = typedPhrase;
        i += 1;
    }
}, 100);