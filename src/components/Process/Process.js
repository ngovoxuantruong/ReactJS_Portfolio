import React from 'react';
import './Process.scss';

const Process = () => {
    const data = [
        {
            id: '01',
            title: 'Pre-Process',
            contents: ['HTML', 'CSS', 'Javascript', 'Grid CSS', 'Bootstrap 5', 'Version control system'],
        },
        {
            id: '02',
            title: 'Front-End-Process',
            contents: ['ReactJS', 'Redux', 'Redux Toolkit'],
        },
        {
            id: '03',
            title: 'Back-End-Process',
            contents: ['NodeJS ( ExpressJS )'],
        },
    ];

    return (
        <section className="process" data-aos="fade-down">
            <div className="process-heading">
                <h3>Process</h3>
            </div>

            <div className="process-container">
                {data.map((process) => (
                    <div className="process-box" key={process.id}>
                        <span>{process.id}</span>
                        <strong>{process.title}</strong>
                        <ul>
                            {process.contents.map((content) => (
                                <li key={content}>{content}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Process;
