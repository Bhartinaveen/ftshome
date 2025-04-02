import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [input, setInput] = useState(""); // State for SignIn input
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
    console.log("Sign in with:", input);
    // Implement authentication logic here (Firebase/Auth API)
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/images/companylogo.jpg" alt="Hotel Logo" className="logo-img" />
        <span className="company-name">First Home Stay</span>
      </div>

      <div className="menu-container" ref={menuRef}>
        <button className="menu-btn" aria-label="Open menu" onClick={() => setMenuOpen((prev) => !prev)}>
          ☰
        </button>

        {menuOpen && (
          <div className="dropdown-menu z-50">
            <p onClick={() => setShowSignIn(true)}>🔑 Sign In</p>
            <p>📝 Sign Up</p>
            <Link to="/contectus" onClick={() => setMenuOpen(false)}>📞 Contact us</Link>
            <p>👤 Personal Account</p>
            <p>📍 Your Location</p>
            <p>🛎️ My Booking</p>
            <Link to="/contectus" onClick={() => setMenuOpen(false)}>❓ Help</Link>
            <p>ℹ️ About Us</p>
            <p className="logout">🚪 Logout</p>
          </div>
        )}
      </div>

      {/* Sign-In Modal */}
      {showSignIn && (
        <div className="modal-overlay z-50">
          <div className="modal-content">
            <h2>Sign In</h2>
            <form onSubmit={handleSignInSubmit}>
              <input
                type="text"
                placeholder="Enter Email or Phone Number"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                required
              />
              <button type="submit">Sign In</button>
            </form>
            <button className="close-btn" onClick={() => setShowSignIn(false)}>✖</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
