// function User( username, email, nickname ) {
//     this.username = username;
//     this.email = email;
//     this.nickname = nickname;
//     // this.login = function() {
//     //     console.log(`${this.username} logged in `);
//     // };
// }

// // now i want every object made on above function to have prototype
// // saving the log in method to prototype
// User.prototype.login = function ( ) {
//     // this keyword inside of your prototype
//     // always refer to your object (here UserP) on which you call the method
//     console.log(`${this.username} has logged in`)
// }

// const userOne = new User('userOne','one@gmail.com')
// console.log(userOne)
// userOne.login()

// const userTwo = new User('userTwo', 'two@gmail.com')
// console.log(userTwo)

// // attaching logout method to prototype
// User.prototype.logout = function ( ) {
//     console.log(`${this.username} has logged out`)
// }
// userOne.logout()

// // ////////////////
// // Inheritance /
// // /////////////
// // admin method will inherit the above method 
// // and will have its own method too
// // adding new paramenter called title

// function Admin( username, email, title ) {
//     // .call() will call the above (User) constructor
//     // first argument  contact of what this keyword will be equal to inside
//     // User constructor function
//     User.call( this, username, email )

//     // adding title parameter
//     this.title =  title
// }

// const userThree = new Admin('userThree','three@gmail.com', 'pirate')
// console.log(userThree);

// // inherititng all prototype of User constructor
// Admin.prototype =  Object.create(User.prototype)

// const userFour = new Admin('userFour','four@gmail.com', 'navyAdmiral')
// console.log(userFour);

// console.log(Admin.prototype)
// userFour.logout();

// console.log('------------------');


// class Person {
//     name = 'Max';

//     constructor(){
       
//         this.age = 30;
//     }

//     login(){
//         console.log(
//             `${this.name} ${this.age}`
//         )
//     }

//     logout = function (){
//         console.log(
//             `${this.name} ${this.age}`
//         )
//     }
// }
// p = new Person();
// console.log(p)
/* 
Person {name: "Max", age: 30, logout: ƒ}
    age: 30
    logout: ƒ ()
    name: "Max"
    __proto__:
    constructor: class Person
    login: ƒ login()
    __proto__: Object
*/

// ///////////////
// Parent Object /
// ///////////////
function Animal(){
	this.specie = 'Animal'
}

//////////////////////
// ////////////////////
// prototype property /
// ////////////////////
Animal.prototype.walk = function(){
	console.log(`${this.name} walks`)
    // Bailey walks
}

// //////////////
// Child Object /
// //////////////
function Cat(name) {
	this.lives = 9;
	this.name = name;
	this.sayName = function () {
		console.log(`Meow! My name is ${this.name}`);
	};
}

// //////////////////////
// creating inheritance /
// //////////////////////
// wrong way to inherit 
/* 
we previosly used this method to transfer inheritance
but its a wrong way 
// Cat.prototype = Animal.prototype
*/

///////////////////
// two better way to create inheritance
///////////////////
// new operator 
// Cat.prototype = new Animal();

// Object.create()
// but with Object.create() method you will inherit just the 
// prototype properties and method, 
// we will not be access Animal own properties/method link specie
/* 
Object.create() takes in a single object as an argument,
and returns a new object with its __proto__ property set 
to what argument is passed into it 
*/
Cat.prototype = Object.create( Animal.prototype );


Cat.prototype.meow = function(){
	console.log(`My name is ${this.name} I do Meow`)
}

// //////////////////////////////////////
// Set construtor back to object itself /
// //////////////////////////////////////
/* 
always remeber to set the constructor function back to itself 
*/
// shortcut method
// but the constructor will be iterable, which is not good
// Cat.prototype.constructor = Cat;
// console.log(bill.constructor)
// proper way to create constructor 
Object.defineProperty( Cat.prototype, 'constructor', {
	enumerable: false, // setting the iterable property to false
	value: Cat,
	writable: true,
});
console.log(Cat.prototype) // Animal {specie: "Animal", meow: ƒ, constructor: ƒ}
// Animal {meow: ƒ, constructor: ƒ}, if you create Cat with Object.create
// as we have set the value of object constructor to non itterable 
// it will not be shown in for loop
// using short cut method will make constructor iterable

for( let prop in Cat.prototype ){
	console.log(prop)
// object constructor should not be itterable
/* 
meow
walk
*/
}

// /////////////////
// object instance /
// /////////////////
const bill = new Cat('Bailey');
bill.nickName = function(){
	console.log('kill bill panday')
}
console.log(bill.constructor === Cat); // true
console.log(bill.constructor) 

// ////////////
// instanceof /
// ////////////
/* returns a boolean indicating whether 
the Parent constructor exists in the 
Child object's prototype chain 
*/
console.log( bill instanceof Animal ) // true
console.log( bill instanceof Cat ) // true

// ////////////////
// getPrototypeOf /
// ////////////////
/* 
Object.getPrototypeOf() is great for 
retrieving the prototype of a given object. 
*/
console.log(Object.getPrototypeOf(bill)) 
// Animal {specie: "Animal", meow: ƒ, constructor: ƒ}
// Animal {meow: ƒ, constructor: ƒ}, if you create Cat with Object.create

// /////////////////
// isPrototypeOf() /
// /////////////////
/* checks whether or not an object exists in 
another object's prototype chain.
*/
const checkProto = Object.getPrototypeOf(bill)
console.log(checkProto.isPrototypeOf(bill))
// true

// /////////////
// constructor /
// /////////////
/* 
Accessing an object's constructor property 
returns a reference to the constructor function (Cat)
that created that object (bill) in the first place 
*/
console.log(bill.constructor)
// //////////////////
// hasOwnProperty() /
// /////////////////
/* hasOwnProperty() allows you to find the origin 
of a particular property. */
console.log(bill.hasOwnProperty('nickName')) // true


bill.walk(); // Animal prototype method
console.log(bill.specie) // Animal property, will be undefined if we user Object.create method
bill.sayName() // Cat prototype method
bill.meow() // Cat prototype method
bill.nickName() // bill method
console.log(bill.lives) // Cat property