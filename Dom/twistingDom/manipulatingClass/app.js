// /////////////////////////////////////////////
// .classlist                                  /
// it work better then setAttribute method     /
// as it allow mutiple class to work           /
// simultaneously without hardcoding the class /
// /////////////////////////////////////////////

const todo = document.querySelector('#todos .todo');
console.log(todo)

// checking the list of classes 
console.log(todo.classList)

// Methods

// add
// adding class done created in app.css
todo.classList.add('done')

// you can also add list of classes
const para = document.querySelector('p')
console.log(para)

// para.className = 'todo'
para.classList.add('todo', 'special' )
para.classList.remove('todo')

// .contains() is used to check if this is the current class
console.log(todo.classList.contains('done'))

// remove
// removing the added class
todo.classList.remove('done')

// toggle
// if a class is there remove it
// if not add it
console.log(todo.classList.toggle('done'));