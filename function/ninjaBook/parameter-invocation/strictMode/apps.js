/*  
Concept of aliasing functipn parameters throught argument is confusing
javascript provides a way to opt output by using strict mode

Strict mode is an ES5 addition to JavaScript that changes the behavior of JavaScript engines so that errors are thrown instead of silently picked up. The behavior of some language features is changed, and some unsafe language features are even completely banned (more on this later). One of the things that strict mode changes is that it disables arguments aliasing.*/
"use strict";

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
    arguments object doesn’t alias the parameters. If we change the value of the first argument, arguments[0] = 'ninja', the first argument is changed, but the person parameter isn’t:
    */
    arguments[0] = 'ninja boy rantaro'
    console.log(`Arguments object is changed ${arguments[0]}`)

    console.log(`But paramter remain unchanged ${person}`)

}
infiltrate('Mali Bhaia')

// if we don't use strict, changing the arguments[0] will also change the parameter person.