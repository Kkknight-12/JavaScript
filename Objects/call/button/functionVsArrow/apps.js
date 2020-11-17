
class Timer {
    constructor( durationInput, startButton, pauseButton ) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        // normal function
        // this.startButton.addEventListener( 'click', this.start.bind(this) );

        // arrow function
        this.startButton.addEventListener( 'click', this.start );
    }

    start = () => {
        // as this in  arrow function refer to the object it was created in 
        // this will refer to Timer
        // Timer.importantMethodToCall();
        this.importantMethodToCall();
    }

    // start(){
    // // here this will refer to all the properties[start, importantMethodToCall]
    // //  and parameter iside constructor of class 
    //     this.importantMethodToCall();
    // }

    importantMethodToCall(){
        console.log('Important Thing Was Done!!!')
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document. querySelector('#start');
const pauseButton = document.querySelector('#pause')

const timer = new Timer( durationInput, startButton, pauseButton );
timer.start();


// 
// class Timer2 {
//     constructor( durationInput, startButton, pauseButton ) {
//         this.durationInput = durationInput;
//         this.startButton = startButton;
//         this.pauseButton = pauseButton;
//         // value of [this] inside the constructor 
//         // will be bind inside whatever function is called in 
//         this.startButton.addEventListener( 'click', this.start.bind(this) );   
//     }

//     start(){
//         // here this will refer to all the properties[start, importantMethodToCall]
//         //  and parameter iside constructor of class 
//         this.importantMethodToCall();
//     }

//     importantMethodToCall(){
//         console.log('Important Thing Was Done!!!')
//     }
// }

// const durationInput = document.querySelector('#duration');
// const startButton = document. querySelector('#start');
// const pauseButton = document.querySelector('#pause')

// const timer = new Timer2( durationInput, startButton, pauseButton );
// timer.start();