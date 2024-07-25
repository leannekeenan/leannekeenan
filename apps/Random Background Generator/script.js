function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomBackgroundColor() {
    var spinner = document.querySelector('.spinner');
    var color1 = getRandomColor();
    var color2 = getRandomColor();
    var gradient = 'linear-gradient(-45deg, ' + color1 + ', ' + color2 + ')';

    if (color1 === color2) {
        color2 = getRandomColor(); // Generate a new color for color2
    }

    spinner.style.background = gradient;
}

// Set initial random background color
setRandomBackgroundColor();

function changeBackgroundColor() {
    var spinner = document.querySelector('.spinner');
    var colors = '';
    var color1 = getRandomColor();
    var color2 = getRandomColor();
    colors = 'linear-gradient(-45deg, ' + color1 + ', ' + color2 + ')';
    spinner.style.background = colors;
}

// Change background color every 20 seconds
setInterval(changeBackgroundColor, 20000);
