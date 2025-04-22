import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../Components/Footer";

const Sign = () => {
  return (
    <div>
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      minHeight: '60vh',
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
    <div className="flex flex-col min-h-screen ">
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className=" p-8 rounded-xl w-[550px] min-h-[300px] flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 -translate-y-43">
            Sign <span className="text-green-600">in</span> to your account
          </h2>

          <form className="space-y-6">
            <div className="space-y-4">
              <div className='-translate-y-35'>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="📧 you@example.com"
                  className="w-full h-[45px] mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>

              <div className='-translate-y-30'>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="🔒 Password"
                  className="w-full h-[45px] mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                />
              </div>
            </div>

            <div className="text-right -translate-y-25">
              <a href="#" className="text-sm text-gray-600 hover:underline">
                Forgot your password?
              </a>
            </div>

            <div className='-translate-y-18'>
              <button
                type="submit"
                className="w-full h-[45px] bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center space-x-2">
            <hr className="w-full border-gray-300" />
            <span className="text-sm text-gray-500">OR</span>
            <hr className="w-full border-gray-300" />
          </div>

          <p className="text-sm text-center text-gray-600">
            New User?{' '}
            <Link to="/register" className="text-blue-600 hover:underline font-medium">
              Create a new account!
            </Link>
          </p>
        </div>
      </div>

      
    </div>
    </div>
    </div>

    <Footer className="w-full mt-8" />
    </div>

  );
};

export default Sign;
