import React from "react";
import productImg from '../assets/nengnanum-products.png' ;

const ProductsAbout = () => {
  return (
    <section className="products-about">
      <div className="products-about-wrapper">
        <div className="products-header">
          <h2 className="reveal reveal-delay-1">Our Products</h2>
          <p className="reveal reveal-delay-2">
            Thoughtfully formulated skincare designed for softness, balance, and
            confidence.
          </p>
        </div>

        <div className="products-showcase reveal reveal-delay-3">
          <img src={productImg} alt="Nengna Products" />
        </div>

        <button className="products-cta reveal reveal-delay-4">Explore Collection →</button>
      </div>
    </section>
  );
};

export default ProductsAbout;
