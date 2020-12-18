function User( username, email ) {
    this.username = username;
    this.email = email;
    // log in will be saved to the function object
    this.login = function() {
        console.log(`${this.username} has logged in `);
    };
}

console.dir(User)

const user1 = new User('user1','one@gmail.com')
console.log(user1)
user1.login()

const user2 = new User('user2', 'two@gmail.com')
console.log(user2)
// user2.login()

// Method (login) is stored directly on the object and 
// that's because we defined that directly in the contructor
// It will be better it was stored on the proto property.

// prototype
// Every Object in JavaScript has a prototype
// Prototype contain all the method for the object type
// Data prototype have date methods -> getDay() | getMonth() | etc
// Array prototype have array methods -> sort() | filter() | etc

// __proto__
// proto property point to the prototype for the object type where 
// the methods that you can use are stored.
// so proto property for an array object will point to the array
// prototype. The proto property for a date object would point to 
// date prototype etc.

// So this approach of storing the methods on a prototype instead of on every 
// individual object that we create it has two main benefits.
// First of all it's going to be more efficient since we're storing them in one 
// single place once and not And second it's going to help us with prototype 
// inheritance

// accessing prototype property
// Array.prototype | Date.prototype  | Object.prototype
console.log(User.prototype)

function UserP( username, email) {
    this.username = username;
    this.email = email;
    // this.login = function() {
    //     console.log(`${this.username} logged in `);
    // };
}
console.dir(UserP)
// now i want every object made on above function to have prototype
// saving the log in method to prototype
UserP.prototype.login = function ( ) {
    // this keyword inside of your prototype
    // always refer to your object (here UserP) on which you call the method
    console.log(`${this.username} has logged in`)
}
// storing login method on UserP

// accessing login function on different new User
const userOne = new UserP('userOne','one@gmail.com')
console.log(userOne)
userOne.login()

const userTwo = new UserP('userTwo', 'two@gmail.com')
console.log(userTwo)

// attaching logout method to prototype
UserP.prototype.logout = function ( ) {
    console.log(`${this.username} has logged out`)
}
userOne.logout()

// 
// 
// 
String.prototype.yell = function() {
    return `OMG!!! ${this.toUpperCase()}!!! Where are you!`;
}

console.log("Hey Luufffyyy".yell())

Array.prototype.pop = function () {
    return "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF"
}

const A = [1,2,3,4]
console.log(A.pop());

// Looking into prototype
console.dir(A);
console.log(Array.prototype)
console.log(Date.prototype)






