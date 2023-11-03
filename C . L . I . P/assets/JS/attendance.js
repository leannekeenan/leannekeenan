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

      // Create a new table row
      let row = document.createElement('tr');

      // Append these new table data elements to the new table row
      row.appendChild(dateCell);
      row.appendChild(idCell);
      row.appendChild(campusCell);
      row.appendChild(shiftCell);
      row.appendChild(clockInCell);
      row.appendChild(clockOutCell);

      let rows = table.querySelectorAll('tr');
      let existingRow = null;
      for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].querySelectorAll('td');
        if (cells[0].textContent === todaysDate && cells[3].textContent === shift) {
          existingRow = rows[i];
          break;
        }
      }

      if (existingRow) {
        let startCell = existingRow.querySelector('td:nth-child(5)');
        let stopCell = existingRow.querySelector('td:nth-child(6)');
        if (start) {
          startCell.textContent += ', ' + currentTime;
        }
        if (stop) {
          stopCell.textContent += ', ' + currentTime;
        }
      } else {
        table.appendChild(row);
      }
  });

  setInterval(updateClock, 1000);
});
