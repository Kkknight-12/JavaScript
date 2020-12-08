const li = document.querySelector('li')

// will give access to nearest
//  parentElement parentNode
// in almost all cases they are same, because only element node can have child node
console.log(li.parentElement)
console.log(li.parentNode)


// to access the ancestor closest is used
console.log(li.closest('ul')) // direct parent 
console.log(li.closest('body')) // indirect parent | also known as ancestor


// parent of ul is body
const ul = document.querySelector('ul')
console.log(ul.parentNode)