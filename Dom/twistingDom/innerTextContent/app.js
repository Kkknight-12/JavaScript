// reading inner text of html
const h1 = document.querySelector('h1');
console.log(h1.innerText)

// selecting ul text
const ul = document.querySelector('ul');
console.log(ul.innerText)

// updating the inner text
// updating h1 innertext
h1.innerText ='Dom manipulation is good'

// 
console.log('-------------')
console.log('ID Main')
console.log((document.querySelector('#main')).innerText)


// printing all the text in body element
console.log('-------------')
console.log((document.body.innerText));