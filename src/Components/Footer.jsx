import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      {/* Full-width Top Image */}
      <div className="footer-top-image">
        <img src="public/images/map.png" alt="Livo Hotels Banner" />
      </div>

      <footer className="footer">
        <div className="footer-content">
          {/* Company Logo */}
          <div className="footer-logo">
            <img src="public/images/companylogo.jpg" alt="Livo Hotels Logo" />
          </div>

          {/* Hotel Booking App Description */}
          <div className="footer-description">
            <p>
              Livo is a premium hotel booking platform that provides seamless and
              hassle-free hotel reservations. We offer curated accommodations with
              the best deals, ensuring a luxurious and affordable stay for travelers
              worldwide.
            </p>
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

        <p className="footer-copy">© 2025 Livo Hotels. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
