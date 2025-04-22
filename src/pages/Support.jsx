import React, { useState } from "react"
import Footer from "../Components/Footer";
const Support = () => {
  const [bookingId, setBookingId] = useState("")
  const [error, setError] = useState("")

  const companyWhatsAppNumber = "9040170727"

  const handleProceed = () => {
    if (!bookingId.trim()) {
      setError("Please enter a booking ID")
      return
    }

    setError("")
    const whatsappUrl = `https://wa.me/${companyWhatsAppNumber}?text=Hello, I need support for my booking ID: ${bookingId}`
    window.open(whatsappUrl, "_blank")
  }

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
    <div className="flex items-center justify-center  -translate-y-5 min-h-[400px] ">
      <div className="w-full max-w-2xl p-8  rounded-lg" style={{ height: '350px' }}>
        <div className="flex flex-col items-center mb-6">
          <img
            src="/images/companylogo.jpg"
            alt="FirstHomeStayLogo"
            className="w-16 h-16 mb-2 rounded-full"
          />
          <h1 className="text-lg font-semibold text-gray-900">FirstHomeStay's Help Assistant</h1>
          <p className="text-sm text-gray-500">We're here for your queries</p>
        </div>

        <div className="flex justify-center items-center mb-4">
          <div className="w-90">
            <label
              htmlFor="booking-id"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Booking ID
            </label>
            <input
              id="booking-id"
              type="text"
              placeholder=" What is your booking ID?"
              value={bookingId}
              onChange={(e) => setBookingId(e.target.value)}
              className="w-full h-[45px] mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
          </div>
        </div>

        <div className="mt-6 flex justify-center transform translate-y-6">
          <button
            onClick={handleProceed}
            className=" w-[400px] h-[45px] bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Proceed
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6 transform translate-y-20">
          To make new booking contact{" "}
          <a href="tel:9040170727" className="text-blue-500 hover:underline font-medium">
            +91-9040170727
          </a>
        </p>
      </div>
    </div>
    </div>
    </div>
    {/* Footer */}
    <Footer className="w-full mt-auto" />
    </div>
  )
}

export default Support
