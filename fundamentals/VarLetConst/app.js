/* 
shift option a
 */

// // var , let , const

// var name = "Knight";
// console.log(name);

// //  reasign varaible
// name = "luffy";
// console.log(name);

// // Init var
// var greeting;
// greeting = "hey hii";
// console.log(greeting);

// // Variable name
// /*
// allowed - camel case, letter digit, start with $, start with _
// not allowed - starting with digit, special characters, let ker word
//  */

// var fistName = "Mayank"; //camel case
// var first_name = "Sara"; // underscore convention
// var FirstName = "Jhon"; //  pascal case
// var firstname = "tom";

// let work same as var, it is identical
let name = "Knightlet";
console.log(name);

//  reasign varaible
name = "luffylet";
console.log(name);

// Const, cant be changed, reassigned
const nameconst = "jhonConstantine";
console.log(nameconst);
// cant reassing
// nameconst = 'Sara';
// have to assign a value
// const greeting;

// creating an object
// you can change the data insite the object but not the object(person here)
const person = {
  name: "jhon",
  age: 23,
};
console.log(person);

person.name = "sara";
person.age = 30;
console.log(person);

// for arrays
//  we can add new number but cant make a whole new array
const numbers = [1, 2, 3, 4];
console.log(numbers);

// push is used to add
numbers.push(6, 7, 8, 9);
console.log(numbers);
