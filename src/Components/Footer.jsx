import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-map">
          <img src="/images/map.jpeg" alt="Livo Hotels Map" className="map-image" />
        </div>

        <div className="footer-description">
          <h3>Why Choose First Home Stay?</h3>
          <p className="animated-text">
            Experience seamless <span>hotel booking</span> with <strong>First Home Stay</strong>!
            Whether you're planning a luxurious getaway or a budget-friendly stay,
            our platform offers <strong>handpicked accommodations</strong> with unbeatable deals.
            Enjoy <strong>24/7 customer support</strong>, easy cancellations, and the best price guarantees!
          </p>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/images/companylogo.jpg" alt="Livo Hotels Logo" />
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: <a href="mailto:support@livohotels.com">support@livohotels.com</a></p>
            <p>Helpline: <a href="tel:+911234567890">+91-9040170727</a></p>
          </div>

          <div className="footer-feedback">
            <button className="feedback-button" onClick={() => window.location.href = "mailto:feedback@livohotels.com"}>
              Send Feedback
            </button>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>HomeStay</h4>
            <ul>
              <li>Hotels near me</li>
              <li>Hotels in Manali</li>
              <li>Hotels in Nainital</li>

              <li>Hotels in Agra</li>
              <li>Hotels in Haridwar</li>
              <li>Hotels in Gurgaon</li>
              <li>Hotels in Coimbatore</li>

            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Teams / Careers</li>
              <li>Blogs</li>
              <li>Support</li>
              <li>Investor Relations</li>
              <li>FTST Circle</li>
              <li>FTST Frames</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Policies</h4>
            <ul>
              <li>Terms and Conditions</li>
              <li>Guest Policies</li>
              <li>Privacy Policy</li>
              <li>Refund policy</li>
              <li>Trust and Safety</li>
              <li>Cyber Security</li>
              <li>Cyber Security Awareness</li>
              <li>Responsible Disclosure</li>
          
            </ul>
          </div>
        </div>

        <p className="footer-copy">Copyright@2025 developed by  First Track Solution Technology. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
