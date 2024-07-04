document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'dayGrid', 'timeGrid', 'interaction' ],
        selectable: true,
        select: function(info) {
            // Here you can check for service type and blackout logic
            var serviceType = document.getElementById('service-type').value;
            var selectedDate = info.startStr;

            // Call backend to check availability
            checkAvailability(serviceType, selectedDate).then(isAvailable => {
                if (isAvailable) {
                    // Allow the user to proceed
                    alert('Date is available for booking.');
                } else {
                    // Blackout the date and inform the user
                    alert('Selected date is fully booked. Please choose another date.');
                }
            });
        }
    });
    calendar.render();
});

function checkAvailability(serviceType, date) {
    // Replace this with actual backend API call
    return fetch(`/api/check-availability?serviceType=${serviceType}&date=${date}`)
        .then(response => response.json())
        .then(data => data.isAvailable);
}
