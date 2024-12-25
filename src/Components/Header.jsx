import arrow from '../images/underline.png';

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>

        <section className="home" id="home">
            
            <div className="home-glows">
                <div className="home-glow"></div>
                <div className="home-glow"></div>
            </div>

            <h1 data-aos="fade-right" data-aos-duration="700">I'M A FRONT-END <span>WEB<img src={arrow} draggable="false" alt="arrow"></img></span> DEVELOPER</h1>
            <h3 data-aos="fade-up" data-aos-duration="1000">and <span>I</span><span>T</span> student</h3>

            <a href="/#about">
                <div className="arrow-container">
                    <div className="pulse1">
                        <div className="pulse2">
                            <div className="pulse3">
                                <div className="pulse-glow"></div>
                                <div className="pulse-glow2"></div>
                                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.57881 11.435C8.47765 11.3334 8.39227 11.2231 8.31801 11.1071L0.56697 3.34575C-0.188871 2.58858 -0.189229 1.36016 0.567329 0.602629C1.32353 -0.154899 2.55002 -0.154899 3.30694 0.602629L9.98251 7.28676L16.6929 0.568147C17.4491 -0.189382 18.6752 -0.189382 19.4325 0.568147C19.8113 0.94709 20 1.44385 20 1.93953C20 2.43521 19.8113 2.93232 19.4325 3.31091L11.6456 11.1071C11.5713 11.2231 11.4859 11.3341 11.3848 11.435C10.9981 11.8222 10.4887 12.009 9.9818 11.9997C9.47491 12.009 8.96588 11.8222 8.57881 11.435Z" fill="white"></path>
                                    </svg>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </a>

        </section>
        
        </>
    )
}