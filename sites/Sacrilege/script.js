const nflTeams = [
    { name: 'Select a team below', logo: '', disabled: true }, // Placeholder for the first option
    
    // AFC East
    { name: '--- AFC East ---', logo: '', disabled: true },
    { name: 'Buffalo Bills', logo: '/assets/teams/bills.png' },
    { name: 'Miami Dolphins', logo: '/assets/teams/dolphins.png' },
    { name: 'New England Patriots', logo: '/assets/teams/patriots.png' },
    { name: 'New York Jets', logo: '/assets/teams/jets.png' },
    
    // AFC North
    { name: '--- AFC North ---', logo: '', disabled: true },
    { name: 'Baltimore Ravens', logo: '/assets/teams/ravens.png' },
    { name: 'Cincinnati Bengals', logo: '/assets/teams/bengals.png' },
    { name: 'Cleveland Browns', logo: '/assets/teams/browns.png' },
    { name: 'Pittsburgh Steelers', logo: '/assets/teams/steelers.png' },
    
    // AFC South
    { name: '--- AFC South ---', logo: '', disabled: true },
    { name: 'Houston Texans', logo: '/assets/teams/texans.png' },
    { name: 'Indianapolis Colts', logo: '/assets/teams/colts.png' },
    { name: 'Jacksonville Jaguars', logo: '/assets/teams/jaguars.png' },
    { name: 'Tennessee Titans', logo: '/assets/teams/titans.png' },
    
    // AFC West
    { name: '--- AFC West ---', logo: '', disabled: true },
    { name: 'Denver Broncos', logo: '/assets/teams/broncos.png' },
    { name: 'Kansas City Chiefs', logo: '/assets/teams/chiefs.png' },
    { name: 'Las Vegas Raiders', logo: '/assets/teams/raiders.png' },
    { name: 'Los Angeles Chargers', logo: '/assets/teams/chargers.png' },
    
    // NFC East
    { name: '--- NFC East ---', logo: '', disabled: true },
    { name: 'Dallas Cowboys', logo: '/assets/teams/cowboys.png' },
    { name: 'New York Giants', logo: '/assets/teams/giants.png' },
    { name: 'Philadelphia Eagles', logo: '/assets/teams/eagles.png' },
    { name: 'Washington Commanders', logo: '/assets/teams/commanders.png' },
    
    // NFC North
    { name: '--- NFC North ---', logo: '', disabled: true },
    { name: 'Chicago Bears', logo: '/assets/teams/bears.png' },
    { name: 'Detroit Lions', logo: '/assets/teams/lions.png' },
    { name: 'Green Bay Packers', logo: '/assets/teams/packers.png' },
    { name: 'Minnesota Vikings', logo: '/assets/teams/vikings.png' },
    
    // NFC South
    { name: '--- NFC South ---', logo: '', disabled: true },
    { name: 'Atlanta Falcons', logo: '/assets/teams/falcons.png' },
    { name: 'Carolina Panthers', logo: '/assets/teams/panthers.png' },
    { name: 'New Orleans Saints', logo: '/assets/teams/saints.png' },
    { name: 'Tampa Bay Buccaneers', logo: '/assets/teams/buccaneers.png' },
    
    // NFC West
    { name: '--- NFC West ---', logo: '', disabled: true },
    { name: 'Arizona Cardinals', logo: '/assets/teams/cardinals.png' },
    { name: 'Los Angeles Rams', logo: '/assets/teams/rams.png' },
    { name: 'San Francisco 49ers', logo: '/assets/teams/49ers.png' },
    { name: 'Seattle Seahawks', logo: '/assets/teams/seahawks.png' }
];


const dateElement = document.querySelector('#date');

// Define options for the date format
const options = { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
};

// Format the current date according to the options
const formattedDate = new Date().toLocaleDateString('en-US', options);

// Set the formatted date as the inner HTML of the date element
dateElement.innerHTML = formattedDate;


function populateDropdowns() {
    const dropdowns = document.querySelectorAll('select[name="team"]');
    
    dropdowns.forEach(dropdown => {
        nflTeams.forEach(team => {
            const option = document.createElement('option');
            option.value = team.name;
            option.textContent = team.name;
            dropdown.appendChild(option);
        });
    });
}

function showLogo(type, gameNumber) {
    const team = document.getElementById(`${type}Team${gameNumber}`).value;
    const logoPath = nflTeams.find(t => t.name === team)?.logo || '';
    document.getElementById(`${type}Logo${gameNumber}`).src = logoPath;
}

document.addEventListener('DOMContentLoaded', () => {
    populateDropdowns();
});
