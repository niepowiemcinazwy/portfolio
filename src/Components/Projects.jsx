import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import allProjects from '../allProjects';

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <section className="projects" id="projects" data-highlight="projects">
                
                <div className="projects-headline">

                    <h4 data-aos="fade-down" data-aos-duration="1400">Take a loot at</h4>
                    <h1 data-aos="fade-down" data-aos-duration="1000">MY PROJECTS</h1>

                </div>

                <div className="projects-tiles">

                    {
                        allProjects.slice(0, 2).map((project, id) => (
                            <ProjectCard key={id} project={project}/>
                        ))
                    }

                </div>

                <div className="viewMore" data-aos="fade-up" data-aos-duration="1000">

                    <Link to="/projects">
                        <button>VIEW MORE</button>
                    </Link>

                </div>

            </section>
        
        </>
    )
}