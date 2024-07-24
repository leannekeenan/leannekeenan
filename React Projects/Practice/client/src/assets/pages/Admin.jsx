import React, { useState, useEffect } from "react";

const Admin = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const response = await fetch('http://localhost:5000/api/bookings');
            const data = await response.json()
            setBookings(data)
        }
        fetchBookings()
    },[])

    return (
    <div>
        <h1>Admin Dashboard</h1>
        <ul>
            { bookings.map((booking) => {
                <li key={booking._id}>
                    <p>name: ${booking.name}</p>
                    <p>email: ${booking.email}</p>
                    <p>phone: ${booking.phone}</p>
                    <p>service: ${booking.service}</p>
                    <p>stylist: ${booking.stylist}</p>
                    <p>date: ${new Date(booking.date).toLocaleDateString()}</p>
                    <p>time: ${booking.time}</p>
                </li>
            })}
        </ul>
    </div>
    )
}


export default Admin