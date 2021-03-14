import React, { useState, useEffect } from "react";
import './Product.css';
import Juice from './img/juice.jpeg';
import Detox from './img/detox.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faPlusCircle, faChild } from "@fortawesome/free-solid-svg-icons";

const Product = () => {

  return (
    <section className='product_container'>
      <div className='product_header_container'>
      <h3>Products</h3>
      <div className='mid_right'></div>
      <div className='header_right'></div>

      </div>
      <div className='product_one'>
      <div className='juice_box_left'>
      <FontAwesomeIcon className="juice" icon={faLeaf} />
      <p>JUICING</p>
      </div>
      <div className='product_one_img'>
        <img src={Juice} alt='juice-supplement' />
        <FontAwesomeIcon className="plus" icon={faPlusCircle} />

      </div>
      <div className='product_one_text'>
        <p>Juice Powder</p>
        <p>Boost your Imune System</p>
      </div>
      </div>
      <div className='product_two'>
      <div className='juice_box_left'>
      <FontAwesomeIcon className="juice" icon={faChild} />
      <p>Whole Body Detox</p>
      </div>
      <div className='product_two_text'>
        <p>Detox</p>
        <p>Boost your Imune System</p>
      </div>
            <div className='product_two_img'>
        <img src={Detox} alt='juice-supplement' />
        <FontAwesomeIcon className="plus" icon={faPlusCircle} />

      </div>

      </div>

    </section>
  )
}

export default Product;