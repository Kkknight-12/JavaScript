// ****************
// querySelector
// ****************
// To find the first li on the page:
// two li elements are there
// querySelector will select first element
const liList = document.querySelector('li');
console.log(liList);

// 
// selecting class with dot
// To find the first element with class of special:
const splClass = document.querySelector('.special');
console.log(splClass)

// 
// selecting id with #
//To find the first element with id of main (there should only be one...)
const idMain = document.querySelector('#main');
console.log(idMain);

// To find the first li with the class of special, nested inside of a ul, nested inside a section:
const nstd = document.querySelector('section ul li.special');
console.log(nstd) //  <li class="special"></li>

// querySelector inside querySelector
const ul = document.querySelector('ul');
console.log(ul.querySelector('li'))

// 
// searching for child node with 
// getElementById // only getElement which can be used
// then querySelector -> can only use querySelector
// for id and class
const n = document.getElementById('unOrd-list')
console.log(n) // <ul id="unOrd-list"> <ul>
console.dir(n.querySelector('li#carrot')) // li#carrot
console.dir(n.querySelector('.special')) // li.special


// 
// css atribute selector syntax
const inp = document.querySelector('input[type="password"]')
console.log(inp);

const sp = document.querySelector('section ul li:first-of-type')
console.log(sp) // <li id="carrot">Carrots</li>

// ****************
// querySelectorAll
// ****************

// To find ALL li's on the page:
const ALLli = document.querySelectorAll('li');
console.log(ALLli)

// To find ALL elements with the class of special on the page:
const ALLspecial = document.querySelectorAll('.special');
console.log(ALLspecial);

console.log(ALLspecial[0])
console.log(ALLspecial.length)

