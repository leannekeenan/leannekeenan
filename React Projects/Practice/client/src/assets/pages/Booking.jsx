//Import useState to capture customer selections and control form data.
import React, { useState } from 'react';

import Calendar from 'react-calendar'
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { useNavigate } from 'react-router-dom'


//Define variables for dropdown menus. These could be saved in MongoDB instead to make them updateable in a UI element.
const services = [
    'Haircut',
    'Hair Coloring',
    'Deep Conditioning',
    'Bridal Styling',
    'Event Styling'
  ];
  
  const stylists = [
    'Emily Johnson',
    'Michael Lee',
    'Sarah Brown'
  ];


const Booking = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState(new Date());
    const [service, setService] = useState('');
    const [stylist, setStylist] = useState('');
    const [time, setTime] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/bookings',  {
            method: "POST",
            headers: {
                'Content-Type': 'application.json',
            },
            body: JSON.stringify({name, email, phone, date, service, stylist, time})
        })

        if(response.ok) {
            alert(`Booking for ${name} at ${time} on ${date} with ${stylist} has been booked`);
        navigate('/')        
        }
        else {
            alert(`Booking failed. Try again.`)
        }
    }

    return (
        <div>

            <h2>Book an Appointment</h2>

            <form onSubmit={ handleSubmit }>
                <div className="user-details">
                    <div className="name">
                        <label htmlFor="name">Name:</label>
                        <input 
                        type="text" 
                        name="" 
                        id="name" 
                        required
                        value={ name } 
                        onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="phone">
                        <label htmlFor="phone">Phone:</label>
                        <input 
                        type="text" 
                        name="" 
                        id="phone" 
                        required
                        value={ phone } 
                        onChange={(e) => setPhone(e.target.value)} />
                    </div>

                    <div className="email">
                        <label htmlFor="email">Email:</label>
                        <input 
                        type="text" 
                        name="" 
                        id="email" 
                        required
                        value={ email } 
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>

                <div className="booking-details">

                    <div className='calendar'>
                        <label htmlFor="date">Pick a date</label>
                        <Calendar
                        onChange={setDate}
                        value={date}
                        required
                        />

                        <label htmlFor="time">Select a time</label>
                        <TimePicker 
                        onChange={ setTime } 
                        value={time} 
                        required
                        />
                    </div>

                    <div className="services">
                        <label htmlFor="services">Services</label>
                        <select 
                        name="service" 
                        id="service" 
                        value={ service }
                        onChange={ (e) => setService(e.target.value)}
                        required
                        >
                            <option value="" disabled>Select a service</option>
                            {
                            services.map(
                                (service, index) => {
                                    <option key={index} value={service}>{service}</option>
                                }
                              )
                            }
                        </select>
                    </div>

                    <div className='stylists'>
                        <label htmlFor="stylist">Stylist: </label>
                        <select
                            id="stylist"
                            value={stylist}
                            onChange={(e) => setStylist(e.target.value)}
                        >
                            <option value="" disabled>Select a stylist (optional)</option>
                            {stylists.map((stylist, index) => (
                            <option key={index} value={stylist}>{stylist}</option>
                            ))}
                        </select>
                    </div>

                    <div className="confirmation">
                    <p>Selected date: {date.toLocaleDateString()}</p>
                    </div>

                    <button type="submit">Book</button>
                </div>
            </form>
        </div>
    )
}


export default Booking