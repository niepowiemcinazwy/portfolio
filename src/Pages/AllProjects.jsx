import { useEffect } from 'react';

import Thumb from '../images/thumb.png';
import AllProjectCard from '../Components/AllProjectsCard';
import allProjects from '../allProjects';

import AOS from 'aos';
import 'aos/dist/aos.css';

export function AllProjects({project}) {

    useEffect(() => {
        AOS.init();
        document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
    }, []);

    return (
        <>
        
        <section className="allProjects">

            <div className="allProjects-headline" data-aos="fade-right" data-aos-duration="700">

                <h5>CHECK OUT MY</h5>
                <div className="allProjects-thumb">
                    <h1>PROJECTS</h1>
                    <img src={Thumb} alt="" draggable="false"></img>
                </div>

            </div>

            <div className="allProjects-tiles">

                {
                    allProjects.map((project, id) => (
                        <AllProjectCard key={id} project={project}/>
                    ))
                }

            </div>

            <div className="pmmsolutions" data-aos="fade-right" data-aos-duration="500">

                <p>Most of the websites were made by me for PMM IT Solutions. Property of PMM IT Solutions sp. z o.o. (pmmsolutions.eu)</p>

            </div>

        </section>

        </>
    )
}
