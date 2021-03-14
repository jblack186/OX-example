import React, { useState, useEffect } from "react";
import Greens from "./img/grass.png";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { motion } from "framer-motion"



const Form = () => {
  const [email, setEmail] = useState()
  const [holder, setHolder] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false);
console.log(sent)

useEffect(() => {
  setTimeout(function(){ setSent(false) }, 1000);
}, [sent])

  const send = (e) => {
    if (email === '') {
     return alert('Enter in email.')
    }
    e.preventDefault();
    const API_PATH = 'http://localhost:8888/testwebsite/api/index.php';

    axios.post(API_PATH, email)
      .then(res => {
        setEmail('')
        setSent(true)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
      
    
  }

  const onChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value)

  }


  return (
    <section className='form_container'>     
      <h3>Let us be there for your health journey.</h3>
      <form action="/action_page.php" onSubmit={send}>
        <input value={email} onChange={onChange} placeholder='Enter email adress' />
        <button>SEND</button>
      </form>
      <div className='triangle-left'></div>
      <div className='triangle-right'></div>
      <div className={!sent ? 'hide' : 'show' } >
      <FontAwesomeIcon className='apple' icon={faPaperPlane} />
      </div>
    </section>
  );
};

export default Form;
