import React, { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* Company Logo */}
        <img src="/images/companylogo.jpg" alt="Hotel Logo" className="logo-img" />

        {/* Company Name with RGB Gradient Effect */}
        <span className="company-name">First Home Stay</span>
      </div>

      <div className="menu-container" ref={menuRef}>
        {/* Menu Button */}
        <button
          className="menu-btn"
          aria-label="Open menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>

        {menuOpen && (
          <div className="dropdown-menu z-50">
            <p>🔑 Sign In</p>
            <p>📝 Sign Up</p>
            <p>📞 Contact us</p>
            <p>👤 Personal Account</p>
            <p>📍 Your Location</p>
            <p>🛎️ My Booking</p>
            <p>❓ Help</p>
            <p>ℹ️ About Us</p>
            <p className="logout">🚪 Logout</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
