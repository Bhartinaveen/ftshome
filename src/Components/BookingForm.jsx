import React, { useState } from "react";
import "../styles/BookingForm.css";

const BookingForm = () => {
  const [location, setLocation] = useState("");

  return (
    <div className="booking-container">
      <h2>Book Your Stay</h2>
      <div className="booking-form">
        {/* Location Input Field */}
        <input
          type="text"
          className="input-field"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        {/* Date Input */}
        <input type="date" className="input-field" />

        {/* Adults Selection */}
        <select className="input-field">
          <option>Adults: 1</option>
          <option>Adults: 2</option>
          <option>Adults: 3</option>
          <option>Adults: 4</option>
        </select>

        {/* Children Selection */}
        <select className="input-field">
          <option>Children: 0</option>
          <option>Children: 1</option>
          <option>Children: 2</option>
        </select>

        {/* Booking Button */}
        <button className="booking-btn">Book Now</button>
      </div>
    </div>
  );
};

export default BookingForm;
