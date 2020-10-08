const target = Math.floor(Math.random() * 10);
console.log(`target is ${target}`);
console.log("--------------");
let guess = Math.floor(Math.random() * 10);

while (true) {
  if (target === guess) break;
  // if not over then guess random number
  console.log(`guess was ${guess}`);
  console.log("--------------");
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);

console.log("=============");
console.log("=============");
//
// if gameover end game
let gameOver = false;
guess = Math.floor(Math.random() * 10);
while (!gameOver) {
  if (target === guess) {
    gameOver = true;
    console.log(`Target: ${target} Guess: ${guess}`);
    console.log("Game Over");
    break;
  }
  // if not over then guess random number
  else {
    console.log(`guess was ${guess}`);
    console.log("--------------");
    guess = Math.floor(Math.random() * 10);
  }
}
