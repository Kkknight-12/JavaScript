// a promise is an object representing the eventual 
// completion or failure of an asynchronous operation
//  you attach callbacks, instead of passing  callbacks into a function

const willGetPet = new Promise((resolve, reject) => {
    const rand = Math.random();
    if ( rand < 0.5 ) {
        resolve(); // resolve fire callback function inside .then() method.
    } else {
        reject(); // reject fire callback function inside .catch() method.
    }
});

// .then() is run each time function resolve
willGetPet.then( ()=> {
    console.log('YAY i got a pet')
})

// .catch() is run when the promise is rejected
willGetPet.catch( ()=> {
    console.log(':( no pet')
})

// 
// 
const button = document.querySelector('button');

const getPosition = ( opts ) => {
    const promise = new Promise( ( resolve, reject ) => {
        navigator.geolocation.getCurrentPosition(
            success => {
                // passing the data(success: GeolocationPosition) to resolve object
                resolve( success ); 
            },
            error => {
                reject( error ) // passing error object
            },
            // opts
        );
    });
    return promise;
}

const setTimer = ( duration ) => { // wait for 2sec from line 59
    const promise = new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            resolve( 'Done!' );
        }, duration );
    });
    return promise;
}

// chaining .then()
function trackUserHandler() {
    let positionData;
    getPosition()
    // only resolve when you are able to get position
        .then( posData => { // passed success(position data), line 33
            positionData = posData; // storing the data in poisitonData Variable
            console.log('Setting timer')
            return setTimer(2000); // wait for 2sec
        }) // we are return setTimer so .then() will now be attached to setTimer
        .then( data => { // data inside the resolve which is Done!
            console.log( data, positionData ); // finally resolving the promise
        })
        // if any of the above promsie fail catch will run
        .catch( err => {
            console.log( err )
        })
        /* 
        NOTE: 
        if any of the .then() is rejected, all .then() after
        rejected .then() will be skipped till we reach .catch()

        while positining .then(), if you position .then() after catch 
        it will run after catching the error.  
        */
    setTimer(1000).then( () => { // wait for 1sec
        console.log( 'Timer done!' )
    });
    console.log( 'Getting position...' )
}

button.addEventListener( 'click', trackUserHandler );