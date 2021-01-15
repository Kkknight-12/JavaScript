const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';

// create a data base or open a connection to existing one
const dbRequest = indexedDB.open( 'StorageDummy', 1 );
// the above open method will return a reqeust
// on which you can add two event handler 
// or onsucess/ onerror which will point at a function



storeBtn.addEventListener('click', ()=> {
   
})

retrBtn.addEventListener( 'click', ()=> {
    
})
