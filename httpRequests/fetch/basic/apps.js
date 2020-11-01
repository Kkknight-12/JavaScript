// ///////
// fetch /
// //////

fetch("https://swapi.dev/api/planets/") // correct api
    .then( (response)  => {
    // response.json() returns a promise
    console.log( response );
    response.json()

    .then( (data) => {
        console.log(data)
    for (let planet of data.results) {
        console.log(planet.name);
        }
    })
})
    .catch( (err) => {
        console.log( 'SOMETHING WENT WRONG WITH FETCH!' );
        console.log(err);
});


// /////////////////////////////////////
// to run catch when page don't exist  /
// /////////////////////////////////////

fetch("https://swapi.dev/api/planets/asd") //wrong api to run .catch()
    .then( (response)  => {

    if ( response.ok ) {
        console.log( response );
        response.json()

        .then( (data) => {
            console.log(data)
        for (let planet of data.results) {
            console.log(planet.name);
            }
        })

}  else {
        console.log( 'ERROR', response.status )
    }

})

// ///////////
// new Error /
// ///////////
fetch("https://swapi.dev/api/planets/asd") //wrong api to run .catch()
    .then( (response)  => {

    if ( !response.ok ) {
        throw new Error(`Status Code Error: ${response.status}`)
    }

    console.log( response );
    response.json()

    .then( (data) => {
        console.log(data)
    for (let planet of data.results) {
        console.log(planet.name);
        }
    })  

})
// when we throw an error we have access to it in .catch()
.catch( (err) => {
        console.log( 'SOMETHING WENT WRONG WITH FETCH!' );
        console.log(err);
});