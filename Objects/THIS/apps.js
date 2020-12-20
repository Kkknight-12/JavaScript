// 
// This inside function
function sayHi(){
    // 
    // console.log("HI")
    // this inside of a function normally refers  to  window
    console.log(this);
}
sayHi();

// this in an Arrow-Function - Called in the global context
const sayHello = () => { 
    console.log(this);
}
 
sayHello();

// /////////////////////////////////////
// this in a Method (non-Arrow) object /
// /////////////////////////////////////

const person = { 
    name: 'Luffy',
    greet: function() { // or use method shorthand: greet() { ... }
        console.log(this.name); // "this" refers to the person object
    }
};
 
person.greet();

// fullName() inside person,
// this will call the properties of object person
const persoN = {
    first: 'Edogawa',
    last: 'Conan',
    nickName:'Conan kun',

    fullName(){
        console.log(this);
    }
}
persoN.fullName()

// 
// 
const person1 = {
    first: 'Edogawa',
    last: 'Conan',
    nickName:'Conan kun',
    
    fullName(){
        console.log(this.first);
    }
}
// targeting specific property with dot
person1.fullName()

// 
// 
// using object literal
const person2 = {
    first: 'Edogawa',
    last: 'Conan',
    nickName:'Conan kun',

    fullName(){
        console.log(`${this.first} ${this.last} AKA ${this.nickName}`);
    }
}
person2.fullName();

// 
// 
// destructuring with this
const person3 = {
    first: 'Shinichi',
    last: 'Kudo',
    nickName:'Kudo kun',
    fullName(){
    const {
        first,
        last,
        nickName
    } = this; //this refers to properties of person3
        console.log(`${first} ${last} AKA ${nickName}`);
    }
}
person3.fullName();

// 
// 
// 
const person4 = {
    first: 'Shinichi',
    last: 'Kudo',
    nickName:'Kudo kun',

    fullName(){
    const {
        first,
        last,
        nickName
    } = this;
        return (`${first} ${last} not to mention also known as ${nickName}`);
    },
    // creating a method which will call
    // above method 
    printBio(){
        const fullName =this.fullName();
        console.log(`${fullName} is a Detective`)
    }
}
person4.printBio();

// ///////////////////////////////////////////////
// The value of "this" depends on the invocation /
//  context of the function it is used in.       / 
// ///////////////////////////////////////////////

// /////////////////////////////////////////////////////////
// this in a Method (Arrow Function) - Called on an object /
// /////////////////////////////////////////////////////////

const personA = { 
    name: 'Max',
    greet: () => {
        console.log(this.name);
    },
    sayHi(){
        console.log(`hi ${this.name}`)
    }
};
 
personA.greet(); // logs nothing (or some global name on window object), "this" refers to global (window) object, even in strict mode
personA.sayHi()


// /////////////////////////////////////////////
// this can refer to unexpected things if    //
// you call it on some other object, e.g.: ////
// /////////////////////////////////////////////

const persON = { 
    name: 'Max',
    greet() {
        console.log(this.name);
    }
};
 
const anotherPerson = { name: 'Manuel' }; // does NOT have a built-in greet method!
 
anotherPerson.sayHi = persON.greet; // greet is NOT called here, it's just assigned to a new property/ method on the "anotherPerson" object

console.log(anotherPerson)
// {name: "Manuel", sayHi: ƒ}
anotherPerson.sayHi(); // logs 'Manuel' because method is called on "anotherPerson" object => "this" refers to the "thing" which called it

// 
class User {
    constructor(  ) {
        // this.username = username;
    }
    c(){
        console.log(this.ID)
    }
}

class Person
        extends User {
    constructor( name ){
        super()
        this.name = name;
        this.a();
    }

    b =()=> {
        this.c();
    }

    a(){
        const id = 'abc123'
        this.ID = id;
    }
}

const up = new Person('abc');
console.log(up)
up.b()