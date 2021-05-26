// Example 1
// const ninjaPromise = new Promise( (resolve, reject) => {
// //   resolve("Hattori");
//   reject("An error resolving a promise!");
// });

// ninjaPromise
//     .then(ninja => {
//         console.log(ninja);
//     }, err => {
//         console.log("There shouldn't be an error")
//     });


// Example 2
// console.log("1 At code start");

// var ninjaDelayedPromise = new Promise((resolve, reject) => {

//   console.log("2 ninjaDelayedPromise executor");
  
//   setTimeout( () => {
//     console.log("7 Resolving ninjaDelayedPromise");
//     resolve("Hattori");
//   }, 500);

// });

// if(ninjaDelayedPromise !== null){
//     console.log("3 After creating ninjaDelayedPromise");
// }

// ninjaDelayedPromise.then(ninja => {
//     if(ninja === "Hattori"){
//         console.log("8 ninjaDelayedPromise resolve handled with Hattori");
//     }
// });

// const ninjaImmediatePromise = new Promise((resolve, reject) => {
//     console.log("4 ninjaImmediatePromise executor. Immediate resolve.");
//     resolve("Yoshi");
// });

// ninjaImmediatePromise.then(ninja => {
//     if(ninja === "Yoshi"){
//         console.log("6 ninjaImmediatePromise resolve handled with Yoshi");
//     }
// });

// console.log("5 At code end");

/* 
After the ninjaDelayedPromise has been created, it still doesn’t know the 
value that it will eventually have, or whether it will even be successful. 
(Remember, it’s still waiting for the time-out that will resolve it.) So 
after construction, the ninjaDelayedPromise is in the first promise state, pending.

Next we use the then method on the ninjaDelayedPromise to schedule a callback 
to be executed when the promise successfully resolves
*/


// Example 3)

/*
There are two ways of rejecting a promsie
1) explicitly ->  by calling passed in reject method.
2) implicitly -> if during the handling of a promise, an unhandled exception occurs.
*/

// explicitly rejecting promise 
const promise = new Promise( (resolve, reject) => {
  reject("Explicitly reject a promise!"); 
});

promise
  .then(
    () => console.log("Happy path, won't be called!"),
    error => console.log("A promise was explicitly rejected!")
);

/* 
We can explicitly reject a promise, by calling the passed-in 
reject method: reject("Explicitly reject a promise!"). If a 
promise is rejected, when registering callbacks through the 
then method, the second, error, callback will always be invoked. 
*/

// chaining catch in promise 
const promiseChain = new Promise((resolve, reject) => {
  undeclaredVariable++;
});

promiseChain
  .then(() => console.log("Happy path, won't be called!"))
  .catch(error => console.log("Third promise was also rejected"));

/* 
This way of treating all problems that happen while working with 
promises in a uniform way is extremely handy.
Regardless of how the promise was rejected, whether explicitly by 
calling the reject method or even implicitly, if an exception occurs, 
all errors and rejection reasons are directed to our rejection callback.  
*/

// /////////////////////
// real world promise //
// /////////////////////
// https://www.npmjs.com/package/json-server

function getJSON(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    // console.log(request)
    
    request.open("GET", url);
    
    request.onload = function() {
      try {
        // console.log(this)

        if(this.status === 200 ){
          resolve(JSON.parse(this.response));
        } else{
            reject(this.status + " " + this.statusText);
        }
      } catch(e){
        reject(e.message);
      }
    };
    
    request.onerror = function() {
      reject(this.status + " " + this.statusText);
    };
    
    request.send();
  });
}

getJSON("http://localhost:3000/ninja/")
  .then( ninjas => {
    // console.log(ninjas)
    if( ninjas !== null ){
      console.log("Ninjas obtained!");
  }
}).catch( e => {
  console.log( "Shouldn't be here:" + e )
} );

// ///////////////////
// Chaining Promise //
// ///////////////////

getJSON("http://localhost:3000/ninja/")
  .then( ( data ) =>  getJSON(`http://localhost:3000/ninja/${data[0].id}`)  )
  .then( ( data ) => console.log(data) )
  // .then(ninjas => getJSON(ninjas[0].missionsUrl))
  // .then(missions => getJSON(missions[0].detailsUrl))
  // .then(mission => assert(mission !== null, "Ninja mission obtained!"))
  // .catch(error => fail("An error has occurred"));


// //////////////
// promise.all //
// //////////////
/* 
built-in Promise.all method. This method takes in an array of promises and creates 
a new promise that successfully resolves when all passed-in promises resolve, and 
rejects if even one of the promises fails. 
*/

// Waiting for a number of promises
//   Promise.all([getJSON("data/ninjas.json"),
//             getJSON("data/mapInfo.json"),
//             getJSON("data/plan.json")]
//   ).then(results => {
//     console.log(results)
//     const ninjas = results[0], mapInfo = results[1], plan = results[2];
//     console.log(ninjas)

//     if( ninjas !== undefined
//         && mapInfo !== undefined && plan !== undefined ){
//         console.log("The plan is ready to be set in motion!");
//       }
//   }).catch( error => {
//   console.log("A problem in carrying out our plan! :", error);
// });

// //////////////////
// Racing Promises //
// //////////////////

// the one that return the first is the winner 
// i.e will be shown on then block
Promise.race([
            getJSON("data/mapInfo.json"),
            getJSON("data/ninjas.json"),
            getJSON("data/plan.json")
          ])
      .then( ninja => {
        // console.log(ninja)
        if( ninja !== null ){
          console.log( ninja.profile.name + " responded first")
        }
        }).catch(error => console.log("Failure! :", error));


// //////////////
// async await //
// //////////////
/* 
We use the async keyword in front of the function keyword to specify that 
this function relies on asynchronous values, and at every place where we 
call an asynchronous task, we place the await keyword that says to the JavaScript
engine, please wait for this result without blocking 
*/
( async function (){
  try {
    const ninjas = await getJSON("data/ninjas.json");
    const missions = await ninjas.profile

    console.log(missions);
  }
  catch(e) {
    console.log("Error: ", e);
  }
})()

