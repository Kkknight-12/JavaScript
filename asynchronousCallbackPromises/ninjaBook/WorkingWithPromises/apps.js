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
// console.log("At code start"); // 1

// var ninjaDelayedPromise = new Promise((resolve, reject) => {
//   console.log("ninjaDelayedPromise executor"); // 2
//   setTimeout(() => {
//     console.log("Resolving ninjaDelayedPromise"); // 7
//     resolve("Hattori");
//   }, 500);
// });

// if(ninjaDelayedPromise !== null){
//     console.log("After creating ninjaDelayedPromise") // 3
// } 

// ninjaDelayedPromise.then(ninja => {
//   if(ninja === "Hattori"){
//     console.log("ninjaDelayedPromise resolve handled with Hattori"); // 8
//   }
// });

// const ninjaImmediatePromise = new Promise((resolve, reject) => {
//   console.log("ninjaImmediatePromise executor. Immediate resolve."); // 4
//   resolve("Yoshi");
// });

// ninjaImmediatePromise.then(ninja => {
//   if(ninja === "Yoshi"){
//     console.log("ninjaImmediatePromise resolve handled with Yoshi"); // 6
//   }
// });

// console.log("At code end"); // 5

// const promise = new Promise((resolve, reject) => {
//   reject("Explicitly reject a promise!");
// });

// promise.then(
//   () => console.log("Happy path, won't be called!"),
//   error => console.log("A promise was explicitly rejected!") 
// );
// alternative syntax
var promise = new Promise((resolve, reject) => {
  reject("Explicitly reject a promise!");	
});

promise.then(()=> console.log("Happy path, won't be called!"))
       .catch(() => console.log("Promise was also rejected"));


