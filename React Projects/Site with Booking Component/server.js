//What you need to build a server

//1. Express.js
//2. initialize NPM
//3. mongoose to make MDB easier
//4. dotenv

const express = require('express')

const mongoose = require('mongoose')

const cors = require('cors') //cross origin request source

require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(
    'mongodb+srv://lkeenan:rnLRoolvpEjBdUsk@cluster0.5gf0qae.mongodb.net/site_with_booking_component?retryWrites=true&w=majority&appName=Cluster0'
).then(() => {
    console.log('connected to mongoDB successfully')
}).catch((error) => {
    console.error("Error", error)
})
//build schema (blueprint).  Put schema in model (bolding inspector). Pass data through model from client .

const BookingSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    phone: { type: String, required: true},
    service: { type: String, required: true},
    stylist: { type: String, required: false},
    requests: { type: String, required: false},
    date: { type: Date, required: true},
    
})

const Boking = mongoose.model('Booking', BookingSchema)

app.get(
    'api/bookings', async (req, res) => {
        try {
            const bookings = await Booking.find().sort({date: 1})
            res.json(bookings)
        }
        catch (error) {
            console.error('Error fetching bookings', error);
            res.status(500).json({message: 'Error fetching bookings'})
        }
    }
)

app.post(
    'api/bookings', async (req, res) => {
        try {
            const { 
                name, email, phone, service, stylist, requests, date, 
            } = req.body //destructering variables and matching to the req.body 
            const newBooking = new Booking({name, email, phone, service, stylist, requests, date, })
            await newBooking.save()
            res.json(newBooking)
        }
        catch (error) {
            console.error('Error saving bookings', error);
            res.status(500).json({message: 'Error saving bookings'})
        }
    }
)

app.listen(5174, () => {
    console.log('Server is running on port')
})