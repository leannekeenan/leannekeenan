const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.post('/api/book-appointment', (req, res) => {
    const { serviceType, date, userEmail } = req.body;

    const isAvailable = checkDateAvailability(serviceType, date);

    if (isAvailable) {
        sendConfirmationEmail(userEmail, serviceType, date);
        res.json({ success: true, message: 'Appointment booked successfully' });
    } else {
        res.json({ success: false, message: 'Selected date is fully booked' });
    }
});

function checkDateAvailability(serviceType, date) {
    return true;
}

function sendConfirmationEmail(userEmail, serviceType, date) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: userEmail,
        subject: 'Appointment Confirmation',
        text: `Your appointment for ${serviceType} on ${date} is confirmed.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
