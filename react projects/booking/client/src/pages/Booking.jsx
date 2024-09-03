import React from 'react'
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

                    <label htmlFor="service"></label>
                    <select name="service" id="service">
                        <option value="option1"></option>
                    </select>

                    <label htmlFor=""></label>
                    <select name="" id="">
                        <option value=""></option>
                    </select>

                </form>
            </div>
        </>
    )
}

export default Booking