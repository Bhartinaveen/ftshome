import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import Footer from "../Components/Footer";

const ContactUs = () => {
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
      maxWidth: '1000px',
    }}
    
    >
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10  rounded-lg overflow-hidden">
          
          {/* Contact Form */}
          <div className="p-6 md:p-10 w-full min-h-[600px] ">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Get In Touch!!</h2>
            <form className="space-y-6">
              <div className="translate-y-3">
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  placeholder=" Your Name"
                  className="w-full min-h-[45px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
              <div className="translate-y-4">
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  placeholder=" you@example.com"
                  className="w-full min-h-[45px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
              <div className="translate-y-5">
                <label className="block mb-1 font-medium">Phone</label>
                <input
                  type="text"
                  placeholder=" Your Phone Number"
                  className="w-full min-h-[45px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
              <div className="translate-y-6">
                <label className="block mb-1 font-medium">Subject</label>
                <input
                  type="text"
                  placeholder=" Subject"
                  className="w-full min-h-[45px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
              <div className="translate-y-7">
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  placeholder=" Your Message"
                  className="w-full min-h-[150px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                ></textarea>
              </div >
              <button
                type="submit"
                className="w-full translate-y-8 h-[45px] bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-blue-50 p-6 md:p-10 flex flex-col justify-between w-full min-h-[500px]">
            <div>
              <h3 className="text-2xl font-semibold mb-2 translate-y-5 translate-x-2"> Contact Information</h3>
              <p className="mb-6 text-gray-700 translate-y-7 translate-x-2"> Feel free to reach out to us!</p>
              <ul className="space-y-4 text-gray-800 translate-y-14  translate-x-2">
                <li >📍 BMC Bhawani Mall, Saheed Nagar, Bhubaneswar, Odisha-751007.</li>
                <li> 📞 +91-9040170727</li>
                <li> 🟢 +91-9040170727</li>
                <li> ✉️ support@firsthomestay.com</li>
              </ul>
            </div>
            <div className="mt-10  -translate-y-18 translate-x-18 ">
              <p className="font-semibold mb-2  translate-x-3">Follow Us On:</p>
              <div className=" text-blue-600 text-2xl flex gap-3 -translate-x-5  translate-y-2">
                {/* <a href="https://www.facebook.com  " >
                <FaFacebookF />
                </a> */}
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-red-400">
                            <FaInstagram />
                 </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-blue-400">
                            <FaTwitter />
                          </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-blue-600">
                            <FaLinkedin />
                          </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-red-600">
                            <FaYoutube />
                          </a>    
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-blue-900">
                            <FaFacebookF />
                          </a>                
                {/* <a href="https://www.instagram.com ">
                <FaInstagram />
                </a>
                <a href="https://twitter.com">
                <FaTwitter />
                </a>
                <a href="https://www.youtube.com">
                <FaYoutube /> 
                </a>
                <a href="https://www.linkedin.com">
                <FaLinkedin />
                </a> */}


              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
     </div>
     <Footer className="w-full mt-auto" />
     </div>
  );
};

export default ContactUs;
