// Push - add to end     \\\\ unshift - add to start
// pop - remove from end \\\\ shift - remove from start

let trending = ["Javascript", "java", "c#"];
console.log(trending);

// adding at last position
trending.push("c++");
console.log(trending);

trending.push("GO");
console.log(trending);

// remove the last element
trending.pop("GO");
console.log(trending);

// /////////////////////////

// adding and item to 1st position of the list
trending.unshift("Python");
console.log(trending);

trending.unshift("justPython");
console.log(trending);

// removing from the first position
trending.shift("justPython");
console.log(trending);
