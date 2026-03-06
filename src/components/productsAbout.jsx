import React from "react";
import productImg from '../assets/nengnanum-products.png' ;

const ProductsAbout = () => {
  return (
    <section className="products-about">
      <div className="products-about-wrapper">
        <div className="products-header">
          <h2>Our Products</h2>
          <p>
            Thoughtfully formulated skincare designed for softness, balance, and
            confidence.
          </p>
        </div>

        <div className="products-showcase">
          <img src={productImg} alt="Nengna Products" />
        </div>

        <button className="products-cta">Explore Collection →</button>
      </div>
    </section>
  );
};

export default ProductsAbout;
