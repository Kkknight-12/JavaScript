/* 
Arguments parameter is collection of all arguments passed to function.

arguments object have property name length idicates the excat number of argument. value can be obtained by using array indexing notation.
 */

function whatever(a,b,b){
    console.log(`argument 1 is ${arguments[0]}`)
    console.log( `argument 2 is ${arguments[1]}`)
    console.log(`argument 3 is ${arguments[2]}`)
            
}
whatever('a','b','c');

function agrLength( a, b, c, d){
    console.log(arguments.length)
}
agrLength('a','b','c','d')

/*
argument have length parameter
it can be fetched using array notation
but aguments are not javascript array.
you can think of them as an array like construct. 
*/

function sum(){
    var sum = 0;
    for( var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(sum( 1, 2, 3, 4, 5));

/* 
we can use Rest parameter instead of arguments parameter
rest parameter is a real array so we can use array methods
which gives use advantage over arguments.
*/

function resSum(...a){
     let lis = a;
    var sum = 0;
    for( var i = 0; i < lis.length; i++){
        sum += lis[i];
    }
    return sum;
}
console.log(resSum( 1, 2, 3, 4, 5));


// //////////////////////////////////////////////////////
// Arguments object is an alias to function parameters  /
// //////////////////////////////////////////////////////
function infiltrate(person){
    
    // accessing value 'Mali Bhaia' through parameter person
    // and also through arguments object.
    if( person === 'Mali Bhaia' ){
        console.log(person)
    }
    if( arguments[0] === 'Mali Bhaia' ){
        console.log('Bingo')
    }

    /*
    argument is alias for function parameter so if we change the argumemts object the change is also reflected in matching function parameter.

    changing parameter 
    */
    arguments[0] = 'ninja boy rantaro'
    console.log(person)

    /*  
    same is true if we change parameter, the changes can be observed in paramter and arguments
     */
    person = 'Kirimaru'
    console.log(arguments[0])

}

infiltrate('Mali Bhaia')