// a promise is an object representing the eventual 
// completion or failure of an asynchronous operation
//  you attach callbacks, instead of passing  callbacks into a function

const willGetPet = new Promise((resolve, reject) => {
    const rand = Math.random();
    if ( rand < 0.5 ) {
        resolve();
    } else {
        reject();
    }
});

// .then() is run each time function resolve
willGetPet.then(()=> {
    console.log('YAY i got a pet')
})

// .catch() is run when the promise is rejected
willGetPet.catch(()=> {
    console.log(':( no pet')
})