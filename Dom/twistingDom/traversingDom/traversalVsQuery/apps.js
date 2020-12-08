// Traversing
// firstElementChild = header | nextElementSibling of header is ul
const ul = document.body.firstElementChild.nextElementSibling
console.log(ul)

// we can get li from ul
const firstLi = ul.firstElementChild
console.log(firstLi)

// the above method will fail when you make change to you HTML
// suppose you keep you ul in section 

// query method
const li = document.querySelector('li')
console.log(li)