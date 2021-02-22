// assert
function assert(value, desc) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail"; 
    li.appendChild(document.createTextNode(desc)); 
    document.getElementById("results").appendChild(li);
}
// window.onload = function() {
// assert(true, "The test suite is running."); 
// assert(false, "Fail!"); 
// };

// Assigning new object to variable ninja;
var ninja = {};

// dynamically creating properties
ninja.clan = "samurai";

// adding object to an array
var ninjaArray = [];
ninjaArray.push({ name: "Knight" });
console.log(ninjaArray);

// adding new object as a property to another object
ninja.data = {};
console.log(ninja);

// passing object as argument
function hide(ninja) {
  ninja.visibility = false;
  return ninja;
}
console.log(hide({}));

// can be returned as values
function returnNewNinja() {
  return {};
}
console.log(returnNewNinja());

// functions posses all the capabilities of object
// can be treated link object
// called first-class object

// Assignment
var ninjaFn = function () {};
console.log(ninjaFn);

// add new function to array
var ninjaArray = [];

ninjaArray.push(function () {});
console.log(ninjaArray);

// can be assigned as a property of object
var ninja = {};
ninja.data = function () {};
console.log(ninja);

// can be passed as an argument
function call(ninjafunction) {
  return ninjafunction();
}
console.log(
  call(function () {
    return "you passed function as an argument";
  })
);

//can be returned as value
var samurai = function () {
  return "Luffy";
};

function returnSamuraiFun() {
  return samurai();
}
console.log(returnSamuraiFun());

// function can posses property that can be dynamically
// created and assigned;
var ninjafunction = function() {};
ninjafunction.ninja = "shadow clone jutsu";
console.log(ninjafunction.ninja);

// callback
var text = 'you reached call back';
function useless(ninjaCallback) {
  return ninjaCallback();
}

function getText(){
  return text;
}

console.log(useless(getText))
// rewrite callback
var text2 = 'you again reached call back';
function useless2( callback ){
  return callback();
}

console.log(useless2( function () { return text2 }));

// sorting with callback 
var values  =[0,3,6,7,2,1,9,3]
values.sort(function (val1, val2 ) {
  return val2 - val1;
});
console.log(values)

var weildSword = function(){};
weildSword.swordType = "katana";
console.log(weildSword)

var store = {
    nextId: 1,
    cache: {},
    add: function(fn){
        if( !fn.id ){ // if function don't have id method then proceed
        // store the current value of nextId to function.id 
        // then increment the current value of nextId 
        // knight.id = 1, netninja.id = 2
            fn.id = this.nextId++; 
            // now save function as key and id as value {1: ƒ, 2: ƒ}
            this.cache[fn.id] = fn;
            return true;
        }
    }
};
function knight( ){return 'this is knight'};
store.add(knight)
// assert( store.add(knight), "Function was safely added.");
// assert( store.add(knight), "but it was only added once.");

store.add( function netninja(){})
console.log(store.cache) // {1: ƒ, 2: ƒ}

function isPrime(value){

    if (!isPrime.answers){
        isPrime.answers = {};
    }
    // new value will be undefined as its not stored in answer obj
    if( isPrime.answers[value] !== undefined ){
        return isPrime.answer[value];
    }
    // will return true if value is neither 0 or 1
    var prime = value !==0 && value !==1;

    for( var i = 2; i< value; i++ ){
        if(value % i === 0 ){
            prime = false;
            break;
        }
    }

    return isPrime.answers[value] = prime;
}
console.log(isPrime(5));
console.log(isPrime.answers) //{5: true}

let va = {make: "Ford", model: "Mustang", year: 1969}
va['name'] = 'fake';
console.log(va)
