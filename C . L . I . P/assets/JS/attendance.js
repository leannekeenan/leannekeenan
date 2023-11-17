let validateForm;

document.addEventListener("DOMContentLoaded", function() {
 let showCurrentTime = document.querySelector('.clock');
 
 function updateClock() {
 let now = new Date();
 let hours = now.getHours();
 let minutes = now.getMinutes();
 
 let currentTime = ("0" + hours).substr(-2) + ":" + ("0" + minutes).substr(-2) ;
 showCurrentTime.textContent = currentTime;
 return currentTime;
 }
 
 let form = document.querySelector('form');
 form.addEventListener('submit', function(event) {
 event.preventDefault();
 let employeeID = document.getElementById('employeeID').value;
 let shift = document.querySelector('input[name="shift"]:checked').value;
 let todaysDate = document.getElementById('todaysDate').value;
 let campus = document.getElementById('campuses').value;
 
 let startRadio = document.querySelector('input[id="start"]'); 
 let stopRadio = document.querySelector('input[id="stop"]'); 

 let start = updateClock(); 
 let stop = stopRadio.checked ? updateClock() : null; 

 let table = document.querySelector('.AnalyticsTable');
 let rowIdentifier = todaysDate + shift + employeeID + campus;
 let row = Array.from(table.rows).find(row => row.getAttribute('data-identifier') === rowIdentifier);
 
 if (!row) {
 row = document.createElement('tr');
 row.setAttribute('data-identifier', rowIdentifier);
 
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
 clockInCell.textContent = start;
 }

 let clockOutCell = document.createElement('td');
 if (stop) {
 clockOutCell.textContent = stop;
 }

 row.appendChild(dateCell);
 row.appendChild(idCell);
 row.appendChild(campusCell);
 row.appendChild(shiftCell);
 row.appendChild(clockInCell);
 row.appendChild(clockOutCell);
 
 table.appendChild(row);
 } else {
 if (row.cells[5].textContent && start) {
 event.preventDefault();
 alert('Please clock out before you can clock in again.');
 } else {
 row.cells[4].textContent = start ? start : row.cells[4].textContent;
 row.cells[5].textContent = stop ? stop : row.cells[5].textContent;
 }
 }
 
 let userDetails = {
 todaysDate: todaysDate,
 employeeID: employeeID,
 campus: campus,
 shift: shift,
 start: start,
 stop: stop ? stop : null
 };
 localStorage.setItem('user-details', JSON.stringify(userDetails));
 });

 validateForm = function() {
 let firstName = document.getElementById('firstName').value;
 let lastName = document.getElementById('lastName').value;
 let employeeID = document.getElementById('employeeID').value;
 let shift = document.querySelector('input[name="shift"]:checked').value;
 let todaysDate = document.getElementById('todaysDate').value;
 let campus = document.getElementById('campuses').value;
 
 if (firstName === "" || lastName === "" || employeeID === "" || shift === "" || todaysDate === "" || campus === "") {
 alert("All fields must be filled out");
 return false;
 }
 return true;
 }
 
 let storedTableData = localStorage.getItem('table-data');

 if (storedTableData) {
 let tableData = JSON.parse(storedTableData);
 let table = document.querySelector('.AnalyticsTable');

 for (let i = 0; i < tableData.length; i++) {
 let row = document.createElement('tr');

 for (let key in tableData[i]) {
 let cell = document.createElement('td');
 cell.textContent = tableData[i][key];
 row.appendChild(cell);
 }

 table.appendChild(row);
 }
 }

 let storedUserDetails = localStorage.getItem('user-details');

if (storedUserDetails) {
 let userDetails = JSON.parse(storedUserDetails);

 if (Array.isArray(userDetails)) {
 userDetails.forEach(updateDOM);
 } else {
 updateDOM(userDetails);
 }
}

 // Set the default value of the radio buttons to the current time
 let startRadio = document.querySelector('input[id="start"]'); 
 let stopRadio = document.querySelector('input[id="stop"]'); 

 setInterval(updateClock, 1000);
});

function updateDOM(userDetails) {
 let table = document.querySelector('.AnalyticsTable');
 let row = document.createElement('tr');

 for (let key in userDetails) {
 let cell = document.createElement('td');
 cell.textContent = userDetails[key];
 row.appendChild(cell);
 }

 table.appendChild(row);
}


