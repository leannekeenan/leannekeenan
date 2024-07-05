document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const timeSlotsContainer = document.getElementById('time-slots');
    const currentMonthYearDisplay = document.getElementById('current-month-year');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');
    
    const timeSlots = [
        '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
        '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
    ];

    let bookedSlots = {};
    let currentDate = new Date();

    async function fetchBookedSlots() {
        try {
            const response = await fetch('http://localhost:3000/api/booked-slots');
            bookedSlots = await response.json();
        } catch (error) {
            console.error('Failed to fetch booked slots:', error);
        }
    }

    function renderCalendar(year, month) {
        const daysInMonth = new Date(year, month + 1, 0).getDate(); // Number of days in the specified month
        const firstDay = new Date(year, month, 1).getDay(); // Day of the week the first day falls on (0=Sunday, 1=Monday, etc.)

        calendar.innerHTML = ''; // Clear previous calendar

        // Update the display for the current month and year
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        currentMonthYearDisplay.textContent = `${monthNames[month]} ${year}`;

        // Create headers for the days of the week
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const headerRow = document.createElement('div');
        headerRow.className = 'calendar-grid';
        daysOfWeek.forEach(day => {
            const headerCell = document.createElement('div');
            headerCell.textContent = day;
            headerCell.className = 'calendar-header-cell';
            headerRow.appendChild(headerCell);
        });
        calendar.appendChild(headerRow);

        // Create the calendar grid
        const calendarGrid = document.createElement('div');
        calendarGrid.className = 'calendar-grid';

        // Fill the first week with empty cells if the month doesn't start on Sunday
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'calendar-day-empty';
            calendarGrid.appendChild(emptyCell);
        }

        // Fill the calendar with the days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const dayOfWeek = date.getDay();

            const dayElement = document.createElement('div');
            dayElement.textContent = day;
            dayElement.className = 'calendar-day';
            if (dayOfWeek === 5 || dayOfWeek === 6 || dayOfWeek === 0) {
                // Disable Fridays, Saturdays, and Sundays
                dayElement.classList.add('disabled');
            } else {
                dayElement.addEventListener('click', () => loadTimeSlots(`${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`));
            }
            calendarGrid.appendChild(dayElement);
        }

        calendar.appendChild(calendarGrid);
    }

    function loadTimeSlots(date) {
        const selectedDate = new Date(date);
        const dayOfWeek = selectedDate.getDay();

        timeSlotsContainer.innerHTML = ''; // Clear previous time slots

        // Only show time slots for allowed days
        if (dayOfWeek !== 5 && dayOfWeek !== 6 && dayOfWeek !== 0) {
            timeSlots.forEach(time => {
                const slotElement = document.createElement('div');
                slotElement.textContent = time;
                slotElement.className = 'time-slot';

                if (bookedSlots[date] && bookedSlots[date].includes(time)) {
                    slotElement.classList.add('booked');
                } else {
                    slotElement.addEventListener('click', () => selectTimeSlot(slotElement));
                }

                timeSlotsContainer.appendChild(slotElement);
            });
        }
    }

    function selectTimeSlot(slotElement) {
        const selected = document.querySelector('.time-slot.selected');
        if (selected) {
            selected.classList.remove('selected');
        }
        slotElement.classList.add('selected');
    }

    function changeMonth(offset) {
        currentDate.setMonth(currentDate.getMonth() + offset);
        renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
    }

    prevMonthButton.addEventListener('click', () => changeMonth(-1));
    nextMonthButton.addEventListener('click', () => changeMonth(1));

    (async function init() {
        await fetchBookedSlots();
        renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
    })();
});
