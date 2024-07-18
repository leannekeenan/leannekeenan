import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/booking.css';
import '../../assets/css/index.css';

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
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [service, setService] = useState('');
  const [stylist, setStylist] = useState('');
  const [requests, setRequests] = useState(''); // Add state for special requests
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, date, service, stylist, requests }), // Include requests in the body
    });

    if (response.ok) {
      alert(`Booking for ${name} on ${date.toLocaleDateString()} was successful. We will send an email to ${email} with available times.`);
      navigate('/');
    } else {
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <div className='container' style={{ backgroundColor: 'lightgreen'}}>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="data">

          <div className="user-inputs">
            <div className="user-info">

              <div className='user-name'>
                <label htmlFor="name">Name: </label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
              </div>

              <div className="user-email">
                  <label htmlFor="email">Email: </label>
                  <input
                      id="email"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                  />
              </div>

              <div className="user-phone">
          
                  <label htmlFor="phone">Phone: </label>
                  <input
                      id="phone"
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                  />
              </div>

            </div>

            <div className="booking-info">

              <div className='service-type'>
                <label htmlFor="service">Service: </label>
                <select id="service" value={service} onChange={(e) => setService(e.target.value)} required>
                  <option value="" disabled>Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="stylist-choice">
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

              <div className="notes">
                  <label htmlFor="requests">Notes:</label>
                  <textarea
                  id="requests"
                  value={requests} // Bind value to state
                  onChange={(e) => setRequests(e.target.value)} // Update state on change
                  />
              </div>

            </div>
            
          </div>

          <div className="calendar">
            <div className='calendar-container'>
                <label>Choose a date for your service:</label>
                <Calendar
                    className="custom-calendar"
                    onChange={setDate}
                    value={date}
                    calendarType="gregory" // Start week on Sunday
                    required
                />
            </div>
          </div>
        </div>
      
        <div className="confirm"></div>
      </form>
    </div>
  );
};

export default Booking;
