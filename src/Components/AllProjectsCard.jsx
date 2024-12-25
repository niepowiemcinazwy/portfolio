import Arrow from '../images/arrow.png';
import { Link } from 'react-router-dom';

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AllProjectCard({project}) {

  useEffect(() => {
    AOS.init();
}, []);

  return (

    <Link to={`/projects/${project.id}`}>
      <div className="allProjects-tile" data-aos-offset="250" data-aos="fade-up" data-aos-easing="ease-out-back" data-aos-delay="0">

          <img src={project.fullhdImage} alt="" draggable="false"></img>
          <div className="allProjects-tile-info">
            <h4>{project.name}</h4>
            <p>{project.desc}</p>
            <div className="allProjects-tile-more">
                <h5>view more</h5>
                <img src={Arrow} alt="" draggable="false"></img>
            </div>

          </div>

      </div>
    </Link>

  )
}
