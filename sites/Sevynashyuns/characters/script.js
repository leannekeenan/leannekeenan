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
    name: 'Scarlett Letters', 
    race: 'Tiefling', 
    class: 'Rogue', 
    title: 'Pirate', 
    location: '', 
    from: '', 
    image: './images/Scarlett Letters.png', 
    notes: 'Captain of the Mailstrom. Sister of Carri Letters. While her sister went the way of diplomacy she went the way of piracy, and their relationship, while strained by their career paths, never wavered in their undying loyalty to each other.'
  },

  { 
    name: 'Mel Odious', 
    race: 'Tiefling', 
    class: 'Bard', 
    title: 'Entertainer', 
    location: '', 
    from: '', 
    image: '', 
    notes: ''
  },

  { 
    name: 'Beau Tye', 
    race: 'Human', 
    class: 'Bard', 
    title: 'Entertiner', 
    location: '', 
    from: '', 
    image: '', 
    notes: ''
  },

  { 
    name: 'Chuck Elle Hutt', 
    race: 'Halfling', 
    class: 'Entertainer', 
    title: '', 
    location: '', 
    from: '', 
    image: '', 
    notes: ''
  }

  ,{ 
    name: 'Baylor Quick', 
    race: 'Half Elf', 
    class: 'Rogue', 
    title: 'Entertainer [Musician]', 
    location: '', 
    from: '', 
    image: './images/Baylor Quick .png', 
    notes: `
    <li>Personality: Cunning and resourceful, Baylor uses charm and wit to manipulate social situations to their advantage. Known for their clever comebacks and ability to read people, Baylor is skilled at gaining allies and influencing people, but their loyalty can be fickle. </li>
    <br>
    <li>Backstory: Baylor Quick grew up in a wealthy family, constantly surrounded by the rich and powerful. With a natural talent for deception and performance, they quickly rose to prominence in the noble circles. They gained fame not just for their style but for their cunning ability to outwit rivals and secure advantageous deals. However, Baylor also harbors a secret: they’ve been using their skills to spy on powerful figures and gather information to protect their own interests.</li>
  
    `
  },
  {
    name: 'Al Leave', 
    race:'Half Elf',
    class: 'Druid',
    title: 'Herbalist',
    location: '',
    from: '',
    image: '',
    notes: `
    <li></li>
    `
  },

  {
    name: '', 
    race:'',
    class: '',
    title: '',
    location: '',
    from: '',
    image: '',
    notes: `
    <li></li>
    `
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
