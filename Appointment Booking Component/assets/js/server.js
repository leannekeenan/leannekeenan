const express = require('express');
const app = express();
const port = 3000;

// Sample data representing booked slots
const bookedSlots = {
    '2024-07-07': ['10:00 AM', '1:00 PM'],
    '2024-07-08': ['9:00 AM', '3:00 PM']
};

app.get('/api/booked-slots', (req, res) => {
    res.json(bookedSlots);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
