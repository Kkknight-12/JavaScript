// 
function multiplyBY (num){
    return function (x){
        return x * num;
    }
}

// 
// 
const double = multiplyBY(2)
console.log(double(9))

const triple = multiplyBY(3)
console.log(triple(9))

// 
//  
function makeBetweenFunc(min, max) {
    return function (val) {
        return val >= min && val <= max;
    }
}
const ischild = makeBetweenFunc(0,18);
// 
// age is between 0-18 or not
console.log(ischild(17));
// 
// age is between 0-18 or not
console.log(ischild(19));

// 
// born between 1900 - 2000
const isNineties = makeBetweenFunc(1900,1999);
console.log("I was born in ninties" +" "+ isNineties(1991));
console.log(isNineties(1800));

// 
// weather 
const isNiceWeather = makeBetweenFunc(60,79);
console.log("It's a nice weather" +" "+ isNiceWeather(45));
console.log(isNiceWeather(45));

