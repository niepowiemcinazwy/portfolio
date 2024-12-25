import Ideas  from '../images/ideas.png';
import Coding from '../images/coding.png';

import Ideas_color from '../images/ideas-color.png';
import Rocket from '../images/rocket.png';
import Figma from '../images/figma.png';

import Polish from '../images/polish.png';
import English from '../images/english.png';

import MoveElements from '../MoveElements';

import html5Icon from '../images/html5.png';
import css3Icon from '../images/css3.png';
import javascriptIcon from '../images/javascript.png';
import reactIcon from '../images/react.png';
import adobexdIcon from '../images/adobexd.png';
import figmaIcon from '../images/figmaIcon.png';
import phpIcon from '../images/php.png';
import mysqlIcon from '../images/mysql.png';
import javaIcon from '../images/java.png';
import githubIcon from '../images/github.png';
import gitIcon from '../images/git.png';

import fullStar from '../images/fullStar.png';
import Star from '../images/star.png';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function About() {

    useEffect(() => {
        AOS.init();
        document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
    }, []);

    <MoveElements/>

    let text = 'SOME FUN \n FACTS \n ABOUT ME';

    return (
        <>

            <section className="aboutMe-headline">

                <div className="aboutMe-headline-text" data-aos="fade-down" data-aos-duration="700">
                    <h4>Find out more</h4>
                    <h1>ABOUT ME</h1>
                </div>

                <p data-aos="fade-right" data-aos-duration="800">My name is Dawid. I am from Poland and I am 19 years old. I'm studying Computer Science in the first year part-time at one of the best universities in Poland. I have been interested in web programming for 5 years, and have been doing it professionally for more than 3 years. I am constantly striving to grow, learning new technologies and tools to become a Full-Stack Developer in the future.</p>

            </section>

            <section className="aboutMe-offer">

                <h2 data-aos="fade-right" data-aos-duration="1200">What do i offer?</h2>

                <div className="aboutMe-offer-tiles">

                    <div className="aboutMe-offer-tile" data-aos-offset="250" data-aos="fade-up" data-aos-easing="ease-out-back" data-aos-delay="-100">

                        <div className="aboutMe-offer-tile-glows">
                            <div className="aboutMe-tile-glow"></div>
                        </div>

                        <div className="aboutMe-offer-tile-top">
                            <img src={Ideas} alt=""></img>
                        </div>
                        <div className="aboutMe-offer-tile-text">

                            <h5>Professionalism</h5>
                            <p>I am open to new challenges and suggestions. My forte is working in a group, because I find myself well in it. I take the tasks assigned to me seriously and always try to remain professional.</p>

                        </div>

                    </div>

                    <div className="aboutMe-offer-tile" data-aos-offset="350" data-aos="fade-up" data-aos-easing="ease-out-back" data-aos-delay="-100">

                        <div className="aboutMe-offer-tile-glows">
                            <div className="aboutMe-offer-tile-glow"></div>
                        </div>

                        <div className="aboutMe-offer-tile-top">
                            <img src={Coding} alt=""></img>
                        </div>

                        <div className="aboutMe-offer-tile-text">

                            <h5>Clean Code</h5>
                            <p>I program in a way that is structured, readable and understandable to other programmers collaborating on the same project. I also focus on the efficiency of my code.</p>

                        </div>

                    </div>

                    <div className="aboutMe-offer-tile" data-aos-offset="450" data-aos="fade-up" data-aos-easing="ease-out-back" data-aos-delay="-100">

                        <div className="aboutMe-offer-tile-glows">
                            <div className="aboutMe-offer-tile-glow"></div>
                        </div>

                        <div className="aboutMe-offer-tile-top">
                            <img src={Coding} alt=""></img>
                        </div>

                        <div className="aboutMe-offer-tile-text">

                            <h5>Quick implementation</h5>
                            <p>My biggest advantage is the time to complete projects without sacrificing code quality. This is a key competency for me to work with a team.</p>

                        </div>

                    </div>

                </div>

            </section>

            <section className="aboutMe-cv">
                
                <div className="aboutMe-cv-decorations">
                    <div className="aboutMe-cv-decoration">
                        <div className="aboutMe-cv-glow"></div>
                        <div className="aboutMe-cv-glow"></div>
                        <img src={Ideas_color} alt=""></img>    
                    </div>
                    <div className="aboutMe-cv-decoration">
                        <img src={Rocket} alt=""></img>    
                    </div>
                    <div className="aboutMe-cv-decoration">
                        <div className="aboutMe-cv-glow"></div>
                        <div className="aboutMe-cv-glow"></div>
                        <img src={Figma} alt=""></img>    
                    </div>
                </div>

                <div className="aboutMe-cv-container">

                    <h2 data-aos="fade-right" data-aos-duration="700">Get information about me in PDF</h2>
                    <a href="/CV_Dawid_Wawer_Polish.pdf" download="CV_Dawid_Wawer_Polish.pdf" data-aos="fade-up" data-aos-duration="1000">
                        <button>DOWNLOAD</button>
                    </a>

                </div>

            </section>

            <section className="aboutMe-experience">

                <h2 data-aos="fade-right" data-aos-duration="700">Professional Experience</h2>

                <div className="aboutMe-experience-tile" data-aos="fade-up" data-aos-easing="ease-out-back" data-aos-delay="100">

                    <h4>Front-end Developer</h4>
                    <span>01.2023 - 01.2025 (2 years)</span>
                    <h5>PMM IT Solutions | Gdańsk</h5>
                    <p>I work as a Front-end Developer, completing projects submitted by designers after they are approved by the client. I receive them in Figma application, which we use in the company to create and manage graphic designs. After receiving the design, I handle its implementation, taking care of every visual and technical detail. I then hand over the finished pages to Back-end Developers, who integrate the other components, such as login systems, online store functions or other dynamic elements. I work fully remotely from home, which allows me to effectively combine my professional responsibilities with my studies. My salary depends on the projects I complete, rather than a fixed monthly salary.</p>

                </div>

            </section>

            <div className="aboutMe-tiles">

                <div className="aboutMe-education">

                    <h2 data-aos="fade-right" data-aos-duration="600">Education</h2>

                    <div className="aboutMe-education-tile">

                        <h4 data-aos="zoom-in-right" data-aos-duration="500">Zespół Szkół Energetycznych</h4>
                        <span data-aos="zoom-in-right" data-aos-duration="600">09.2019 - 04.2024 (4 years, 8 moths)</span>

                        <div className="aboutMe-education-tile-info">
                            
                            <div className="aboutMe-education-info-text" data-aos="zoom-in-right" data-aos-duration="700">

                                <p>Educational Level</p>
                                <h5>Vocational</h5>

                            </div>

                            <div className="aboutMe-education-info-text" data-aos="zoom-in-right" data-aos-duration="800">

                                <p>Specialization</p>
                                <h5>Computer Science</h5>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="aboutMe-languages">

                    <h2 data-aos="fade-down" data-aos-duration="900">Languages</h2>

                    <div className="aboutMe-languages-tiles">

                        <div className="aboutMe-languages-tile">

                            <div className="aboutMe-languages-tile-top" data-aos="zoom-in-down" data-aos-duration="600">
                                <h4>Polish</h4>
                                <img src={Polish} alt=""></img>
                            </div>

                            <p data-aos="zoom-in-right" data-aos-duration="700">Proficiency:</p>
                            <h5 data-aos="zoom-in-right" data-aos-duration="800">Native</h5>

                        </div>

                        <div className="aboutMe-languages-tile">

                            <div className="aboutMe-languages-tile-top" data-aos="zoom-in-down" data-aos-duration="800">
                                <h4>English</h4>
                                <img src={English} alt=""></img>
                            </div>

                            <p data-aos="zoom-in-right" data-aos-duration="900">Proficiency:</p>
                            <h5 data-aos="zoom-in-right" data-aos-duration="1000">B2+</h5>

                        </div>

                    </div>

                    <div className="aboutMe-languages-lines">

                        <div className="aboutMe-languages-line">
                            <div className="aboutMe-languages-line-dot"></div>
                        </div>
                        <div className="aboutMe-languages-line">
                            <div className="aboutMe-languages-line-dot"></div>
                        </div>
                        <div className="aboutMe-languages-line">
                            <div className="aboutMe-languages-line-dot"></div>
                        </div>
                        <div className="aboutMe-languages-line"></div>

                    </div>

                </div>

            </div>

            <div className="aboutMe-skills">

                <div className="aboutMe-skills-headline">

                    <h2 data-aos="fade-down" data-aos-duration="600">Skills</h2>

                    <div className="aboutMe-skills-tiles" data-aos="fade-up" data-aos-duration="600">

                        <div className="aboutMe-skills-tile">

                            <h4>Front-end</h4>

                            <div className="aboutMe-skills-elements">

                                <div className="aboutMe-skills-element">

                                    <img src={html5Icon} alt=""></img>

                                    <div className="aboutMe-skills-element-text">
                                        
                                        <h5>HTML5</h5>

                                        <div className="aboutMe-skills-stars">

                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>

                                        </div>

                                    </div>

                                </div>
                                
                                <div className="aboutMe-skills-element">

                                    <img src={css3Icon} alt=""></img>

                                    <div className="aboutMe-skills-element-text">
                                        
                                        <h5>CSS3</h5>

                                        <div className="aboutMe-skills-stars">

                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>

                                        </div>

                                    </div>

                                </div>

                                <div className="aboutMe-skills-element">

                                    <img src={javascriptIcon} alt=""></img>

                                    <div className="aboutMe-skills-element-text">
                                        
                                        <h5>JavaScript</h5>

                                        <div className="aboutMe-skills-stars">

                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={Star} alt=""></img>
                                            <img src={Star} alt=""></img>

                                        </div>

                                    </div>

                                </div>

                                <div className="aboutMe-skills-element">

                                    <img src={reactIcon} alt=""></img>

                                    <div className="aboutMe-skills-element-text">
                                        
                                        <h5>React.js</h5>

                                        <div className="aboutMe-skills-stars">

                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={Star} alt=""></img>
                                            <img src={Star} alt=""></img>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="aboutMe-skills-tile">

                            <h4>Design</h4>

                            <div className="aboutMe-skills-elements">

                                <div className="aboutMe-skills-element">

                                    <img src={adobexdIcon} alt=""></img>

                                    <div className="aboutMe-skills-element-text">
                                        
                                        <h5>Adobe XD</h5>

                                        <div className="aboutMe-skills-stars">

                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={Star} alt=""></img>
                                            <img src={Star} alt=""></img>

                                        </div>

                                    </div>

                                </div>
                                
                                <div className="aboutMe-skills-element">

                                    <img src={figmaIcon} alt=""></img>

                                    <div className="aboutMe-skills-element-text">
                                        
                                        <h5>Figma</h5>

                                        <div className="aboutMe-skills-stars">

                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={Star} alt=""></img>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="aboutMe-skills-tile">

                            <h4>Back-end</h4>

                            <div className="aboutMe-skills-elements">

                                <div className="aboutMe-skills-element">

                                    <img src={phpIcon} alt=""></img>

                                    <div className="aboutMe-skills-element-text">
                                        
                                        <h5>PHP</h5>

                                        <div className="aboutMe-skills-stars">

                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={Star} alt=""></img>
                                            <img src={Star} alt=""></img>

                                        </div>

                                    </div>

                                </div>
                                
                                <div className="aboutMe-skills-element">

                                    <img src={mysqlIcon} alt=""></img>

                                    <div className="aboutMe-skills-element-text">
                                        
                                        <h5>MySQL</h5>

                                        <div className="aboutMe-skills-stars">

                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={Star} alt=""></img>

                                        </div>

                                    </div>

                                </div>

                                <div className="aboutMe-skills-element">

                                    <img src={javaIcon} alt=""></img>

                                    <div className="aboutMe-skills-element-text">
                                        
                                        <h5>Java</h5>

                                        <div className="aboutMe-skills-stars">

                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={Star} alt=""></img>
                                            <img src={Star} alt=""></img>
                                            <img src={Star} alt=""></img>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="aboutMe-skills-tile">

                            <h4>Git ecosystem</h4>

                            <div className="aboutMe-skills-elements">

                                <div className="aboutMe-skills-element">

                                    <img src={githubIcon} alt=""></img>

                                    <div className="aboutMe-skills-element-text">
                                        
                                        <h5>Github</h5>

                                        <div className="aboutMe-skills-stars">

                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={Star} alt=""></img>

                                        </div>

                                    </div>

                                </div>
                                
                                <div className="aboutMe-skills-element">

                                    <img src={gitIcon} alt=""></img>

                                    <div className="aboutMe-skills-element-text">
                                        
                                        <h5>Git</h5>

                                        <div className="aboutMe-skills-stars">

                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={fullStar} alt=""></img>
                                            <img src={Star} alt=""></img>
                                            <img src={Star} alt=""></img>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="aboutMe-hobby">

                <div className="aboutMe-hobby-left">
                    {
                        <h1 data-aos="fade-right" data-aos-duration="600">{text}</h1>
                    }
                </div>
                <p data-aos="fade-up" data-aos-duration="700">My adventure with coding began at the age of 14-15, when I came across a website related to a game that impressed me greatly. Inspired by its design, I decided to create one myself one day.</p>

            </div>

        </>
    )
}