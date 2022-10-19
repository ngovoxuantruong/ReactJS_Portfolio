import React from 'react';
import './Languages.scss';

const Languages = () => {
    const data = [
        {
            title: 'Languages',
            contents: ['Javascript'],
        },
        {
            title: 'Framework',
            contents: ['ReactJS', 'NodeJS'],
        },
        {
            title: 'Database',
            contents: ['MySQL', 'MongoDB'],
        },
        {
            title: 'Software',
            contents: ['VSCode'],
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
