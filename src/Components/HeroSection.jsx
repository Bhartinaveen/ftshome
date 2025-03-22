import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero">
      <img src="/images/hero.avif" alt="Hero" />
      <div className="hero-text">
        <h1>
          <span className="blue-text">Discover Extraordinary</span>{" "}
          <span className="orange-text">Comfort in Hotels</span>
        </h1>
        <div className="hero-buttons">
          <button className="hero-btn">Book Now</button>
          <button className="hero-btn special-offer-btn">Special Offer</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
