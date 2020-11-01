
// 
// XML
// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener( 'load', () => {
//     console.log('IT WORKED!!!');
//     console.log(firstReq.responseText)
// });
// firstReq.addEventListener( 'error', () => {
//     console.log('ERRORRR!!!');
// });
// firstReq.open( "GET", "https://swapi.dev/api/planets/" );
// // firstReq.open( "GET", "https://swapi.dev/lkkjgfghjkapi/planets/" );
// firstReq.send();
// console.log('Request Sent!');


// 
// JSON
const firstReq = new XMLHttpRequest();
firstReq.addEventListener( 'load', () => {
    console.log('IT WORKED!!!');
    const data = JSON.parse(firstReq.responseText);
    console.log(data)

    // loop over data.result
    for(let planet of data.results){
        console.log(planet.name)
    }
});
firstReq.addEventListener( 'error', () => {
    console.log('ERRORRR!!!');
});
firstReq.open( "GET", "https://swapi.dev/api/planets/" );
// firstReq.open( "GET", "https://swapi.dev/lkkjgfghjkapi/planets/" );
firstReq.send();
console.log('Request Sent!');














