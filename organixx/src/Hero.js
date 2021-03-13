import React, { useState, useEffect } from "react";
import './Hero.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Dna from './img/dna.png';
import {faFacebookSquare, faGithubSquare, faLinkedin, faTwitterSquare, faInstagram} from '@fortawesome/free-brands-svg-icons';
import Collagen from './img/collagen.jpg';

const Hero = () => {

  return (
    <section className='hero_container'>
      <div className='hero_flex'>
      <div className='hero_content'>
      <div className='hero_header'>
        <img src={Dna} alt='logo' />
        <h1>Organixx</h1>
      </div>
      <h2>Organic <span>Plant-Based</span> Supplements  <br/>  For Active People</h2>
      <p>Foods derived from plants with no animal-source foods or artificial ingredients. <br/>
      Better absorption of vitamins and minerals that come from plants</p>
      <button>LEARN MORE <FontAwesomeIcon className="font-icon-arrow" icon={faChevronDown} /></button>
      </div>
      <div className='icons'>
      <FontAwesomeIcon className="font-icon first" icon={faInstagram} />
      <FontAwesomeIcon className="font-icon" icon={faTwitterSquare} />
      <FontAwesomeIcon className="font-icon" icon={faFacebookSquare} />
      <FontAwesomeIcon className="font-icon" icon={faLinkedin} />

      </div>
      </div>
      <img className='hero_supp' src={Collagen} alt='hero-supp' />
    </section>
  )
}

export default Hero;