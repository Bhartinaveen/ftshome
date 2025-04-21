import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import Footer from "../Components/Footer";
const ContactUs = () => {
  return (
    <div>
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-xl rounded-lg overflow-hidden min-h-[700px]">
        {/* Left: Contact Form */}
        <div className="p-6 md:p-10">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Get In Touch!!</h2>
          <form className="space-y-4">
            <div className="translate-x-5 translate-y-5">
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder=" Your Name"
                className="w-full max-w-[400px] min-h-[45px] mx-auto mt-1 px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="translate-x-5 translate-y-8">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder=" you@example.com"
                className="w-full max-w-[400px] min-h-[45px] mx-auto mt-1 px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="translate-x-5 translate-y-11">
              <label className="block mb-1 font-medium">Phone</label>
              <input
                type="text"
                placeholder=" Your Phone Number"
                className="w-full max-w-[400px] min-h-[45px] mx-auto mt-1 px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="translate-x-5 translate-y-14">
              <label className="block mb-1 font-medium">Subject</label>
              <input
                type="text"
                placeholder=" Subject"
                className="w-full max-w-[400px] min-h-[45px] mx-auto mt-1 px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
            <div className="translate-x-5 translate-y-17">
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                placeholder=" Your Message"
                className="w-full max-w-[400px] min-h-[150px] mx-auto mt-1 px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              ></textarea>
            </div>
            <button
              type="submit"
              className="translate-x-5 translate-y-20 w-full max-w-[400px] min-h-[45px] mx-auto bg-black text-white py-3 rounded-md hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="bg-blue-50 p-6 md:p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-4 translate-x-5">Contact Information</h3>
            <p className="mb-6 text-gray-700 translate-x-5">Feel free to reach out to us!</p>
            <ul className="space-y-3 text-gray-800">
              <li className="translate-x-5 translate-y-5">📍 BMC Bhawani Mall, Saheed Nagar Bhubaneswar, Odisha-751007.</li>
              <li className="translate-x-5 translate-y-8">📞 +91-9040170727</li>
              <li className="translate-x-5 translate-y-10">🟢 +91-9040170727</li>
              <li className="translate-x-5 translate-y-12">✉️ info@firsttrack.site</li>
            </ul>
          </div>
          <div className="mt-6 translate-x-5 -translate-y-90">
            <p className="font-semibold mb-2">Follow Us On:</p>
            <div className="flex space-x-4 text-blue-600 text-2xl">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
     {/* Footer */}
     <Footer className="w-full mt-auto" />
    </div>
  );
};

export default ContactUs;
