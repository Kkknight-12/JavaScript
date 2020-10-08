// const are generally used when making array

// you cant re assign const again like let
// but you can add delete
// push,pop,shift, unshit works

const myEggs = ["brown", "brown"];
console.log(myEggs);

// adding at end
myEggs.push("purple");
console.log(myEggs);

// pop
myEggs.pop("purple");
console.log(myEggs);

// unshift adding to position 1
myEggs.unshift("white");
console.log(myEggs);

// shift Removes the first element from an array and returns it
myEggs.shift("white");
console.log(myEggs);

// using indexing to change the array
myEggs[0] = "green";
console.log(myEggs);
