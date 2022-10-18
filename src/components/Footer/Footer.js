import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <span>Copyright &copy;2022</span>

            <div className="social-links">
                <a href="#!">
                    <i className="fa-brands fa-facebook"></i>
                </a>

                <a href="#!">
                    <i className="fa-brands fa-linkedin"></i>
                </a>

                <a href="#!">
                    <i className="fa-brands fa-twitter"></i>
                </a>
            </div>

            <a href="#!" className="footer-logo">
                Charlie
            </a>
        </footer>
    );
};

export default Footer;
