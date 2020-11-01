
// 
// JSON
// looping inside data 

const firstReq = new XMLHttpRequest();
firstReq.addEventListener( 'load', () => {
    console.log('IT WORKED!!!');
    const data = JSON.parse(firstReq.responseText);
    console.log(data);
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


// ///////////////////////////
// sending multiple request  /
// //////////////////////////
const secReq = new XMLHttpRequest();
secReq.addEventListener( 'load', () => {
    console.log('FIRST REQUEST WORKED!!!');
    const data = JSON.parse(secReq.responseText);
    // this will also work 
    // as it will take value before . which is secReq
    // but u have to change from arrow to tradiion function () { }
    // const data = JSON.parse(this.responseText);
    console.log(data);
    const filmURL = data.results[0].films[0];

    // send a new request to to above filmURL
    const filmReq = new XMLHttpRequest();
    filmReq.addEventListener('load', function () {
        console.log('SECOND REQUEST WORKED!!!');
        const filmData = JSON.parse(this.responseText);
        console.log(filmData)
    } );

    filmReq.addEventListener('error', function () {
        console.log('ERROR', e);
    })

    // open request with .open("GET")
    filmReq.open('GET', filmURL);
    filmReq.send();

});
secReq.addEventListener( 'error', () => {
    console.log('ERRORRR!!!');
});
secReq.open( "GET", "https://swapi.dev/api/planets/" );
// secReq.open( "GET", "https://swapi.dev/lkkjgfghjkapi/planets/" );
secReq.send();
console.log('Request Sent!');
