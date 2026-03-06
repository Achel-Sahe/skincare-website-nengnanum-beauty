import React from "react";
import { Link } from "react-router-dom";
const BuySection = () => {
  return (
    <div className="buy-section">
      <div className="buy-cards-wrapper">
        <h1>temukan produk kami di market place dan toko kesayangan anda</h1>
        <Link to="https://www.tiktok.com/@nengnanum00?_r=1&_t=ZS-942x3jscc6i" className="buy-card">
          <img src="/src/assets/tiktokshop-logo.png" alt="Buy Card TikTok" />
          <span className="buy-btn">Buy Now</span>
        </Link>
      </div>
    </div>
  );
};

export default BuySection;
