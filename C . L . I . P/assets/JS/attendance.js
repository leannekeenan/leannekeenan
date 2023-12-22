let isStartTime = true;
let showCurrentTime = document.querySelector('.clock');

// Add this MD5 function at the beginning of your script
function md5(str) {
    return window.btoa(
        new Uint8Array([...str].map(char => char.charCodeAt(0)))
    );
}

function updateClock(callback) {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    let currentTime = ("0" + hours).substr(-2) + ":" + ("0" + minutes).substr(-2);
    showCurrentTime.textContent = currentTime;

    if (callback && typeof callback === 'function') {
        callback(currentTime);
    }

    return currentTime;
}

function startClock() {
    updateClock();  // Initial update
    setInterval(updateClock, 1000);  // Update every second
}

function validateForm(event) {
    let employeeID = document.getElementById('employeeID').value;
    let shift = document.querySelector('input[name="shift"]:checked');
    let todaysDate = document.getElementById('todaysDate').value;
    let campus = document.getElementById('campuses').value;

    if (!employeeID || !shift || !todaysDate || !campus) {
        event.preventDefault();
        alert('Please fill out all fields.');
        return false;
    }

    return true;
}

function submitForm(event) {
    event.preventDefault();

    if (!validateForm(event)) {
        return;
    }

    let employeeID = document.getElementById('employeeID').value;
    let shift = document.querySelector('input[name="shift"]:checked').value;
    let todaysDate = document.getElementById('todaysDate').value;
    let campus = document.getElementById('campuses').value;
    let timepunch = document.querySelector('input[name="timepunch"]:checked').value;

    // Ensure that the clock is updated before getting the time
    let time = updateClock();

    console.log('Timepunch:', timepunch);
    console.log('Current time:', time);

    let userDetails = {
        todaysDate: todaysDate,
        employeeID: employeeID,
        campus: campus,
        shift: shift,
        start: null,
        stop: null
    };

    if (timepunch === 'start') {
        userDetails.start = time; // Store time as a string
        userDetails.stop = null; // Ensure 'stop' is null when 'start' is recorded
    } else if (timepunch === 'stop') {
        userDetails.stop = time; // Store time as a string
        userDetails.start = null; // Ensure 'start' is null when 'stop' is recorded
    }

    console.log('User details:', userDetails);

    updateDOM(userDetails, time); // Pass 'time' to updateDOM
    document.querySelector('form').reset();

    // Retrieve userDetailsArray from local storage
    let storedUserDetails = localStorage.getItem('user-details');
    let userDetailsArray = storedUserDetails ? JSON.parse(storedUserDetails) : [];

    // Ensure that the user details are not stored with index positions
    userDetailsArray = userDetailsArray.filter(user => user.employeeID !== userDetails.employeeID);

    // Add the new user details to the array
    userDetailsArray.push(userDetails);

    // Store the updated userDetailsArray in local storage
    localStorage.setItem('user-details', JSON.stringify(userDetailsArray));
}

function updateDOM(userDetails, currentTime) {
    let table = document.querySelector('.AnalyticsTable');
    let rowIdentifier = md5(
        userDetails.todaysDate +
        userDetails.shift +
        userDetails.employeeID +
        userDetails.campus
    );
    let row = Array.from(table.rows).find(row => row.getAttribute('data-identifier') === rowIdentifier);

    if (!row) {
        row = document.createElement('tr');
        row.setAttribute('data-identifier', rowIdentifier);

        let cells = [
            document.createElement('td'), // Date
            document.createElement('td'), // ID
            document.createElement('td'), // Campus
            document.createElement('td'), // Shift
            document.createElement('td'), // In
            document.createElement('td')  // Out
        ];

        cells.forEach(cell => row.appendChild(cell));
        table.appendChild(row);
    }

    row.cells[0].textContent = userDetails.todaysDate;
    row.cells[1].textContent = userDetails.employeeID;
    row.cells[2].textContent = userDetails.campus;
    row.cells[3].textContent = userDetails.shift;

    if (row.cells[4].textContent.trim() !== '') {
        row.cells[5].textContent = currentTime;
    } else {
        row.cells[4].textContent = currentTime;
    }
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector('form');
    form.addEventListener('submit', submitForm);

    // Start the clock
    startClock();

    // Retrieve userDetailsArray from local storage and update the analytics table
    let storedUserDetails = localStorage.getItem('user-details');

    if (storedUserDetails !== null) {
        let userDetailsArray = JSON.parse(storedUserDetails);

        if (Array.isArray(userDetailsArray)) {
            userDetailsArray.forEach(updateDOM);
        } else {
            console.error('user-details is not an array:', userDetailsArray);
        }
    }
});
