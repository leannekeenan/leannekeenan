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
  let shift = document.querySelector('input[name="shift"]:checked').value;
  let timepunch = document.querySelector('input[name="timepunch"]:checked').value;
  let lunch = document.querySelector('input[name="lunch"]:checked').value;
  
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let employeeID = document.getElementById('employeeID').value;
  let todaysDate = document.getElementById('todaysDate').value;
 
  let campus = document.getElementById('campuses').value;

  let currentTime = updateClock(); // Call the updateClock function and store the current time

  let historyRow = document.getElementById('history');
  historyRow.innerHTML = ''; // Clear the row

  let cells = ['dateHistory', 'idHistory', 'campusHistory', 'shiftHistory', 'clockInHistory', 'clockOutHistory'];
  cells.forEach(cell => {
    let newCell = document.createElement('td');
    newCell.id = cell;
    historyRow.appendChild(newCell);
  });

  document.getElementById('dateHistory').innerText = todaysDate;
  document.getElementById('idHistory').innerText = employeeID;
  document.getElementById('campusHistory').innerText = campus;
  document.getElementById('shiftHistory').innerText = shift;

  if (timepunch === 'In') {
    document.getElementById('clockInHistory').innerText = currentTime; // Display the current time in the 'clockInHistory' cell
  } else if (timepunch === 'Out') {
    document.getElementById('clockOutHistory').innerText = currentTime; // Display the current time in the 'clockOutHistory' cell
  }
});

setInterval(updateClock, 1000);
