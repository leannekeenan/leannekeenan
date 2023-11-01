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
  let timepunches = document.querySelectorAll('input[name^="timepunch"]:checked');
  let timepunchIn = document.querySelector('#clockInOption');
  let timepunchOut = document.querySelector('#clockOutOption');
  let lunchStart = document.querySelector('input[name="lunchStart"]:checked').value;
  let lunchEnd = document.querySelector('input[name="lunchEnd"]:checked').value;
  let employeeID = document.getElementById('employeeID').value;
  let todaysDate = document.getElementById('todaysDate').value;
  let campus = document.getElementById('campuses').value;

  let currentTime = updateClock(); // Call the updateClock function and store the current time

  document.getElementById('dateHistory').innerText = todaysDate;
  document.getElementById('idHistory').innerText = employeeID;
  document.getElementById('campusHistory').innerText = campus;
  document.getElementById('shiftHistory').innerText = shift;

  if (timepunchIn) {
    document.getElementById('clockInHistory').innerText = currentTime; // Display the current time in the 'clockInHistory' cell
  } 
  if (timepunchOut) {
    document.getElementById('clockOutHistory').innerText = currentTime; // Display the current time in the 'clockOutHistory' cell
  }

  if(lunchStart) {
    document.getElementById('clockInHistory').innerText = currentTime;
  }
  if(lunchEnd) {
    document.getElementById('clockOutHistory').innerText = currentTime;
  }
});

setInterval(updateClock, 1000);
