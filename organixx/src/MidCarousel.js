import React, { useState } from "react";
import Greens from "./img/Greens.png";
import "./MidCarousel.css";

const MidCarousel = () => {
  return (
    <section className="carousel_container">
      <h3>More Products</h3>
      <div className="product_flex">
        <div className="product_container">
          <img src={Greens} alt="greens" />
          <div className="banner first">
            <p>Energy</p>
          </div>
          <p className="prod_text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium vo.
          </p>
          <div className="box"></div>
        </div>
        <div className="product_container">
          <img src={Greens} alt="greens" />
          <div className="banner">
            <p>Energy</p>
          </div>
          <p className="prod_text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium vo.
          </p>
          <div className='box'></div>

        </div>
        <div className="product_container">
          <img src={Greens} alt="greens" />
          <div className="banner third">
            <p>Energy</p>
          </div>
          <p className="prod_text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium vo.
          </p>
          <div className='box'></div>

        </div>
      </div>
    </section>
  );
};

export default MidCarousel;
