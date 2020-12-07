// class name is not common so output is not unique 
// To select all elements with the class of 'special':
document.getElementsByClassName('special');

// getElementsByClassName also returns an array-like object.
// We don't have access to array methods, but we can iterate:
const specials = document.getElementsByClassName('special');
console.log(specials)

// for loop can be used to itter over the li
for (let el of specials) {
  console.log(el);
}
// or
console.log(specials[0])

//We can use spread to make an actual array:
const arr = [...specials];
arr.pop() //this works because it's now an array!

// Targeting a specific class
// first traget the element
const ulList = document.getElementsByTagName('ul');
// you will get two ul elements
console.log(ulList)

// selecting the first ul element
const ul = document.getElementsByTagName('ul')[0];
// selecting the ul element of class 'special'
const ulSpecial = ul.getElementsByClassName('special')
console.log(ulSpecial);


