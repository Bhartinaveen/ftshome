import React, { useState } from 'react';
import Footer from "../Components/Footer";
const Profile = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const [profile, setProfile] = useState({
    name: ' Jhon',
    phone: ' 1234567890',
    email: ' jhon789@gmail.com',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };

  const saveProfile = () => {
    setIsEditingProfile(false);
    console.log('Updated Profile:', profile);
  };

  const savePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }

    setIsEditingPassword(false);
    console.log('Password Change Request:', passwordData);
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',   // ✅ Font Style
        color: '#3D365C',                     // ✅ Font Color
      }}
    >
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
          <div className="flex flex-wrap gap-4 p-8">
            <div className="w-full md:w-1/2 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">Edit Profile</h3>
                <button onClick={() => setIsEditingProfile(!isEditingProfile)} className="text-gray-500 text-lg">✏️</button>
              </div>

              {isEditingProfile ? (
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold">Full Name</label>
                    <input
                      name="name"
                      value={profile.name}
                      onChange={handleProfileChange}
                      className="w-full h-[45px] mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold">Phone Number</label>
                    <input
                      name="phone"
                      value={profile.phone}
                      onChange={handleProfileChange}
                      className="w-full h-[45px] mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold">Email Address</label>
                    <input
                      name="email"
                      value={profile.email}
                      onChange={handleProfileChange}
                      className="w-full h-[45px] mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                  </div>
                  <button onClick={saveProfile} className=" translate-y-2 w-[85px] h-[45px] bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors">
                    Save
                  </button>
                </div>
              ) : (
                <>
                  <p className="mb-2"><strong> Full Name:</strong> {profile.name}</p>
                  <p className="mb-2"><strong> Phone Number:</strong> {profile.phone}</p>
                  <p className="mb-2"><strong> Email Address:</strong> {profile.email}</p>
                </>
              )}
            </div>

            <div className="w-full md:w-1/3 p-6  rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">Change Password</h3>
                <button onClick={() => setIsEditingPassword(!isEditingPassword)} className="text-gray-500 text-lg">✏️</button>
              </div>

              {isEditingPassword ? (
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold">Current Password</label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                      className="w-full h-[45px] mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold">New Password</label>
                    <input
                      type="password"
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      className="w-full h-[45px] mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold">Confirm New Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      className="w-full h-[45px] mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                  </div>
                  <button onClick={savePassword} className=" translate-y-3 w-[85px] h-[45px] bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors">
                    Save Password
                  </button>
                </div>
              ) : (
                <div>
                  <p className="font-semibold">Current Password</p>
                  <p>••••••••</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer className="w-full mt-8" />
    </div>
  );
};

export default Profile;
