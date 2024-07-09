// server.js

const express = require('express');
const bodyParser = require('body-parser');
const { sendEmail } = require('./mailer');

const app = express();
const PORT = process.env.PORT || 3000;

let bookedSlots = {};

app.use(bodyParser.json());

app.get('/api/booked-slots', (req, res) => {
    res.json(bookedSlots);
});

app.post('/api/book', async (req, res) => {
    const { name, phone, email, service, date, time } = req.body;

    // Validate request body
    if (!name || !phone || !email || !service || !date || !time) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if time slot is already booked
    if (bookedSlots[date] && bookedSlots[date].includes(time)) {
        return res.status(400).json({ error: 'Time slot already booked' });
    }

    // Book the appointment
    if (!bookedSlots[date]) {
        bookedSlots[date] = [];
    }
    bookedSlots[date].push(time);

    // Generate confirmation number (if needed)
    const confirmation = Math.floor(Math.random() * 1000000);

    // Send confirmation emails
    try {
        await sendConfirmationEmails(name, email, service, date, time, confirmation);
        console.log('Confirmation emails sent successfully.');
        res.json({ confirmation });
    } catch (error) {
        console.error('Failed to send confirmation emails:', error);
        res.status(500).json({ error: 'Failed to send confirmation emails' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

async function sendConfirmationEmails(name, userEmail, service, date, time, confirmation) {
    const recipientEmail = 'l_keenan@outlook.com'; // Replace with actual recipient email
    const subjectUser = 'Appointment Confirmation';
    const htmlContentUser = `
        <p>Japaneese Beatle,</p>
        <p>An appointment for ${name} to get ${service} completed on ${date} at ${time} has been Scheduled.</p>
        <p>To contact customer call or text ${phone} or email at ${email}</p>
        <p>Confirmation Number: ${confirmation}</p>
        <p>Thank you for choosing our service.</p>
    `;

    const subjectCompany = 'New Appointment Booked';
    const htmlContentCompany = `
        <p>New appointment booked:</p>
        <p>Name: ${name}</p>
        <p>Email: ${userEmail}</p>
        <p>Service: ${service}</p>
        <p>Date: ${date}</p>
        <p>Time: ${time}</p>
        <p>Confirmation Number: ${confirmation}</p>
    `;

    await Promise.all([
        sendEmail(userEmail, subjectUser, htmlContentUser),
        sendEmail(recipientEmail, subjectCompany, htmlContentCompany)
    ]);
}
