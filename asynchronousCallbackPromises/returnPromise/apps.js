// saving promise in a function

const makePromise = () =>   {
     return new Promise( (resolve, reject) => {

        setTimeout( () => {
            const rand = Math.random();
            if ( rand < 0.5 ) {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
};

// .then() is run each time function resolve
makePromise()
.then(() => {
    console.log('YAY i got a pet');
})
// .catch() is run when the promise is rejected
.catch(() => {
    console.log(':( no pet');
}
);






