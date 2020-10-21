// const  getStats = (arr)=>{
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const sum = arr.reduce((sum,r) => sum +r);
//     const avg = sum/arr.length;

//     return {
//         max:max,
//         min:min,
//         sum:sum,
//         avg:avg
//     }
// }
// const reviews = [4.2, 5.0, 3.44, 2.8, 4.0];
// console.log(getStats(reviews))

// 
// short hand
const  getStats = (arr)=>{
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum,r) => sum +r);
    const avg = sum/arr.length;
// using key from above to set our key name and value
    return {
        max,
        min,
        sum,
        avg,
    }
}
const reviews = [4.2, 5.0, 3.44, 2.8, 4.0];
console.log(getStats(reviews))
