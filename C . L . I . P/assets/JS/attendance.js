let validateForm = function(event) {
    let employeeID = document.getElementById('employeeID').value;
    let shift = document.querySelector('input[name="shift"]:checked').value;
    let todaysDate = document.getElementById('todaysDate').value;
    let campus = document.getElementById('campuses').value;
   
    if (!employeeID || !shift || !todaysDate || !campus) {
        event.preventDefault();
        alert('Please fill out all fields.');
        return false;
    }
   
    return true;
  };
  
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
    setInterval(updateClock, 1000);
  }
  
  startClock();
  
  document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        console.log('form submitted')
        if (!validateForm(event)) {
            return;
        }
        event.preventDefault();
        let employeeID = document.getElementById('employeeID').value;
        console.log('employeeID', employeeID)
        let shift = document.querySelector('input[name="shift"]:checked').value;
        console.log('shift', shift)
        let todaysDate = document.getElementById('todaysDate').value;
        console.log('todaysDate', todaysDate)
        let campus = document.getElementById('campuses').value;
        console.log('campus', campus)
        
        let start = updateClock(); 
        console.log('start', start)
  
        let stopRadio = document.querySelector('input[id="stop"]'); 
        let stop = stopRadio.checked ? updateClock() : null; 
        console.log('stop', stop)
  
        let userDetails = {
            todaysDate: todaysDate,
            employeeID: employeeID,
            campus: campus,
            shift: shift,
            start: start,
            stop: stop ? stop : null
        };
        
        let userDetailsArray = JSON.parse(localStorage.getItem('user-details')) || [];
        let userExists = userDetailsArray.some(user => user.employeeID === employeeID && user.todaysDate === todaysDate && user.campus === campus && user.shift === shift);
        if (!userExists) {
            userDetailsArray.push(userDetails);
            localStorage.setItem('user-details', JSON.stringify(userDetailsArray)); // Store userDetailsArray
        }
   
        // Retrieve userDetailsArray from local storage and update the analytics table
        let storedUserDetails = localStorage.getItem('user-details');
        console.log('storedUserDetails', storedUserDetails)
        if (storedUserDetails !== null) {
            let userDetailsArray = JSON.parse(storedUserDetails);
            if (Array.isArray(userDetailsArray)) {
                userDetailsArray.forEach(updateDOM);
            } else {
                console.error('user-details is not an array:', userDetailsArray);
            }
        }
    });
    
    function updateDOM(userDetails) {
        let table = document.querySelector('.AnalyticsTable');
        let rowIdentifier = userDetails.todaysDate + userDetails.shift + userDetails.employeeID + userDetails.campus;
        let row = Array.from(table.rows).find(row => row.getAttribute('data-identifier') === rowIdentifier);
   
        if (!row) {
            row = document.createElement('tr');
            row.setAttribute('data-identifier', rowIdentifier);
   
            // Create cells in the correct order
            let cells = [
                document.createElement('td'), // Date
                document.createElement('td'), // ID
                document.createElement('td'), // Campus
                document.createElement('td'), // Shift
                document.createElement('td'), // In
                document.createElement('td') // Out
            ];
   
            // Append cells to row
            cells.forEach(cell => row.appendChild(cell));
  
            console.log(cells)
            // Append row to table
            table.appendChild(row);
        }
   
        // Set cell text content
        row.cells[0].textContent = userDetails.todaysDate;
        console.log('userDetails.todaysDate', userDetails.todaysDate)
        row.cells[1].textContent = userDetails.employeeID;
        console.log('userDetails.employeeID', userDetails.employeeID)
        row.cells[2].textContent = userDetails.campus;
        console.log('userDetails.campus', userDetails.campus)
        row.cells[3].textContent = userDetails.shift;
        console.log('userDetails.shift', userDetails.shift)
        row.cells[4].textContent = userDetails.start;
        console.log('userDetails.start', userDetails.start)
        row.cells[5].textContent = userDetails.stop;
        console.log('userDetails.stop', userDetails.stop)
    }
  });
  