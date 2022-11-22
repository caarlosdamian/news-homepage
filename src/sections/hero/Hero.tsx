import React from "react";
import "./Hero.scss";

export const Hero = () => {
  return (
    <section id='#hero' className="hero-container">
      <div className="hero-img"></div>
      <div className="hero-section">
        <span className="hero-header">The Bright Future of Web 3.0?</span>
        <span className="hero-description">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</span>
        <button className="hero-button">READ MORE</button>
      </div>
    </section>
  );
};
