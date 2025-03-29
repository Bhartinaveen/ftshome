// src/pages/About.js
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [formData, setFormData] = useState({
    cardHolder: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    upiId: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-5 px-5 md:px-20 flex justify-center items-start">
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-xl shadow-lg mt-5">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          About Our Hotel Booking Platform
        </h1>

        <p className="text-gray-700 text-lg text-center mb-6">
          We offer the best deals on hotels, ensuring a smooth and seamless booking experience for all travelers.
        </p>

        {/* Hotel Information */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
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
              <p className="text-gray-500 text-lg line-through">₹4029</p>
              <p className="text-green-600 text-2xl font-bold">₹956</p>
              <p className="text-red-500 font-semibold">72% OFF</p>
              <div className="flex justify-center gap-4 mt-4">
                <button className="px-5 py-2 border border-gray-600 text-gray-700 font-medium rounded-md hover:bg-gray-200 transition">
                  View Details
                </button>
                <button
                  className="px-5 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition"
                  onClick={() => setIsModalOpen(true)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center md:text-left">
              Why Choose Us?
            </h2>
            <ul className="grid grid-cols-2 gap-4 text-gray-700">
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

        {/* Payment Modal */}
        {isModalOpen && (
          <div className="fixed top-0 right-0 h-full w-96 bg-white shadow-lg p-6 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Complete Your Booking</h2>
            <label className="block font-semibold mb-2">Payment Method:</label>
            <select
              className="w-full p-2 border rounded mb-4"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="credit">Credit/Debit Card</option>
              <option value="upi">UPI</option>
            </select>

            {paymentMethod === "credit" && (
              <div>
                <input
                  type="text"
                  name="cardHolder"
                  placeholder="Cardholder Name"
                  className="w-full p-2 border rounded mb-2"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  className="w-full p-2 border rounded mb-2"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="expiryDate"
                  placeholder="Expiry Date (MM/YY)"
                  className="w-full p-2 border rounded mb-2"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  className="w-full p-2 border rounded mb-2"
                  onChange={handleChange}
                />
              </div>
            )}

            {paymentMethod === "upi" && (
              <input
                type="text"
                name="upiId"
                placeholder="Enter UPI ID"
                className="w-full p-2 border rounded mb-4"
                onChange={handleChange}
              />
            )}

            <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
              Pay Now
            </button>
            <button className="w-full bg-gray-400 text-white py-2 rounded mt-2" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;