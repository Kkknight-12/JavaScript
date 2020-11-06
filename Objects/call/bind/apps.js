// bind - assign, use later, arguments - list of items
const jaya = {
    name: 'jaya',
    age: 29,
    // greet(){
    //     console.log( this  )
    //     console.log( `Hellooo, I'm ${this.name} and  I'm ${this.age}` );
    // }
}
console.log(jaya.name, jaya.age)
const sushma = {
    name: 'sushma',
    age : 21,
}

// jhon.greet();

function greet(city, country) { //adding city and country argument
    console.log( this );
    console.log(  
                   // greet.name          greet.age
        `Hello, I'm ${this.name} and I'm ${this.age} years old, i live
         in ${city}, ${country}` )
}

// assign it to a variable and call it later
const jayaGreet = greet.bind(sushma, 'Himachal', 'India')
jayaGreet();
// info in  { } will create new variable in greet which will be then
// accessed with greet.name and greet.age
const randomGreet  = greet.bind( {name : 'PanduRanga', age: 300}, 'R....', '...a')
randomGreet();

// 
// return a messsage  defined in btn function on click
const addToCart = document.querySelector('.btn1');

function btn1(name) {
    console.log( `My name is ${name}` )
}

//                              addToCart.btn()
addToCart.addEventListener( 'click', this.btn1.bind(this,'Conan') )

// 
// 
const addToCart2 = document.querySelector('.btn2');

function btn2() {
    console.log( 'adding bhaia' )
}
addToCart2.addEventListener( 'click', this.btn2.bind(this) )

// try different input like
const addToCart3 = document.querySelector('.btn3');
addToCart3.addEventListener( 'click',this.greet.bind(sushma, 'Himachal', 'India'));

