// elements on same level (neither child nor parent)
// are called siblings

const ul = document.querySelector('ul')

// previousSibling
// in our HTML file in front of ul we have 
// excess whitespace and line break after header
// this is what we are selecting with previous sibling
console.log(ul.previousSibling)

// previousElementSibling is used when
// you want to reach out to the header which is our element node
console.log(ul.previousElementSibling)


// nextSibling which is text node
console.log(ul.nextSibling)

// next element sibling
console.log(ul.nextElementSibling)
