// is statement
// if (something){
//     do this
// }

if (1 == 1) {
  console.log("you are correct");
}

// if else statemnt

let num = 25;
// % is remainder
if (num % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

// elseif
//  && is and, used when you want 2 condition to be fulfilled simultaniously
let marks = 76;

if (marks >= 85) {
  console.log("Grade A");
} else if (marks <= 84 && marks > 70) {
  console.log("Grade B");
} else if (marks >= 60 && marks <= 70) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}

// //////
// if there is no space in string below code will
// return -1, otherwise the index of space in string
a = "nananan a";
console.log(a.indexOf(" "));
// /////////

// nested loop

let password = "tintin";
// try => "tin tin", "tin"

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Valid Password");
  } else {
    console.log("Password is long enough, but can't contain spaces");
  }
} else {
  console.log("Password must be strong");
}
