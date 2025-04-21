import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../Components/Footer";
const Sign = () => {
  return (
    <div>
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-[500px] min-h-[600px] p-8 space-y-8 bg-white shadow-md rounded-md flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-gray-900 -translate-y-40">
          Sign <span className="text-green-600">in</span> to your account
        </h2>

        <form className="mt-4 space-y-6 w-full flex flex-col items-center">
          <div className="space-y-4 w-full flex flex-col items-center">
            <div className="w-full -translate-y-32">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="📧 you@example.com"
                className="w-full max-w-[400px] min-h-[45px] mx-auto mt-1 px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            <div className="w-full -translate-y-25">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="🔒 Password"
                className="w-full max-w-[400px] min-h-[45px] mx-auto mt-1 px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>

          <div className="text-sm translate-x-32 -translate-y-15">
            <a href="#" className="text-gray-600 hover:underline">
              Forgot your password?
            </a>
          </div>

          <div className="w-[80%]">
            <button
              type="submit"
              className="w-full max-w-[800px] min-h-[45px] mx-auto bg-black text-white py-3 rounded-md hover:bg-gray-800"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center w-full my-4">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-sm text-gray-500">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        <p className="text-sm text-gray-600">
          New User?{' '}
          <Link to="/register" className="text-blue-600 hover:underline font-medium">
            Create a new account!
          </Link>
        </p>
      </div>
    </div>
        {/* Footer */}
        <Footer className="w-full mt-auto" />
    </div>
  );
};

export default Sign;
