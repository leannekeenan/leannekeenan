document.addEventListener("DOMContentLoaded", function() {
    loadTableData();
});

function handleClockFunction() {
    const shiftType = document.querySelector('input[name="shiftType"]:checked').value;
    const shiftFunction = document.querySelector('input[name="shiftFunction"]:checked').value;
    const breakOrLunch = document.querySelector('input[name="breakOrLunch"]:checked') ? document.querySelector('input[name="breakOrLunch"]:checked').value : '';
    const campus = document.querySelector('input[name="campus"]:checked').value;
    const employeeId = document.getElementById('employeeId').value;
    const currentTime = new Date().toLocaleTimeString(); // Get current time
    const currentDate = new Date().toLocaleDateString(); // Get current date

    // Initialize shiftData
    let shiftData = JSON.parse(localStorage.getItem('shiftData')) || {
        firstBreakStart: '',
        firstBreakEnd: '',
        secondBreakStart: '',
        secondBreakEnd: '',
        lunchStart: '',
        lunchEnd: '',
        secondLunchStart: '',
        secondLunchEnd: '',
        shiftStart: '',
        shiftEnd: ''
    };

    let timestamps = '';

    if (shiftFunction === "start") {
        timestamps = `Start: ${currentTime}`;
        if (breakOrLunch === "break") {
            if (!shiftData.firstBreakStart) {
                shiftData.firstBreakStart = currentTime;
            } else if (!shiftData.secondBreakStart) {
                shiftData.secondBreakStart = currentTime;
            }
        } else if (breakOrLunch === "lunch") {
            if (!shiftData.lunchStart) {
                shiftData.lunchStart = currentTime;
            } else if (!shiftData.secondLunchStart) {
                shiftData.secondLunchStart = currentTime;
            }
        } else {
            shiftData.shiftStart = currentTime;
        }
    } else if (shiftFunction === "stop") {
        timestamps = `Stop: ${currentTime}`;
        if (breakOrLunch === "break") {
            if (!shiftData.firstBreakEnd) {
                shiftData.firstBreakEnd = currentTime;
            } else if (!shiftData.secondBreakEnd) {
                shiftData.secondBreakEnd = currentTime;
            }
        } else if (breakOrLunch === "lunch") {
            if (!shiftData.lunchEnd) {
                shiftData.lunchEnd = currentTime;
            } else if (!shiftData.secondLunchEnd) {
                shiftData.secondLunchEnd = currentTime;
            }
        } else {
            shiftData.shiftEnd = currentTime;
        }
    }

    localStorage.setItem('shiftData', JSON.stringify(shiftData));

    const tableData = JSON.parse(localStorage.getItem('tableData')) || [];

    // Use combined value for shift type if break or lunch is selected
    const shiftValue = breakOrLunch ? `${shiftType} (${breakOrLunch})` : shiftType;

    const newRow = `
        <tr>
            <td>${currentDate}</td>
            <td>${employeeId}</td>
            <td>${campus}</td>
            <td>${shiftValue}</td>
            <td>${timestamps}</td>
        </tr>
    `;

    const tableBody = document.querySelector("#shiftTable tbody");

    // Insert the new row at the beginning of the table body
    tableBody.insertAdjacentHTML('afterbegin', newRow);

    tableData.unshift({
        date: currentDate,
        employeeId: employeeId,
        campus: campus,
        shift: shiftValue,
        timestamps: timestamps
    });
    localStorage.setItem('tableData', JSON.stringify(tableData));
}

function loadTableData() {
    const tableData = JSON.parse(localStorage.getItem('tableData')) || [];
    const tableBody = document.querySelector("#shiftTable tbody");

    // Clear existing table rows before appending
    tableBody.innerHTML = '';

    tableData.reverse();

    tableData.forEach(row => {
        const newRow = `
            <tr>
                <td>${row.date}</td>
                <td>${row.employeeId}</td>
                <td>${row.campus}</td>
                <td>${row.shift}</td>
                <td>${row.timestamps}</td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('afterbegin', newRow);
    });
}

