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
    notes: `
    <li>
    Carri Letters is a seasoned messenger for the Apathian government, known for her sharp wit and unrivaled efficiency. She has spent years navigating the intricacies of Apathian bureaucracy, learning to thrive in the sluggish, politically charged environment where others might falter. 
    </li>
    <li>
    Now a trusted courier for the highest-ranking officials in Apathe, Carri balances the sharp intellect and ambition of her Adoreon roots with the pragmatism and discretion demanded by Apathe’s ruling class. Her deep connections to both city-states and her understanding of their cultures make her invaluable in delivering sensitive political messages
    </li>
    `
  },

  { 
    name: 'Kyu Osmodius Underwood Gailwind Higglsbee', 
    race: 'Wizard', 
    class: '', 
    title: 'Wise and powerful', 
    location: 'Middle-Earth', 
    from: '', 
    image: './images/Kyu Osmodius Underwood Gailwind Higglsbee.png', 
    notes: `
    <li>
    Kyu grew up among the resilient and fiercely proud artisans of Arrogan, a city-state where craftsmanship is revered as the highest form of expression. As a dwarf from Arrogan, Kyu's early life was rooted in tradition, working tirelessly to hone his skills in forging, building, and crafting. But Kyu’s curiosity extended beyond physical creation; he was drawn to the allure of knowledge itself, which led him to Adoreon’s archives. There, he became an Archivist, poring over volumes of texts, maps, and forgotten lore that deepened his knowledge of ancient mechanisms, arcane relics, and powerful artifacts.
    </li>
    <li>
    Eventually, Kyu was appointed by the Apathian government as the party's quartermaster, tasked with managing their supplies, logistics, and equipment—a role well-suited to his discerning eye and practical knowledge. His time as an archivist sharpened his ability to spot relics with hidden potential, and his Arrogan background taught him to recognize quality in even the simplest tools. Known for his gruff humor and no-nonsense attitude, Kyu takes pride in adapting, retrofitting, and enhancing gear, transforming everyday items into resources ready for any unexpected challenge. Part inventor, part strategist, Kyu’s meticulous attention to detail has made him an invaluable support to the party, ensuring they remain well-prepared, well-equipped, and always one step ahead.
    </li>
    `
  },

  { 
    name: 'Paige Turnner', 
    race: '', 
    class: 'Ranger', 
    title: 'King of Gondor', 
    location: 'Gondor', 
    from: '', 
    image: './images/Paige Turnner.png', 
    notes: `
    <li>
    Paige Turner grew up amid the vibrant intellectual circles of Adoreon, where their natural curiosity and affinity for the arcane led them to a position as an Arcane Research Assistant. In this role, Paige honed a meticulous approach to studying ancient spells and artifacts, often working late into the night, deciphering complex texts, and testing obscure incantations. Paige’s growing knowledge eventually attracted the attention of Apathian scholars, and they were offered a coveted position in Apathe as an Academic Librarian—an opportunity to broaden their horizons and delve even deeper into magical lore.
    </li>

    <li></li>
    `
  },

  { 
    name: 'Scarlett Letters', 
    race: 'Tiefling', 
    class: 'Rogue', 
    title: 'Pirate', 
    location: '', 
    from: '', 
    image: './images/Scarlett Letters.png', 
    notes: `
    <li>
    Captain of the Mailstrom.
    </li>
    <li>
     Sister of Carri Letters.
    </li>
    <li>
     While her sister went the way of diplomacy she went the way of piracy, and their relationship, while strained by their career paths, never wavered in their undying loyalty to each other.
     </li>
     `
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
    <li>
    Al Leave is a half-elf druid and skilled herbalist hailing from the city-state of Adoreon, known for its pursuit of physical and mental pleasures. Born to an elven mother and a human father, Al grew up on the outskirts of the city's lush gardens and expansive libraries, where the pursuit of botany and herbal alchemy were respected crafts. He became fascinated with the medicinal and magical properties of plants, apprenticing under a well-known herbalist while learning druidic magic from a local grove.
    </li>

    <li>
    Al's half-elven heritage grants him a natural affinity for the forest and an ageless wisdom, while his time in Adoreon gave him a keen understanding of both physical and magical remedies. Though he has distanced himself from the city's excesses, he still maintains ties with the Collegiate, occasionally seeking rare ingredients or trading his unique brews. Al is also rumored to know secrets about the herbs used in various rituals in Adoreon, some of which may even hint at the darker aspects of the city's obsession with satisfaction.
    </li>
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
