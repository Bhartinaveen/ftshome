import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaWifi, FaCreditCard, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../Components/Footer";

const About = () => {
  const navigate = useNavigate();
  const price = "₹5,000";

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 h-screen w-screen flex justify-center items-center font-serif">
      <div className="bg-white h-screen w-screen p-6 sm:p-10 md:p-12 overflow-y-auto border-t border-gray-300">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-indigo-600 drop-shadow-md">
          About Our Hotel O Hotel Landmark Inn
        </h1>

        <p className="text-lg text-center mb-6 text-orange-700 font-medium">
          We offer the best deals on hotels, ensuring a smooth and seamless booking experience for all travelers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Swiper Section */}
          <div className="relative flex flex-col items-center">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="rounded-lg shadow-md w-full border-2 border-gray-300"
            >
              <SwiperSlide>
                <img src="/images/h5.jpg" alt="Hotel 1" className="w-full rounded-lg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/ht2.jpg" alt="Hotel 2" className="w-full rounded-lg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/ht3.jpg" alt="Hotel 3" className="w-full rounded-lg" />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Hotel Details */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center space-x-1 text-yellow-400 text-2xl">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar className="text-gray-300" />
            </div>

            <div className="flex flex-col space-y-4 text-gray-700 text-lg">
              <div className="flex items-center space-x-3">
                <FaWifi className="text-blue-500 text-xl" /> <span>Free Wi-Fi</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaCreditCard className="text-green-500 text-xl" /> <span>Online Payment</span>
              </div>
            </div>

            <div className="flex items-center space-x-12 mt-6">
              <button
                onClick={() => navigate("/payment")}
                className="bg-indigo-600 text-white px-12 py-4 text-xl font-bold rounded-lg shadow-md hover:bg-indigo-700 transition transform hover:scale-105"
              >
                Pay Now
              </button>
              <span className="text-2xl font-bold text-gray-800">{price}</span>
            </div>

            {/* Location and Address */}
            <div className="mt-6 text-center text-gray-400 text-lg font-medium flex flex-col items-center">
              <FaMapMarkerAlt className="text-red-600 text-2xl mb-2" />
              <p>Hotel Landmark Inn</p>
              <p>123 Main Street, City Center</p>
              <p>New Delhi, India</p>
            </div>
          </div>
        </div>

        {/* Additional Image Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-700 drop-shadow-md">
            Explore More Hotels
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <img src="/images/rm1.jpeg" alt="Hotel 4" className="w-full h-48 object-cover rounded-lg shadow-lg border border-gray-300 hover:scale-105 transition-transform" />
            <img src="/images/rm2.webp" alt="Hotel 5" className="w-full h-48 object-cover rounded-lg shadow-lg border border-gray-300 hover:scale-105 transition-transform" />
            <img src="/images/rm3.jpeg" alt="Hotel 6" className="w-full h-48 object-cover rounded-lg shadow-lg border border-gray-300 hover:scale-105 transition-transform" />
            <img src="/images/rm4.jpg" alt="Hotel 7" className="w-full h-48 object-cover rounded-lg shadow-lg border border-gray-300 hover:scale-105 transition-transform" />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
