
    document.addEventListener('DOMContentLoaded', (event) => {
        const toggleButton = document.getElementById('dark-mode-toggle');

        // Check for saved user preference, if any, on load of the website
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.body.classList.add(currentTheme);
        }

        // Toggle dark mode on button click
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            // Save the user preference to localStorage
            let theme = 'light';
            if (document.body.classList.contains('dark-mode')) {
                theme = 'dark-mode';
            }
            localStorage.setItem('theme', theme);
        });
    });

