// const resetGameBtn = document.getElementById('reset-game-btn');
// resetGameBtn.addEventListener( 'click', function(){
//     gameIsRunning = false;
// })
// //////////////////////////////////////////////////////////////////


// 
// const startGameBtn = document.getElementById('start-game-btn');

// const ROCK = 'ROCK',
// PAPER = 'PAPER',
// SCISSORS = 'SCISSORS',
// DEFAULT_CHOICE = 'ROCK',
// RESULT_DRAW = 'DRAW',
// RESULT_PLAYER_WINS = 'PLAYER WINS',
// RESULT_COMPUTER_WINS = 'COMPUTER WINS' ;


// let gameIsRunning = false;

// const getPlayerChoice = function(){
//     const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();

//     if(
//         selection !== ROCK &&
//         selection !== PAPER &&
//         selection !== SCISSORS
//     ) {
//         alert(`Invalid choice! We chose ${DEFAULT_CHOICE} for you!`);
//         return DEFAULT_CHOICE;
//     }
//     return selection;
// };

// const getComputerChoice = function() {
//     const randomValue = Math.random();
//     if( randomValue < 0.34) {
//         return ROCK;
//     } else if( randomValue < 0.67){
//         return PAPER;
//     } else {
//         return SCISSORS;
//     }
// };

// const getWinner = function( cChoice, pChoice ){
//     if( cChoice === pChoice ){
//         return RESULT_DRAW;
//     } else if( 
//         (cChoice === ROCK && pChoice === PAPER) ||
//         (cChoice === PAPER && pChoice === SCISSORS)||
//         (cChoice === SCISSORS && pChoice === ROCK)
//     ) {
//         return RESULT_PLAYER_WINS;
//     } else{
//         return RESULT_COMPUTER_WINS;
//     }
// };

// startGameBtn.addEventListener( 'click', function(){
//     if(gameIsRunning){
//         return;
//     }
//     gameIsRunning = true;
//     console.log('Game is starting....');
//     const playerChoice = getPlayerChoice();
//     const computerChoice = getComputerChoice();
//     const winner = getWinner( computerChoice, playerChoice );
//         if (computerChoice === playerChoice) {
//             console.log(`Both choose ${playerChoice}`)
//         } else{
//             console.log(`player choice was ${playerChoice} while computer choice was ${computerChoice}`)
//         }
//     console.log(winner);
// });