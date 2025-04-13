import React, { useRef, useState, useEffect } from "react";

const HeroSection = () => {
  const imageref = useRef();
  const [objectYOffset, setObjectYOffset] = useState(0);

  useEffect(() => {
    const updateYOffset = () => {
      if (imageref.current) {
        setObjectYOffset(imageref.current.offsetWidth);
      }
    };

    updateYOffset();
    window.addEventListener("resize", updateYOffset);

    return () => window.removeEventListener("resize", updateYOffset);
  }, []);

  return (
    <div className="relative w-full overflow-hidden" >
      <img
        ref={imageref}
        className={`w-full h-[100px] sm:h-[100px] md:h-[400px] object-cover object-[center_${objectYOffset}px]` }
        src="/images/hl.avif"
        alt="Hero"
       />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold text-center">
          {/* <span className="text-blue-500">Discover Extraordinary</span>{" "}
          <span className="text-orange-500">Comfort in Hotels</span> */}
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
