import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <section id="contact">
            <strong>What's next</strong>
            <h3>Let's work together!</h3>
            <p>
                Strong Experience in: PHP, JavaScript (ReactJS, React-native), MySQL, NoSQL, GraphQL, Redis, JSON, API,
                Docker, Kubernetes, Rancher, AWS services
            </p>
            <a href="mailto:ngovoxuantruong8@gmail.com" className="btn-link">
                Write Me An Email <i className="fa-solid fa-envelope"></i>
            </a>
        </section>
    );
};

export default Contact;
