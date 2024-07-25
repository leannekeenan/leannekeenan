document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.querySelector('#user-email').value;
    var password = document.querySelector('#user-password').value;

    var storedUserDetails = JSON.parse(localStorage.getItem('user-details'));

    if (storedUserDetails && storedUserDetails.userEmail === email && storedUserDetails.password === password) {
        // Login successful
        alert('Login successful');
        window.location.href = 'attendance.html';
    } else {
        // Login failed
        alert('Invalid email or password');
    }
});