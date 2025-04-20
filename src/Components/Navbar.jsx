import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

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

  const handleSignInSubmit = (e) => {
    e.preventDefault();

    if (emailOrPhone.trim() && name.trim() && mobile.trim()) {
      console.log("Sign in details:", {
        emailOrPhone,
        name,
        mobile,
      });

      setShowSignIn(false);
      setEmailOrPhone("");
      setName("");
      setMobile("");
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

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
            <p onClick={() => setShowSignIn(true)}>🔐Sign In/Sign Up</p>
            <Link to="/register" onClick={() => setMenuOpen(false)}>📝Register</Link>
            <p onClick={() => window.open("https://wa.me/919040170727", "_blank")}>💬Chat</p>
            <p className="logout" style={{ color: "red" }}>🔓Logout</p>
          </div>
        )}
      </div>

      {showSignIn && (
        <div className="modal-overlay z-50">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Sign In/Sign Up</h2>
              <button className="close-btn" onClick={() => setShowSignIn(false)}>✖</button>
            </div>
            <form onSubmit={handleSignInSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Email or Phone Number"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                required
              />
              <button type="submit">Sign In</button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
