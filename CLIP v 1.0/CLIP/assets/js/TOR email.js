document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.container form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Collect form data
        const employeeID = document.getElementById('employeeID').value;
        const firstName = document.getElementById('first-name').value;
        const middleName = document.getElementById('middle-name').value;
        const lastName = document.getElementById('last-name').value;
        const suffix = document.querySelector('select[name="suffix"]').value;

        // Shift details
        const shiftDay = document.getElementById('Day').checked;
        const shiftSwing = document.getElementById('Swing').checked;
        const shiftOvernight = document.getElementById('Overnight').checked;

        // Campus details
        const campus = document.getElementById('campuses').value;
        const buildingNumber = document.querySelector('input[name="campus-building"]').value;
        const basePosition = document.getElementById('base-position').value;
        const positionID = document.querySelector('select[name="position-id"]').value;

        // Days off
        const daysOffSunday = document.getElementById('Sunday').checked;
        const daysOffMonday = document.getElementById('Monday').checked;
        const daysOffTuesday = document.getElementById('Tuesday').checked;
        const daysOffWednesday = document.getElementById('Wednesday').checked;
        const daysOffThursday = document.getElementById('Thursday').checked;
        const daysOffFriday = document.getElementById('Friday').checked;
        const daysOffSaturday = document.getElementById('Saturday').checked;

        // Request details
        const reason = document.querySelector('select[name="reasons"]').value;
        const departureDate = document.querySelector('.depart input[type="date"]').value;
        const returnDate = document.querySelector('.return input[type="date"]').value;
        const hours = document.querySelector('.hours input[type="text"]').value;

        // Confirmation details
        const emailAddress = document.querySelector('.email input[type="email"]').value;
        const submissionDate = document.querySelector('.todays-date input[type="date"]').value;

         // Determine email recipient based on selected campus
         let toEmail;

         switch (campus) {
             case 'Bayfront':
                 toEmail = 'leanne.keenan1@gmail.com';
                 break;
             case 'Chilco':
                 toEmail = 'leanne.keenan1@gmail.com';
                 break;
             case 'Classic':
                 toEmail = 'leanne.keenan1@gmail.com';
                 break;
             case 'Gateway':
                 toEmail = 'leanne.keenan1@gmail.com';
                 break;
             case 'Willow':
                 toEmail = 'leanne.keenan1@gmail.com';
                 break;
             case 'Events':
                 toEmail = 'leanne.keenan1@gmail.com';
                 break;
             default:
                 toEmail = 'leanne.keenan1@gmail.com'; // Default email address
                 break;
         }

        // Prepare email content
        const subject = 'Time Off Request';
        let message = `Employee ID: ${employeeID}\n`;
        message += `First Name: ${firstName}\n`;
        message += `Middle Name: ${middleName}\n`;
        message += `Last Name: ${lastName}\n`;
        message += `Suffix: ${suffix}\n\n`;

        message += `Shift Details:\n`;
        if (shiftDay) message += `- Day\n`;
        if (shiftSwing) message += `- Swing\n`;
        if (shiftOvernight) message += `- Overnight\n\n`;

        message += `Campus: ${campus}\n`;
        message += `Building Number: ${buildingNumber}\n`;
        message += `Base Position: ${basePosition}\n`;
        message += `Position ID#: ${positionID}\n\n`;

        message += `Days Off:\n`;
        if (daysOffSunday) message += `- Sunday\n`;
        if (daysOffMonday) message += `- Monday\n`;
        if (daysOffTuesday) message += `- Tuesday\n`;
        if (daysOffWednesday) message += `- Wednesday\n`;
        if (daysOffThursday) message += `- Thursday\n`;
        if (daysOffFriday) message += `- Friday\n`;
        if (daysOffSaturday) message += `- Saturday\n\n`;

        message += `Request Details:\n`;
        message += `Reason: ${reason}\n`;
        message += `Departure Date: ${departureDate}\n`;
        message += `Return Date: ${returnDate}\n`;
        message += `Accrued Hours: ${hours}\n\n`;

        message += `Confirmation Details:\n`;
        message += `Email Address: ${emailAddress}\n`;
        message += `Date of Submission: ${submissionDate}\n`;

        // Simulate sending email (JavaScript cannot send emails directly)
        console.log('Sending email...');
        console.log('To: management@example.com');
        console.log('Subject: ' + subject);
        console.log('Message:');
        console.log(message);

        // You could optionally display a success message to the user
        alert('Form submitted successfully.');

        // Clear the form or redirect to a thank you page
        // form.reset(); // Uncomment to reset form fields
    });
});
