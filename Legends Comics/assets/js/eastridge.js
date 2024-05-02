let monthYearElement = document.getElementById('monthYear');
let datesElement = document.getElementById('dates');
let previousButtonElement = document.getElementById('previousBtn');
let nextButtonElement = document.getElementById('nextBtn');
let eventsContainer = document.getElementById('events')

let currentDate = new Date();



let updateCalendar = () => {
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();


   let firstDay = new Date(currentYear, currentMonth, 0);
   let lastDay = new Date(currentYear, currentMonth + 1, 0);
   let totalDays = lastDay.getDate();
   let firstDayIndex = firstDay.getDay();
   let lastDayIndex = lastDay.getDay();

   let monthYearString = currentDate.toLocaleString('default', {month: 'long', year: 'numeric'});

   monthYearElement.textContent = monthYearString;

   let datesHTML = '';

   for(let i = firstDayIndex; i > 0; i--) {
        const previousDate = new Date(currentYear, currentMonth, 0 - i + 1);
        datesHTML += `<div class = "date inactive">${previousDate.getDate()}</div>`
    }

    // Inside the for loop where you generate date elements
    for (let i = 1; i <= totalDays; i++) {
        let date = new Date(currentYear, currentMonth, i);
        let isActive = date.toDateString() === new Date().toDateString(); // Check if it's the current date
        let activeClass = isActive ? ' active' : '';
        let dateElement = `<div class="date${activeClass}" data-date="${date.toDateString()}">${i}</div>`; // Add data-date attribute
        if (isActive) {
            dateElement = `<div class="date${activeClass}" style="border: 5px solid rgba(145, 145, 204, 0.5);" data-date="${date.toDateString()}">${i}</div>`; // Add data-date attribute
        }
        datesHTML += dateElement;
    }
  

    for(let i = 1; i <= 7 - lastDayIndex; i++) {
        let nextDate = new Date(currentYear, currentMonth + 1, i);
        datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
    }

    datesElement.innerHTML = datesHTML;

    let dateElements = document.querySelectorAll('.date');
    dateElements.forEach(dateElement => {
        let date = new Date(dateElement.getAttribute('data-date')); 
        dateElement.addEventListener('mouseenter', () => {

/***************************************April 16, 2024********************************************/

            if (date.getFullYear() === 2024 && date.getMonth() === 3 && date.getDate() === 16) {
                 
                // Print text to the events container
                eventsContainer.innerHTML = `
    <ul>
        <li>Special Event 1 on April 16, 2024</li>
        <li>Special Event 2 on April 16, 2024</li>
        <li>Special Event 3 on April 16, 2024</li>
        <!-- Add more list items as needed -->
    </ul>
`;
                eventsContainer.style.color = 'rgba(255, 0, 0, 0.7)';
            }

/**************************************April 20, 2024*********************************************/

            if (date.getFullYear() === 2024 && date.getMonth() === 3 && date.getDate() === 20) {
                 
                // Print text to the events container
                eventsContainer.innerHTML = `
    <ul>
        <li>Special Event 1 on April 20, 2024</li>
        <li>Special Event 2 on April 21, 2024</li>
        <li>Special Event 3 on April 22, 2024</li>
        <!-- Add more list items as needed -->
    </ul>
`;
                eventsContainer.style.color = 'rgba(255, 255, 0, 0.7)';
            }

/*************************************************************************************************/

/**************************************May 1, 2024*********************************************/

            if (date.getFullYear() === 2024 && date.getMonth() === 4 && date.getDate() === 1) {
                 
                // Print text to the events container
                eventsContainer.innerHTML = `
    <ul>
        <li>Special Event 1 on April 20, 2024</li>
        <li>Special Event 2 on April 21, 2024</li>
        <li>Special Event 3 on April 22, 2024</li>
        <!-- Add more list items as needed -->
    </ul>
`;
                eventsContainer.style.color = 'rgba(255, 255, 0, 0.7)';
            }

/*************************************************************************************************/

        });


/****************************************April 16, 2024*******************************************/

if(date.getFullYear() === 2024 && date.getMonth() === 3 && date.getDate() === 16) {
    dateElement.style.border = '5px solid rgba(255, 0, 0, 0.7)';
    dateElement.style.color = 'black';
}

/***************************************April 20, 2024********************************************/

        if(date.getFullYear() === 2024 && date.getMonth() === 3 && date.getDate() === 20) {
            dateElement.style.border = '5px solid rgba(255, 255, 0, 0.7)';
            dateElement.style.color = 'black';
        }

/*************************************************************************************************/

/***************************************May 1, 2024********************************************/

        if(date.getFullYear() === 2024 && date.getMonth() === 4 && date.getDate() === 1) {
            dateElement.style.border = '5px solid rgba(255, 255, 0, 0.7)';
            dateElement.style.color = 'black';
        }

/*************************************************************************************************/

        dateElement.addEventListener('mouseleave', () => {
            // Clear the events container when the mouse leaves the date element
            eventsContainer.innerHTML = '';
        });
    });

}

updateCalendar()

previousButtonElement.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
})


nextButtonElement.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
})
