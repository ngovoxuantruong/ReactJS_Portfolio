import React from 'react';
import './Career.scss';
import CV from '../../assets/cv/CV_Ngo_Vo_Xuan_Truong_Front_end_developer.pdf';

const Career = () => {
    const careers = [
        {
            title: 'Front-end Developer',
            name: 'Software',
            year: '2020 - 2022',
        },
        {
            title: 'Back-end Developer',
            name: 'Software',
            year: '2020 - 2022',
        },
    ];

    const educations = [
        {
            title: 'Front-end Developer',
            name: 'Software',
            year: '2020 - 2022',
        },
        {
            title: 'Back-end Developer',
            name: 'Software',
            year: '2020 - 2022',
        },
    ];

    return (
        <section id="career">
            <div className="career-education">
                <div className="career">
                    <h3>Career</h3>

                    <div className="c-b-container">
                        {careers.map((career, index) => (
                            <div className="c-box" key={index}>
                                <h4>{career.title}</h4>
                                <strong>{career.name}</strong>
                                <span>{career.year}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="career-edu">
                    <h3>Education</h3>

                    <div className="c-b-container">
                        {educations.map((career, index) => (
                            <div className="c-box" key={index}>
                                <h4>{career.title}</h4>
                                <strong>{career.name}</strong>
                                <span>{career.year}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="btn-c">
                <a href={CV} download className="btn-link">
                    GET CV <i className="fa-solid fa-download"></i>
                </a>
            </div>
        </section>
    );
};

export default Career;
