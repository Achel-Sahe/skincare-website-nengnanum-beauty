import React from "react";
import img from '../assets/assets-1.jpeg'

const GeneralCards = () => {
  return (
    <div className="general-wrapper">
      <div className="generalCard-container">
        <div className="generalCard-img">
          <img src={img} alt="" />
        </div>
        <div className="generalCard-article">
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
            dignissimos repellendus cum doloribus, odio deserunt. Lorem ipsum
            dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralCards;
