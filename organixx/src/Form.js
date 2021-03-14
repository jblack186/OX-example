import React, { useState } from "react";
import Greens from "./img/grass.png";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const Form = () => {
  const [email, setEmail] = useState()
  const [holder, setHolder] = useState('')
  const [error, setError] = useState('')



  const send = (e) => {
    e.preventDefault();
    const API_PATH = 'http://localhost:8888/testwebsite/api/index.php';

    axios.post(API_PATH, email)
      .then(res => {
        setEmail('')
        console.log(res)
      })
      .catch(err => {
        console.log.log(err)
      })
      
    

  }

  const onChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value)

  }

  console.log(email)

  return (
    <section className='form_container'>
      <h3>Let us be there for your health journey.</h3>
      <form action="/action_page.php" onSubmit={send}>
        <input value={email} onChange={onChange} placeholder='Enter email adress' />
        <button>SEND</button>
      </form>
      <div className='triangle-left'></div>
      <div className='triangle-right'></div>

    </section>
  );
};

export default Form;
