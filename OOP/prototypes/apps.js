String.prototype.yell = function() {
    return `OMG!!! ${this.toUpperCase()}!!! Where are you!`;
}

console.log("Hey Luufffyyy".yell())

Array.prototype.pop = function () {
    return "SORRY I WANT THAT ELEMENT, I WILL NEVE POP IT OFF"
}

const A = [1,2,3,4]
console.log(A.pop())