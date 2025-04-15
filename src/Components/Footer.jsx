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
            <p>Helpline: <a href="tel:+911234567890">+91-9040170727</a></p>
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
              <li><Link to="/aboutus">About Us</Link></li>
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
          
        <div className="flex space-x-6 text-2xl">
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
