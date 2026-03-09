import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <section className="contact-page">
      {/* HERO */}
      <div className="contact-hero">
        <h1 className="reveal reveal-delay-1">Let’s Talk About Your Skin</h1>
        <p className="reveal reveal-delay-2">We’re here to help you build your perfect skincare ritual.</p>
      </div>

      {/* MAIN CONTACT */}
      <div className="contact-container">
        {/* FORM */}
        <div className="contact-form reveal reveal-delay-3">
          <h2>Get In Touch</h2>

          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <select>
                <option>General Inquiry</option>
                <option>Collaboration</option>
                <option>Press</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Your message"></textarea>
            </div>

            <button type="submit" className="contact-button">Submit</button>
          </form>
        </div>

        {/* IMAGE */}
        <div className="contact-image reveal reveal-delay-4">
          <img
            src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc"
            alt="skincare product"
          />
        </div>
      </div>

      {/* CONTACT INFO */}
      <div className="contact-info">
        <div className="info-card reveal reveal-delay-1">
          <h3>Email</h3>
          <p>support@nengnanum.com</p>
        </div>

        <div className="info-card reveal reveal-delay-2">
          <h3>Instagram</h3>
          <p>@nengnanum</p>
        </div>

        <div className="info-card reveal reveal-delay-3">
          <h3>Location</h3>
          <p>Bandung, Indonesia</p>
        </div>
      </div>
    </section>
  );
}
