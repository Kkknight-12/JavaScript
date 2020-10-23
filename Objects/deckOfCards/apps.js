// creating a deck of 52 card
function makeDeck (){
    // empty array
    const deck =[];
    // taking in all the different value, suit of card
    const suits = ['hearts','diamond','spades','clubs'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';

    // iterating over values 2,3,4.....
    for(let value of values.split(",")){
        // nesting suits on each each value
        // 2:heart, 2:diamond, 2: spades........
        for(let suit of suits){
            // pusing these value to arrat deck
            deck.push({
                value,
                suit
            })
        }
    }
    return deck;
}

// deck of 52 cards
console.log(makeDeck());
// 
const myDeck = makeDeck();


// function to taking a card off from deck
function drawCard(deck){
    return deck.pop()
}
// console.log(drawCard(makeDeck()))

// 
const cardOne = drawCard(makeDeck());
console.log(cardOne);

// ////////////////////////////////////////////////////////
// creating an object to store deck                       /
// drawing a card will update the array deck with -1 card /
// ////////////////////////////////////////////////////////

const myNewDeck = {
    // creating a property deck 
    // which start with empty array
    deck: [],

    // stores the drawn card
    drawnCards: [],
    // 
    suits:['hearts','diamond','spades','clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',

    // it will update deck property
    initializeDeck(){

    const {suits, values, deck} = this;

    // iterating over values 2,3,4.....
    for(let value of values.split(",")){
        // nesting suits on each each value
        // 2:heart, 2:diamond, 2: spades........
        for(let suit of suits){
            // pusing these value to arrat deck
            deck.push({
                value,
                suit
            })
        }
    }
    // return deck;

    },
    // drawing cards
    drawCard() {
        const card =  this.deck.pop();
        // pushing the poped card to empty array drawnCards
        this.drawnCards.push(card);
        // return which card is poped from deck
        return card;
    },

    // draw multiple cards
    drawMultiple(numCards){
        // saving the cards draw in array cards
        const cards = [];
        for(let i = 0; i< numCards; i++){
            // calling the drawCard function
            // number of times = numCards
            // each time function is called 
            // a card will be drawn from deck
            cards.push(this.drawCard());
        }
        // returning the array of drawn cards
        return cards;
    }
  
}
// 
// invoke function to create a deck of card in array deck
console.log(myNewDeck.initializeDeck())
// 
// check the card in deck
console.log(myNewDeck.deck)
// 
// draw a card
console.log(myNewDeck.drawCard())
// 
// checking deck for number of card left
// after one draw one card is removed from deck
console.log(myNewDeck.deck);
// 
// drawing multiple cards
// say 5 cards
console.log(myNewDeck.drawMultiple(5))
// checking deck for number of card left
// after drawing multiple cards from deck
console.log(myNewDeck.deck);