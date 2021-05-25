// Await Keyword
// we can only use the await keyword inside  of function declared
// with async.
// await will pause the execution of function, 
// waiting for a promise to be resolved.
// await work only inside async function

// 
const getTodos = async () =>{
    const response = await fetch("../promise/todos.json")
    const data = await response.json(); // reposne.json return promise so need to await
    // console.log(data)
    return data
}
getTodos().then( ( data ) => console.log( "resposne:", data))


async function geTPlanets(){
   return axios.get("https://swapi.dev/api/planets/")

} 
geTPlanets().then( (res) => {
    console.log(res.data);
})

// 
async function getPlanets() {
    // await function wait till the promsie is resolevd
    const res = await axios.get("https://swapi.dev/api/planets/")
    console.log(res.data)
}
getPlanets()

// 
// 
function resolveAfter2Seconds() {
  res =  new Promise( resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
  return res;
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();

// ///////
const button = document.querySelector('button');

const getPosition = ( opts ) => {
    const promise = new Promise( ( resolve, reject ) => {
        navigator.geolocation.getCurrentPosition(
            success => {
                resolve( success ); 
            },
            error => {
                reject( error ) 
            },
            // opts
        );
    });
    return promise;
}

const setTimer = ( duration ) => { 
    const promise = new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            resolve( 'Done!' );
        }, duration );
    });
    return promise;
}

/* 
async allow us to ommit .then() and .catch() method and make your code look more like 
async code. you can use Async await only in functions which you enable it by writting async keyword in front of your function keyword, on expression you write in front of your equal sign 
const setTimer = async ( duration ) => { }

with async in front of funciton automatically returns  promise
 */
async function trackUserHandler() {
    // let positionData;
    // getPosition();
    let posData,
    timerData;
    /* 
    now you have access to await keyword which you can 
    write in front of any promise 
    only when the first promise is resolved the other promsie will execute 
    
    getPosition and setTimer are part of trackUserHandler's one big promise
    */
    try {
        posData = await getPosition();
        timerData = await setTimer(2000);
    } 
    catch(error) {
        console.log(error);
    }
    console.log(timerData, posData)
        // .then( posData => { 
        //     positionData = posData; 
        //     console.log('Setting timer')
        //     return setTimer(2000); 
        // }) 
        // .then( data => { 
        //     console.log( data, positionData ); 
        // })
        // .catch( err => {
        //     console.log( err )
        // }) 
    // setTimer(1000).then( () => { 
    //     console.log( 'Timer done!' )
    // });
    console.log( 'Getting position...' )
}
button.addEventListener( 'click', trackUserHandler );


