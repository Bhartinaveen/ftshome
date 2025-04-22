import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Footer from "../Components/Footer";

const AboutUs = () => {
  return (
    <div>
      <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        minHeight: '100vh',
        backgroundColor: '#f4f6f9',
      }}
      >
      <div
      style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '30px',
        width: '100%',
        maxWidth: '2000px',
      }}
      
      >
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
      <div className="max-w-3xl mx-auto my-8 p-6 ">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-blue-900 text-left">
          FirstHomeStay is dedicated to empowering businesses and entrepreneurs with cutting-edge technology solutions that 
          enhance efficiency, maximize earnings, and simplify operations. We strive to deliver innovative, reliable, 
          and scalable services that drive growth and create lasting value, ensuring seamless experiences for both 
          businesses and their customers.
        </p>
      </div>

      {/* Three Images in a Column */}
      <div className="grid grid-cols-1 gap-6 max-w-3xl w-full ">
        <img src="/images/b5.webp" alt="Image 1" className="w-full h-60 object-cover" />
        <img src="/images/b2.jpg" alt="Image 2" className="w-full h-60 object-cover" />
      </div>

      {/* Full-Width Footer */}
      {/* <div className="w-full bg-gray-800 text-white mt-10">
        <Footer />
      </div> */}
    </div>
    </div>
    </div>
    {/* Footer */}
    <Footer className="w-full mt-auto" />
    </div>
  );
};

export default AboutUs;
