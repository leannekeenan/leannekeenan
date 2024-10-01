document.addEventListener('DOMContentLoaded', async () => {
    const characters = await fetchCharacters();
    displayCharacters(characters);
  });
  
  async function fetchCharacters() {
    const response = await fetch('http://localhost:5000/api/characters');
    const characters = await response.json();
    return characters;
  }
  
  function searchCharacters() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    fetchCharacters().then(characters => {
      const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(searchQuery) ||
        character.affiliation.toLowerCase().includes(searchQuery) ||
        character.location.toLowerCase().includes(searchQuery) ||
        character.details.toLowerCase().includes(searchQuery)
      );
      displayCharacters(filteredCharacters);
    });
  }
  