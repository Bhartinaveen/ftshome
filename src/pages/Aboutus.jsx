import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Full-Width Image */}
      <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
        <img 
          src="/images/b1.jpg" 
          alt="About Us Banner" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mission Statement */}
      <div className="max-w-3xl mx-auto my-8 p-6">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          FTST is dedicated to empowering businesses and entrepreneurs with cutting-edge technology solutions that 
          enhance efficiency, maximize earnings, and simplify operations. We strive to deliver innovative, reliable, 
          and scalable services that drive growth and create lasting value, ensuring seamless experiences for both 
          businesses and their customers.
        </p>
      </div>

      {/* Three Images in a Column */}
      <div className="grid grid-cols-1 gap-6 max-w-3xl w-full">
        <img src="/images/b5.webp" alt="Image 1" className="w-full h-60 object-cover" />
        <img src="/images/b2.jpg" alt="Image 2" className="w-full h-60 object-cover" />
      
      </div>

      {/* Footer */}
      <footer className="w-full bg-black text-white mt-12 p-6 flex flex-col items-center">
        <div className="flex space-x-6 text-2xl">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaYoutube />
          </a>
        </div>
        <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Copyright@2025 developed by  First Track Solution Technology. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;