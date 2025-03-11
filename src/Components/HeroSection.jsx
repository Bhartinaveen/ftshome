import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero">
      <img src="/images/hero.jpg" alt="Hero" />
      <div className="hero-text">
        <h1>Discover Extraordinary Comfort in Hotels</h1>
        <button className="hero-btn">Book Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
