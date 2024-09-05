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
    const [email, setEmail] = useState(email)
    const [date, setDate] = useState(date).toLocaleString()
    const [service, setService] = useState(service)
    const [stylist, setStylist] = useState(stylist)
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
                    <Calendar
                        onChange={setDate}
                        value={date} 
                        required
                    />
                    <p>Date: {date.toLocaleDateString()}</p>
                    <label htmlFor="service">Services</label>
                    <select name="service" 
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required>
                        <option value="" disabled>Select an option</option>
                        {services.map((service, index) => {
                            <option key={(index)} value={service}>{service}</option>
                        })}
                    </select>

                    <label htmlFor="">Stylists</label>
                    <select name="stylist" id="stylist">
                    <option value="" disabled>Select an option</option>
                        {stylists.map((stylist, index) => {
                            <option key={(index)} value={stylist}>{stylist}</option>
                        })}
                    </select>
                    <button type="submit">Book</button>
                </form>
            </div>
        </>
    )
}

export default Booking