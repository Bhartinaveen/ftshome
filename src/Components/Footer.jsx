import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        {/* Left-Side Map Image */}
        <div className="footer-map">
          <img src="/images/map.jpeg" alt="Livo Hotels Map" className="map-image" />
        </div>

        {/* Right-Side Description */}
        <div className="footer-description">
          <h3>Why Choose First Home Stay?</h3>
          <p className="animated-text">
            Experience seamless <span>hotel booking</span> with **First Home Stay**! 
            Whether you're planning a luxurious getaway or a budget-friendly stay, 
            our platform offers **handpicked accommodations** with unbeatable deals. 
            Enjoy **24/7 customer support**, easy cancellations, and the best price guarantees!
          </p>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          {/* Company Logo */}
          <div className="footer-logo">
            <img src="/images/companylogo.jpg" alt="Livo Hotels Logo" />
          </div>

          {/* Contact Information */}
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: <a href="mailto:support@livohotels.com">support@livohotels.com</a></p>
            <p>Helpline: <a href="tel:+911234567890">+91 12345 67890</a></p>
          </div>

          {/* Feedback Button */}
          <div className="footer-feedback">
            <button onClick={() => window.location.href = "mailto:feedback@livohotels.com"}>
              Send Feedback
            </button>
          </div>
        </div>

        <p className="footer-copy">© 2025 First Track Solution Technology. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
