import React from "react";
import imgProducts from "../assets/Nengnanum skincare serenity collection.png";

const SimpleAbout = () => {
  return (
    <div>
      <div className="simple-about">
      <h1 className="first-simple-hidden reveal">Our Phylosophy</h1>
        <div className="simple-about-right reveal reveal-delay-1">
            <img src={imgProducts} alt="Nengnanum Skincare" />
        </div>
        <div className="simple-about-left">
          <h1 className="snd-simple-hidden reveal reveal-delay-2">Our Philosophy</h1>
          <p className="reveal reveal-delay-3">
            Kami percaya bahwa kulit yang sehat berasal dari perawatan yang
            konsisten, bukan berlebihan. Pendekatan kami berfokus pada
            kesederhanaan formulasi dan kenyamanan penggunaan agar skincare
            menjadi bagian alami dari rutinitas harian.
          </p>
          <button className="reveal reveal-delay-4">Learn More →</button>
        </div>
      </div>
    </div>
  );
};

export default SimpleAbout;
