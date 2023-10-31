var form = document.querySelector('form');

document.querySelector('#dateHistory') //clockin history data input
document.querySelector('#idHistory') // clockin history data input
document.querySelector('#shiftHistory') //clockin history data input
document.querySelector('#campusHistory') //clockin history data input
document.querySelector('#clockInHistory') //clockin history data input
document.querySelector('#clockOutHistory') //clockin history data input

function updateHistory() {
  var firstName = document.querySelector('#firstName').value;
  var lastName = document.querySelector('#lastName').value;
  var employeeID = document.querySelector('#employeeID').value;
  var todaysDate = document.querySelector('#todaysDate').value;
  var shift = document.querySelector('input[name="shift"]:checked').value;
  var campus = document.querySelector('#campuses').value;
  var timepunch = document.querySelector('input[name="timepunch"]:checked').value;

  document.querySelector('#dateHistory').textContent = todaysDate;
  document.querySelector('#idHistory').textContent = employeeID;
  document.querySelector('#campusHistory').textContent = campus;
  document.querySelector('#shiftHistory').textContent = shift;
  document.querySelector('#clockInHistory').textContent = timepunch === 'clockInOption' ? 'In' : '';
  document.querySelector('#clockOutHistory').textContent = timepunch === 'clockOutOption' ? 'Out' : '';
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  updateHistory();
});




var showCurrentTime = document.querySelector('.clock');

function updateClock() {
   var now = new Date();
   var hours = now.getHours();
   var minutes = now.getMinutes();
   var seconds = now.getSeconds();
   showCurrentTime.textContent = ("0" + hours).substr(-2) + ":" + ("0" + minutes).substr(-2);
}

setInterval(updateClock, 1000);

