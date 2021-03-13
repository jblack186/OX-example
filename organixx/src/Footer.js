import React, { useState } from "react";
import Greens from "./img/grass.png";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dna from './img/dna.png';
import {faFacebookSquare, faGithubSquare, faLinkedin, faTwitterSquare, faInstagram} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <section className="footer_container">
      <div className='footer_header'>
        <h1>Organixx</h1>
        
      </div>
      <div className='footer_icons'>
      <FontAwesomeIcon className="footer_font_icon" icon={faInstagram} />
      <FontAwesomeIcon className="footer_font_icon" icon={faTwitterSquare} />
      <FontAwesomeIcon className="footer_font_icon" icon={faFacebookSquare} />
      <FontAwesomeIcon className="footer_font_icon" icon={faLinkedin} />

      </div>
      <p className='footer_para'>@Copyright - Organixx - developed</p>
    </section>
  );
};

export default Footer;