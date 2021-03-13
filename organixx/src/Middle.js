import React, { useState } from "react";
import Greens from "./img/grass.png";
import "./Middle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Middle = () => {
  return (
    <section className="middle_container">
      <div>
        <p>Organic plant-based  <br/> supplements for health</p>
      </div>
      <div className='tab'>
      <FontAwesomeIcon className="tab_arrow" icon={faChevronDown} />
      </div>
    </section>
  );
};

export default Middle;
