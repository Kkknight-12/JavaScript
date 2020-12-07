// ****************
// querySelector
// ****************
//To find the first li on the page:
// two li elements are there
// querySelector will select first element
const liList = document.querySelector('li');
console.log(liList);

// 
// selecting class with dot
//To find the first element with class of special:
const splClass = document.querySelector('.special');
console.log(splClass)

// 
// selecting id with #
//To find the first element with id of main (there should only be one...)
const idMain = document.querySelector('#main');
console.log(idMain);

// To find the first li with the class of special, nested inside of a ul, nested inside a section:
const nstd = document.querySelector('section ul li.special');
console.log(nstd)

// 
// css atribute selector syntax
const inp = document.querySelector('input[type="password"]')
console.log(inp);

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