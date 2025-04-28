import React, { useState } from "react";

const Partner = () => {
  const [formData, setFormData] = useState({
    entityName: "",
    mobile: "",
    email: "",
    city: "",
    pincode: "",
    country: "",
    landmark: "",
    panCard: null,
    aadharCard: null,
    gstNumber: "",
    msmeNumber: "",
    bankName: "",
    bankAccountNumber: "",
    ifscCode: "",
    accountHolderName: "", // Added field for account holder name
  });

  const [fileName, setFileName] = useState({
    panCard: "No file chosen",
    aadharCard: "No file chosen",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
    setFileName({
        ...fileName,
        [name]: files[0].name,
      });
    };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if GST number is provided
    if (!formData.gstNumber) {
      alert("GST Number is compulsory.");
      return;
    }

    console.log("Partner Form Submitted:", formData);
    alert("Form submitted successfully!");
    // Reset form after submission
    setFormData({
      entityName: "",
      mobile: "",
      email: "",
      city: "",
      pincode: "",
      country: "",
      landmark: "",
      panCard: null,
      aadharCard: null,
      gstNumber: "",
      msmeNumber: "",
      bankName: "",
      bankAccountNumber: "",
      ifscCode: "",
      accountHolderName: "", // Reset account holder name after submission
    });
    setFileName({
        panCard: "No file chosen",
        aadharCard: "No file chosen",
      });
    };
  

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Partner Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="font-medium mb-2">Entity Name:</label>
          <input
            type="text"
            name="entityName"
            value={formData.entityName}
            onChange={handleChange}
            required
            className="px-4 py-2 border  focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-2">Mobile Number:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-2">Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-2 border  focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-2">City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="px-4 py-2 border  focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-2">Pincode:</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
            className="px-4 py-2 border  focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-2">Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="px-4 py-2 border  focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-2">Landmark:</label>
          <input
            type="text"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
            required
            className="px-4 py-2 border  focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-2">Upload PAN Card:</label>
          <div className="border-2 border-gray-400  p-4 flex items-center justify-between">
            <input
              type="file"
              name="panCard"
              onChange={handleFileChange}
              accept="image/*,.pdf"
              required
              id="panCard"
              className="hidden"
            />
            <label
              htmlFor="panCard"
              className="text-indigo-600 cursor-pointer"
            >
              Choose File
            </label>
            <span className="ml-4 text-gray-600">{fileName.panCard}</span>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-2">Upload Aadhar Card:</label>
          <div className="border-2 border-gray-400  p-4 flex items-center justify-between">
            <input
              type="file"
              name="aadharCard"
              onChange={handleFileChange}
              accept="image/*,.pdf"
              required
              id="aadharCard"
              className="hidden"
            />
            <label
              htmlFor="aadharCard"
              className="text-indigo-600 cursor-pointer"
            >
              Choose File
            </label>
            <span className="ml-4 text-gray-600">{fileName.aadharCard}</span>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-2">GST Number (Compulsory):</label>
          <input
            type="text"
            name="gstNumber"
            value={formData.gstNumber}
            onChange={handleChange}
            required
            className="px-4 py-2 border  focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-2">MSME Number (Optional):</label>
          <input
            type="text"
            name="msmeNumber"
            value={formData.msmeNumber}
            onChange={handleChange}
            className="px-4 py-2 border  focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <h3 className="font-medium text-lg mt-6 mb-4">Bank Details</h3>

        <div className="flex flex-col">
          <label className="font-medium mb-2">Account Holder Name:</label>
          <input
            type="text"
            name="accountHolderName"
            value={formData.accountHolderName}
            onChange={handleChange}
            required
            className="px-4 py-2 border  focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-2">Bank Name:</label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            required
            className="px-4 py-2 border  focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-2">Bank Account Number:</label>
          <input
            type="text"
            name="bankAccountNumber"
            value={formData.bankAccountNumber}
            onChange={handleChange}
            required
            className="px-4 py-2 border  focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-2">IFSC Code:</label>
          <input
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleChange}
            required
            className="px-4 py-2 border  focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 py-2 bg-indigo-600 text-white  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Partner;
