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
