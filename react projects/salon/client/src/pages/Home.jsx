import React from 'react';
import './home.css';
import '../App.css';
 

const Home = () => { 
   
    return (
        <>

            <main className='home-page'>
                <div className="intro">
                    <img className="logo fade" src="/public/istockphoto-2158631426-612x612 -2.png" alt="" />
                    <h1 className="company fade">Beaute Salon</h1>
                    <span className='fade'>where beauty meets excellence</span>
                </div>
                <section className="section hero">
                    
                </section>

                <section className="container">
                    <section className="section welcome">
                        <div className="text">
                        <p>

                            Our salon is more than just a place to get your hair or nails done; it's a sanctuary designed for those who seek the highest standards in hair, skin, and nail care.  Whether you’re looking for a transformative haircut, rejuvenating facial, or a flawless manicure, we provide personalized care that caters to your individual needs, ensuring you leave our salon feeling refreshed, confident, and truly beautiful.
                        </p>
                        </div>
                        <div className="image">
                            <img src="/public/compliment.png" alt="" />
                        </div>
                        

                        

                    </section>

                    <section className="section offer">
                        <div>
                            <p>
                                Discover a wide range of services designed to enhance your natural beauty. From precision haircuts and vibrant coloring to rejuvenating facials and flawless manicures, Beauté Salon is your one-stop destination for all things beauty.
                            </p>
                        </div>
                    </section>

                    <section className="section who">
                        <div>
                            <img src="../public/hair wash station 1.png" alt="" />
                        </div>

                        <div className='text'>
                            <p>
                            Our talented team comprises experienced stylists, estheticians, and nail technicians passionate about their craft. Each member brings their unique expertise to ensure you receive the highest quality care in a relaxing and welcoming environment.
                            </p>
                        </div>
                    </section>

                    <section className="section location">
                        <div>
                            <p>
                                Conveniently located in the heart of Redwood City, Beauté Salon is open Monday to Saturday from 8am to 5pm. Whether you are planning a visit before work, during lunch, or for an evening of pampering, our flexible hours accommodate your schedule.
                            </p>
                        </div>

                        <div>
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.960279620668!2d-122.2272222!3d37.4852778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbbdd6d5c9e2f%3A0x1ae8104e92efb2cf!2s37%C2%B029%2707.0%22N+122%C2%B013%2738.0%22W!5e0!3m2!1sen!2sus!4v1655748256910!5m2!1sen!2sus"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                        </div>
                    </section>

                    <section className="section reach">
                        <div className="container">
                            <div className="buttons">
                                    <a href="/services">Services</a>
                                    <a href="/appointments">Appointments</a>
                            </div>

                            <div>
                                    <p>
                                        Booking an appointment has never been easier. 
                                        Call, email, or visit our online booking page to schedule your next visit.
                                    </p>

                                    <p>
                                        Not sure what service is for you? 
                                        Check out our services page to see what we offer.
                                    </p>

                                    
                            </div> 
                        </div>                       
                    </section>
                </section>
            </main>
        </>
    )
}

export default Home