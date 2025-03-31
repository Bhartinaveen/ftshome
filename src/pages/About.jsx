// src/pages/About.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-10 md:px-32 flex justify-center items-start font-serif">
      <div className="max-w-7xl mx-auto bg-white p-12 rounded-xl shadow-lg mt-8 min-h-[90vh]">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6" style={{ color: "rgb(255, 165, 0)" }}>
          About Our Hotel O Hotel Landmark Inn
        </h1>

        <p className="text-lg text-center mb-6" style={{ color: "rgb(0, 102, 204)" }}>
          We offer the best deals on hotels, ensuring a smooth and seamless booking experience for all travelers.
        </p>

        {/* Hotel Information */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative flex flex-col items-center">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="rounded-lg shadow-md w-full"
            >
              <SwiperSlide>
                <img src="/images/hotel.jpg" alt="Hotel 1" className="w-full rounded-lg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/hero.jpg" alt="Hotel 2" className="w-full rounded-lg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/hero.jpg" alt="Hotel 3" className="w-full rounded-lg" />
              </SwiperSlide>
            </Swiper>

            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-4">
                <p className="text-lg line-through" style={{ color: "rgb(169, 169, 169)" }}>₹4029</p>
                <p className="text-2xl font-bold" style={{ color: "rgb(34, 139, 34)" }}>₹956</p>
                <p className="font-semibold" style={{ color: "rgb(255, 69, 0)" }}>72% OFF</p>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <button className="px-5 py-2 border border-gray-600 font-medium rounded-md hover:bg-gray-200 transition">
                  View Details
                </button>
                <button className="px-5 py-2 text-white font-medium rounded-md transition relative overflow-hidden"
                  style={{ 
                    background: "linear-gradient(90deg, rgb(255, 165, 0), rgb(0, 102, 204))", 
                    boxShadow: "0 4px 15px rgba(0, 102, 204, 0.5)"
                  }}
                  onMouseOver={(e) => e.target.style.boxShadow = "0 6px 20px rgba(0, 102, 204, 0.8)"}
                  onMouseOut={(e) => e.target.style.boxShadow = "0 4px 15px rgba(0, 102, 204, 0.5)"}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center relative -top-20 size-100">
            <h2 className="text-2xl font-semibold mb-4 text-center md:text-left" style={{ color: "rgb(255, 140, 0)" }}>
              Why Choose Us?
            </h2>
            <ul className="grid grid-cols-2 gap-4" style={{ color: "rgb(0, 102, 204)" }}>
              <li className="flex items-center gap-2">🏨 Wide range of hotels</li>
              <li className="flex items-center gap-2">💳 Secure booking process</li>
              <li className="flex items-center gap-2">⭐ 4.6+ star ratings</li>
              <li className="flex items-center gap-2">📍 Prime locations</li>
              <li className="flex items-center gap-2">📶 Free WiFi</li>
              <li className="flex items-center gap-2">🛗 Elevators available</li>
              <li className="flex items-center gap-2">🚿 Hot water geysers</li>
              <li className="flex items-center gap-2">🍽️ Free breakfast</li>
              <li className="flex items-center gap-2">🏊 Swimming pool</li>
              <li className="flex items-center gap-2">💼 Business-friendly stays</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
