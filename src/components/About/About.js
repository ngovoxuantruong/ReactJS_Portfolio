import React from 'react';
import './About.scss';

const About = () => {
    return (
        <section id="about">
            <div className="about-container">
                <div className="about-heading">
                    <strong>About me</strong>
                    <h3>Designing with passion for Problem Solving</h3>
                    <a href="tel:0343441421" className="btn-link">
                        034-344-1421 <i class="fa-solid fa-phone-flip"></i>
                    </a>
                </div>

                <div className="about-details">
                    <p>
                        Do Not Touch Your Face is a tool that helps you avoid touching your face using your webcam and
                        machine learning (https://botayra.fullstack.edu.vn/).
                    </p>
                    <p>
                        Do Not Touch Your Face is a tool that helps you avoid touching your face using your webcam and
                        machine learning (https://botayra.fullstack.edu.vn/).
                    </p>
                    <p>
                        Do Not Touch Your Face is a tool that helps you avoid touching your face using your webcam and
                        machine learning (https://botayra.fullstack.edu.vn/).
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
