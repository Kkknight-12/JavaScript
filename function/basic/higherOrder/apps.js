function add (x,y){
    return x+y
}

function substract (x,y){
    return x-y
}

function multiply(x, y){
    return x*y
}

function divide(x, y){
    return x /y
}

const operations = [add, substract, multiply, divide];

console.log("add" +" "+ operations[0](2,3))
console.log("sustract" +" "+ operations[1](2,3))
console.log("multiply" +" "+ operations[2](2,3))
console.log("divide" +" "+ operations[3](2,3))
