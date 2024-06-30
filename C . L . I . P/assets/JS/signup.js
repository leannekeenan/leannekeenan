document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var firstName = document.querySelector('#first-name-input').value;
    var lastName = document.querySelector('#last-name-input').value;
    var employeeId = document.querySelector('#employee-id-input').value;
    var userEmail = document.querySelector('#user-email-input')
    var password = document.querySelector('#createPassword-input').value;
    var confirmPassword = document.querySelector('#confirmPassword-input').value;
  
    // Validate the passwords
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
  
    var userDetails = {
        firstName: firstName,
        lastName: lastName,
        employeeId: employeeId,
        userEmail: userEmail,
        password: password
    };
  
    localStorage.setItem('user-details', JSON.stringify(userDetails));
  });
  
  function registerUser(event) {
    event.preventDefault();

    var firstName = document.querySelector('#first-name-input').value;
    var lastName = document.querySelector('#last-name-input').value;
    var employeeId = document.querySelector('#employee-id-input').value;
    var userEmail = document.querySelector('#user-email-input').value;
    var password = document.querySelector('#createPassword-input').value;
    var confirmPassword = document.querySelector('#confirmPassword-input').value;

    // Validate the passwords
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    var userDetails = {
        firstName: firstName,
        lastName: lastName,
        employeeId: employeeId,
        userEmail: userEmail,
        password: password
    };

    localStorage.setItem('user-details', JSON.stringify(userDetails));

    // Redirect the user to the login page
    window.location.href = 'login.html';
}