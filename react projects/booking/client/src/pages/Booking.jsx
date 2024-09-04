import React from 'react'
import { useState } from 'react'
import Calendar from 'react-calendar'
import { useNavigate } from 'react-router-dom'

const services = [
    'service A',
    'service B',
    'service C'
]

const stylists = [
    'stylist A',
    'stylist B',
    'stylist C'
]

const Booking = () => {
    const [name, setName] = useState(name)
    return (
        <>
            <h1>Booking</h1>

            <div className="form">
                <form onSubmit={handleSubmit}>

                    <label htmlFor="name">name:</label>
                    <input type="text"
                      id='name'
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      required/>

                    <label htmlFor="email">email:</label>
                    <input type="text"
                      id='email'
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required/>

                    <label htmlFor="">Date:</label>
                    <input type="date"
                      id='date'
                      value={date} 
                      onChange={(e) => setDate(e.target.value)} 
                      required/>

                    <label htmlFor="service">Services</label>
                    <select name="service" 
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}>
                        
                    </select>

                    <label htmlFor="">Stylists</label>
                    <select name="stylist" id="stylist">
                        
                    </select>

                    <Calendar/>

                </form>
            </div>
        </>
    )
}

export default Booking