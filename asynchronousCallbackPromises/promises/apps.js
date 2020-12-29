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
                resolve( success ); // passing the data to resolve object
            },
            error => {},
            // opts
        );
    });
    return promise;
}

const setTimer = ( duration ) => { // wait for 2 sec from line 56
    const promise = new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            resolve( 'Done!');
        }, duration);
    });
    return promise;
}

// chainning .then()
function trackUserHandler(){
    let positionData;
    getPosition()
        .then( posData => { // passed success(position data)
            positionData = posData; // storing the data in poisitonData Variable
            return setTimer(2000); // wait for 2sec
    }) 
    .then( data => {
        console.log( data, positionData ); // finally resolving the promise
    });
    setTimer(1000).then( ()=> {
        console.log( 'Timer done!' )
    });
    console.log( 'Getting position...' )
}

button.addEventListener( 'click', trackUserHandler );