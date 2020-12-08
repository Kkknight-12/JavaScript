const ul = document.querySelector('ul');

// child node -> Returns a live NodeList containing all the children 
// of this node (including elements, text and comments).
// give html array like object
// support looping
console.log(ul.children)
console.log(ul.children[1])

// child element node
console.log(ul.childNodes)

// child node
console.log(ul.lastChild) 

// child element node
console.log(ul.lastElementChild)
