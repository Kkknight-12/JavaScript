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

for (let oper of operations){
    let result = oper(2,3);
    console.log(result);
}


// method
// adding function to object to create method

const thing = {
    doSomething: multiply
}
console.log(thing.doSomething)
console.log(thing.doSomething(2,3));


// higher order functioon are functions that operate on
// with/on other funcitons.

function calltwice(func){
    func();
    func();
}

function laugh(){
    console.log ('haha');
}
laugh();
console.log('--------------')
calltwice(laugh);

// loop

function repeatNTimes(action, num){
 for(let i = 0; i < num; i++){
     action();
 }
}
repeatNTimes(laugh, 4);
















