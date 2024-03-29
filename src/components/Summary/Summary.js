import React from "react";
import "./Summary.scss";
import CV from "../../assets/cv/CV Ngô Võ Xuân Trường - Front-end Developer Intern.pdf";

const Summary = () => {
    return (
        <section id="summary">
            <div className="summary-heading" data-aos="fade-right">
                <strong>My Skillset</strong>

                <h2>Strengths: Front-end technology</h2>

                <a href={CV} download className="btn-link">
                    Get CV <i className="fa-solid fa-download"></i>
                </a>
            </div>

            <div className="summary-details" data-aos="fade-left">
                <p>
                    - HTML, SASS, JavaScript <br />
                    - Responsive ( Bootstrap 5, Grid CSS ) <br />
                    - ReactJS ( Redeux, Redux Toolkit ) <br />
                    - Node ( ExpressJS, MongoDB ) <br />
                </p>
            </div>
        </section>
    );
};

export default Summary;
