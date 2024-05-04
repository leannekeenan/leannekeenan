//rating elements as a whole
let ratings = document.querySelectorAll('.rating');

//individual rating elements
let one =  document.querySelector('.one');
let two =  document.querySelector('.two');
let three =  document.querySelector('.three');
let four =  document.querySelector('.four');
let five =  document.querySelector('.five');

ratings.forEach(rating => {
    
    rating.addEventListener('click', function() {
        if (this.style.background === 'orange') {
            this.style.background = ''; // Toggle off
            
        } else {
            this.style.background = 'orange'; // Toggle on
            
        };
    });

    rating.addEventListener('click', function() {
        if (this.style.color === 'white') {
            this.style.color = ''; // Toggle off
            
        } else {
            this.style.color = 'white'; // Toggle onwhite
            
        };
    });
});