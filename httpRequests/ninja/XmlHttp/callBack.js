const getTodos = (callBack) => {
    const request = new XMLHttpRequest();

    request.open( 'GET', 'https://jsonplaceholder.typicode.com/todos/' );

    request.send();

    request.addEventListener( 'readystatechange', ()=> {
        if( request.readyState === 4 && request.status === 200 ){
            /* JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. */
            const data = JSON.parse( request.responseText );
            callBack( undefined, data );
        }else if( request.readyState === 4 ){ 
            callBack( 'could not fetch the data', undefined )
        }
    })    
};

/* 
we're going to take in two parameters(error, data) into this callback function.
Convention is when we do callbacks like this from a network request.
We always do the error first then the data second.
*/
getTodos( (err, data ) => {
    console.log( 'callback fired' );

    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
})