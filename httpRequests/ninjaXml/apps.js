const request = new XMLHttpRequest();

// request.addEventListener( 'readystatechange', ()=> {
//     console.log( request, request.readyState );
// } )

// make request with .open() method
// take two argument
// first argument is type of request you are sending-> GET, POST, 
// Sec argument is where you want to send reqeust
request.open( 'GET', 'https://jsonplaceholder.typicode.com/todoss/');

// to send the request you need .send()
request.send();

// you can traack the progress with event listner
// with specific event readystatechange
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
request.addEventListener( 'readystatechange', ()=> {
    // console.log( request, request.readyState );
    if( request.readyState === 4 && request.status === 200 ){
        console.log( request.responseText );
    }else if( request.readyState === 4 ){ // trigger when status is not 200
        console.log( 'could not fetch the data' )
    }
} )
// if you call the event listner before open you can see request 1