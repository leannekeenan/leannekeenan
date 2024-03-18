
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


let frost = document.getElementById('frost');
let grassland = document.getElementById('grassland');
let meadow = document.getElementById('meadow');
let mountain = document.getElementById('mountain');
let stone = document.getElementById('stone');
let swamp = document.getElementById('swamp');
let underground = document.getElementById('underground');
let reset = document.getElementById('reset');

let menu = document.getElementById('menu')


frost.addEventListener('click', frostBackground)
grassland.addEventListener('click', grasslandBackground)
meadow.addEventListener('click', meadowBackground)
mountain.addEventListener('click', mountainBackground)
stone.addEventListener('click', stoneBackground)
swamp.addEventListener('click', swampBackground)
underground.addEventListener('click', undergroundBackground)
reset.addEventListener('click', resetBackground)

menu.addEventListener('change', select)

function frostBackground() {
document.body.style.backgroundImage = "url('/Dungeon Crawl Card Game/assets/images/dungeons/frost palace.jpg')";
}

function grasslandBackground() {
document.body.style.backgroundImage = "url('/Dungeon Crawl Card Game/assets/images/dungeons/grassland temple.jpg')";
}

function meadowBackground() {
document.body.style.backgroundImage = "url('/Dungeon Crawl Card Game/assets/images/dungeons/meadow cavern.jpg')";
}

function mountainBackground() {
    document.body.style.backgroundImage = "url('/Dungeon Crawl Card Game/assets/images/dungeons/mountain cavern.jpg')";
}

function stoneBackground() {
    document.body.style.backgroundImage = "url('/Dungeon Crawl Card Game/assets/images/dungeons/stone castle.jpg')";
}

function swampBackground() {
    document.body.style.backgroundImage = "url('/Dungeon Crawl Card Game/assets/images/dungeons/swamp.jpg')";
}

function undergroundBackground() {
    document.body.style.backgroundImage = "url('/Dungeon Crawl Card Game/assets/images/dungeons/underground ertrance.jpg')";
}

function resetBackground() {
 document.body.style.backgroundImage = "url('/Dungeon Crawl Card Game/assets/images/dungeons/dungeon-default.jpg')";
}

function select() {
    let option = menu.value;

    switch(option) {
        case 'frost': frostBackground();
        break;
        case 'grassland': grasslandBackground();
        break;
        case 'meadow': meadowBackground();
        break;
        case 'mountain': mountainBackground();
        break;
        case 'stone': stoneBackground();
        break;
        case 'swamp': swampBackground();
        break;
        case 'underground': undergroundBackground();
        break;
        default : resetBackground()
    }
}

select()
