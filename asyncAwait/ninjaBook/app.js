// Example 1
const ninjaPromise = new Promise( (resolve, reject) => {
//   resolve("Hattori");
  reject("An error resolving a promise!");
});

ninjaPromise
    .then(ninja => {
        console.log(ninja);
    }, err => {
        console.log("There shouldn't be an error")
    });


// Example 2
console.log("1 At code start");

var ninjaDelayedPromise = new Promise((resolve, reject) => {

  console.log("2 ninjaDelayedPromise executor");
  
  setTimeout( () => {
    console.log("7 Resolving ninjaDelayedPromise");
    resolve("Hattori");
  }, 500);

});

if(ninjaDelayedPromise !== null){
    console.log("3 After creating ninjaDelayedPromise");
}

ninjaDelayedPromise.then(ninja => {
    if(ninja === "Hattori"){
        console.log("8 ninjaDelayedPromise resolve handled with Hattori");
    }
});

const ninjaImmediatePromise = new Promise((resolve, reject) => {
    console.log("4 ninjaImmediatePromise executor. Immediate resolve.");
    resolve("Yoshi");
});

ninjaImmediatePromise.then(ninja => {
    if(ninja === "Yoshi"){
        console.log("6 ninjaImmediatePromise resolve handled with Yoshi");
    }
});

console.log("5 At code end");

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

const promise = new Promise( (resolve, reject) => {
  reject("Explicitly reject a promise!");
});

promise.then(
  () => console.log("Happy path, won't be called!"),
  error => console.log("A promise was explicitly rejected!")
);


