// async function returns a promise

const getTodos = async () => {

    const response = await fetch('../todos/zoro.json')

    if( response.status !== 200 ){
        /* when we pass the wrong path in fetch
        it still resolve so to catch error we 
        pass this extra step*/
        // error will pass to .catch()
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();

    return data;
}

getTodos()
    .then( data => { console.log( 'resolved:', data ) })
    .catch( err => { alert( `rejected ${err.message}` ) });