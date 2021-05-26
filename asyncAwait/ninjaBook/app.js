const ninjaPromise = new Promise((resolve, reject) => {
//   resolve("Hattori");
  reject("An error resolving a promise!");
});

ninjaPromise.then(ninja => {
  console.log(ninja);
}, err => {
  fail("There shouldn't be an error")
});

const fail = (arg)=>{
    console.log(arg)
}


