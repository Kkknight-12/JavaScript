const sumUp = ( resultHandler, ...numbers ) => { //  numbers = [6, 2]
    // function with local scope
    // will run  only inside sumUp
    const validateNumber = (number) =>{ // number = 6, 2
        return isNaN(number) ? 0: number;
    }

    let sum = 0;
    for ( const num of numbers ){ // numbers = [6, 2]
        sum += validateNumber(num) // 6+2 = 8
    }
    resultHandler(sum); // resultHandler = (result) => { ${8} } 
}

const showResult = (result)=>{
    console.log(`result is: ${result}`)
}
sumUp(showResult,6,2)

// 
// 
const substractUp = ( resultHandler, ...numbers )=>{ //  numbers = [6, 2]
    // function with local scope
    // will run  only inside sumUp
    const validateNumber = (number) =>{ // number = 6, 2
        return isNaN(number) ? 0: number;
    }

    let sustract = 0;
    for ( const num of numbers ){ // numbers = [6, 2]
        sustract -= validateNumber(num) // 6+2 = 8
    }
    resultHandler(sustract); // resultHandler = (result) => { ${8} } 
}

substractUp(showResult,6,2);

// 
// 
// 
// combine = ( resultHandler, operation, ...numbers)=>{
//     const validateNumber = number => {
//         return isNaN(number) ? 0:number;
//     }

//     let oper = 0;
//     for( const num of numbers ){
//         if( operation === "ADD" ){
//             oper += validateNumber(num);
//         }
//         else{
//             oper -= validateNumber(num);
//         }
//     }
//     resultHandler( operation, oper )

// }

// const shoWResult = ( messageText, result )=>{
//     console.log(`Result after ${messageText} number is ${result}`)
// }

// combine( shoWResult, 'ADD', 1,2,3,4,5,6 )

// 
// 
// using bind
// combining
//        resultHandler() | operation | number = 1,2,3,4,5,6
combine = ( resultHandler, operation, ...numbers ) => {  
    const validateNumber = number => {
        return isNaN(number) ? 0:number;
    }

    // let oper = new Number(); // declare in this way if you don't want to give value to number
    let oper = 0;
    let operM = 1;
    for( const num of numbers ){ // number = 1,2,3,4,5,6
        if( operation === "ADD" ){
            oper += validateNumber(num);
        }
        else if( operation === "MULTIPLY" ) {
            operM *= validateNumber(num);
        }
        else{
            oper -= validateNumber(num);
        }
    }

    // return oper;
    
    if( operation === "MULTIPLY" ){
        return resultHandler( operM )
    }

    else{
        return resultHandler( oper )
    }

}

const shoWResult = ( messageText, result ) => {  // messageText = line 91 | result = oper line 83
    console.log(`Result after ${messageText} all Numbers = ${result}`)
}

//  binding the string value to function showResult()
combine( shoWResult.bind(this, 'Adding'), 'ADD', 1,2,3,4,5,6 )
combine( shoWResult.bind(this, 'Multiplying'), 'MULTIPLY', 1,2,4,5,6 ) 
combine( shoWResult.bind(this, 'Substracting'), 'SUBSTRACT', 1,2,3,4,5,6 )