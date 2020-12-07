const firstLi = document.querySelector('li')
console.log(firstLi)

// ////////////////
// .parentElement /
// ////////////////
console.log(firstLi.parentElement)

// you can also go back in direction to get the
// parent element of the parent
console.log(firstLi.parentElement.parentElement)

// ///////////
// .children /
// ///////////
const ul = document.querySelector('ul')
console.log(ul)
// 
console.log(ul.children)
// you can acess them as usual
console.log(ul.children[0].innerText)

// /////////////////////
// .nextElementSibling /
// /////////////////////
// sibling are on same level
// they share common parent

// sibling of first li is Second Thing li
console.log(firstLi.nextElementSibling)
console.log(ul.children[0].nextElementSibling)
// you can also get sibling of sibling
// which is third li Third Thing
console.log(firstLi.nextElementSibling.nextElementSibling);