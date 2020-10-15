// map creates a new array with the results of calling
// a callback one every element in the array

const texts = ['rofl', 'lol', 'omg', 'ttyl'];
console.log(texts)

// 
console.log('----map-----')
// t represent each on of string
const caps = texts.map(function (t){
    // map is generating a new array which is stored in
    // variable called caps
    return t.toUpperCase();
})
console.log(caps);







