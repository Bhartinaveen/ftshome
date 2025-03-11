import React from "react";
import "../styles/SpecialOffers.css";

const offers = [
  { title: "Honeymoon", price: "$699 /night", image: "/images/honeymoon.jpg" },
  { title: "Beach Retreat", price: "$499 /night", image: "/images/beach.jpg" },
  { title: "Mountain Escape", price: "$599 /night", image: "/images/mountain.jpg" },
  
];

const SpecialOffers = () => {
  return (
    <div className="special-offers">
      <h2>Best Offers of the Month</h2>
      <div className="offers">
        {offers.map((offer, index) => (
          <div key={index} className="offer-card">
            <img src={offer.image} alt={offer.title} />
            <h3>{offer.title}</h3>
            <p>{offer.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
