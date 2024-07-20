import React, { useState, useEffect } from 'react';
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
  const [bookedSlots, setBookedSlots] = useState({});
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookedSlots = async () => {
      try {
        const response = await fetch('/api/booked-slots');
        if (!response.ok) {
          throw new Error('Failed to fetch booked slots');
        }
        const data = await response.json();
        setBookedSlots(data);
      } catch (error) {
        console.error('Failed to fetch booked slots:', error);
      }
    };
    fetchBookedSlots();
  }, []);

  const handleTimeSlotClick = (time) => {
    if (bookedSlots[date.toISOString().split('T')[0]]?.includes(time)) {
      return;
    }
    setSelectedTimeSlot(time);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedTimeSlot) {
      alert('Please select a time slot');
      return;
    }

    const response = await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, date, service, stylist, requests, time: selectedTimeSlot }), // Include special requests
    });

    if (response.ok) {
      alert(`Booking for ${name} on ${date.toLocaleDateString()} at ${selectedTimeSlot} was successful. We will send an email to ${email} with available times.`);
      navigate('/');
    } else {
      alert('Booking failed. Please try again.');
    }
  };

  const loadTimeSlots = () => {
    return [
      '8:00 AM',  '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
      '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
    ];
  };

  return (
    <div className='container' style={{ backgroundColor: 'lightgreen' }}>
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
                  value={requests}
                  onChange={(e) => setRequests(e.target.value)}
                />
              </div>

              <div className="terms">
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">I agree to the terms and conditions</label>
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
                calendarType="gregory"
                required
              />
            </div>

            <div className="time-slots-container">
            <h2 className="form-headline">Available Time Slots</h2>
            <div className="time-slots" id="time-slots">
              {loadTimeSlots().map(time => (
                <button
                  key={time}
                  className={`time-slot ${bookedSlots[date.toISOString().split('T')[0]]?.includes(time) ? 'booked' : ''} ${selectedTimeSlot === time ? 'selected' : ''}`}
                  onClick={() => handleTimeSlotClick(time)}
                  disabled={bookedSlots[date.toISOString().split('T')[0]]?.includes(time)}
                >
                  {time}
                </button>
              ))}
            </div>
            </div>

          </div>
          
        </div>
        <div className="confirm">
          <div className="confirmation">
            <h2>You have selected:</h2>
            <p>Date: {date.toLocaleDateString()}</p>
            <p>Time: {selectedTimeSlot}</p>
            <p>Service: {service}</p>
            <p>Stylist: {stylist}</p>
            <p>Requested Accommodations: {requests}</p>
          </div>
          <button type="submit">Confirm Booking</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
