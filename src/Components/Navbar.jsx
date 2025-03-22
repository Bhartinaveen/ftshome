import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="Hotel Logo" className="logo-img" />
      </div>
      <ul className="nav-links">
        {/* <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Newsletter</a></li>
        <li><a href="#">Rooms</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Pricing</a></li> */}

        {/* Login and Sign-Up Buttons */}
        <li className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
