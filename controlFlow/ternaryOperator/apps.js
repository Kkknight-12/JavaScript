// condition ? expIfTrue: expIfFalse

// note: only run in if else condition

let num = 7;
if (num === 7) {
  console.log("lucky");
} else {
  console.log("BAD!");
}

//
num = 3;
num === 3 ? console.log("lucky") : console.log("no luck");

//
// let status = "offline";
let status = "online";

let color;
if (status === "offline") {
  color = "red";
  console.log(color);
} else {
  color = "green";
  console.log(color);
}

// using ternary operator

let col = status === "offline" ? "red" : "green";
