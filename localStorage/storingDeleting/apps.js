// /////////////////////
// getItem and setItem /
// /////////////////////

// store data in local( browser) storage
/* 
eveything stored in local storage is a string */
localStorage.setItem( 'name', 'Luffy' );
localStorage.setItem( 'age', 6 ); // 6 will be saved as string


// get data from local storage
let name = localStorage.getItem('name');
console.log(name)


// updating data
// it will look for key name and update its key value
// if it don't find any key, it will create a new key
localStorage.setItem('name', 'Knight');

name = localStorage.getItem('name');
console.log(name)

// updating item using dot notation
localStorage.age = '2'; // will overwrite the age

let age = localStorage.getItem('age');
console.log(age)


// ///////////////
// Deleting      /
// .removeItem() /
// ///////////////

localStorage.removeItem('name');
name = localStorage.getItem('name');
console.log(name) // when no item is found null value is returned


// //////////////////
// delete all items /
// .clear()
// /////////////////

localStorage.clear();
age = localStorage.getItem('age');
console.log(name, age)

// after removing the key you need to call again getItem() to get 
// update output

// ////

const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';
const todos = [
    {breakfast: ' waffles', popularity: 3 },
    { breakfast: 'sandwiches', popularity: 4},
    { breakfast: 'becon', popularity: 2}
]

storeBtn.addEventListener('click', ()=> {
    localStorage.setItem( 'UserId', userId ),
    localStorage.setItem( 'todos', JSON.stringify(todos) );
})

retrBtn.addEventListener( 'click', ()=> {
    const extractedId = localStorage.getItem('UserId');
    const extractedTodos = JSON.parse(localStorage.getItem('todos'));
    console.log('Got - ' + extractedTodos[0].breakfast )
    if(extractedId){
        console.log('Got - ' + extractedId );
        // console.log('Got -' + extractedTodos );
    } else {
        console.log('Could not find')
    }
})

/* 
but data stored in local storage can be easily manupulated, deleted
. User can delete it and Browser can also delete if it is running out of disk space */