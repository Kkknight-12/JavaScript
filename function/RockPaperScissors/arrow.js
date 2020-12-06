// const resetGameBtn = document.getElementById('reset-game-btn');
// resetGameBtn.addEventListener( 'click', () => {
//     gameIsRunning = false;

//     console.log('Game is Restarting....');
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


// 
// 
const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK',
PAPER = 'PAPER',
SCISSORS = 'SCISSORS',
DEFAULT_CHOICE = 'ROCK',
RESULT_DRAW = 'DRAW',
RESULT_PLAYER_WINS = 'PLAYER WINS',
RESULT_COMPUTER_WINS = 'COMPUTER WINS' ;


let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if(
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_CHOICE} for you!`);
        return DEFAULT_CHOICE;
        // return;
    }
    return selection;
};

const getComputerChoice = ()=> {
    const randomValue = Math.random();
    if( randomValue < 0.34) {
        return ROCK;
    } else if( randomValue < 0.67){
        return PAPER;
    } else {
        return SCISSORS;
    }
};

// const getWinner = ( cChoice, pChoice ) => {
//     return cChoice === pChoice   // if
//         ? RESULT_DRAW        // { }
//         : (cChoice === ROCK && pChoice === PAPER) || // else if
//           (cChoice === PAPER && pChoice === SCISSORS)||
//           (cChoice === SCISSORS && pChoice === ROCK)

//         ? RESULT_PLAYER_WINS // { }
//         : RESULT_COMPUTER_WINS; // else
//     }

// as we return one value we can remove the curly bracket and return
const getWinner = ( cChoice , pChoice = DEFAULT_CHOICE ) => 
    cChoice === pChoice   // if
        ? RESULT_DRAW        // { }
        : (cChoice === ROCK && pChoice === PAPER) || // else if
          (cChoice === PAPER && pChoice === SCISSORS)||
          (cChoice === SCISSORS && pChoice === ROCK)

        ? RESULT_PLAYER_WINS // { }
        : RESULT_COMPUTER_WINS; // else

startGameBtn.addEventListener( 'click', () => {
    if(gameIsRunning){
        return;
    } else {
    gameIsRunning = false;
    console.log('Game is starting....');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner( computerChoice, playerChoice );
        if (computerChoice === playerChoice) {
            console.log(`Both choose ${playerChoice}`)
        } else{
            console.log(`player choice was ${playerChoice} while computer choice was ${computerChoice}`)
        }
    console.log(winner);
    };
});
