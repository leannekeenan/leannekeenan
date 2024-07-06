const express = require('express');
const app = express();
const PORT = 3000;

let bookedSlots = {};

app.use(express.json());

app.get('/api/booked-slots', (req, res) => {
    res.json(bookedSlots);
});

app.post('/api/booked-slots', (req, res) => {
    const { date, time, name, phone, service } = req.body;

    if (!bookedSlots[date]) {
        bookedSlots[date] = [];
    }

    bookedSlots[date].push({ time, name, phone, service });
    res.status(201).send();
});

app.delete('/api/booked-slots', (req, res) => {
    bookedSlots = {};
    res.status(200).send('All bookings cleared');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


