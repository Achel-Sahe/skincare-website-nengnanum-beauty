import React from "react";
import GeneralCards from "./generalCards";

const ArticleCard = ({header, judul, isi, Card, button}) => {
  return (
    <div className="articleCard">
        <div className="judul-section">
          <h3>{header}</h3>
      </div>
      <div className="judul-article">
        <h1>{judul}</h1>
        <p>{isi}</p>
        </div>
      <div className="article-wrapper">
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className="button">
        <button>{ button }</button>
      </div>
    </div>
  );
};

export default ArticleCard;
