// input
// passing arguments to functions
function greet(person){
    console.log(`Hi, ${person}`)
}

greet('Knight')

// rolling dice with input
// give output in range of 0 to give range
function rollDie(){
    // it will choose random number from 0 to 6
    let roll = Math.floor(Math.random()*6)+1; 
        console.log(`Rolled: ${roll}`)
    
}
rollDie(8)
console.log('-------------------')

// 
// joining two function
function throwDice(numROlls){
    for (let i=0; i< numROlls; i++){
        rollDie(); 
        // this will call the above function rollDie number of times
        // mentioned in paraqmeter of function throwDice
    }
}
throwDice(3) // will role the dice 3 times

console.log('-------------------')

// 
// combining above two functions
function td(roll){
    for (let i=0; i< roll; i++){
        let rolldice = Math.floor(Math.random()*6)+1;
        console.log(`Rolled: ${rolldice}`)
    }
}
td(3)

// 
// 
// function inside a function
const sumUp = ( a, b, ...numbers )=>{ // a = 1, b = 1, numbers = ['k', 2]
    // function with local scope
    // will run  only inside sumUp
    const validateNumber = (number) =>{ // number = "k" , 2
        return isNaN(number) ? 0: number;
    }

    let sum = 0;
    for ( const num of numbers ){ //  ['k', 2]
        sum += validateNumber(num)
    }
    return sum
}
console.log(sumUp(1,1,'k',2))

// ///////////////////
// keyword arguments /
// ///////////////////
// you can you key word arguments as an argument 
// which is not defined in function
const subtractUp = function(){ // function with no argument
    let subtract = 0;
    for ( const num of arguments){ // key word is used to  take arguments
        subtract -= num;
    }
    return subtract
}
console.log(subtractUp(12,1,2,3)) // parameters passed