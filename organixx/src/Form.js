import React, { useState } from "react";
import Greens from "./img/grass.png";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  return (
    <section className='form_container'>
      <h3>Let us be there for your health journey.</h3>
      <form>
        <input placeholder='Enter email adress' />
        <button>SEND</button>
      </form>
      <div className='triangle-left'></div>
      <div className='triangle-right'></div>

    </section>
  );
};

export default Form;
