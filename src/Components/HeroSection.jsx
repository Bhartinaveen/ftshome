import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        className="w-full h-[40vh] sm:h-[40vh] md:h-[50vh] lg:h-[70vh] object-cover object-center"
        src="/images/hl.avif"
        alt="Hero"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4">
          {/* Example Heading */}
          <span className="text-green-200">Discover Extraordinary</span>{" "}
          <span className="text-orange-700">Comfort in Hotels</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
