// input
// passing arguments to functions

function greet(person){
    console.log(`Hi, ${person}`)
}

greet('Knight')

// rolling dice with input
function rollDie(){
    let roll = Math.floor(Math.random()*6)+1;
        console.log(`Rolled: ${roll}`)
    
}

function throwDice(numROlls){
    for (let i=0; i< numROlls; i++){
        rollDie();
    }
}
throwDice(3)

console.log('-------------------')

// combining above two functions
function td(roll){
    for (let i=0; i< roll; i++){
        let rolldice = Math.floor(Math.random()*6)+1;
        console.log(`Rolled: ${rolldice}`)
    }
}
td(3)
