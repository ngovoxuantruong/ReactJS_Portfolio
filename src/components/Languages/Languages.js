import React from 'react';
import './Languages.scss';

const Languages = () => {
    const data = [
        {
            title: 'Languages',
            contents: ['Javascript', 'ReactJS', 'NodeJS'],
        },
        {
            title: 'Sofware',
            contents: ['VSCode'],
        },
        {
            title: 'Database',
            contents: ['MySQL'],
        },
    ];

    return (
        <section id="languages" data-aos="fade">
            {data.map((item) => (
                <div className="languages-box" key={item.title}>
                    <h3>{item.title}</h3>
                    <ul>
                        {item.contents.map((content) => (
                            <li key={content}>{content}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default Languages;
