// if(something){
//  do something
// }
// else {
//     do something else
// }
let id;
id = 100;

if (id == 100) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}

if (id == 101) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}

// if the 100 was string then ??
id = "100";

if (id == 100) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}
/* 
100 is still 100 even if it is string so output will we correct
*/

// not equal
if (id != 101) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}

// === will check if the data type are matching or not
id = "100";

if (id === 100) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}

// !== not equal  and type
id = "100";

if (id !== "100") {
  console.log("Correct");
} else {
  console.log("Incorrect");
}

// if there is id then
if (id) {
  console.log(`The ID is ${id}`);
} else {
  console.log(`No ID`);
}

// when no value is defined you have to do it this way
if (typeof idd !== "undefined") {
  console.log(`The ID is ${id}`);
} else {
  console.log(`No ID`);
}

// greater or less than
id = 100;
if (id >= 100) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}

// if else
let color = "red";

if (color == "red") {
  console.log("Color is red");
} else if (color == "blue") {
  console.log("Color is blue");
} else {
  console.log("Color not found");
}

//logical operators
// && is And
let name = "Jack";
let age = 20;
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is Adult`);
}

// OR is denoted by ||
if (age < 16 || age > 65) {
  console.log(`${name} can't run in race`);
} else {
  console.log(`${name} can register for the race`);
}

// TERNARY OPERATOR
// ?
// else is represented by :
//if id = 100 then correct else incorrect
id = 100;
console.log(id === 100 ? "CORRECT" : "INCORRECT");

/*
output will be incorrect as it will compare the data type and its not maching 
*/

//  just checking if i can run a for loop in js
let r = [4, 3, 2, 4, 5, 6, 2];

// for (i = 0; i < r.length; i++) {
//   console.log(r[i]);
// }

for (i = 0; i < r.length; i++) {
  if (r[i] === 2) {
    console.log(`postion ${i + 1} is equal to ${r[i]}`);
  } else {
    console.log(`postion ${i + 1} is not equal to 2`);
  }
}
