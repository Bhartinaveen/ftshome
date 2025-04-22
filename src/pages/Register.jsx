import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from "../Components/Footer";
const Register = () => {
  const [user, setUser] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [businessName, setBusinessName] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/auth/user', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !password || !confirmPassword || !mobile || !businessName) {
      alert('Please fill in all the fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    console.log('Form submitted:', {
      fullName,
      email,
      password,
      mobile,
      businessName,
    });
  };

  return (
    <div >
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
    
    className=" flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl w-[550px] min-h-[700px]">
        <h2 className="text-2xl font-bold text-center mb-6 -translate-y-3">
           <span className="text-green-600">Registered</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name Section */}
          <div className="flex justify-center translate-y-8">
            <div className="w-full max-w-[400px]">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder=" 📝  Full Name"
                className="w-full h-[45px] mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>

          {/* Email Section */}
          <div className="flex justify-center translate-y-14">
            <div className="w-full max-w-[400px]">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder=" 📧  you@example.com"
                className="w-full h-[45px] mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password Section */}
          <div className="flex justify-center translate-y-20">
            <div className="w-full max-w-[400px]">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder=" 🔒  Password"
                className="w-full h-[45px] mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Confirm Password Section */}
          <div className="flex justify-center translate-y-26">
            <div className="w-full max-w-[400px]">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                placeholder=" 🔒  Confirm Password"
                className="w-full h-[45px] mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Mobile Section */}
          <div className="flex justify-center translate-y-32">
            <div className="w-full max-w-[400px]">
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                id="mobile"
                name="mobile"
                type="text"
                required
                placeholder=" 📱  Mobile Number"
                className="w-full h-[45px] mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
          </div>

          {/* Business Name Section */}
          <div className="flex justify-center translate-y-38">
            <div className="w-full max-w-[400px]">
              <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                Business Name
              </label>
              <input
                id="businessName"
                name="businessName"
                type="text"
                required
                placeholder=" 🏢  Business Name"
                className="w-full h-[45px] mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center translate-y-45">
            <div className="w-full max-w-[400px]">
              <button
                type="submit"
                className="w-full h-[45px] bg-black text-white py-3 rounded-md hover:bg-gray-800"
              >
                Register
              </button>
            </div>
          </div>
        </form>

        {/* Sign In Link */}
        <p className="text-center text-sm mt-4 text-gray-600 translate-y-50">
          Already have an account?{' '}
          <Link to="/sign" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
         

    </div>
     
          <Footer className="w-full mt-auto" />
    </div>
  );
};

export default Register;










// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Footer from "../Components/Footer";
// const Register = () => {
//   const [user, setUser] = useState(null);
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [businessName, setBusinessName] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:5000/auth/user', {
//       credentials: 'include',
//     })
//       .then((res) => res.json())
//       .then((data) => setUser(data));
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!fullName || !email || !password || !confirmPassword || !mobile || !businessName) {
//       alert('Please fill in all the fields');
//       return;
//     }

//     if (password !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }

//     console.log('Form submitted:', {
//       fullName,
//       email,
//       password,
//       mobile,
//       businessName,
//     });
//   };

//   return (
//     <div>
//     <div className=" flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow-md w-[550px] min-h-[700px]">
//         <h2 className="text-2xl font-bold text-center mb-6 translate-y-10">
//           Get Yourself <span className="text-green-600">Registered</span>
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Full Name Section */}
//           <div className="flex justify-center translate-y-15">
//             <div className="w-full max-w-[400px]">
//               <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
//                 Full Name
//               </label>
//               <input
//                 id="fullName"
//                 name="fullName"
//                 type="text"
//                 required
//                 placeholder=" 📝  Full Name"
//                 className="w-full h-[45px] mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Email Section */}
//           <div className="flex justify-center translate-y-20">
//             <div className="w-full max-w-[400px]">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 placeholder=" 📧  you@example.com"
//                 className="w-full h-[45px] mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Password Section */}
//           <div className="flex justify-center translate-y-25">
//             <div className="w-full max-w-[400px]">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 placeholder=" 🔒  Password"
//                 className="w-full h-[45px] mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Confirm Password Section */}
//           <div className="flex justify-center translate-y-30">
//             <div className="w-full max-w-[400px]">
//               <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
//                 Confirm Password
//               </label>
//               <input
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 type="password"
//                 required
//                 placeholder=" 🔒  Confirm Password"
//                 className="w-full h-[45px] mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Mobile Section */}
//           <div className="flex justify-center translate-y-35">
//             <div className="w-full max-w-[400px]">
//               <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
//                 Mobile Number
//               </label>
//               <input
//                 id="mobile"
//                 name="mobile"
//                 type="text"
//                 required
//                 placeholder=" 📱  Mobile Number"
//                 className="w-full h-[45px] mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
//                 value={mobile}
//                 onChange={(e) => setMobile(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Business Name Section */}
//           <div className="flex justify-center translate-y-40">
//             <div className="w-full max-w-[400px]">
//               <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
//                 Business Name
//               </label>
//               <input
//                 id="businessName"
//                 name="businessName"
//                 type="text"
//                 required
//                 placeholder=" 🏢  Business Name"
//                 className="w-full h-[45px] mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
//                 value={businessName}
//                 onChange={(e) => setBusinessName(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center translate-y-45">
//             <div className="w-full max-w-[400px]">
//               <button
//                 type="submit"
//                 className="w-full h-[45px] bg-black text-white py-3 rounded-md hover:bg-gray-800"
//               >
//                 Register
//               </button>
//             </div>
//           </div>
//         </form>

//         {/* Sign In Link */}
//         <p className="text-center text-sm mt-4 text-gray-600 translate-y-50">
//           Already have an account?{' '}
//           <Link to="/sign" className="text-blue-500 hover:underline">
//             Sign In
//           </Link>
//         </p>
//       </div>
//     </div>
//           {/* Footer */}
//           <Footer className="w-full mt-auto" />

//     </div>
//   );
// };

// export default Register;