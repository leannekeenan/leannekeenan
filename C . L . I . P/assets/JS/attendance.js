document.addEventListener("DOMContentLoaded", function() {
  let showCurrentTime = document.querySelector('.clock');

  function updateClock() {
      let now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds()
      let currentTime = ("0" + hours).substr(-2) + ":" + ("0" + minutes).substr(-2) + ":" + ("0" + seconds).substr(-2);
      showCurrentTime.textContent = currentTime;
      return currentTime; // Return the current time
  }

  let form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let employeeID = document.getElementById('employeeID').value;
    let shift = document.querySelector('input[name="shift"]:checked').value;
    let todaysDate = document.getElementById('todaysDate').value;
    let campus = document.getElementById('campuses').value;
 
    let start = document.querySelector('input[id="start"]:checked'); 
    let stop = document.querySelector('input[id="stop"]:checked'); 
     
    let currentTime = updateClock(); // Call the updateClock function and store the current time
 
    // Get the table
    let table = document.querySelector('.AnalyticsTable');
 
    // Create a unique identifier for the row
    let rowIdentifier = todaysDate + shift + employeeID + campus;
 
    // Check if a row for the current shift already exists
    let row = Array.from(table.rows).find(row => row.getAttribute('data-identifier') === rowIdentifier);
 
    if (!row) {
        // If not, create a new row
        row = document.createElement('tr');
        row.setAttribute('data-identifier', rowIdentifier);

        // Create new table data elements and set their text content to the form values
        let dateCell = document.createElement('td');
        dateCell.textContent = todaysDate;

        let idCell = document.createElement('td');
        idCell.textContent = employeeID;

        let campusCell = document.createElement('td');
        campusCell.textContent = campus;

        let shiftCell = document.createElement('td');
        shiftCell.textContent = shift;

        let clockInCell = document.createElement('td');
        if (start) {
          clockInCell.textContent = currentTime;
        }

        let clockOutCell = document.createElement('td');
        if (stop) {
          clockOutCell.textContent = currentTime;
        }

        // And append these new table data elements to the new row
        row.appendChild(dateCell);
        row.appendChild(idCell);
        row.appendChild(campusCell);
        row.appendChild(shiftCell);
        row.appendChild(clockInCell);
        row.appendChild(clockOutCell);

        // And append the new row to the table
        table.appendChild(row);
    } else {
        // Check if the row already has an end time
        if (row.cells[5].textContent) {
            // If it does, prevent the form submission and alert the user
            event.preventDefault();
            alert('Please clock out before you can clock in again.');
        } else {
            // Update the start and stop times on the row
            row.cells[4].textContent = start ? currentTime : row.cells[4].textContent;
            row.cells[5].textContent = stop ? currentTime : row.cells[5].textContent;
        }
    }
  });
 
  setInterval(updateClock, 1000);
});
