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
// /////////////////////////////
greet.apply(jaya, ['Pune', 'India'])
greet.apply(sushma)
greet.apply( {name: 'Pet', age: 30}, ['Pune', 'India'] )

// can't call later
const g = greet.apply( {name: 'Pet', age: 30}, ['Pune', 'India'] )
console.log(g)