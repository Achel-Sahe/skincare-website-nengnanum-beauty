import React from "react";
import imgProducts from "../assets/Nengnanum skincare serenity collection.png";

const SimpleAbout = () => {
  return (
    <div>
      <div className="simple-about">
        <div className="simple-about-right">
            <img src={imgProducts} alt="Nengnanum Skincare" />
        </div>
        <div className="simple-about-left">
          <h1>Our Philosophy</h1>
          <p>
            Kami percaya bahwa kulit yang sehat berasal dari perawatan yang
            konsisten, bukan berlebihan. Pendekatan kami berfokus pada
            kesederhanaan formulasi dan kenyamanan penggunaan agar skincare
            menjadi bagian alami dari rutinitas harian.
          </p>
          <button>Learn More →</button>
        </div>
      </div>
    </div>
  );
};

export default SimpleAbout;
