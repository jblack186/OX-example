import React, { useState, useEffect } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Dna from "./img/dna.png";

const Header = () => {
  return (
    <header className='header'>
      <div className="left_header">
        <div className="top_left_header">
          <p>
            <FontAwesomeIcon className="font-icon" icon={faShoppingCart} /> FREE
            SHIPPING OVER $50 ORDERS
          </p>
        </div>
        <div className='left_line'></div>
        <ul className="bottom_left_header">
          <li>SHOP</li>
          <div className='list_lines'></div>
          <li>PRODUCTS</li>
          <div className='list_lines'></div>

          <li>MISSION</li>
                    <div className='list_lines'></div>

          <li>FEATURED</li>
        </ul>
        </div>

        <div className='mid_header'>
          <img src={Dna} alt="logo" />
        </div>
        <div className="right_header">
          <div className="top_right_header">
            <p>Log In</p>
            <div className='list_lines'></div>

            <p>CONTACT</p>
          </div>
          <div className='right_line'></div>

          <div className="bottom_right_header">
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className='shape'>
        <h1>organixx</h1>
      </div>

    </header>
  );
};

export default Header;
