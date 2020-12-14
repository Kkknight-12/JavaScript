// call
const jaya = {
    name: 'jaya',
    age: 29,
    
    greet(){
        console.log( this  )
        console.log( `Hellooo, I'm ${this.name} and  I'm ${this.age}` );
    }
}
const sushma = {
    name: 'sushma',
    age : 21,
}

jhon.greet();

function greet(city, country) { //adding city and country argument
    console.log( this );
    console.log( 
        `Hello, I'm ${this.name} and I'm ${this.age} years old, i live
         in ${city}, ${country}` )
}

// this will fail
// susan.greet()

// this will also fail as nothing is on the left side of secondGreet
// we are pointing to a window
const secondGreet = jhon.greet;
secondGreet()

// call - runs instantly, arguments - list of items
// take two argument
// first argument thisArg- is object to be used as this
// second argument argArray - A list of argument to be passed to the method
greet.call(jaya, 'Pune', 'India')
greet.call(sushma, 'Patna', 'India')
greet.call( {name: 'Pandu', age: 30}, 'Himachal', 'India' )
jhon.greet.call(susan)
