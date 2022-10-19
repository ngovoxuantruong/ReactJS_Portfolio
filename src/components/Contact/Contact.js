import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <section id="contact" data-aos="fade-down">
            <strong>What's next</strong>
            <h3>Let's work together!</h3>
            <p>Current living location: Thu Duc, Ho Chi Minh, Viet Nam</p>
            <a href="mailto:ngovoxuantruong8@gmail.com" className="btn-link">
                Write Me An Email <i className="fa-solid fa-envelope"></i>
            </a>
        </section>
    );
};

export default Contact;
