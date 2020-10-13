// for of loop is not supported by internet explorer
//
// for (varaible of iteration){
//     statement
// }
//

// most often used when you want to just itreate over elements of anything itterable like array, string,
//

let mArt = ["Taekwondo", "Jujutsu", "krav Maga", "Mixed"];

for (let i = 0; i < mArt.length; i++) {
  console.log(mArt[i]);
}

// forOf
//
for (let elements of mArt) {
  console.log(elements);
}

for (let elements of "Taekwondo") {
  console.log(elements);
}

console.log("-----------------------");

//
const magicScore = [
  [2, 4, 6],
  [5, 3, 1],
  [5, 4, 9],
];

for (let i = 0; i < magicScore.length; i++) {
  let row = magicScore[i];
  let sum = 0;
  for (let j = 0; j < row.length; j++) {
    sum += row[j];
  }
  console.log(`${row} summed to ${sum}`);
}
console.log("FOROF");
// forOf
for (row of magicScore) {
  let sum = 0;
  for (let num of row) {
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}

// /////////////
// objects
// forOf easily iterate over array and string, but not in case of object.
// Objects are not iterable, instead of looping over all the object
// we can just loop over just the key/value.
// in object everything ends up as a string eventually
// made some of the keys explicit strings so we can
// add spaces
// /////////////

const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  "In Bruges": 9,
  "Kill Bill": 8.5,
  Coraline: 7.5,
};

// keys
for (let x of Object.keys(movieReviews)) {
  console.log(x);
}
// values
for (let x of Object.values(movieReviews)) {
  console.log(x);
}

//
let total = 0;
for (let x of Object.values(movieReviews)) {
  total += x;
}
console.log(`Review Total is ${total}`);
let avg = total / Object.values(movieReviews).length;
console.log(`Review Average is ${avg}`);

// ///////////////////
// forIn
// ///////////////////
// for in loop over keys
//
// acess index
for (let elements in mArt) {
  console.log(elements);
}

for (let elements in "Taekwondo") {
  console.log(elements);
}

console.log("-----------------------");

const jeopardyWinnings = {
  regularPlay: 232212,
  watsonChallange: 123432,
  tournamentOfChampions: 123456,
  battelOfTheDecades: 123453,
};

// as for in iter over keys we dont need to specify it

for (let key in jeopardyWinnings) {
  console.log(key);
  // to print value
  console.log(jeopardyWinnings[key]);
}


