import React from "react";
import IngredientsImg1 from "../assets/leaf.png";
const IngredientsCard = ({ img, title, description, delay }) => {
  return (
    <div className={`ingredients-card reveal reveal-delay-${delay}`}>
      <div className="ingredients-img">
        <img src={img || IngredientsImg1} alt="Leaf" />
      </div>
      <h2>{title || "Hyaluronic Acid"}</h2>
      <p>{description || "Hidrasi mendalam. Kulit terasa lebih kenyal."}</p>
    </div>
  );
};

export default IngredientsCard;
