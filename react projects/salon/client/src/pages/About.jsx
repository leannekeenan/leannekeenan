import React from "react";
import './about.css'; // Adjust the path as needed




const About = () => {

    return (
        <>
            <main className="about-container">
                <section className="our-team">
                    <div>
                    <p>Beauté Salon was founded by a visionary group local stylists and beauticians with a passion for beauty and a dedication to client satisfaction. Over the years, our salon has grown, but our core values remain unchanged: quality, integrity, and innovation.</p>
                    </div>
                    <div>
                    <img src="../../public/Untitled-1 (15).png" alt="" />
                    </div>
                    
                    
                </section>

                <section className="our-philosophy">
                    <h3>Our Philosophy</h3>
                    <p>We believe in using only the best products and techniques to achieve stunning results. Our commitment to excellence is reflected in every service we offer, from our premium haircare treatments to our indulgent spa services. Our salon is equipped with state-of-the-art facilities, ensuring a luxurious experience from the moment you walk through our doors. Each space is meticulously designed to provide comfort and relaxation, allowing you to unwind and enjoy your beauty journey. Our team of skilled professionals is trained in the latest industry trends and technologies, guaranteeing that you receive personalized care tailored to your unique style and needs. At Beauté Salon, we are dedicated to delivering not just a service but a memorable experience that leaves you feeling refreshed, confident, and beautiful.</p>
                </section>

                <section className="our-community">
                    <h3>Our Community</h3>
                    <div>
                        <p>Beauté Salon is more than just a place to get pampered; its a community. We are proud to support local initiatives and charities, giving back to the community that has supported us for years. By partnering with nearby organizations and participating in community events, we aim to make a positive impact beyond our salon doors.</p>
                    </div>

                    <div className="partners">
                        
                        <div>
                            <img src="../../public/22b7464b6aae4d63a39dbe5700edb2db-free.png" alt="" />
                            <img src="../../public/30dc942bd2664547a4d2f4e138b0b36a-free.png" alt="" />
                            <img src="../../public/607e48c685ea46eb90f8713d4377c01e-free.png" alt="" />
                        </div>
                    </div>

                </section>
                <section className="contact">
                    <p>Ready to experience the Beauté Salon difference? Contact us today to schedule your appointment.</p>
                    <a href="/appointments">Book Today</a>
                </section>
            </main>
        </>
    )
}

export default About