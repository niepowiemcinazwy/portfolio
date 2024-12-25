import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Ham from '../images/ham.png';
import Close from '../images/close.png';

import Linkedin from '../images/linkedin.png';
import Email from '../images/mail.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

export function Navbar() {

  const location = useLocation();
  const [activeLink, setActiveLink] = useState('home');
  const [isAsideVisible, setAsideVisible] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveLink(location.pathname.replace('/', ''));
      return;
    }

    const sections = document.querySelectorAll('section');

    const onScrollLinks = () => {
      let foundActiveSection = false;
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < 200 && rect.top > rect.height * -1) {
          setActiveLink(sec.getAttribute('id'));
          foundActiveSection = true;
        }
      });

      if (!foundActiveSection) {
        setActiveLink('home');
      }
    };

    window.addEventListener('scroll', onScrollLinks);

    return () => {
      window.removeEventListener('scroll', onScrollLinks);
    };
  }, [location.pathname]);

  useEffect(() => {
    AOS.init();
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleAside = () => {
    setAsideVisible(!isAsideVisible);
  };

  const closeAside = () => {
    setAsideVisible(false);
  };

  return (
    <nav style={{ borderBottom: isScrolled ? '1px solid #727A94' : 'none', backgroundColor: isScrolled ? '#030007' : 'transparent'}}>

      <a href="/#home" className="name" data-aos="fade-down" data-aos-duration="1000">Dawid Wawer</a>

      <div className="nav-menu">

        <ul>

          <li data-aos="fade-down" data-aos-duration="1200"><a href="/#home" className={activeLink === 'home' ? 'nav-active' : ''}>home</a></li>
          <li data-aos="fade-down" data-aos-duration="1400"><a href="/#about" className={activeLink === 'about' || location.pathname === '/about' ? 'nav-active' : ''}>about</a></li>
          <li data-aos="fade-down" data-aos-duration="1600"><a href="/#projects" className={activeLink === 'projects' || location.pathname === '/projects' ? 'nav-active' : ''}>projects</a></li>
        
        </ul>
        
      </div>

      <div className="ham" onClick={toggleAside}>
        <img src={Ham} alt=""></img>
      </div>

      <aside style={{ transform: isAsideVisible ? 'translate(0%)' : 'translate(100%)', display: 'flex' }}>

          <div className="aside-top">

            <img src={Close} alt="" onClick={closeAside}></img>

          </div>

          <div className="aside-container">

            <div className="aside-name">

              <h1>Dawid Wawer</h1>
              <h4>Front-end Developer</h4>

            </div>
            
            <div className="aside-navigation">

              <h2>Navigation</h2>

              <div className="aside-menu">

                <p>Explore</p>

                <ul>
                  <li><a href="/#home" onClick={() => { document.querySelector('aside').style.transform = 'translate(100%)'; }}>Home</a></li>
                  <li><a href="/#about" onClick={() => { document.querySelector('aside').style.transform = 'translate(100%)'; }}>About</a></li>
                  <li><a href="/#projects" onClick={() => { document.querySelector('aside').style.transform = 'translate(100%)'; }}>Projects</a></li>
                </ul>

              </div>

              <div className="aside-menu">

                <p>Socials</p>

                <ul>
                  <li>
                    <img src={Linkedin} alt=""></img>
                    <a href="https://www.linkedin.com/in/dawidwawer/">Linkedin</a>
                  </li>
                  <li>
                    <img src={Email} alt=""></img>
                    <a href="mailto:dawid.wawer.priv@gmail.com">E-mail</a>
                  </li>
                </ul>

              </div>

            </div>

          </div>

          <div className="aside-bottom">

            <h5>2024/2025 Dawid Wawer - Portfolio</h5>

          </div>

      </aside>
    </nav>
  );
}

export default Navbar;
