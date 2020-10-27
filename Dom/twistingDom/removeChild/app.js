
// selecting ul which is inside section
const ul = document.querySelector('section ul')

// seleting ul with classs of special
const removeMe = ul.querySelector('.special');
console.log(removeMe);

// //////////////////////////////////
// parentElement.removeChild(child) /
// //////////////////////////////////


// removing the child
// ul.removeChild(removeMe)
// it can be saved in variable to check/print the 
// removed child
const deleted = ul.removeChild(removeMe)
// checking/print deleted child
console.log(deleted)


// ///////////////////////////////////////////
// childNode.remove()                        /
// remove object from the tree it belongs to /
// ///////////////////////////////////////////

const ul1 = document.querySelectorAll('ul li')[0]
console.log(ul1);

// parentElement is not need 
const rem = ul1.remove()
// print the rem give undefined output
console.log(rem)

// removing first heading 
document.querySelector('h1').remove();














