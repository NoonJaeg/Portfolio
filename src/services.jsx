import React from 'react';
import webDesign from '../src/assets/webDesign.jpg';
import uiuxDesign from '../src/assets/uiuxDesign.jpg';
import appDevelopment from '../src/assets/appDevelopment.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css';
import '../src/services.css';

export default function Services() {
    return (
        <>
            <section id="services">
                <h1 className="servicesTitle">My Services</h1>
                <span className="servicesDesc">
                    As a student and aspiring web developer, I offer a range of services to help businesses build a strong online presence. My services include web design, UI/UX design, and mobile app development, all tailored to meet your unique requirements.
                </span>
                <div className="servicesContainer">
                    <div className="serviceItem">
                        <img src={webDesign} alt="Web Design" className="serviceImg" />
                        <h2>Web Design</h2>
                        <p>I create responsive and visually appealing websites that are optimized for performance and deliver a seamless user experience across various devices.</p>
                    </div>
                    <div className="serviceItem">
                        <img src={uiuxDesign} alt="UI/UX Design" className="serviceImg" />
                        <h2>UI/UX Design</h2>
                        <p>I design intuitive and user-friendly interfaces that ensure visitors can easily navigate and interact with your website or mobile application.</p>
                    </div>
                    <div className="serviceItem">
                        <img src={appDevelopment} alt="App Development" className="serviceImg" />
                        <h2>Mobile App Development</h2>
                        <p>From concept to deployment, I develop mobile applications that provide engaging experiences and meet the needs of users on both iOS and Android platforms.</p>
                    </div>
                </div>

                {/* Call to Action Button */}
                <Link to="/contact">
                    <button className="serviceBtn">Get in Touch</button>
                </Link>
            </section>
        </>
    );
}
