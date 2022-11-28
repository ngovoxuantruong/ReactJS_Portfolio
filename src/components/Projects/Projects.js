import React from 'react';
import './Projects.scss';

import Project1 from '../../assets/images/project1.png';
import Project3 from '../../assets/images/project2.png';

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
            url: 'https://ngovoxuantruong8.github.io/HTML-CSS-JS_Filmlane/',
            overview: '- ReactJS \n   - Material UI v5 \n   - RapidAPI \n   - Responsive',
        },
        {
            src: Project3,
            url: 'https://github.com/ngovoxuantruong8/Frontend16_NgoVoXuanTruong',
            overview: '- HTML \n   - CSS \n   - Responsive',
        },
    ];

    return (
        <section id="project" data-aos="fade">
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
                            <a href={project.url} target="_blank">
                                <img src={project.src} alt="project" />
                                <div className="p-overlayer">
                                    <pre>
                                        <strong style={{ color: '#F1D3B3' }}>{project.overview}</strong>
                                    </pre>
                                </div>
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="github-btn">
                <a href="https://github.com/ngovoxuantruong8" target="_blank" className="btn-link">
                    My Github <i className="fa-brands fa-github"></i>
                </a>
            </div>
        </section>
    );
};

export default Projects;
