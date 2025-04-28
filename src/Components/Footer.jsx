import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';

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
            <p>Helpline: <a href="tel:9040170727">+91-9040170727</a></p>
          </div>

          <div className="footer-feedback">
            <button
              className="feedback-button"
              onClick={() => {
                const message = encodeURIComponent("Hi, I would like to share my feedback.");
                const phoneNumber = "919040170727"; // WhatsApp number with country code
                window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
              }}
            >
              Send Feedback
            </button>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Hotels near me</h4>
            <ul>
              <li><Link to="/manali">Hotels in Manali</Link></li>
              <li><Link to="/naintal">Hotels in Nainital</Link></li>
              <li><Link to="/agra">Hotels in Agra</Link></li>
              <li><Link to="/haridwar">Hotels in Haridwar</Link></li>
              <li><Link to="/goa">Hotels in Goa</Link></li>
              <li><Link to="/mysore">Hotels in Mysore</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/support">Support</Link></li> 
            
            </ul>
          </div>

          <div className="footer-column">
            <h4>Policies</h4>
            <ul>
              <li><Link to="/terms">Terms and Conditions</Link></li>
              <li><Link to="/cancel">Refund And Cancellation Policy</Link></li>
              <li><Link to="/guest-policy">Guest Policy</Link></li>
              <li><Link to="/policy">Privacy Policy</Link></li>
              <li><Link to="/safety">Trust and Safety</Link></li>
              <li><Link to="/security">Cyber Security</Link></li>
              <li><Link to="/security-awareness">Cyber Security Awareness</Link></li>
              <li><Link to="/disclosure">Responsible Disclosure</Link></li>
            </ul>
          </div>
        </div>

        <div className="text-2xl flex gap-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaFacebook />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaYoutube />
          </a>
        </div>

        <p className="footer-copy">Copyright@2025 First HomeStay. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
