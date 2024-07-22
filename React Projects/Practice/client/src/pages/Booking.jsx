//Import useState to capture customer selections and control form data.
import React, { useState } from 'react';
import React from "react";
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
    const [email, setEmail] = useState('');
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

                    <div className="services">
                        <label htmlFor="services">Services</label>
                        <select 
                        name="service" 
                        id="service" 
                        value={ service }
                        onChange={ (e) => setService(e.target.value)}
                        required
                        >
                            
                        </select>
                    </div>

                    <div className="stylist">
                        <label htmlFor="stylist">Stylist</label>
                        <select 
                        name="stylist" 
                        id="stylist"
                        value={ stylist }
                        onChange={ (e) => setStylist(e.target.value)}
                        ></select>
                    </div>

                    <div className='calendar'>
                        <Calendar/>
                        <TimePicker onChange={onChange} value={value} />
                    </div>
                </div>
            </form>
        </div>
    )
}


export default Booking