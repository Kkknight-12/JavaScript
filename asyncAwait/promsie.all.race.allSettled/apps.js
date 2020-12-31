// Parallel Request

async function get3Pokemon() {
    const prom1 =  axios.get("https://pokeapi.co/api/v2/pokemon/1")
    const prom2 =  axios.get("https://pokeapi.co/api/v2/pokemon/2")
    const prom3 =  axios.get("https://pokeapi.co/api/v2/pokemon/3")
    const results = await Promise.all( [prom1, prom2, prom3] );
    console.log(results);
    // printPokemon will run only when all the promise above have been resolved
    printPokemon(results)
    
}

function printPokemon( results ) {
    for (let pokemon of results) {
        console.log(pokemon.data.name)
    }
}
get3Pokemon()

// 
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
async function trackUserHandler() {
    let posData,
    timerData;
    try {
        posData = await getPosition();
        timerData = await setTimer(1000);
    } 
    catch(error) {
        console.log(error);
    }
    console.log(timerData, posData)
    console.log( 'Getting position...' )
}

button.addEventListener( 'click', trackUserHandler );


// .race() compare the two promise and return the 
// one that perform faster then the other
Promise.race( [getPosition(), setTimer(1000)])
    .then( data => {
        console.log(data)
})

// either all promise run or it fail
// promise.all returns an list
// all promises run and the combined data is returned
Promise.all( [getPosition(), setTimer(1000)] )
    .then( promiseData => { 
        console.log(promiseData)
})
/* 
if one of the promise fail then other promises are not executed 
so to get the output all promises must resolve.
But for rejection, even if one promise reject other
promises listed after it are not excuted and we just get
the error, which we can handle with catch block.
*/

/* 
provide more detailed output as
execution does't stop of other promises 
if a promise is rejected instead it run all of them
and then give detailed summary of which promise fail
and which succeed */
Promise.allSettled([getPosition(), setTimer(1000)] )
    .then( promiseData => { 
        console.log(promiseData)
})