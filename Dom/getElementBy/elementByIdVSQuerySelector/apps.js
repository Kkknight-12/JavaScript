// The Element.getElementsByTagName() method returns a 
// live HTMLCollection of elements with the given 
// tag name. All descendants of the specified element are 
// searched, but not the element itself. 

const listItemElements = document.getElementsByTagName('li')
const lastLi = document.querySelector('li:last-of-type'); // last element is 3rd elements
lastLi.textContent = lastLi.textContent + ' adding changes'

const lasTLi = document.createElement("li"); // creating 4th element
lasTLi.textContent = 'Item 4' // adding text

// getElementsByTagName can't be used to select ul
const ul = document.querySelector('ul') 
ul.append(lasTLi)

// getElementsByTagName will give live list which will refelcted live changes
// to the selected elements
// const listItemElements = document.getElementsByTagName('li')

for( const listItemEl of listItemElements ){
    console.dir(listItemEl.textContent)
}

