const moveX = ( element, amount, delay ) => {
    return new Promise( ( resolve , reject ) => { 
        setTimeout( () => {
            const bodyBoundry  = document.body.clientWidth;
            const elRight = element.getBoundingClientRect().right;
            const currLeft = element.getBoundingClientRect().left;

            if( elRight + amount > bodyBoundry ) {
                reject( { bodyBoundry, elRight, amount });
            }
            else {
                element.style.transform = `translateX(${currLeft + amount}px)`
                resolve();
            }
        }, delay );
    } ); 
};

const btn = document.querySelector('button');

// moveX(btn, 100, 1000)
//     .then(() => moveX(btn, 100, 1000))
//     .then(() => moveX(btn, 100, 1000))
//     .then(() => moveX(btn, 100, 1000))
//     .catch(( { bodyBoundry, amount, elRight }) => {
//         console.log(`Cannot Move! Body is ${bodyBoundry}px wide`);
//         console.log(`Element is at ${elRight}px ${amount}px is too large!`);
//     })


// ///////
// async /
// ///////
// performing the same function with async function

// async function animateRight(el) {
//     await moveX( el, 100, 1000 );
//     await moveX( el, 100, 1000 );
//     await moveX( el, 100, 1000 );
//     await moveX( el, 100, 1000 );
//     await moveX( el, 100, 1000 );
//     await moveX( el, 100, 1000 );
//     await moveX( el, 100, 1000 );
    
// }
// animateRight(btn).catch((err) => {
//     console.log(err)
// });

// specify amount
async function animateRight( el, amt ) {
    await moveX( el, amt, 1000 );
    await moveX( el, amt, 1000 );
    await moveX( el, amt, 1000 );
    await moveX( el, amt, 1000 );
    await moveX( el, amt, 1000 );
    await moveX( el, amt, 1000 );
    await moveX( el, amt, 1000 );
    
}
animateRight(btn, 100).catch( (err) => {
    console.log(err)
});



