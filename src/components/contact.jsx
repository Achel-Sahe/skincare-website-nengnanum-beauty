import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <section className="contact-page">
      {/* HERO */}
      <div className="contact-hero">
        <h1>Let’s Talk About Your Skin</h1>
        <p>We’re here to help you build your perfect skincare ritual.</p>
      </div>

      {/* MAIN CONTACT */}
      <div className="contact-container">
        {/* FORM */}
        <div className="contact-form">
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

            <button type="submit">Submit</button>
          </form>
        </div>

        {/* IMAGE */}
        <div className="contact-image">
          <img
            src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc"
            alt="skincare product"
          />
        </div>
      </div>

      {/* CONTACT INFO */}
      <div className="contact-info">
        <div className="info-card">
          <h3>Email</h3>
          <p>support@nengnanum.com</p>
        </div>

        <div className="info-card">
          <h3>Instagram</h3>
          <p>@nengnanum</p>
        </div>

        <div className="info-card">
          <h3>Location</h3>
          <p>Bandung, Indonesia</p>
        </div>
      </div>
    </section>
  );
}
