// creating multiple decks
// storing the function in variable name makeDeck
// when you will call makeDeck it will return the whole function
// so now it can be used mutiple time to create new decks
const  makeDeck = () => {
return {
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

}
// creating deck named myDeck
const myDeck = makeDeck();
// intializing myDeck
myDeck.initializeDeck();
// checking number of cards in myDeck
console.log(myDeck);
// drawing a card from myDeck
console.log(myDeck.drawCard());
// checking number of cards left in myDeck
console.log(myDeck);

// 
// creating deck 2
const deck2 = makeDeck();
deck2.initializeDeck();
// checking the number of cards in deck2
console.log(deck2)
// as it can be seen myDeck events have no affect on
// newly created deck2