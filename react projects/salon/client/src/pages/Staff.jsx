import React, { useRef } from "react";
import './staff.css';


const Staff = () => {
    const forEmployees = useRef(null);

    const scrollToSection = () => {
        if (forEmployees.current) {
            forEmployees.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <main className="staff-container">
                
               
                <section className="staff-intro">
                    <div>
                        <p className="our-professionals">
                        At Beauté Salon, our dedicated team of beauty professionals is committed to providing exceptional service and ensuring that every client feels pampered and valued. Get to know the talented individuals who make Beauté Salon a premier destination for all your beauty needs.
                        </p>
                    </div>

                   
                </section>

                <section className="team">
                    <div className="member">
                        <div className="image">
                            <img src="../public/therapist.png" alt="" />
                        </div>
                        <div>
                            <p>With over 15 years of experience in the beauty industry, Sarah Johnson is our Lead Stylist. Known for her creativity and precision, Sarah specializes in contemporary cuts and vibrant color techniques. Her passion for the art of hairstyling is matched only by her dedication to client satisfaction.</p>
                            <ul className="details">
                                <li>Credentials:
                                    <ul>
                                        <li>Certified Master Stylist</li>
                                        <li>Advanced Color Specialist</li>
                                    </ul>
                                </li>
                                <li>Specialties:
                                    <ul>
                                        <li>Precision Haircuts</li>
                                        <li>Ombre and Balayage</li>
                                        <li>Custom Coloring</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="member">
                        <div className="image">
                            <img src="../public/dermatologist.png" alt="" />
                        </div>
                        <div>
                            <p>Michael Lee brings a wealth of knowledge in skincare and wellness to Beauté Salon. With a background in dermatology and holistic skincare, Michael offers personalized facials and advanced skin treatments tailored to each client’s needs. His calming presence and expert advice ensure a rejuvenating experience.</p>
                            <ul className="details">
                                <li>Credentials:
                                    <ul>
                                        <li>Licensed Esthetician</li>
                                        <li>Certified in Microdermabrasion and Chemical Peels</li>
                                    </ul>
                                </li>
                                <li>Specialties:
                                    <ul>
                                        <li>Anti-Aging Treatments</li>
                                        <li>Acne Therapy</li>
                                        <li>Customized Facials</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="member">
                        <div>
                            <img src="../public/nail tech.png" alt="" />
                        </div>
                        <div>
                            <p>Emily Davis is our skilled Nail Technician with a flair for nail art and design. With a focus on precision and creativity, Emily provides luxurious manicures and pedicures that leave clients feeling polished and pampered. Her attention to detail ensures every client leaves with flawless nails.</p>
                            <ul className="details">
                                <li>Credentials:
                                    <ul>
                                        <li>Certified Nail Technician</li>
                                        <li>Master in Nail Art</li>
                                    </ul>
                                </li>
                                <li>Specialties:
                                    <ul>
                                        <li>Gel and Acrylic Nails</li>
                                        <li>Nail Art Design</li>
                                        <li>Spa Pedicures</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="member">
                        <div>
                            <img src="../public/therapist II.png" alt="" />
                        </div>
                        <div>
                            <p>James Thompson, our expert Massage Therapist, combines traditional techniques with modern practices to offer a range of therapeutic massages. His personalized approach helps relieve stress and promote overall well-being, making each session a truly restorative experience.</p>
                            <ul className="details">
                                <li>Credentials:
                                    <ul>
                                        <li>Licensed Massage Therapist</li>
                                        <li>Certified in Deep Tissue and Swedish Massage</li>
                                    </ul>
                                </li>
                                <li>Specialties:
                                    <ul>
                                        <li>Deep Tissue Massage</li>
                                        <li>Aromatherapy</li>
                                        <li>Sports Massage</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="member">
                        <div>
                            <img src="../public/Lead Stylist.png" alt="" />
                        </div>
                        <div>
                            <p>Olivia Martinez is the friendly face you’ll meet when you arrive at Beauté Salon. As our Receptionist, Olivia ensures that your experience starts and ends smoothly. From booking appointments to answering your questions, she’s here to make sure everything runs seamlessly.</p>
                            <ul className="details">
                                <li>Credentials:
                                    <ul>
                                        <li>Customer Service Specialist</li>
                                        <li>Trained in Salon Management Software</li>
                                    </ul>
                                </li>
                                <li>Specialties:
                                    <ul>
                                        <li>Appointment Scheduling</li>
                                        <li>Customer Relations</li>
                                        <li>Salon Administration</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="make-appointment">
                    <p>Our talented staff is eagerly awaiting the opportunity to enhance your natural beauty. Whether you are in need of a fresh new style, a rejuvenating facial, or a flawless manicure, our team is here to make you look and feel your absolute best. Book your appointment today, and let us create the perfect look just for you. We can not wait to welcome you.</p>

                    <a href="/appointments">Make an Appointment</a>
                </section>

                <section ref={forEmployees} className="forEmployees">
                    <h2 className="log">For our Staff</h2>
                    <p>Need to peek at your upcomming bookings? Login here</p>
                    <a href="/login">Login</a>
                </section>
            </main>
        </>
    );
}

export default Staff;
