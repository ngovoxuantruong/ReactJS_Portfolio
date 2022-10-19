import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <span>Copyright &copy;2022</span>

            <div className="social-links">
                <a href="https://www.facebook.com/xuantruong.ngovo" target="_blank">
                    <i className="fa-brands fa-facebook"></i>
                </a>

                <a
                    href="https://www.linkedin.com/in/ng%C3%B4-v%C3%B5-xu%C3%A2n-tr%C6%B0%E1%BB%9Dng-130915231/"
                    target="_blank"
                >
                    <i className="fa-brands fa-linkedin"></i>
                </a>

                <a href="https://twitter.com/TruongXuannn" target="_blank">
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
