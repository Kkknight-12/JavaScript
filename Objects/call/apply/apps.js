// syntax
// func.apply(thisArg, [ argsArray])

// apply - runs instantly, arguments - array of items
const jaya = {
    name: 'jaya',
    age: 29,
    // greet(){
    //     console.log( this  )
    //     console.log( `Hellooo, I'm ${this.name} and  I'm ${this.age}` );
    // }
}
const sushma = {
    name: 'sushma',
    age : 21,
}

// jhon.greet();

function greet(city, country) { //adding city and country argument
    console.log( this );
    console.log( 
        `Hello, I'm ${this.name} and I'm ${this.age} years old, i live
         in ${city}, ${country}` )
}

// greet.call(jaya, 'Pune', 'India')
// greet.call(sushma, 'Patna', 'India')
// greet.call( {name: 'Pandu', age: 30}, 'Himachal', 'India' )

// //////////////////////////////
// arguments are list of items  /
// //////////////////////////////
greet.apply(jaya, ['Pune', 'India'])
greet.apply(sushma) // city country will be undefined
greet.apply( {name: 'Pet', age: 30}, ['Pune', 'India'] )

// can't call later
const g = greet.apply( {name: 'Pet', age: 30}, ['Pune', 'India'] )
console.log(g)

function yo( name, greet ){
    console.log(`hello ${name} ${greet}`)
}
yo.apply(null, ['knight', 'good morning'])
// second argument value is directly
// passed to function 
// if null not provided in above function, it will 
// output undefined
yo('abc', 'xyz')

// 
// ///////////////////////////////////////
// Using apply and built-in functions    /
// ///////////////////////////////////////
// using Math.min/Math.max apply
const numbers = [5, 6, 2, 3, 7];
let max = Math.max.apply(null, numbers);
console.log(max)

// apply can be used to append an array to another
// .push()
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.log(array)

const arrayTwo = [3,4,5]
console.log(arrayTwo.push.apply(arrayTwo, elements))
