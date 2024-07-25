window.addEventListener('scroll', function() {
  console.log('Scroll event triggered!');
  var navbar = document.getElementById('main-nav');
  var navContainer = document.getElementById('nav-container');
  var containerTop = navContainer.offsetTop;

  if (window.pageYOffset > containerTop) {
    navbar.classList.add('sticky-nav');
  } else {
    navbar.classList.remove('sticky-nav');
  }
});
