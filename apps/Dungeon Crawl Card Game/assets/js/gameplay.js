let body = document.querySelector('body')
//game deck 
let deck = document.getElementById('deck');
//game river
let river = document.getElementById('river');
//river cards
let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');

//deck image element
let backOfCard = '/Dungeon Crawl Card Game/assets/images/cards/deck.png';
//card image elements
let rightPath = '/Dungeon Crawl Card Game/assets/images/cards/Right Path.png';
let deadEnd = '/Dungeon Crawl Card Game/assets/images/cards/Dead End.png';
let trap = '/Dungeon Crawl Card Game/assets/images/cards/Trap.png';
let monster = '/Dungeon Crawl Card Game/assets/images/cards/Monster.png';
let treasure = '/Dungeon Crawl Card Game/assets/images/cards/Treasure.png';
//card array
let cards = [rightPath, deadEnd, trap, monster, treasure];

//event handler for randomizing the cards in the deck
deck.addEventListener('click', randomize);

//function for the event handler to randomize the cards in the deck
function randomize() {



    let randomCards = [];
    for (let i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * cards.length);
        let randomCard = cards[randomIndex];
        randomCards.push(randomCard);
    }

    card1.innerHTML = `<img src="${backOfCard}" data-face="${randomCards[0]}" />`;
    card2.innerHTML = `<img src="${backOfCard}" data-face="${randomCards[1]}" />`;
    card3.innerHTML = `<img src="${backOfCard}" data-face="${randomCards[2]}" />`;

    card1.firstChild.addEventListener('click', toggleCardFace);
    card2.firstChild.addEventListener('click', toggleCardFace);
    card3.firstChild.addEventListener('click', toggleCardFace);
}

function toggleCardFace(event) {
    let card = event.target;
    let backOfCardSrc = card.dataset.face;
    if (card.src.includes(backOfCardSrc)) {
        card.src = backOfCard;
    } else {
        card.src = backOfCardSrc;
    }
}

randomize(); // Initialize the game when the page loads

