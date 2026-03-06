import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="top-footer">
        <div className="footer-description">
          <h1>Nengnanum</h1>
          <p>
            Lorem, ipsum dolor. <br />
            Lorem ipsum dolor sit amet. <br />
            Lorem ipsum dolor sit. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <div className="footer-social">
          <div className="icon">
            <a><i className="fa-brands fa-instagram"></i></a>
            <a><i className="fa-brands fa-tiktok"></i></a>
            <a><i className="fa-brands fa-facebook-f"></i></a>
          </div>
          <div className="info-icon">
                      <p>1234@gmail.com</p>
                      <a><i className="fa-solid fa-envelope"></i></a>
          </div>
        </div>
          </div>
          <div className="bottom-footer">
              <div className="bottom-footer-link">
                  <a href="#">Contact Us</a>
                  <a href="#">Site Map </a>
                  <a href="#">Terms & Conditions </a>
              </div>
              <div className="bottom-footer-copyright">
                  <p>© {new Date().getFullYear()} Nengnanum. All rights reserved.</p>
              </div>
          </div>
    </div>
  );
};

export default Footer;
