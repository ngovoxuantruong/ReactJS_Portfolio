import React from 'react';
import './Summary.scss';
import CV from '../../assets/cv/CV_Ngo_Vo_Xuan_Truong_Front_end_developer.pdf';

const Summary = () => {
    return (
        <section id="summary">
            <div className="summary-heading">
                <strong>My Skillset</strong>

                <h2>HTML, CSS, Reponsive, Javascript, ReactJS, Redux, NodeJS</h2>

                <a href={CV} download className="btn-link">
                    Get CV <i className="fa-solid fa-download"></i>
                </a>
            </div>

            <div className="summary-details">
                <p>
                    - HTML, CSS, JavaScript (ReactJS, React-Native, Lit) <br />
                    - PHP (Laravel, Symfony, Codeigniter, Yii) <br />
                    - Node (ExpressJS) <br />
                    - RESTful API, GraphQL <br />
                    - MySQL, PostgreSQL, NoSQL (MongoDB) <br />
                    - Server (Apache, Nginx, Redis, Memcached, Queue, Log, Crontjob...), Rancher, K8S, Docker <br />
                    - AWS (Load balancing, EC2, ECS, Router 53, RDS, S3) <br />
                </p>
            </div>
        </section>
    );
};

export default Summary;
