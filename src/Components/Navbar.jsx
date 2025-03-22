import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* Company Logo */}
        <img src="/images/companylogo.jpg" alt="Hotel Logo" className="logo-img" />

        {/* Company Name with RGB Gradient Effect */}
        <span className="company-name">First Home Stay</span>
      </div>

      <ul className="nav-links">
        <li className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>

          {/* Menu Button */}
          <div className="menu-container">
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
            {menuOpen && (
              <div className="dropdown-menu">
                <p>📞 Contact us</p>
                <p>👤 Personal Account</p>
                <p>📍 Your Location</p>
                <p>🛎️ My-Booking</p>
                <p>❓ Help</p>
                <p>ℹ️ About Us</p>
                <p className="logout">🚪 Logout</p>
              </div>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
