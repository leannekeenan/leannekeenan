import React from "react";
import './home.css';


const Home = () => {

    return (
        <>

            <main>
                <section className="hero">
                    <div className="intro">
                        <img className="logo fade" src="/public/istockphoto-2158631426-612x612 -2.png" alt="" />
                        <h1 className="company">Beaute Salon</h1>
                        <span>where beauty meets excellence</span>
                    </div>
                </section>

                <section className="container">
                    <section className="section welcome">
                        <p>
                            Our salon is a sanctuary for those seeking the finest in hair, skin, and nail care. At Beauté, we believe that everyone deserves to look and feel their best. Our team of skilled professionals is dedicated to providing exceptional services tailored to your unique needs.
                        </p>

                    </section>

                    <section className="section offer">
                        <p>
                            Discover a wide range of services designed to enhance your natural beauty. From precision haircuts and vibrant coloring to rejuvenating facials and flawless manicures, Beauté Salon is your one-stop destination for all things beauty.
                        </p>
                    </section>

                    <section className="section who">
                        <p>
                            Our talented team comprises experienced stylists, estheticians, and nail technicians passionate about their craft. Each member brings their unique expertise to ensure you receive the highest quality care in a relaxing and welcoming environment.
                        </p>
                    </section>

                    <section className="section location">
                        <p>
                            Conveniently located in the heart of [City Name], Beauté Salon is open [days of the week] from [opening hours]. Whether you're planning a visit before work, during lunch, or for an evening of pampering, our flexible hours accommodate your schedule.
                        </p>
                    </section>

                    <section className="section reach">
                        <p>
                            Booking an appointment has never been easier. Call us at [phone number], email us at [email address], or visit our online booking page to schedule your next visit. Follow us on social media for the latest updates and special offers.
                        </p>
                    </section>
                </section>
            </main>
        </>
    )
}

export default Home