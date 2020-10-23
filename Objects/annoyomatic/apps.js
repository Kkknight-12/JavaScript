// const annoyer ={
//     phrases:['litreally','cray cray',"I can't even",
//             "Totes!", "YOLO", "Can't Stop Won't Stop"],

//     pickPhrase(){
//         // deconstructing
//         const {
//             phrases
//         } = this;
//         // saving this to phrases
//         // generating random value
//         const idx = Math.floor(Math.random() * phrases.length);
//         // drawing random value 
//         return phrases[idx]   
//     },
//     start(){
//     }
// }
// console.log(annoyer.pickPhrase());

// 
// 
// 
const annoyer ={
    phrases:['litreally','cray cray',"I can't even",
            "Totes!", "YOLO", "Can't Stop Won't Stop"],

    pickPhrase(){
        // deconstructing
        const {
            phrases
        } = this;
        // saving this to phrases
        // generating random value
        const idx = Math.floor(Math.random() * phrases.length);
        // drawing random value 
        return phrases[idx]   
    },

    start(){
        // reason to use arrow function is that 
        // they don't use there own this
        // it allow access to this word we have in 
        // above function
        // which while using this under function key
        // word  was refering to window
        this.timerId = setInterval( ()=> {
            console.log(this.pickPhrase())
        }, 3000)
    },

    stop(){
        clearInterval(this.timerId);
        console.log('Finally Its Over!')

    }
}
console.log(annoyer.start());
console.log(annoyer.stop());




