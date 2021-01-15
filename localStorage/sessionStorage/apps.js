// repplace localStorage with sessionStorage 
const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';
const user = {
   name: 'knight',
   age: 30
}

storeBtn.addEventListener('click', ()=> {
    sessionStorage.setItem( 'UserId', userId ),
    localStorage.setItem( 'todos', JSON.stringify(user) );
})

retrBtn.addEventListener( 'click', ()=> {
    const extractedId = sessionStorage.getItem('UserId');
    const extractedUser = JSON.parse(localStorage.getItem('user'));
    console.log('Got - ' + extractedUser )
    if(extractedId){
        console.log('Got - ' + extractedId );
        // console.log('Got -' + extractedTodos );
    } else {
        console.log('Could not find')
    }
})

/* 
session storage expire as soon as you open a new tab
while local storage stays as long as you dont delete it or
memory is not full.
*/