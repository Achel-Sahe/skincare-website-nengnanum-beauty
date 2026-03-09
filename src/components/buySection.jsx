import React from "react";
import { Link } from "react-router-dom";
import tt from '../assets/tiktokshop-logo.png'
const BuySection = () => {
  return (
    <div className="buy-section">
      <div className="buy-cards-wrapper">
        <h1 className="reveal reveal-delay-1">temukan produk kami di market place dan toko kesayangan anda</h1>
        <Link to="https://www.tiktok.com/@nengnanum00?_r=1&_t=ZS-942x3jscc6i" className="buy-card reveal reveal-delay-2">
          <img src={tt} alt="Buy Card TikTok" className="reveal reveal-delay-3" />
          <span className="buy-btn reveal reveal-delay-3">Buy Now</span>
        </Link>
      </div>
    </div>
  );
};

export default BuySection;
