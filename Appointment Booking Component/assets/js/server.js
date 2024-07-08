const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;

let bookedSlots = {}; // Object to hold booked slots

app.use(bodyParser.json());
app.use(express.static(__dirname + '/Appointment Booking Component'));

// Route to handle fetching booked slots
app.get('/api/booked-slots', (req, res) => {
    res.json(bookedSlots);
});

// Route to handle booking slots
app.post('/api/booked-slots', (req, res) => {
    const { date, time, name, phone, service } = req.body;
    if (!bookedSlots[date]) {
        bookedSlots[date] = [];
    }
    bookedSlots[date].push(time);
    res.status(200).send();
});

// Route to handle sending email
app.post('/api/send-email', async (req, res) => {
    const { workOrderDetails, recipientEmail } = req.body;
    try {
        await sendWorkOrderEmail(workOrderDetails, recipientEmail);
        res.status(200).send();
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send();
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Mailer function
async function sendWorkOrderEmail(workOrderDetails, recipientEmail) {
    let transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'leanne.keenan1@outlook.com', // replace with your email
            pass: 'L!m@M!k3K!10'           // replace with your password
        }
    });

    let mailOptions = {
        from: 'leanne.keenan1@outlook.com',    // replace with your email
        to: recipientEmail,
        subject: 'New Work Order',
        html: workOrderDetails
    };

    await transporter.sendMail(mailOptions);
}
