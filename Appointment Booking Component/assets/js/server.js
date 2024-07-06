const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000; // Make sure this port matches the one used in the frontend

app.use(cors());
app.use(bodyParser.json());

let bookedSlots = {}; // This would typically be stored in a database

app.get('/api/booked-slots', (req, res) => {
    res.json(bookedSlots);
});

app.post('/api/booked-slots', (req, res) => {
    const { date, time, name, phone, service } = req.body;

    if (!bookedSlots[date]) {
        bookedSlots[date] = [];
    }

    if (bookedSlots[date].includes(time)) {
        return res.status(400).json({ error: 'Time slot already booked' });
    }

    bookedSlots[date].push(time);
    // Here you would save the booking details (name, phone, service) to a database
    console.log(`Booking saved: ${name}, ${phone}, ${service}, ${date}, ${time}`);

    res.status(201).json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
