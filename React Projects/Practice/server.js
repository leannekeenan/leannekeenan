//express.js
//initialize npm
//mongoose
//nodemod?
//dotenv

const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
require('dotenv').config()

const app = express();
app.use(cors()) //cross over request source
app.use(express.json())

mongoose.connect('mongodb+srv://leannekeenan1:m8i5L8Hnkt8UDO20@cluster0.8my0xqu.mongodb.net/practice?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log('successful connection.')
}).catch((error) => {
    console.error("error", error)
})

//to define structure in mongo DB database we need a scheme to butit in a model and pass data through said model

const BookingSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String , required: true},
    phone: {type: String , required: true} ,
    service: {type: String , required: true},
    stylist: {type: String , required: false},
    date: {type: Date, required: true},
    time: {type: String , required: true}
})

const Booking = mongoose.model('Booking', BookingSchema)


//routes
app.get(
    'api/bookings', async (req, res) => {
        try {
            const bookings = await Booking.find().sort({date: 1})
            res.json(bookings)
        }
        catch (error) {
            console.error('Error fetching booking:', error)
            res.status(500).json({message: 'Error fetching booking'});
        }
    }
)

app.post(

    'api/bookings', async (req, res) => {
        try {
            const { name, email, phone, service, stylist, date, time } = req.body //destructuring
            const newBooking = newBooking( { name, email, phone, service, stylist, date, time } )
            await newBooking.save()
            res.json(newBooking)
        }
        catch (error) {
            console.error('Error saving booking:', error)
            res.status(500).json({message: 'Error saving booking'});
        }
    }
)

app.listen(6000, () => {
    console.log('successfully running server 5000')
})
