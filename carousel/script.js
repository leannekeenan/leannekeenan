let counter = 0;
const images = document.querySelectorAll('.carousel img');

setInterval(() => {
  images[counter % images.length].style.opacity = 0; // Hide current image
  counter++; // Increment counter
  images[counter % images.length].style.opacity = 1; // Show next image
}, 10000); // Change image every 10 seconds
