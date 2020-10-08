let animal = [
  "shark",
  "salmon",
  "whale",
  "bear",
  "lizard",
  "turtle",
  "snake",
  "chameleons",
];
console.log(animal);

// start from zero(shark) and ends before
// the last postion so it ends at 1 which is salmon
let swim = animal.slice(0, 2);
console.log(swim);

// 3rd is bear
// before 5 which is 4=>lizard
let mammal = animal.slice(3, 5);
console.log(mammal);

// slicing work with arugument
// first position to the last position in array
let reptiles = animal.slice(4);
console.log(reptiles);

// negative number
// -1 is last position
// -3 is 3rd position
// if one negative position is given then it will run from last to the metioned negative position
console.log(animal.slice(-3));

// - 5 is bear from left
// - 3 is turtle so it will run to position before turtle
console.log(animal.slice(-5, -3));

//
let copy = animal;
console.log(copy);
