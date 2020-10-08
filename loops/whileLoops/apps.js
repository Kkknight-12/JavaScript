for (let i = 0; i <= 5; i++) {
  console.log(i);
}

//
console.log("=============");
//

let j = 0; // declaring varible
while (j <= 5) {
  // run till
  console.log(j);
  j++; // steps
}
//
console.log("=============");
//

const target = Math.floor(Math.random() * 10);
console.log(`target is ${target}`);
console.log("--------------");
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
  console.log(`guess was ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
