import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero">
      <img src="/images/hero.jpg" alt="Hero" />
      <div className="hero-text">
        <h1>Discover Extraordinary Comfort in Hotels</h1>
        <div className="hero-buttons">
          <button className="hero-btn">Book Now</button>
          <button className="hero-btn special-offer-btn">Special Offer</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
