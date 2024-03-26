
let body = document.querySelector('body')
let gameDeck = document.getElementById('game-deck');
let forge = document.getElementById('forge');
let scout = document.getElementById('scout');
let investigate = document.getElementById('investigate');
let consider = document.getElementById('consider');
let boost = document.getElementById('boost');
let river = document.getElementById('river');
let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let discard = document.getElementById('discard');
let effects = document.getElementById('effects');



let deck = document.getElementById('deck');

let backOfCard = '/Dungeon Crawl Card Game/assets/images/cards/deck.png'
let rightPath = '/Dungeon Crawl Card Game/assets/images/cards/Right Path.png';
let deadEnd = '/Dungeon Crawl Card Game/assets/images/cards/Dead End.png';
let trap = '/Dungeon Crawl Card Game/assets/images/cards/Trap.png';
let monster = '/Dungeon Crawl Card Game/assets/images/cards/Monster.png';
let treasure = '/Dungeon Crawl Card Game/assets/images/cards/Treasure.png';

let cards = [rightPath, deadEnd, trap, monster, treasure];
let card;

let riverState = {
    cards: [],
    flipped: [false, false, false]
}

let gameState = {
    
}

function initializeRiver() {
    for (let i = 0; i < 3; i++) {
        let card = document.createElement('img');
        card.src = backOfCard;
        gameRiver.appendChild(card);
        riverState.cards.push(backOfCard);
    }
}

function flipCard(index) {
    if (!riverState.flipped[index]) {
        riverState.flipped[index] = true;
        gameRiver.children[index].src = riverState.cards[index];
    }
}

function randomize() {
    let randomizer1 = Math.floor(Math.random() * cards.length);
    let randomizer2 = Math.floor(Math.random() * cards.length);
    let randomizer3 = Math.floor(Math.random() * cards.length);

    let randomCard1 = cards[randomizer1];
    let randomCard2 = cards[randomizer2];
    let randomCard3 = cards[randomizer3];

    console.log(randomCard1);
    console.log(randomCard2);
    console.log(randomCard3);

    let cardStyle = window.getComputedStyle(document.querySelector('.card'));
    let cardWidth = parseFloat(cardStyle.width);
    let cardHeight = parseFloat(cardStyle.height);
 
    let newCard1 = document.createElement('img');
    let newCard2 = document.createElement('img');
    let newCard3 = document.createElement('img');

    newCard1.src = randomCard1;
    newCard1.height = cardHeight;
    newCard1.width = cardWidth
    newCard2.src = randomCard2;
    newCard2.height = cardHeight;
    newCard2.width = cardWidth
    newCard3.src = randomCard3;
    newCard3.height = cardHeight;
    newCard3.width = cardWidth
 
    card1.innerHTML = ''; // Clear existing content in card1
    card2.innerHTML = ''; // Clear existing content in card2
    card3.innerHTML = ''; // Clear existing content in card3
 
    card1.appendChild(newCard1);
    card2.appendChild(newCard2);
    card3.appendChild(newCard3);
   
   
}
randomize()






/*
*---What do I want to have happen---*

+ Create 5 different cards with five types of cards: 
    right path
    dead end
    trap
    monster
    treasure

[
    + Build a deck of 55 cards using the five card value types. It should contain:
    15 right path cards
    15 dead end cards
    10 traps
    10 monsters 
    5 treasures
]

+ Begin the game with an empty river

+ Allow the deck to randomly select one of the 55 cards in the deck as values for the river cards

+ When a player clicks the deck once, a card in placed face down in object card1 within the river object.

+ When a player clicks the deck again, a card is placed face down in object card2 within the river object.

+ When a player clicks the deck a third time, a card is placed face down in object card3 within the river object.

+ If the player clicks the deck when the river is full, an alert informs the player they must clear a space in the river before asking for another card

+ Once the river is full, player will have the option to select an action/effect from the table to apply to their turn

    + When a player clicks the "forge" action, two additional right path cards are randomly added to the deck increasing the total number of playing cards by 2 each time it is selected

    + When a player clicks the "scout" action, the next card in the deck array will be shown in the effects section.

        - once the scout card is displayed, players will have to choose the card in the effects section or a card in the river to continue game play.

            + If the player chooses the revealed card from the scout selection, the game progresses as usual. River is not affected

            + if the player chooses a card in the river, the scout card is removed from the effects object and the card choosen by the player is removed from the river

    + When a player clicks the "elementary" action, three cards are placed in the effects section
        - of these three cards, players must choose one
        - place choosen card at the bottom of the deck
        - shuffle the deck
        - place deck on top of card just placed at the bottom of the deck

    + When a player clicks the "consider" action, the player can reveal two cards in the virer instead of just one
        - Of the two showing, the player can choose one
        - once choosen, the deck needs to be clicked to add a new card to the deck

    + When a player clicks the "morale" action, if the river contains a dead end card, it is removed and replaced with a new card from the deck

+ If no effects are choosen, a player can still choose a card from the river to reveal

+ When a player clicks a face down card in the river, the card is fliped to reveal its card type

+ Once the card has its type revealed, when clicked again, the card is placed in the "discard" deck

+ Once a card is revealed within the river, it remains in place until all cards in the river are revealed

+ if a "Right Path" card is revealed in teh river, all cards in the river get placed in teh discard pile and three more cards need to be pulled from the deck

+ If all three river cards are all the same card, reshuffle the deck and start again

Once all 55 cards have been played, the player can click the empty deck to reshuffle the cards and present a new deck, keeping any current cards in play 

*/
deck.addEventListener('click', randomize)