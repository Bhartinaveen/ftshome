import React, { useEffect, useState } from 'react';

const Register = () => {
  const [user, setUser] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/auth/user', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleGoogleLogin = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: custom client-side validation
    if (!fullName || !email || !mobile || !password) {
      alert('Please fill in all the fields');
      return;
    }

    // Proceed with your registration logic, such as an API call
    console.log('Form submitted:', { fullName, email, mobile, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[32rem] h-[450px] flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Register</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8 items-center">
            <input
              type="text"
              placeholder="Full Name"
              className="w-[80%] mx-auto px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-10"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email ID"
              className="w-[80%] mx-auto px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-[80%] mx-auto px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-10"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-[80%] mx-auto px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className=" text-sm bg-red-600 text-white rounded-md hover:bg-red-700 transition w-[20%] mx-auto px-4 py-3 h-7 transform -translate-y-4">
              Continue
            </button>
          </form>

          <div className="my-4 text-center text-gray-500 text-sm">
            or sign in with
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center  py-1.5 text-sm rounded-md hover:bg-gray-100 transition"
          >
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google"
              className="h-8 mr-2 w-[5%] "
            />
            Sign in with Google 
          </button>
        </div>

        {user && (
          <div className="mt-4 text-green-600 text-center text-sm">
            Logged in as: {user.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
