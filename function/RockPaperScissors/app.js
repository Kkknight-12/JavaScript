const startGameBtn = document.getElementById('start-game-btn');


function startGame(){
    console.log('Game is starting....')
}

startGameBtn.addEventListener( 'click', startGame )

const person = {
    greet: function (){
        console.log('yoo')
    }
}

person.greet();