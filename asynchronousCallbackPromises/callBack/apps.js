// setTimeout
// allow you to schedule asynchronous actions. 
// In other words, actions that we initiate now, but 
// they finish later.
const btn = document.querySelector('button');

// /////////////////////////////////////////////////
// setTimeout(function(){ alert("Hello"); }, 3000);/
// setTimeout(() => { }, time);                    /
// /////////////////////////////////////////////////


// setTimeout(() => {
//      btn.style.transform = `translateX(100px)`;
//      setTimeout(() => {
//         btn.style.transform = `translateX(200px)`;
//         setTimeout(() => {
//             btn.style.transform = `translateX(300px)`;
//         }, 1000);
//     }, 1000);
// }, 1000);


// callbackfunction
// This technique allows a function to call another function
// A callback function can run after another function has finished

const moveX  = (element, amount, delay, callback) => {
    setTimeout(()=>{
        element.style.transform = `translateX( ${amount}px )`;
        // callback will call the function again
        if (callback) callback();
    }, delay);
};

// moveX(btn, 100, 1000, () => {
//     moveX(btn, 200, 1000, () => {
//         moveX(btn, 300, 1000, () => {
//         });
//      });
// });

// 
// rewrite function 
// updating distance from left everytime button move
const movEX  = (element, amount, delay, callback) => {
    // callback will call backthe function to run again
    // everytime time the function run it will take the 
    // updated left value and add x distance to it
    const currLeft = element.getBoundingClientRect().left;

    setTimeout(() => {
        element.style.transform = `translateX( ${ currLeft + amount }px )`;
        // callback will call the function again
        if (callback) callback();
    }, delay);
};

// movEX(btn, 100, 1000, () => {
//     movEX(btn, 100, 1000, () => {
//         movEX(btn, 100, 1000, () => {
//         });
//      });
// });


// if the amount entered to move is greater than the 
// border boundry then stop function
const moVEX  = (element, amount, delay, callback) => {
    const bodyBoundry = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    const currLeft = element.getBoundingClientRect().left;
    
    if (elRight + amount > bodyBoundry){
        console.log("Bas Kero Limit Agai")
    }else {
        setTimeout(()=>{
            element.style.transform = `translateX( ${ currLeft + amount }px )`;
            // callback will call the function again
            if (callback) callback();
        }, delay);
    }
};

moVEX(btn, 100, 1000, () => {
    moVEX(btn, 100, 1000, () => {
        moVEX(btn, 1000, 1000, () => {
        });
     });
});

