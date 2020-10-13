
function avg(arr){
    let total = 0;
    // loop over each num
    for(let num of arr){
        //  add them together
        total+=num;
    }
    // divide by number of nums
    let res = total/arr.length;
    return res;
}

console.log(avg([1,2,3,4]));










'



