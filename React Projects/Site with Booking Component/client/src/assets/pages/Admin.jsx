
import React, {useState, useEffect } from 'react';

import '../../assets/css/index.css'

const Admin = () => {

    const [bookings, setBookings] = useState([])

    useEffect(() => {
        const fetchBookings = async () => {
            const response = await fetch('http://localhost:5000/api/bookings')
            const data = await response.json()
            setBookings(data)
        }

        fetchBookings()
    }, [])

    return (
        <div className='container' style={{ backgroundColor: 'lightblue'}}>
              <h1>Admon Dashboard</h1>
              <ul>
                {bookings.map((booking) => (
                    <li key={booking._id}> {/*Mongo DB id value*/}
                        <p>Date Submitted: {new Date().toLocaleDateString()}</p>
                        <p>Client Details:</p>
                        {booking.name}
                        {booking.email}
                        {booking.phone}
                        <p>Booking Details:</p>
                        {new Date(booking.date).toLocaleDateString()}
                        {booking.time}
                        {booking.service}
                        {booking.stylist}
                        {booking.requests}
                    </li>
                ))}
              </ul>
        </div>
    )
}

export default Admin;