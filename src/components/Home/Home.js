import React from 'react';
import './Home.scss';
import Avatar from '../../assets/images/Avatar1.jpg';

const Home = () => {
    return (
        <section id="home">
            <div className="home-text">
                <strong>Hello, it's me</strong>
                <h1>Ngo Vo Xuan Truong</h1>
                <p>Over 1 years of experience in programming with good communication and quick learning skills</p>
                <a className="btn-link" href="#summary">
                    Scroll for me!
                </a>
            </div>

            <div className="home-img">
                <div className="img-box">
                    <img src={Avatar} alt="Avatar" />

                    <h2>
                        Xuan Truong <br />
                        <span>Front-End Developer</span>
                    </h2>

                    <div className="social">
                        <a href="#!">
                            <i className="fa-brands fa-facebook"></i>
                        </a>

                        <a href="#!">
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
