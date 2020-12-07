// The Element.getElementsByTagName() method returns a 
// live HTMLCollection of elements with the given 
// tag name. All descendants of the specified element are 
// searched, but not the element itself. 

const listItemElements = document.getElementsByTagName('li')
const lastLi = document.querySelector('li:last-of-type');
lastLi.textContent = lastLi.textContent + ' adding changes'

const lasTLi = document.createElement("li");
lasTLi.textContent = 'Item 4'

const ul = document.querySelector('ul')
ul.append(lasTLi)

// getElementsByTagName will give live list which will refelcted live changes
// to the selected elements
// const listItemElements = document.getElementsByTagName('li')

for( const listItemEl of listItemElements ){
    console.dir(listItemEl.textContent)
}