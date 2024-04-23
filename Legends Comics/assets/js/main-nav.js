window.addEventListener('scroll', function() {
    var nav = document.querySelector('.main-nav');
    var section = document.getElementById('home');
    var sectionHeight = section.clientHeight;

    if (window.pageYOffset > sectionHeight) {
        nav.classList.add('sticky-nav');
    } else {
        nav.classList.remove('sticky-nav');
    }
});


window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("main-nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}




