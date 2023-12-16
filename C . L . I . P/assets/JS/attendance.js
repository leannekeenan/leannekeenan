let isStartTime = true;
let showCurrentTime = document.querySelector('.clock');

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    let currentTime = ("0" + hours).substr(-2) + ":" + ("0" + minutes).substr(-2);
    showCurrentTime.textContent = currentTime;

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
    let time = updateClock();  // Update the clock to get the current time

    let userDetails = {
        todaysDate: todaysDate,
        employeeID: employeeID,
        campus: campus,
        shift: shift,
        start: isStartTime && timepunch === 'start' ? time : null,
        stop: !isStartTime && timepunch === 'stop' ? time : null
    };

    updateDOM(userDetails);
    document.querySelector('form').reset();
}

function saveToLocalStorage(userDetails) {
    let storedUserDetails = localStorage.getItem('user-details');
    let userDetailsArray = storedUserDetails ? JSON.parse(storedUserDetails) : [];

    userDetailsArray.push(userDetails);
    localStorage.setItem('user-details', JSON.stringify(userDetailsArray));
}

function updateDOM(userDetails) {
    let table = document.querySelector('.AnalyticsTable');
    let rowIdentifier = userDetails.todaysDate + userDetails.shift + userDetails.employeeID + userDetails.campus;
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
    row.cells[4].textContent = userDetails.start || '';  // Set to an empty string if start is null
    row.cells[5].textContent = userDetails.stop || '';   // Set to an empty string if stop is null

    // Save data to local storage
    saveToLocalStorage(userDetails);
}

// Event listeners
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
