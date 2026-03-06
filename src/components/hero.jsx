import React from "react";

const Hero = ({section = 'satu', h1, p, button, display='normal'}) => {
  return (
    <div className={`hero-section ${section}`}>
      <div className="hero-wrapper">
        <div className="hero-text">
          <h1>{h1}</h1>
          <p>{p}</p>
          <button className={`hero-button ${display}`}>{button}</button>
        </div> 
      </div>
    </div>
  );
};

export default Hero;
