import React from "react";
import Footer from "../Components/Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex flex-col items-center justify-center p-6 sm:p-10">
      <div className="bg-white shadow-2xl p-6 sm:p-12 w-full border border-gray-300">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-purple-700 mb-4 sm:mb-6 drop-shadow-md font-serif">
          Contact Us
        </h1>
        <p className="text-base sm:text-lg text-gray-800 text-center mb-6 sm:mb-8 font-mono">
          Get in touch with us for any inquiries or support.
        </p>

        <div className="space-y-4 sm:space-y-6 text-gray-900 text-sm sm:text-lg font-sans">
          <p className="flex items-center text-gray-700">
            <span className="mr-2">📍</span>
            <strong className="text-purple-700">Address:</strong> BMC Bhawani
            Mall, Saheed Nagar, Bhubaneswar, Odisha-751007
          </p>
          <p className="flex items-center text-gray-700">
            <span className="mr-2">📞</span>
            <strong className="text-purple-700">Phone:</strong>{" "}
            <a
              href="tel:+919040170727"
              className="text-blue-600 hover:underline"
            >
              +91-9040170727
            </a>
          </p>
          <p className="flex items-center text-gray-700">
            <span className="mr-2">✉️</span>
            <strong className="text-purple-700">Email:</strong>{" "}
            <a
              href="mailto:support@livo.com"
              className="text-blue-600 hover:underline"
            >
              support@firsthomestay.com
            </a>
          </p>
          {/* <p className="flex items-center text-gray-700">
            <span className="mr-2">📞</span>
            <strong className="text-purple-700">Helpline No:</strong>{" "}
            9040170727
          </p> */}
          <p className="flex items-center text-gray-700">
            <span className="mr-2">🌍</span>
            <strong className="text-purple-700">Service Coverage:</strong> We
            provide top-tier hotel booking services all over India, ensuring
            comfort and convenience for our customers.
          </p>
          <p className="flex items-center text-gray-700">
            <span className="mr-2">🏨</span>
            <strong className="text-purple-700">About Us:</strong> first HomeStay is a
            premier hotel booking platform offering seamless and reliable
            services for travelers across India. Our mission is to make hotel
            bookings hassle-free with a user-friendly interface and
            best-in-class customer support.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
