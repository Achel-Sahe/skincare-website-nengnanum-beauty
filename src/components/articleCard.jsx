import React from "react";
import GeneralCards from "./generalCards";

const ArticleCard = ({header, judul, isi, Card, button}) => {
  return (
    <div className="articleCard">
        <div className="judul-section reveal reveal-delay-1">
          <h3>{header}</h3>
      </div>
      <div className="judul-article reveal reveal-delay-2">
        <h1>{judul}</h1>
        <p>{isi}</p>
        </div>
      <div className="article-wrapper reveal reveal-delay-3">
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className="button reveal reveal-delay-4">
        <button>{ button }</button>
      </div>
    </div>
  );
};

export default ArticleCard;
