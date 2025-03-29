import React from "react";
import "../styles/HeroSection.css";
import { useRef, useState ,useEffect} from "react";


const HeroSection = () => {
  const imageref=useRef()
  const [objectYOffset, setObjectYOffset] = useState(0);
  useEffect(()=>{
    if (imageref.current){
      setObjectYOffset(imageref.current.offsetWidth)
    }
  },[imageref])
  return (
    <div className="hero">
      <img  ref={imageref} className={`bg-center object-[50%_${objectYOffset}px]`} src="/images/hero.avif" alt="Hero" />
      <div className="hero-text">
        <h1>
          <span className="blue-text">Discover Extraordinary</span>{" "}
          <span className="orange-text">Comfort in Hotels</span>
        </h1>
        <div className="hero-buttons">
          <button id="special" className="hero-btn">Book  Now</button>
          <button id="special" className="hero-btn special-offer-btn">Special Offer</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
