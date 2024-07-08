document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const timeSlotsContainer = document.getElementById('time-slots');
    const currentMonthYearDisplay = document.getElementById('current-month-year');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');
    const bookingForm = document.getElementById('booking-form');

    const timeSlots = [
        '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
        '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
    ];

    let bookedSlots = {};
    let currentDate = new Date();
    let selectedTimeSlot = null;

    async function fetchBookedSlots() {
        try {
            const response = await fetch('http://localhost:3000/api/booked-slots');
            if (!response.ok) {
                throw new Error('Failed to fetch booked slots');
            }
            bookedSlots = await response.json();
        } catch (error) {
            console.error('Failed to fetch booked slots:', error);
        }
    }

    function renderCalendar(year, month) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();

        calendar.innerHTML = '';

        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        currentMonthYearDisplay.textContent = `${monthNames[month]} ${year}`;

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

        const calendarGrid = document.createElement('div');
        calendarGrid.className = 'calendar-grid';

        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'calendar-day-empty';
            calendarGrid.appendChild(emptyCell);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const dayOfWeek = date.getDay();

            const dayElement = document.createElement('div');
            dayElement.textContent = day;
            dayElement.className = 'calendar-day';

            // Check if the day is disabled (Friday, Saturday, or Sunday)
            if (dayOfWeek === 0 || dayOfWeek === 5 || dayOfWeek === 6) {
                dayElement.classList.add('disabled');
            } else {
                // Add click event listener to load time slots and manage selection
                dayElement.addEventListener('click', () => {
                    // Remove selected class from previously selected day
                    const selected = document.querySelector('.calendar-day.selected');
                    if (selected) {
                        selected.classList.remove('selected');
                    }

                    // Add selected class to the clicked day
                    dayElement.classList.add('selected');

                    // Load time slots for the clicked day
                    loadTimeSlots(`${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`);
                });
            }

            calendarGrid.appendChild(dayElement);
        }

        calendar.appendChild(calendarGrid);
    }

    function loadTimeSlots(date) {
        timeSlotsContainer.innerHTML = '';
        selectedTimeSlot = null;

        timeSlots.forEach(time => {
            const timeSlotElement = document.createElement('div');
            timeSlotElement.textContent = time;
            timeSlotElement.className = 'time-slot';

            if (bookedSlots[date] && bookedSlots[date].includes(time)) {
                timeSlotElement.classList.add('booked');
            } else {
                timeSlotElement.addEventListener('click', () => {
                    // Remove selected class from previously selected time slot
                    const selected = document.querySelector('.time-slot.selected');
                    if (selected) {
                        selected.classList.remove('selected');
                    }

                    // Add selected class to the clicked time slot
                    timeSlotElement.classList.add('selected');

                    // Set the selected time slot
                    selectedTimeSlot = { date, time };
                });
            }

            timeSlotsContainer.appendChild(timeSlotElement);
        });
    }

    bookingForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (!selectedTimeSlot) {
            alert('Please select a time slot');
            return;
        }

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;

        const bookingData = {
            date: selectedTimeSlot.date,
            time: selectedTimeSlot.time,
            name,
            phone,
            service
        };

        await saveBooking(bookingData);

        // Send email confirmation
        const workOrderDetails = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Date:</strong> ${selectedTimeSlot.date}</p>
            <p><strong>Time:</strong> ${selectedTimeSlot.time}</p>
        `;
        const recipientEmail = 'management@example.com'; // replace with actual recipient email

        await sendWorkOrderEmail(workOrderDetails, recipientEmail);

        alert('Booking confirmed and email sent.');
        bookingForm.reset();
        selectedTimeSlot = null;
        loadTimeSlots(selectedTimeSlot.date);
    });

    prevMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
    });

    nextMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
    });

    document.getElementById('clear-form-btn').addEventListener('click', () => {
        bookingForm.reset();
        // Clear selected time slot
        selectedTimeSlot = null;
        // Remove selected class from any previously selected slot
        const selectedSlot = document.querySelector('.time-slot.selected');
        if (selectedSlot) {
            selectedSlot.classList.remove('selected');
        }
    });

    // Initial rendering
    fetchBookedSlots().then(() => {
        renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
    });
});

async function saveBooking(bookingData) {
    try {
        const response = await fetch('http://localhost:3000/api/booked-slots', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingData)
        });
        if (!response.ok) {
            throw new Error('Failed to save booking');
        }
    } catch (error) {
        console.error('Error saving booking:', error);
    }
}

async function sendWorkOrderEmail(workOrderDetails, recipientEmail) {
    try {
        const response = await fetch('http://localhost:3000/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ workOrderDetails, recipientEmail })
        });
        if (!response.ok) {
            throw new Error('Failed to send email');
        }
    } catch (error) {
        console.error('Error sending email:', error);
    }
}
