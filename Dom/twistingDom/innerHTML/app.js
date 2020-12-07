// output will show everything inside the html
// 

const form = document.querySelector('form')
console.log(form.innerHTML)

const ul = document.querySelector('ul')
console.log(ul.innerHTML)

// changing the inner element of HTML
form.innerHTML  = "<b> I am bold Tag</b>"
//  checking form again for updates
console.log(form.innerHTML);

// 
// adding with +=
const h1 = document.querySelector('h1')
console.log(h1.innerHTML)
// adding
console.log(h1.innerHTML+=' is Awesome')

// adding html tag with +=
console.log(h1.innerHTML+=' <b>!!!</b>');