document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const timeSlotsContainer = document.getElementById('time-slots');
    const currentMonthYearDisplay = document.getElementById('current-month-year');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');
    const bookingForm = document.getElementById('booking-form');
    const clearFormButton = document.getElementById('clear-form-btn');

    let currentDate = new Date();
    let selectedTimeSlot = null;
    let bookedSlots = {};

    async function fetchBookedSlots() {
        try {
            const response = await fetch('/api/booked-slots');
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

            if (dayOfWeek === 0 || dayOfWeek === 5 || dayOfWeek === 6) {
                dayElement.classList.add('disabled');
            } else {
                dayElement.addEventListener('click', () => {
                    const selected = document.querySelector('.calendar-day.selected');
                    if (selected) {
                        selected.classList.remove('selected');
                    }
                    dayElement.classList.add('selected');
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

        const timeSlots = [
            '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
            '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
        ];

        timeSlots.forEach(time => {
            const timeSlotElement = document.createElement('div');
            timeSlotElement.textContent = time;
            timeSlotElement.className = 'time-slot';

            if (bookedSlots[date] && bookedSlots[date].includes(time)) {
                timeSlotElement.classList.add('booked');
            } else {
                timeSlotElement.addEventListener('click', () => {
                    const selected = document.querySelector('.time-slot.selected');
                    if (selected) {
                        selected.classList.remove('selected');
                    }
                    timeSlotElement.classList.add('selected');
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
        const email = document.getElementById('email').value;
        const service = document.getElementById('service').value;
        const { date, time } = selectedTimeSlot;

        try {
            const response = await fetch('/api/book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, phone, email, service, date, time }),
            });

            if (!response.ok) {
                throw new Error('Failed to book appointment');
            }

            const { confirmation } = await response.json();
            alert(`Appointment booked successfully! Confirmation number: ${confirmation}`);

            await fetchBookedSlots();
            renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
            loadTimeSlots(`${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`);

            bookingForm.reset();
            document.querySelector('.time-slot.selected').classList.remove('selected');
            selectedTimeSlot = null;
        } catch (error) {
            console.error('Failed to book appointment:', error);
            alert('Failed to book appointment. Please try again.');
        }
    });

    clearFormButton.addEventListener('click', () => {
        bookingForm.reset();
        const selectedTimeSlotElement = document.querySelector('.time-slot.selected');
        if (selectedTimeSlotElement) {
            selectedTimeSlotElement.classList.remove('selected');
        }
        selectedTimeSlot = null;
    });

    prevMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
    });

    nextMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
    });

    fetchBookedSlots();
    renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
});
