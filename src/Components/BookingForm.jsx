import React, { useState } from "react";
import "../styles/BookingForm.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    location: "",
    date: "",
    adults: 1,
    children: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
  };

  return (
    <div id="cont" className="booking-container">
      <h2>Book Your Stay</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="location"
            className="input-field"
            placeholder="Enter location"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="date"
            className="input-field"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <select name="adults" className="input-field" value={formData.adults} onChange={handleChange}>
            {[...Array(4)].map((_, i) => (
              <option key={i} value={i + 1}>{`Adults: ${i + 1}`}</option>
            ))}
          </select>

          <select name="children" className="input-field" value={formData.children} onChange={handleChange}>
            {[...Array(3)].map((_, i) => (
              <option key={i} value={i}>{`Children: ${i}`}</option>
            ))}
          </select>

          <button type="submit" className="booking-btn">Book Now</button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;