const characters = [
    { name: 'Thorin', affiliation: 'Dwarves', location: 'Erebor', details: 'Leader of the Dwarves' },
    { name: 'Gandalf', affiliation: 'Wizards', location: 'Middle-Earth', details: 'Wise and powerful' },
    { name: 'Aragorn', affiliation: 'Rangers', location: 'Gondor', details: 'King of Gondor' }
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
      characterCard.innerHTML = `
        <h3>${character.name}</h3>
        <p><strong>Affiliation:</strong> ${character.affiliation}</p>
        <p><strong>Location Met:</strong> ${character.location}</p>
        <p><strong>Details:</strong> ${character.details}</p>
      `;
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
  