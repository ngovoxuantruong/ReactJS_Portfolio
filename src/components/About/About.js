import React from 'react';
import './About.scss';

const About = () => {
    return (
        <section id="about">
            <div className="about-container">
                <div className="about-heading" data-aos="flip-left">
                    <strong>About me</strong>
                    <h3>Designing with passion for Problem Solving</h3>
                    <a href="tel:0343441421" className="btn-link">
                        034-344-1421 <i className="fa-solid fa-phone-flip"></i>
                    </a>
                </div>

                <div className="about-details" data-aos="flip-right">
                    <p>
                        - Proficiency in HTML, CSS, JavaScript <br />
                        - Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model
                        <br />
                        - Familiarity with newer specifications of EcmaScript <br />
                        - Ability to learn and apply new technology quickly <br />
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
