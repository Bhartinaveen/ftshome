import React from "react";
import "../styles/BookingForm.css";

const BookingForm = () => {
  return (
    <div className="booking-container">
      <h2>Book Your Stay</h2>
      <div className="booking-form">
        <input type="date" className="input-field" />
        <select className="input-field">
          <option>Adults: 1</option>
          <option>Adults: 2</option>
          <option>Adults: 3</option>
          <option>Adults: 4</option>
        </select>
        <select className="input-field">
          <option>Children: 0</option>
          <option>Children: 1</option>
          <option>Children: 2</option>
        </select>
        <button className="booking-btn">Book Now</button>
      </div>
    </div>
  );
};

export default BookingForm;
