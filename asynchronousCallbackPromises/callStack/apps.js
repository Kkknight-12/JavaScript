const repeat = (str, times) =>{
    let result = '';
    for (let i = 0; i < times; i++){
        result += str;
    }
    return result;
};

const scream = (text) => {
    return text.toUpperCase() + '!!!' ;
};

const getRantText = (phase) => {
    let text = scream(phase);
    let rant = repeat(text, 3);
    return rant;
};

const makeRant = (phrase, el) => {
    const h1 = document.createElement('h1');
    h1.innerText = getRantText(phrase);
    el.appendChild(h1);
};

makeRant('Chal Ja Yar', document.body);
