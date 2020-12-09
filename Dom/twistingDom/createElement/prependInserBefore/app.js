// selecting first li with class todo
const firstLi = document.querySelector('li.todo')
// console.log(firstLi)

// selecting ul element
const parentUL = document.querySelector('ul');

// creating element to insert
const newLi = document.createElement('li');

// adding text to it
newLi.innerText = 'New Li with insertBefore'

// ////////////////////////////////////////
// inserting the new first li             /
// parent you want to insert, tag u  want /
// to insert, element before which you    /
// want to insert                         /
// ////////////////////////////////////////
parentUL.insertBefore(newLi, firstLi);

// 
// inserting before last li
const allLi =  document.querySelectorAll('li.todo')
const lastLi  = (allLi)[3]
// console.log(lastLi)

// creating element to insert
const secLastLi = document.createElement('li');

// adding text to it
secLastLi.innerText = 'Second last Li with insertBefore'

parentUL.insertBefore(secLastLi, lastLi);

// before and after
// before will move the element from old to new place
const inbf = document.querySelector('#ulTwo')
const ls = document.createElement('li');
ls.innerText = 'last thing'
// append will add the list to the end
inbf.append(ls)
const lsth = inbf.querySelectorAll('li')[1]
// element before which you want to move the element | element you want to move
lsth.before(ls)
// after work same

// replaceWith will replace the old element with new one
const newl = 'new last one'
ls.replaceWith(newl)


// ////////////////////////////////////////
// .insertAdjacentElement                 /
// targetElement.insertAdjacentElement    /
// (position, element);                   /
// it will insert given element at given  /
// position relative to element it is     /
//  invoked upon                          /
// ////////////////////////////////////////

// position =>  beforebegin | afterbegin | beforeend | afterend

// beforebegin
// before the targetElement
const i1 = document.createElement('b')
i1.innerText = 'beforebegin | adding before the para |'
// selecting paragraph
const firstP = document.querySelector('p')
// adding element to paragraph
firstP.insertAdjacentElement('beforebegin', i1)

// afterbegin
// inside targetElement, before its
// its first child 
const i2 = document.createElement('b')
i2.innerText = 'afterbegin | add inside target element before begnining of its first child |'
// adding element to paragraph
firstP.insertAdjacentElement('afterbegin', i2)


// beforeend 
// just inside targetElement, after its last 
// child
const i3 = document.createElement('b')
i3.innerText = 'beforeend | add inside targetElement, after its last child |'
// adding element to paragraph
firstP.insertAdjacentElement('beforeend', i3)


// afterend
// after targetElement itself
const i4 = document.createElement('b')
i4.innerText = 'beforeend | add after targetElement itself |'
// adding element to paragraph
firstP.insertAdjacentElement('afterend', i4)


// 
// apend - add at end
// prepend - add at begning
// parentElement.append(element)

// creating element to insert
const newLi2 = document.createElement('li');

// adding text to it
newLi2.innerText = 'New Li2 append'

// selecting paragraph
const secondP = document.querySelectorAll('p')[1];
// console.log(secondP.innerText);
secondP.append(newLi2)

// creating element to insert
const newLi3 = document.createElement('li');

// adding text to it
newLi3.innerText = 'New Li3 prepend'
// console.log(secondP.innerText);
secondP.prepend(newLi3);