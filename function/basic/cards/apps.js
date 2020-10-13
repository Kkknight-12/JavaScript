// function getCard(){
//     const values =
//     ['1','2','3','4','5','6','7','8','9','10','J','Q','K',
//         'A'];
//     const valIdx = Math.floor(Math.random() * values.length);
//     // return values[valIdx];
//     const value = values[valIdx]
//     // 

//     const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
//     const suitsIdx = Math.floor(Math.random() * suits.length);

//     const suit = suits[suitsIdx];
//     // return suit;
//     // console.log(value, suit);
//     return { value: value, suit: suit}

// }

// console.log(getCard());

// 
// 

// Refactoring the code
function pick(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function gettCard() {
    const values =
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    return { value: pick(values), suit: pick(suits) }
}
console.log(gettCard());










