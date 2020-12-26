
//  variable defined in parent function is available to the nested function

function outer(){
    let hero = 'Iron Man';

    function inner(){
        let awesome = `${hero}, you are awesome!` // look for parent to get the variable(hero) value
        console.log(awesome);
    }
    inner();
}
outer()

// 
// 
function outerf(){
    let m = 'Outer';

    function inner(){
        let m = 'innerr';
        let f = `${m}, you are awesome!` // look for parent to get the variable(hero) value
        console.log(f);
    }
    inner();
}
outerf();



// when you have nested function, variable inside the immediate parent is used

function outter(){
    let hero = 'Wolverine';

    function innerr() {
        // overwritten hero
        let hero = 'Batman'; 

        function innermost(){
            console.log(hero.toUpperCase()) //call for the variable hero
        }
        // inner will run innermost function 
        innermost(); 
    }
    innerr(); // calling inner function to run
}
outter();

// 
let mult = 1.1;

function createTaxCal(tax){
    function calTax(amount){
        console.log( mult, tax );
        return amount * tax;
    }
    return calTax;
}

mult = 2.1; // mult value updated

// adding different value for the tax argument
const calVatAmt = createTaxCal(0.19); 

const calIncTaxAmt = createTaxCal(0.25) // only be used when calIncTaxAmt used

console.log(calVatAmt(100)); // tax = 0.19, amount = 100
console.log(calVatAmt(200));

/* 
though the mult value 2.1 which is latest was used
but while calling calVatAmt two times with two different argument 100 and 200, only 0.19 was passed in as argument and was used as well.
*/

// let userName = 'Knight';
// function greetUser(){
//     console.log('hi ' + userName)
// }
// greetUser()

let userName = 'Knight';
function greetUser(){
    console.log('hi ' + userName)
}
greetUser()