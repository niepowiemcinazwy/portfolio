import telephoneBackground from '../images/telephone-background.png';

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProjectCard({project}) {

    useEffect(() => {
        AOS.init();
    }, []);

  return (

    <div className="projects-tile">

        <div className="projects-left">

            <div className="projects-text">

                <h2 data-aos="fade-right" data-aos-duration="600">{project.name}</h2>
                <div className="projects-technologies" data-aos="fade-right" data-aos-duration="700">

                    {
                        project.technologies.slice(0, 2).map(tech => (
                            <div>{tech}</div>
                        ))
                    }

                </div>
                <p data-aos="fade-up" data-aos-duration="1200">{project.projectDesc}</p>

                <a href={`/projects/${project.id}`} data-aos="fade-up" data-aos-duration="1000">
                    <button>READ MORE</button>
                </a>

            </div>

        </div>

        <div className="projects-right" data-aos-offset="250" data-aos="fade-up" data-aos-easing="ease-out-back" data-aos-delay="100">

            <img src={telephoneBackground} alt=""></img>
            <img src={project.telephone} alt=""></img>

        </div>

    </div>

  )
}

