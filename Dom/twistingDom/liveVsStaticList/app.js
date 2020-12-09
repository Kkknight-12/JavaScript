const ul = document.querySelector('ul');
// const li = document.createElement('li')

const listItems = ul.querySelectorAll('li') 
console.log(listItems)

// creating static list
const listItems2 = ul.getElementsByTagName('li');
console.log(listItems2)

// creating new li
const newLi = document.createElement('li')
newLi.innerHTML = 'Item 4'

ul.appendChild(newLi)

// 
// static list
// querySelectorAll take snapshot of Dom
console.log(listItems) 

// live list
// getElementsByTagName create a live list which
// addition will show you most recent 
console.log(listItems2) 

// getElementBy will always gives array like object 
// with live list which will change with the items you 
//  queried in past change