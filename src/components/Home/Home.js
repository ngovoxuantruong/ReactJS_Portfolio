import React from 'react';
import './Home.scss';
import Avatar from '../../assets/images/Avatar1.jpg';

const Home = () => {
    return (
        <section id="home">
            <div className="home-text" data-aos="fade-down">
                <strong>Hello, it's me</strong>
                <h1 className="home-name">Ngo Vo Xuan Truong</h1>
                <p>Six months of experience in programming with good communication and quick learning skills</p>
                <a className="btn-link" href="#summary">
                    Scroll for me!
                </a>
            </div>

            <div className="home-img" data-aos="fade-up">
                <div className="img-box">
                    <img src={Avatar} alt="Avatar" />

                    <h2>
                        Xuan Truong <br />
                        <span>Front-End Developer</span>
                    </h2>

                    <div className="social">
                        <a href="https://www.facebook.com/xuantruong.ngovo" target="_blank">
                            <i className="fa-brands fa-facebook"></i>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ng%C3%B4-v%C3%B5-xu%C3%A2n-tr%C6%B0%E1%BB%9Dng-130915231/"
                            target="_blank"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>

                    <a href="#!" className="hire-me">
                        Hire me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
