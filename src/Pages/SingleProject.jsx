import { useParams } from 'react-router';
import allProjects from '../allProjects';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Swiper from '../Components/Swiper';

import FirstDecoration from '../images/decoration1.png';
import SecondDecoration from '../images/decoration2.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

export function SingleProject() {

    const { id } = useParams();
    const project = allProjects[id-1];

    useEffect(() => {
        AOS.init();
        document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
    }, []);

    var backgroundImg = {backgroundImage: `url(${project.scrollImage})`};

    return (
        <>
        
        <section className="singleProject">

            <div className="singleProject-headline" data-aos="fade-down" data-aos-duration="600">

                <h1>{project.name}</h1>

            </div>

            <div className="singleProject-graphics">

                <img src={project.graphics} alt="" draggable="false" data-aos="zoom-in" data-aos-duration="700"></img>

            </div>

            <div className="singleProject-description">

                <h2 data-aos="fade-right" data-aos-duration="500">PROJECT DESCRIPTION</h2>
                <p data-aos="fade-down" data-aos-duration="700">{project.projectDesc}</p>

            </div>

            <div className="singleProject-technologies">

                <div className="singleProject-technologies-headline" data-aos="fade-down" data-aos-duration="700">
                    <h4>Technologies</h4>
                </div>
                
                <div className="singleProject-tiles" data-aos="fade-up" data-aos-duration="500">

                    <Swiper/>

                </div>

            </div>

            <div className="singleProject-live">

                <div className="singleProject-live-decorations">
                    <img src={SecondDecoration} alt="" draggable="false"></img>
                    <img src={FirstDecoration} alt="" draggable="false"></img>
                    <div className="arrow-container">
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.57881 11.435C8.47765 11.3334 8.39227 11.2231 8.31801 11.1071L0.56697 3.34575C-0.188871 2.58858 -0.189229 1.36016 0.567329 0.602629C1.32353 -0.154899 2.55002 -0.154899 3.30694 0.602629L9.98251 7.28676L16.6929 0.568147C17.4491 -0.189382 18.6752 -0.189382 19.4325 0.568147C19.8113 0.94709 20 1.44385 20 1.93953C20 2.43521 19.8113 2.93232 19.4325 3.31091L11.6456 11.1071C11.5713 11.2231 11.4859 11.3341 11.3848 11.435C10.9981 11.8222 10.4887 12.009 9.9818 11.9997C9.47491 12.009 8.96588 11.8222 8.57881 11.435Z" fill="white"></path>
                            </svg>
                    </div>
                </div>

                <h4 data-aos="fade-right" data-aos-duration="500">Preview</h4>

                <div className="singleProject-live-container" data-aos="fade-up" data-aos-duration="800">
                    <div className="singleProject-live-image" style={backgroundImg}></div>
                </div>

            </div>

            <div className="singleProject-checkmore" data-aos="fade-up" data-aos-easing="ease-out-back" data-aos-delay="100">

                <h2>CHECK OUT MORE OF MY PROJECTS</h2>
                <Link to="/projects">
                    <button>PROJECTS</button>
                </Link>

            </div>

        </section>

        </>
    )
}
