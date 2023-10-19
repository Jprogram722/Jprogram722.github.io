const phraseElement = document.querySelector('#phrase');

const phrase = "Finding The Solutions In Data";

let typedPhrase = "";
let i = 0;

function getLetter(pharse, index){
    return pharse[index];
}

setInterval(() => {
    if(i < phrase.length){
        typedPhrase += getLetter(phrase, i);
        phraseElement.textContent = typedPhrase;
        i += 1;
    }
}, 100);