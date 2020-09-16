const firstName = "Jhon";
const lastName = "Constantine";
const age = 36;

let val;

//Concatination
val = firstName + " " + lastName;
console.log(val);

// Apending
val = "Bred ";
val += "Traversy";
console.log(val);

// adding string to the variables
val = "Hello my name is " + firstName + " and i am" + age;
console.log(val);

//Escaping
val = "That's awesome"; // single quote and double quote
console.log(val);

val = "this's will also work"; // \'s will also work
console.log(val);

val = firstName.length; // its a method not a property so we dont need parenthesis length()
console.log(val);

//concat
val = firstName.concat(" ", lastName); // adding space then last name
console.log(val);

//change case
val = firstName.toUpperCase();
console.log(val);

val = firstName.toLowerCase();
console.log(val);

//indexing
val = firstName[0]; //1st element start with 0
console.log(val);

//indexof()
val = firstName.indexOf("n") + 1;
console.log(val);

//charArt()
val = firstName.charAt("3");
console.log(val);

// get last character
val = firstName.charAt(firstName.length - 1);
console.log(val);

//substring()
val = firstName.substring(0, 4);
console.log(val);

// slice() is same as substring()
val = firstName.slice(0, 4);
console.log(val);

//split()
const str = "hey i am here to help you!";

val = str.split(" "); // spliting at space
console.log(val);

const tags = "web design, programing, front end , python";

val = tags.split(","); // spliting at comma
console.log(val);

// repalce()
val = str.replace("i", "I"); // first arg is what you wnat to repalce second is with which you want to replace
console.log(val);

//include()
val = str.includes("foo"); // str= "hey i am here to help you!"
console.log(val);

val = str.includes("hey");
console.log(val);
