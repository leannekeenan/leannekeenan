import React from "react";
import './staff.css';



const Staff = () => {


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
                        <div className="blurb">
                            <p>With over 15 years of experience in the beauty industry, Sarah Johnson is our Lead Stylist. Known for her creativity and precision, Sarah specializes in contemporary cuts and vibrant color techniques. Her passion for the art of hairstyling is matched only by her dedication to client satisfaction.</p>
                            <ul className="details">
                                <li>Certified Master Stylist & Advanced Colorist</li>
                                <li>Specialities include: Precision haircuts, Ombre, Balayange, & Custom Coloring</li>
                            </ul>
                        </div>
                    </div>
                    <div className="member">
                        <div className="image">
                            <img src="../public/dermatologist.png" alt="" />
                        </div>
                        <div className="blurb">
                            <p>Michael Lee brings a wealth of knowledge in skincare and wellness to Beauté Salon. With a background in dermatology and holistic skincare, Michael offers personalized facials and advanced skin treatments tailored to each client’s needs. His calming presence and expert advice ensure a rejuvenating experience.</p>
                            <ul className="details">
                                <li>Licensed Esthetician Certified in Microdermabrasion and Chemical Peels</li>
                                <li> Specialties include: Anti-Aging Treatments, Acne Therapy, Customized Facials</li>

                            </ul>
                        </div>
                    </div>
                    <div className="member">
                        <div>
                            <img src="../public/nail tech.png" alt="" />
                        </div>
                        <div className="blurb">
                            <p>Emily Davis is our skilled Nail Technician with a flair for nail art and design. With a focus on precision and creativity, Emily provides luxurious manicures and pedicures that leave clients feeling polished and pampered. Her attention to detail ensures every client leaves with flawless nails.</p>
                            <ul className="details">
                                <li>Certified Nail Technician & Master in Nail Art</li>
                                <li>Specialties include: Gel and Acrylic Nails, Nail Art Design, & Spa Pedicures</li>
                            </ul>
                        </div>
                    </div>
                    <div className="member">
                        <div>
                            <img src="../public/therapist II.png" alt="" />
                        </div>
                        <div className="blurb">
                            <p>James Thompson, our expert Massage Therapist, combines traditional techniques with modern practices to offer a range of therapeutic massages. His personalized approach helps relieve stress and promote overall well-being, making each session a truly restorative experience.</p>
                            <ul className="details">
                                <li>Licensed Massage Therapist certified in Deep Tissue & Swedish Massage</li>
                                <li>Specialties include: Deep Tissue Massage, Aromatherapy, Sports Medicine</li>
                            </ul>
                        </div>
                    </div>
                    <div className="member">
                        <div>
                            <img src="../public/Lead Stylist.png" alt="" />
                        </div>
                        <div className="blurb">
                            <p>Olivia Martinez is the friendly face you’ll meet when you arrive at Beauté Salon. As our Receptionist, Olivia ensures that your experience starts and ends smoothly. From booking appointments to answering your questions, she’s here to make sure everything runs seamlessly.</p>
                            <ul className="details">
                                <li>Customer Service Specialist Trained in Salon Management Software</li>
                                <li>Specialties include: Appointment Scheduling, Customer Relations, & Salon Administration</li>

                            </ul>
                        </div>
                    </div>
                </section>

                <section className="make-appointment">
                    <div>
                        <p>Our talented staff is eagerly awaiting the opportunity to enhance your natural beauty. Whether you are in need of a fresh new style, a rejuvenating facial, or a flawless manicure, our team is here to make you look and feel your absolute best. Book your appointment today, and let us create the perfect look just for you. We can not wait to welcome you.</p>
                        <a href="/appointments">Make an Appointment</a>
                    </div>
                    <div>
                    
                        <img src="../../public/compliment III.png" alt="" />
                    </div>
                    
                    
                </section>

               
            </main>
        </>
    );
}

export default Staff;
