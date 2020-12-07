// As tag names are not unique you will get multiple output

// To select all li's
const li = document.getElementsByTagName('li');
console.log(li)

// To select all h1's (there's only one on this page):
const h1 = document.getElementsByTagName('h1');
console.log(h1)

// Remember, getElementsByTagName returns an array-like object (NOT a real array)
const inputs = document.getElementsByTagName('input'); //get all inputs
console.log(inputs[0]); //this works
// inputs.pop() //DOES NOT WORK! pop() is an array method, and this isn't an array!

console.log("--------------------")

// you can iterate over tagnames
for(let input of inputs){
    console.log(input)
}

console.log("--------------------")
// spread
const arr = [...inputs]
console.log(arr)

for( let i = 0; i < arr.length;  i++ ){
    console.log(arr[i])
}