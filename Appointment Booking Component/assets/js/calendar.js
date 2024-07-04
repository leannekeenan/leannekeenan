document.addEventListener('DOMContentLoaded', function() {
    let calendarEl = document.getElementById('calendar');
    let calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'dayGrid', 'timeGrid', 'interaction' ],
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,listWeek'
        },
        selectable: true,
        select: function(info) {
            let serviceType = document.getElementById('service-type').value;
            let selectedDate = info.startStr;

            checkAvailability(serviceType, selectedDate).then(isAvailable => {
                if (isAvailable) {
                    alert('Date is available for booking.');
                } else {
                    alert('Selected date is fully booked. Please choose another date.');
                }
            });
        }
    });
    calendar.render();
});

function checkAvailability(serviceType, date) {
    return fetch(`/api/check-availability?serviceType=${serviceType}&date=${date}`)
        .then(response => response.json())
        .then(data => data.isAvailable);
}
