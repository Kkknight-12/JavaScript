// 
// 
function sayHi(){
    // 
    console.log("HI")
    // this inside of a function normally refers  to  window
    console.log(this);
}
console.log(sayHi());

// 
// 
// 
const greet = function (){
    console.log(this);
}
greet();
// 

// 
// function  inside the object
// this will call the properties of object
const person = {
    first: 'Edogawa',
    last: 'Conan',
    nickName:'Conan kun',

    fullName(){
        console.log(this);
    }
}
person.fullName()

// 
// 
// targeting specific property with dot
const person1 = {
    first: 'Edogawa',
    last: 'Conan',
    nickName:'Conan kun',

    fullName(){
        console.log(this.first);
    }
}

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
// destructuring
const person3 = {
    first: 'Shinichi',
    last: 'Kudo',
    nickName:'Kudo kun',
    fullName(){
    const {
        first,
        last,
        nickName
    } = this;
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
        return (`${first} ${last}`);
    },
    // creating a method which will call
    // above method 
    printBio(){
        const fullName =this.fullName();
        console.log(`${fullName} is a Detective`)
    }
}
person4.printBio();

// //////////////////////////////////////////
// The value of "this" depends on the invocation
//  context of the function it is used in.
// ///////////////////////////////////////////
