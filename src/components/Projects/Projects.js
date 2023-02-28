import React from "react";
import "./Projects.scss";

import TocoToco from "../../assets/images/tocotocoProject.png";
import Project1 from "../../assets/images/youtube-project.png";
import Project2 from "../../assets/images/thecoffeehouse-project.png";
import Project3 from "../../assets/images/nexter-project.png";
import Project4 from "../../assets/images/filmlane-project.png";
import Project5 from "../../assets/images/natours-project.png";
import Project6 from "../../assets/images/trillo-project.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";

const Projects = () => {
    const data = [
        {
            src: TocoToco,
            url: "https://reactjs-tocotoco.pages.dev/",
            overview: "- ToCoToCo \n   - ReactJS \n   - Redux toolkit \n",
        },
        {
            src: Project1,
            url: "https://reactjs-youtube.pages.dev/",
            overview: "- Youtube \n   - ReactJS \n   - Material UI v5 \n   - RapidAPI \n",
        },
        {
            src: Project2,
            url: "https://reactjs-the-coffee-house.pages.dev/",
            overview: "- The Coffee House \n   - ReactJS \n   - Swiper \n",
        },
        {
            src: Project3,
            url: "https://html-scss-nexter.pages.dev/",
            overview: "- Nexter \n   - HTML \n   - SCSS \n   - Grid CSS Layout \n",
        },
        {
            src: Project4,
            url: "https://ngovoxuantruong8.github.io/HTML-CSS-JS_Filmlane/",
            overview: "- Filmlane \n   - HTML \n   - CSS \n",
        },
        {
            src: Project5,
            url: "https://html-scss-natours.pages.dev/",
            overview: "- Natours \n   - HTML \n   - SCSS \n",
        },
        {
            src: Project6,
            url: "https://html-css-trillo.pages.dev/",
            overview: "- Trillo \n   - HTML \n   - SCSS \n",
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
                                        <strong>{project.overview}</strong>
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
