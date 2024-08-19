import React from "react";
import './services.css';
const Services = () => {

    return (
        <>
        <main className="services-container">
            <section className="hero">
                <p>
                 Our services are designed to offer you a luxurious escape and personalized attention, ensuring each visit is memorable. From sophisticated hairstyling and revitalizing skincare to indulgent manicures and relaxing massages, our team of experts is dedicated to providing top-tier treatments that cater to your every need. Dive into our diverse offerings and experience the exceptional quality that sets Beauté Salon apart.
                </p>
            </section>

            <section className="services">
            <div className="menu-items">
            {/* Hairstyling */}
            <div className="service-category">
                <h3>Hairstyling</h3>
                <table className="menu-item">
                <tbody>
                    <tr className="item" id="haircut-style">
                    <td className="item-name">Haircut & Style</td>
                    <td className="item-description">Includes shampoo, cut, and blow-dry</td>
                    <td className="item-price">$50.00</td>
                    </tr>
                    <tr className="item" id="blowout">
                    <td className="item-name">Blowout</td>
                    <td className="item-description">Shampoo and blow-dry styling</td>
                    <td className="item-price">$30.00</td>
                    </tr>
                    <tr className="item" id="balayage">
                    <td className="item-name">Balayage</td>
                    <td className="item-description">Hand-painted highlights</td>
                    <td className="item-price">$120.00</td>
                    </tr>
                    <tr className="item" id="ombre">
                    <td className="item-name">Ombre</td>
                    <td className="item-description">Gradual color blend</td>
                    <td className="item-price">$100.00</td>
                    </tr>
                    <tr className="item" id="root-touch-up">
                    <td className="item-name">Root Touch-Up</td>
                    <td className="item-description">Color application to roots</td>
                    <td className="item-price">$70.00</td>
                    </tr>
                    <tr className="item" id="keratin-treatment">
                    <td className="item-name">Keratin Treatment</td>
                    <td className="item-description">Smoothing treatment for frizz control</td>
                    <td className="item-price">$150.00</td>
                    </tr>
                    <tr className="item" id="brazilian-blowout">
                    <td className="item-name">Brazilian Blowout</td>
                    <td className="item-description">Smoothing treatment with no downtime</td>
                    <td className="item-price">$200.00</td>
                    </tr>
                    <tr className="item" id="updo-styling">
                    <td className="item-name">Updo Styling</td>
                    <td className="item-description">Special occasion styling</td>
                    <td className="item-price">$80.00</td>
                    </tr>
                    <tr className="item" id="hair-extensions">
                    <td className="item-name">Hair Extensions</td>
                    <td className="item-description">Adding length and volume</td>
                    <td className="item-price">Varies</td>
                    </tr>
                    <tr className="item" id="deep-conditioning-treatment">
                    <td className="item-name">Deep Conditioning Treatment</td>
                    <td className="item-description">Intensive moisture treatment</td>
                    <td className="item-price">$40.00</td>
                    </tr>
                </tbody>
                </table>
            </div>

            {/* Skincare */}
            <div className="service-category">
                <h3>Skincare</h3>
                <table className="menu-item">
                <tbody>
                    <tr className="item" id="classic-facial">
                    <td className="item-name">Classic Facial</td>
                    <td className="item-description">Customized facial for all skin types</td>
                    <td className="item-price">$70.00</td>
                    </tr>
                    <tr className="item" id="anti-aging-facial">
                    <td className="item-name">Anti-Aging Facial</td>
                    <td className="item-description">Reduces signs of aging</td>
                    <td className="item-price">$85.00</td>
                    </tr>
                    <tr className="item" id="acne-treatment">
                    <td className="item-name">Acne Treatment</td>
                    <td className="item-description">Targets acne and blemishes</td>
                    <td className="item-price">$75.00</td>
                    </tr>
                    <tr className="item" id="microdermabrasion">
                    <td className="item-name">Microdermabrasion</td>
                    <td className="item-description">Exfoliating treatment for smoother skin</td>
                    <td className="item-price">$90.00</td>
                    </tr>
                    <tr className="item" id="chemical-peel">
                    <td className="item-name">Chemical Peel</td>
                    <td className="item-description">Skin resurfacing treatment</td>
                    <td className="item-price">$100.00</td>
                    </tr>
                    <tr className="item" id="hydrating-facial">
                    <td className="item-name">Hydrating Facial</td>
                    <td className="item-description">Deeply moisturizes and refreshes skin</td>
                    <td className="item-price">$75.00</td>
                    </tr>
                    <tr className="item" id="brightening-treatment">
                    <td className="item-name">Brightening Treatment</td>
                    <td className="item-description">Evens out skin tone</td>
                    <td className="item-price">$85.00</td>
                    </tr>
                    <tr className="item" id="collagen-boost-facial">
                    <td className="item-name">Collagen Boost Facial</td>
                    <td className="item-description">Enhances collagen production</td>
                    <td className="item-price">$95.00</td>
                    </tr>
                    <tr className="item" id="dermaplaning">
                    <td className="item-name">Dermaplaning</td>
                    <td className="item-description">Removes dead skin cells and peach fuzz</td>
                    <td className="item-price">$80.00</td>
                    </tr>
                    <tr className="item" id="led-light-therapy">
                    <td className="item-name">LED Light Therapy</td>
                    <td className="item-description">Non-invasive treatment for skin rejuvenation</td>
                    <td className="item-price">$70.00</td>
                    </tr>
                </tbody>
                </table>
            </div>

            {/* Mani/Pedi */}
            <div className="service-category">
                <h3>Mani/Pedi</h3>
                <table className="menu-item">
                <tbody>
                    <tr className="item" id="classic-manicure">
                    <td className="item-name">Classic Manicure</td>
                    <td className="item-description">Basic manicure with nail polish</td>
                    <td className="item-price">$25.00</td>
                    </tr>
                    <tr className="item" id="gel-manicure">
                    <td className="item-name">Gel Manicure</td>
                    <td className="item-description">Long-lasting gel polish application</td>
                    <td className="item-price">$35.00</td>
                    </tr>
                    <tr className="item" id="french-manicure">
                    <td className="item-name">French Manicure</td>
                    <td className="item-description">Elegant manicure with white tips</td>
                    <td className="item-price">$30.00</td>
                    </tr>
                    <tr className="item" id="spa-pedicure">
                    <td className="item-name">Spa Pedicure</td>
                    <td className="item-description">Includes foot soak, scrub, and massage</td>
                    <td className="item-price">$40.00</td>
                    </tr>
                    <tr className="item" id="gel-pedicure">
                    <td className="item-name">Gel Pedicure</td>
                    <td className="item-description">Long-lasting gel polish for toes</td>
                    <td className="item-price">$45.00</td>
                    </tr>
                    <tr className="item" id="acrylic-nails">
                    <td className="item-name">Acrylic Nails</td>
                    <td className="item-description">Extensions and sculpting</td>
                    <td className="item-price">$50.00</td>
                    </tr>
                    <tr className="item" id="dip-powder-nails">
                    <td className="item-name">Dip Powder Nails</td>
                    <td className="item-description">Durable, long-lasting nail color</td>
                    <td className="item-price">$40.00</td>
                    </tr>
                    <tr className="item" id="nail-art">
                    <td className="item-name">Nail Art</td>
                    <td className="item-description">Custom designs and patterns</td>
                    <td className="item-price">Varies</td>
                    </tr>
                    <tr className="item" id="paraffin-treatment">
                    <td className="item-name">Paraffin Treatment</td>
                    <td className="item-description">Hydrating treatment for hands or feet</td>
                    <td className="item-price">$20.00</td>
                    </tr>
                    <tr className="item" id="nail-repair">
                    <td className="item-name">Nail Repair</td>
                    <td className="item-description">Fixes broken or damaged nails</td>
                    <td className="item-price">$10.00</td>
                    </tr>
                </tbody>
                </table>
            </div>

            {/* Massage Therapy */}
            <div className="service-category">
                <h3>Massage Therapy</h3>
                <table className="menu-item">
                <tbody>
                    <tr className="item" id="swedish-massage">
                    <td className="item-name">Swedish Massage</td>
                    <td className="item-description">Relaxing full-body massage</td>
                    <td className="item-price">$80.00</td>
                    </tr>
                    <tr className="item" id="deep-tissue-massage">
                    <td className="item-name">Deep Tissue Massage</td>
                    <td className="item-description">Intense pressure to relieve muscle tension</td>
                    <td className="item-price">$90.00</td>
                    </tr>
                    <tr className="item" id="hot-stone-massage">
                    <td className="item-name">Hot Stone Massage</td>
                    <td className="item-description">Massage with heated stones</td>
                    <td className="item-price">$100.00</td>
                    </tr>
                    <tr className="item" id="aromatherapy-massage">
                    <td className="item-name">Aromatherapy Massage</td>
                    <td className="item-description">Essential oils for relaxation</td>
                    <td className="item-price">$85.00</td>
                    </tr>
                    <tr className="item" id="prenatal-massage">
                    <td className="item-name">Prenatal Massage</td>
                    <td className="item-description">Massage designed for expectant mothers</td>
                    <td className="item-price">$75.00</td>
                    </tr>
                    <tr className="item" id="reflexology">
                    <td className="item-name">Reflexology</td>
                    <td className="item-description">Focuses on pressure points in the feet</td>
                    <td className="item-price">$70.00</td>
                    </tr>
                    <tr className="item" id="couples-massage">
                    <td className="item-name">Couples Massage</td>
                    <td className="item-description">Relaxing massage for two</td>
                    <td className="item-price">$150.00</td>
                    </tr>
                    <tr className="item" id="sports-massage">
                    <td className="item-name">Sports Massage</td>
                    <td className="item-description">Targets muscle soreness and flexibility</td>
                    <td className="item-price">$85.00</td>
                    </tr>
                    <tr className="item" id="chair-massage">
                    <td className="item-name">Chair Massage</td>
                    <td className="item-description">Quick massage for neck and shoulders</td>
                    <td className="item-price">$30.00</td>
                    </tr>
                    <tr className="item" id="lymphatic-drainage">
                    <td className="item-name">Lymphatic Drainage</td>
                    <td className="item-description">Helps reduce swelling and detoxification</td>
                    <td className="item-price">$100.00</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
            </section>

            <section className="appointment">
                <h2>Ready to Treat Yourself?</h2>
                <p>
                Pamper yourself with our exceptional services and experience true relaxation and beauty. Our skilled team is ready to provide you with top-notch treatments tailored to your needs.
                </p>
                <p>
                Don’t wait any longer! Book your appointment today and let us help you look and feel your best. Click the button below to schedule your visit and choose your favorite service.
                </p>
                <a href="/appointments" className="book-appointment">
                Book an Appointment
                </a>
            </section>
        </main>
        </>
    )
}

export default Services