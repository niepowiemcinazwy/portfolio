import React from 'react';
import linkedin from '../images/linkedin.png'
import mail from '../images/mail.png'
import facebook from '../images/facebook.png'
  
export function Footer() {
  return (

    <footer className="contact" id="contact">

        <div className="footer-left">

            <h4>Dawid Wawer</h4>
            <p>Front-end Developer</p>

        </div>

        <div className="footer-elements">

            <div className="footer-element">

                <h5>Socials</h5>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/dawidwawer/">
                            <img src={linkedin} draggable="false" alt=""></img>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:dawid.wawer.priv@gmail.com">
                            <img src={mail} draggable="false" alt=""></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/dawid.wawer.31/">
                            <img src={facebook} draggable="false" alt=""></img>
                        </a>
                    </li>
                </ul>

            </div>

            <div className="footer-element">

                <h5>Explore</h5>
                <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>

            </div>

        </div>

    </footer>

  );

}

export default Footer;