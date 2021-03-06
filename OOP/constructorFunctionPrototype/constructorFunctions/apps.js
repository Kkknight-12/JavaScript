// new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

// The new keyword does the following things:
// Creates a blank, plain JavaScript object;
// Links (sets the constructor of) the newly 
// created object to another object by setting the 
// other object as its parent prototype;
// Passes the newly created object from Step 1 as the this context;
// Returns this if the function doesn't return an object. 
// 

function Person () {
    this.age = 29; // not same as this in object, but for now using to set values
    this.name = 'Knight'

    this.greet = function () {
        console.log('Hi, I am ' + this.name + ' I am ' + this.age + ' years old.')
    }
}

// the above function will return object because of the the new keyword
const person = new Person();
console.log(person.greet())

// behind the sceen, new key word do this
// function Person () {
//     // create empty this object
//     // this = { }
//     this.age = 29;
//     this.name = 'Knight'

//     this.greet = function () {
//         console.log('Hi, I am ' + this.name + ' I am ' + this.age + ' years old.')
//     }
//     // return this;
// }

// 

function color (r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    // will refer to window object
    console.log(this)
}
color();

// const c = new color (255, 40, 100);
// console.log(c)

// defining method on Prototype outside the above constructor function
color.prototype.rgb = function ( ){ 
        const { r, g, b } = this;
    return  `rgb(${r}, ${g}, ${b})`
}
const color1 = new color(255, 40, 100);
console.log(color1)
console.log(color1.rgb())

color.prototype.hex = function ( ) {
    const { r, g, b } = this;
    return '#' + (( 1 << 24 ) + ( r << 16 ) + ( g << 8 ) + b).toString(16).slice(1);
    
}

const color2 = new color(40, 50, 60);
console.log(color2.hex())

console.log(color1.hex());