import React from "react";
import ScrollStack, { ScrollStackItem } from "./scrollComps";
import "./scroll.css";
import imgScroll from "../assets/assets-1.jpeg";
const ScrollStuck = () => {
  return (
    <ScrollStack>
      <ScrollStackItem>
        <div className="card-grid">
          <div className="text">
            <span className="eyebrow">01 — Targeted Treatment</span>
            <h2>Precision Repair in Every Drop</h2>
            <p>A concentrated serum designed to target dullness, uneven tone, and early signs of aging. Lightweight, fast-absorbing, and formulated to deliver visible clarity without overwhelming your skin.</p>
          </div>

          <div className="image">
            <img src={imgScroll} alt="Product" />
          </div>
        </div>
      </ScrollStackItem>
      <ScrollStackItem>
        <div className="card-grid">
          <div className="text">
            <span className="eyebrow">02 — Deep Hydration</span>
            <h2>Lock In Moisture. Unlock Glow.</h2>
            <p>A breathable moisturizer that strengthens the skin barrier while delivering long-lasting hydration. Soft texture, non-greasy finish — comfort that lasts all day.</p>
          </div>

          <div className="image">
            <img src={imgScroll} alt="Product" />
          </div>
        </div>
      </ScrollStackItem>
      <ScrollStackItem>
        <div className="card-grid">
          <div className="text">
            <span className="eyebrow">03 — Gentle Cleanse</span>
            <h2>Clean Without Compromise</h2>
            <p>A low-irritation facial wash that removes impurities, excess oil, and daily buildup without stripping natural moisture. Leaves skin refreshed, balanced, and ready for treatment.</p>
          </div>

          <div className="image">
            <img src={imgScroll} alt="Product" />
          </div>
        </div>
      </ScrollStackItem>
      <ScrollStackItem>
        <div className="card-grid">
          <div className="text">
            <span className="eyebrow">04 — Balance & Prep</span>
            <h2>Restore. Reset. Rebalance.</h2>
            <p>A calming toner that refines pores and prepares your skin to absorb active ingredients more effectively. Light, soothing, and alcohol-free.</p>
          </div>

          <div className="image">
            <img src={imgScroll} alt="Product" />
          </div>
        </div>
      </ScrollStackItem>
      <ScrollStackItem>
        <div className="card-grid">
          <div className="text">
            <span className="eyebrow">05 — Complete Ritual</span>
            <h2>A System That Works Together</h2>
            <p>Individually powerful. Collectively transformative. Our full skincare routine is designed to work in harmony — cleanse, balance, treat, and protect for visibly healthier skin.</p>
          </div>

          <div className="image">
            <img src={imgScroll} alt="Product" />
          </div>
        </div>
          </ScrollStackItem>
      </ScrollStack>
  );
};

export default ScrollStuck;
