const getTodos = ( resource ) => {

    return new Promise( (resolve, reject) => {

        const request = new XMLHttpRequest();
    
        request.addEventListener( 'readystatechange', () => {
            if( request.readyState === 4 && request.status === 200 ){
                /* JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. */
                const data = JSON.parse( request.responseText );
                resolve(data);
            }else if( request.readyState === 4 ){ 
                reject( 'could not fetch the data' )
            }
        })  

        request.open( 'GET', resource );
        request.send();
    })
};

// PROMISE
// getTodos( './todos/knight.json', (err, data ) => {
//     console.log( resource )
//     console.log( data );
//     getTodos( './todos/luffy.json', (err, data ) => {
//     console.log( data );
//     });
// })

// Chaining the promises with .then() and .catch()
getTodos('./todos/knight.json')
    .then( data => {
        console.log('Promise 1 resolved:', data);
        return getTodos('./todos/luffy.json')
    })
    .then( data =>{
        console.log('Promise 2 resolved:', data);
    })
    .catch( err => {
        console.log( 'promise rejected:', err );
    })