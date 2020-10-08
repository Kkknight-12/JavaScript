// ============================
// array sorting is for strings
// ============================
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

console.log(animal.sort());

// ============================
// sorting dont work exactly the way we think
// it convert the numbers to string then compare their sequence
// sequence of UTF-16 code units values
// ============================
let nums = [20, 200, 1, 30, 4];
console.log(nums.sort());
