const characters = [
  { 
    name: 'Carri Letters', 
    race: 'Tiefling', 
    class: 'Rogue', 
    title: ' Apathian Burreaucrat', 
    previous: "Iratian Soldier", 
    location: 'Apathe', 
    from: 'Irateia', 
    image: './images/Carri Letters.png', 
    notes: ''
  },

  { 
    name: 'Kyu', 
    race: 'Wizard', 
    class: '', 
    title: 'Wise and powerful', 
    location: 'Middle-Earth', 
    from: '', 
    image: './images/Kyu Osmodius Underwood Gailwind Higglsbee.png', 
    notes: ''
  },

  { 
    name: 'Paige Turnner', 
    race: '', 
    class: 'Ranger', 
    title: 'King of Gondor', 
    location: 'Gondor', 
    from: '', 
    image: './images/Paige Turnner.png', 
    notes: ''
  },

  { 
    name: 'Scarlet Letters', 
    race: 'Tiefling', 
    class: 'Rogue', 
    title: 'Pirate', 
    location: '', 
    from: '', 
    image: './images/Carri Letters.png', 
    notes: 'Sister of Carri Letters. While her sister went the way of diplomacy she went the way of piracy, and their relationship, while strained by their career paths, never wavered in their undying loyalty to each other.'
  },

  { 
    name: '', 
    race: '', 
    class: '', 
    title: '', 
    location: '', 
    from: '', 
    image: '', 
    notes: ''
  }
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
      <p><strong>Race:</strong> ${character.race}</p>
      <p><strong>Class:</strong> ${character.class}</p>
      <p><strong>Title:</strong> ${character.title}</p>
      <p><strong>Previous Position:</strong> ${character.previous}</p>
      <p><strong>Location:</strong> ${character.location}</p>
      <p><strong>From:</strong> ${character.from}</p>
      <p><strong>Notes:</strong> ${character.notes}</p>
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
    character.race.toLowerCase().includes(searchQuery) ||
    character.class.toLowerCase().includes(searchQuery) ||
    character.title.toLowerCase().includes(searchQuery) ||
    character.previous.toLowerCase(includes(searchQuery))||
    character.location.toLowerCase().includes(searchQuery) ||
    character.from.toLowerCase().includes(searchQuery) ||
    character.notes.toLowerCase().includes(searchQuery)
  );
  displayCharacters(filteredCharacters);
}
