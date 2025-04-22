import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

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
        <img 
          src="/images/companylogo.jpg" 
          alt="Hotel Logo" 
          className="logo-img" 
          style={{ width: "55px", height: "auto" }} 
        />
        <span className="company-name">First Home Stay</span>
      </div>

      <div className="menu-container" ref={menuRef}>
        <button className="menu-btn" aria-label="Open menu" onClick={() => setMenuOpen((prev) => !prev)}>
          ☰
        </button>

        {menuOpen && (
          <div className="dropdown-menu z-50">
            <Link to="/" onClick={() => setMenuOpen(false)}>🏠Home</Link>
            <Link to="/aboutus" onClick={() => setMenuOpen(false)}>ℹ️About Us</Link>
            <p>📘My Booking</p>
            <p>📌Your Location</p>
            <p>👤Personal Account</p>
            <Link to="/contectus" onClick={() => setMenuOpen(false)}>☎️Contact us</Link>
            {/* Removed Sign In/Sign Up Option */}
            <Link to="/sign" onClick={() => setMenuOpen(false)}>📝Sign In</Link>
            <p onClick={() => window.open("https://wa.me/919040170727", "_blank")}>💬Chat</p>
            <p className="logout" style={{ color: "red" }}>🔓Logout</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
