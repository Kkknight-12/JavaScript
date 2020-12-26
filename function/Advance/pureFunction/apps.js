/* it's a good idea to aim for pure functions without
side effects simply because they are predictable
and if someone calls them without knowing the function 
definition, it's always good if you can rely on
the fact that this function doesn't do anything strange 
behind the scenes.*/

// pure function does not change anything outside of function
// it always produce same result.

// example of pure function
function add( num1, num2 ){
    return num1 + num2;
}
console.log(add( 2, 3 ));
console.log(add( 10, 10 ))

// example of impure function
function addRandom(num1){
    return num1 + Math.floor(Math.random() * 10) + 1;
}
console.log(addRandom(2))
// for same value of input same ouput will be produced everytime

// a function is impure it produces side effect
// which mean it changes anything outside function
// could be http request or data stored in database
// or could be changing some variable which is defined
// outside of function

let previousResult = 0;
function addMoreNumbers( num1, num2 ){
    const sum = num1 + num2; // value is stored in sum which is part of function
    previousResult = sum // this line is sideffect
    // as we are changing variable which is defined outside of function

    return previousResult;
}
// not only returning result we are changing something which is outside of function
console.log(addMoreNumbers( 1,2 ));

// 

const hobbies = ['Sports', 'Cooking'];
function printHobbies(h){
    h.push('New Hobbie');
    console.log(h)
}

printHobbies(hobbies)
/* 
when we console log h here, we also push a new hobby 
onto that array, new hobby. If we now call print 
hobbies and we pass in hobbies, we'll see that what 
actually gets printed is our hobbies array with the 
new extra hobby here, as you can see here and the 
reason for that of course is that we change that array
but because arrays are objects and objects are reference
values, when we change that array here, we change the 
original array because what we get here in the parameter
is not a copy of that array but a copy of the address of
the array and therefore, we work with the exact same 
object in memory, so when we change it inside of the 
function, we also change it outside of the function,
hence again we have a side effect.
*/
