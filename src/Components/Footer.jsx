import React from "react";
import { Link } from "react-router-dom"; // <-- Import Link
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/images/companylogo.jpg" alt="Livo Hotels Logo" />
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: <a href="mailto:support@livohotels.com">support@firsthomestay.com</a></p>
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
              <li><Link to="/aboutus">About Us</Link></li> {/* <-- Updated line */}
              <li>Teams / Careers</li>
              <li>Blogs</li>
              <li>Support</li>
              <li>Investor Relations</li>
              <li>FirsthomeStay Circle</li>
              <li>FirsthomeStay Frames</li>
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

        <p className="footer-copy">Copyright@2025 First HomeStay. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
