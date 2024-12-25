import { Link } from 'react-router-dom';

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {

    useEffect(() => {
        AOS.init();
    }, []);
    
    return (
        <>

        <section className="about" id="about" data-highlight="about">

            <h1 data-aos="fade-right" data-aos-duration="600">I CODE OUT OF PASSION AND THRILL</h1>

            <div className="about-right">

                <p data-aos="fade-down" data-aos-duration="800">I am a student of the University of Gdańsk. I started my journey with web developement over 4 years ago and have been coding ever since. I worked for 2 years in an IT company as a Front-end Developer. I really enjoy learning new tools and more. I have also been learning React.js for several months.</p>
                
                <Link to="/about" data-aos="fade-up" data-aos-duration="1000">
                    <button>LEARN MORE</button>
                </Link>

            </div>

        </section>
        
        </>
    )
}