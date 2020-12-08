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
console.log(todo.classList.add('done'))

// remove
// removing the added class
console.log(todo.classList.remove('done'));

// toggle
// if a class is there remove it
// if not add it
console.log(todo.classList.toggle('done'));
