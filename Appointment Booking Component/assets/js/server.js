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

    if (!name || !phone || !email || !service || !date || !time) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    if (bookedSlots[date] && bookedSlots[date].includes(time)) {
        return res.status(400).json({ error: 'Time slot already booked' });
    }

    if (!bookedSlots[date]) {
        bookedSlots[date] = [];
    }
    bookedSlots[date].push(time);

    const confirmation = Math.floor(Math.random() * 1000000);

    try {
        await sendConfirmationEmails(name, email, service, date, time, confirmation);
        res.json({ confirmation });
    } catch (error) {
        console.error('Failed to send confirmation emails:', error);
        res.status(500).json({ error: 'Failed to send confirmation emails' });
    }
});

async function sendConfirmationEmails(name, userEmail, service, date, time, confirmation) {
    const recipientEmail = 'l_keenan@outlook.com';
    const subjectUser = 'Appointment Confirmation';
    const htmlContentUser = `
        <p>Japaneese Beatle,</p>
        <p>An appointment for ${name} to get ${service} completed on ${date} at ${time} has been scheduled.</p>
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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
