const ninjaPromise = new Promise((resolve, reject) => {
  resolve("Hattori");
  //reject("An error resolving a promise!");
});

ninjaPromise.then( ninja => {
  if(ninja === "Hattori"){
    console.log("We were promised Hattori!");
  } 
}, err => {
  console.log("There shouldn't be an error")
});