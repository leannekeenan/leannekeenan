let button = document.getElementById('btn');

button.addEventListener('click', (event) => {
    console.log(event.target); // This could be the `button` or the `em`, depending what the user actually clicked on
    console.log(event.currentTarget); // This will always be the button
  });