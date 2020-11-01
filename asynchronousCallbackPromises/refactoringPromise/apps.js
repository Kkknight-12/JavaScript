const btn = document.querySelector('button');

const moVEX  = ( element, amount, delay  ) => {

    return new Promise( (resolve, reject) => {
    setTimeout(()=> {
        const bodyBoundry = document.body.clientWidth;
        const elRight = element.getBoundingClientRect().right;
        const currLeft = element.getBoundingClientRect().left;
        
        if ( elRight + amount > bodyBoundry ) {
            console.log("Bas Kero Limit Agai")
            reject( { bodyBoundry, elRight } );
        }else {
            element.style.transform = `translateX( ${ currLeft + amount }px )`;
            // callback will call the function again
            resolve();
            }
        }, delay);
    });
};

// first move
// moVEX( btn, 100, 1000 )
//     .then( () => {
//         return moVEX( btn, 500, 1000 )
//     })
//     .then( () => {
//     console.log( 'Done Moving!' ) 
//     })
//     .catch( () => {
//         console.log( 'Can\'t Move Out Of Space' )
//     })

// with arrow function we can implicit return

moVEX( btn, 50, 1000 )
    .then( () => moVEX( btn, 50, 1000 ) )
    .then( () => moVEX( btn, 100, 1000 ) )
    .then( () => moVEX( btn, 500, 1000 ) )
    .then( () => console.log( 'Done Moving!' ) )
    // .catch( () => console.log( 'Can\'t Move Out Of Space' ));
    .catch( ( { bodyBoundry, amount, elRight } ) => {
        console.log( `Body is ${bodyBoundry}px wide` );
        console.log( `Element is at ${elRight}px, ${amount}px is too large` );
    });


    