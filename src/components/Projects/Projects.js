import React from 'react';
import './Projects.scss';

import Project1 from '../../assets/images/project1.jpg';
import Project2 from '../../assets/images/project2.jpg';
import Project3 from '../../assets/images/project3.jpg';
import Project4 from '../../assets/images/project4.png';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper';

const Projects = () => {
    const data = [
        {
            src: Project1,
            url: '#!',
        },
        {
            src: Project2,
            url: '#!',
        },
        {
            src: Project3,
            url: '#!',
        },
        {
            src: Project4,
            url: '#!',
        },
    ];

    return (
        <section id="project">
            <div className="project-heading">
                <h3>Recent Projects</h3>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                {data.map((project) => (
                    <SwiperSlide key={project.src}>
                        <div className="project-box">
                            <a href={project.url}>
                                <img src={project.src} alt="project" />
                                <div className="p-overlayer">
                                    <strong>Outserved Reports</strong>
                                </div>
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="github-btn">
                <a href="https://github.com/ngovoxuantruong8" className="btn-link">
                    My Github <i className="fa-brands fa-github"></i>
                </a>
            </div>
        </section>
    );
};

export default Projects;
