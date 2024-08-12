import React, { useRef } from 'react'

import './appointments.css';

const Appointments = () => {

    const bookingRef = useRef(null);
  const employeeRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    
        <section className='appointments'>
        <button onClick={() => scrollToSection(employeeRef)}>Employee Login</button>
        <div>
    <p>
        Book with us today by calling 888-867-5309 or using our virtual booking system below. Enter your information and details about your preferences. We will send you a confirmation email with the details or contact you if we have any additional questions.

        <button onClick={() => scrollToSection(bookingRef)}>Book Now</button>
    </p>

    <p>
    Not quite sure who to see? Don&apos;t know what service you want? Take a peek at our Staff page to find the right professional for you or peruse our Services page to find just the right service.
    <a href="/staff">staff</a>
    <a href="/services">services</a>
</p>

    

    
</div>

        <nav>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </nav>
        </section>
        <section className='booking'></section>
        <section className='employee'></section>
      <div className='container'>
      
      <section ref={bookingRef}>
        <h2>Section 1</h2>
        <p>Content for section 1.</p>
      </section>
      <section ref={employeeRef}>
        <h2>Section 2</h2>
        <p>Content for section 2.</p>
      </section>
      </div>
    </>
  );
}

export default Appointments