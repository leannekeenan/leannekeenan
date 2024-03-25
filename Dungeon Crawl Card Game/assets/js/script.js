
let body = document.querySelector('body')
let gameDeck = document.getElementById('game-deck');
let forge = document.getElementById('forge');
let scout = document.getElementById('scout');
let investigate = document.getElementById('investigate');
let consider = document.getElementById('consider');
let boost = document.getElementById('boost');
let gameRiver = document.getElementById('game-river');
let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let discard = document.getElementById('discard');
let effects = document.getElementById('effects');


let forest = document.getElementById('forest');
let castle = document.getElementById('castle');
let mountain = document.getElementById('mountain');
let skyFortress = document.getElementById('skyFortress');
let planes = document.getElementById('planes');
let swamp = document.getElementById('swamp');
let underground = document.getElementById('underground');
let kingdomEntry = document.getElementById('kingdomEntry');


let menu = document.getElementById('menu')


forest.addEventListener('click', forestBackground)
castle.addEventListener('click', castleBackground)
mountain.addEventListener('click', mountainBackground)
skyFortress.addEventListener('click', skyFortressBackground)
planes.addEventListener('click', planesBackground)
swamp.addEventListener('click', swampBackground)
underground.addEventListener('click', undergroundBackground)
kingdomEntry.addEventListener('click', kingdomEntryBackground)

menu.addEventListener('change', select)

function forestBackground() {
document.body.style.backgroundImage = "url('/Dungeon Crawl Card Game/assets/images/dungeons/forest at sunset.jpg')";
}

function castleBackground() {
document.body.style.backgroundImage = "url('/Dungeon Crawl Card Game/assets/images/dungeons/mysterious castle.jpg')";
}

function swampBackground() {
    document.body.style.backgroundImage = "url('/Dungeon Crawl Card Game/assets/images/dungeons/swamptown.jpg')";
}

function mountainBackground() {
document.body.style.backgroundImage = "url('/Dungeon Crawl Card Game/assets/images/dungeons/mountainside tavern.jpg')";
}

function skyFortressBackground() {
    document.body.style.backgroundImage = "url('/Dungeon Crawl Card Game/assets/images/dungeons/sky fortress.jpg')";
}

function planesBackground() {
    document.body.style.backgroundImage = "url('/Dungeon Crawl Card Game/assets/images/dungeons/sun dappled planes.jpg')";
}

function undergroundBackground() {
    document.body.style.backgroundImage = "url('/Dungeon Crawl Card Game/assets/images/dungeons/underground cavern.jpg')";
}

function kingdomEntryBackground() {
 document.body.style.backgroundImage = "url('/Dungeon Crawl Card Game/assets/images/dungeons/default.jpg')";
}

function select() {
    let option = menu.value;

    switch(option) {
        case 'forest': forestBackground();
        break;
        case 'castle': castleBackground();
        break;
        case 'swamp': swampBackground();
        break;
        case 'mountain': mountainBackground();
        break;
        case 'skyFortress': skyFortressBackground();
        break;
        case 'planes': planesBackground();
        break;
        case 'underground': undergroundBackground();
        break;
        default : kingdomEntryBackground()
    }
}

select()

/*
*---What do I want to have happen---*

+ Create 5 different cards with five types of cards: 
    right path
    dead end
    trap
    monster
    treasure

+ Build a deck using the five card value types. It should contain:
    15 right path cards
    15 dead end cards
    10 traps
    10 monsters 
    5 treasures

+ Allow the deck to randomly select one of the 55 cards in the deck as values for the river cards

+ When a player clicks the deck once, a card in placed face down in object card1 within the river object.

+ When a player clicks the deck again, a card is placed face down in object card2 within the river object.

+ When a player clicks the deck a third time, a card is placed face down in object card3 within the river object.

+ If the player clicks the deck when the river is full, an alert informs the player they must clear a space in the river before asking for another card


+ Once a card is revealed within the river, it remains in place until all cards in the river are revealed

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

    + When a player clicks the consider action, the player can reveal two cards in the virer instead of just one
        - Of the two showing, the player can choose one
        - once choosen, the deck needs to be clicked to add a new card to the deck

    + When a player clicks the morale action, if the river contains a dead end card, it is removed and replaced with a new card from the deck

+ If no effects are choosen, a player can still choose a card from the river to reveal

+ If all three river cards are all the same card, reshuffle the deck and start again


*/
