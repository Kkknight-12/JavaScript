

const getTodos = (callBack) => {
    const request = new XMLHttpRequest();

    request.open( 'GET', 'https://jsonplaceholder.typicode.com/todos/');

    request.send();

    request.addEventListener( 'readystatechange', ()=> {
        if( request.readyState === 4 && request.status === 200 ){
            console.log( request.responseText );
        }else if( request.readyState === 4 ){ 
            console.log( 'could not fetch the data' )
        }
    })    
};

getTodos( (err, data ) => {
    console.log( 'callback fired' );

    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
})