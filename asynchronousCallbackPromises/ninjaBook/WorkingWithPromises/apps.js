// const ninjaPromise = new Promise((resolve, reject) => {
//   resolve("Hattori");
//   //reject("An error resolving a promise!");
// });

// ninjaPromise.then( ninja => {
//   if(ninja === "Hattori"){
//     console.log("We were promised Hattori!");
//   } 
// }, err => {
//   console.log("There shouldn't be an error")
// });


// 
// Example
console.log("At code start");

var ninjaDelayedPromise = new Promise((resolve, reject) => {
  console.log("ninjaDelayedPromise executor");
  setTimeout(() => {
    console.log("Resolving ninjaDelayedPromise");
    resolve("Hattori");
  }, 500);
});

if(ninjaDelayedPromise !== null){
    console.log("After creating ninjaDelayedPromise")
} 

ninjaDelayedPromise.then(ninja => {
  if(ninja === "Hattori"){
    console.log("ninjaDelayedPromise resolve handled with Hattori");
  }
});

const ninjaImmediatePromise = new Promise((resolve, reject) => {
  console.log("ninjaImmediatePromise executor. Immediate resolve.");
  resolve("Yoshi");
});

ninjaImmediatePromise.then(ninja => {
  if(ninja === "Yoshi"){
    console.log("ninjaImmediatePromise resolve handled with Yoshi");
  }
});

console.log("At code end");


