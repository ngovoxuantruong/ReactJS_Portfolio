import React from 'react';
import './Career.scss';
import CV from '../../assets/cv/CV_Ngo_Vo_Xuan_Truong_Front_end_developer.pdf';

const Career = () => {
    const careers = [
        {
            title: 'Advanced CSS and Sass',
            name: 'Jonas Schmedtmann',
        },
        {
            title: 'ReactJS Basic, Advanced, Redux Guide',
            name: 'Hỏi Dân IT Eric',
        },
    ];

    const educations = [
        {
            title: 'Understanding TypeScript',
            name: 'Maximilian Schwarzmüller',
        },
        {
            title: 'NodeJS (MVC, REST APIs, GraphQL, Deno)',
            name: 'Maximilian Schwarzmüller',
        },
    ];

    return (
        <section id="career">
            <div className="career-education">
                <div className="career" data-aos="fade-right">
                    <h3>Studying</h3>

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

                <div className="career-edu" data-aos="fade-left">
                    <h3>Studying</h3>

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
        </section>
    );
};

export default Career;
