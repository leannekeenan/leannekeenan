const characters = [
  { name: 'Carri Letters', affiliation: 'Dwarves', location: 'Erebor', details: 'Leader of the Dwarves', image: './images/Carri Letters.png' },
  { name: 'Kyu', affiliation: 'Wizards', location: 'Middle-Earth', details: 'Wise and powerful', image: './images/Kyu Osmodius Underwood Gailwind Higglsbee.png' },
  { name: 'Paige Turnner', affiliation: 'Rangers', location: 'Gondor', details: 'King of Gondor', image: './images/Paige Turnner.png' },
  { name: 'Scarlet Letters', affiliation: 'Dwarves', location: 'Erebor', details: 'Sister of Carri Letters. While her sister went the way of diplomacy she went the way of piracy and their relationship while strained by their career paths never waivered in their undying loyalty to each other.', image: './images/Carri Letters.png' }
];

document.addEventListener('DOMContentLoaded', () => {
  displayCharacters(characters);
});

function displayCharacters(characters) {
  const characterList = document.getElementById('character-list');
  characterList.innerHTML = '';
  characters.forEach(character => {
    const characterCard = document.createElement('div');
    characterCard.classList.add('character-card');

    // Create the image element
    const characterImage = document.createElement('img');
    characterImage.src = character.image;
    characterImage.alt = `${character.name} image`;
    characterImage.classList.add('character-image'); // Optional: add a class for styling

    // Create the text container
    const characterDetails = document.createElement('div');
    characterDetails.classList.add('character-details');
    characterDetails.innerHTML = `
      <h3>${character.name}</h3>
      <p><strong>Affiliation:</strong> ${character.affiliation}</p>
      <p><strong>Location Met:</strong> ${character.location}</p>
      <p><strong>Details:</strong> ${character.details}</p>
    `;

    // Append the image and text to the card
    characterCard.appendChild(characterImage);
    characterCard.appendChild(characterDetails);
    characterList.appendChild(characterCard);
  });
}

function searchCharacters() {
  const searchQuery = document.getElementById('search').value.toLowerCase();
  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchQuery) ||
    character.affiliation.toLowerCase().includes(searchQuery) ||
    character.location.toLowerCase().includes(searchQuery) ||
    character.details.toLowerCase().includes(searchQuery)
  );
  displayCharacters(filteredCharacters);
}
