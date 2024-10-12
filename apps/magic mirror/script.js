document.addEventListener('DOMContentLoaded', function () {
    const pillarsContainer = document.getElementById('pillars-container');
    const feedbackElement = document.getElementById('feedback');
    const mirror = document.getElementById('mirror');
    const numPillars = 12; // Number of pillars
    const radius = 150; // Radius of the circle where the pillars will be placed
    const pillarSize = 50; // Size of each pillar

    // Define feedback messages
    const feedbackMessages = [
        'You found the escape!',
        'MONSTER!!!',
        'You discovered a hidden treasure!',
        'Its a trap!',
        'Dead end'
    ];

    // Shuffle the feedback messages array to randomize responses
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const randomizedFeedback = shuffleArray(feedbackMessages);

    // Generate the pillars
    for (let i = 0; i < numPillars; i++) {
        const pillar = document.createElement('div');
        pillar.className = 'pillar';

        const angle = (i / numPillars) * 2 * Math.PI; // Calculate angle
        const x = Math.cos(angle) * (radius + pillarSize / 2); // Adjust for half the pillar size
        const y = Math.sin(angle) * (radius + pillarSize / 2); // Adjust for half the pillar size

        // Adjusting the position to account for the size of the pillar
        pillar.style.left = `calc(50% + ${x}px - ${pillarSize / 2}px)`;
        pillar.style.top = `calc(50% + ${y}px - ${pillarSize / 2}px)`; // Corrected to use plus here

        // Allow pillars to accept drops
        pillar.addEventListener('dragover', function(event) {
            event.preventDefault();
        });

        pillar.addEventListener('drop', function(event) {
            event.preventDefault();
            // On drop, show feedback message
            const randomIndex = Math.floor(Math.random() * randomizedFeedback.length);
            feedbackElement.textContent = randomizedFeedback[randomIndex]; // Random feedback
        });

        pillarsContainer.appendChild(pillar);
    }

    // Dragging the mirror
    mirror.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', 'mirror');
    });
});
