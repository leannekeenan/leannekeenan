
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
