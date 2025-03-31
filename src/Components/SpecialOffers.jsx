import React, { useState, useEffect } from "react";
import "../styles/SpecialOffers.css";

const offers = [
  { title: "Honeymoon", price: "₹5,000 /night", image: "/images/honeymoon.jpg", offer: "20% Off" },
  { title: "Beach Retreat", price: "₹4,500 /night", image: "/images/room.jpg", offer: "Limited Time Deal" },
  { title: "Mountain Escape", price: "₹9,900 /night", image: "/images/dining.jpeg", offer: "Free Breakfast" },
];

const bulletins = [
  { hotel: "Sunrise Resort", review: "An unforgettable experience! The ocean view was stunning, and the service was impeccable.", color: "rgba(255, 99, 132, 0.4)" },
  { hotel: "Mountain Bliss Hotel", review: "A perfect getaway in the hills. The cozy rooms and fresh air made our stay magical.", color: "rgba(54, 162, 235, 0.4)" },
  { hotel: "Paradise Beach Resort", review: "The best beachside retreat! Crystal-clear waters, delicious food, and a relaxing ambiance.", color: "rgba(75, 192, 192, 0.4)" },
  { hotel: "Elite Grand Hotel", review: "Luxury at its finest! The rooms were spacious, and the spa treatments were top-notch.", color: "rgba(255, 206, 86, 0.4)" },
];

const SpecialOffers = () => {
  const [currentBulletin, setCurrentBulletin] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBulletin((prev) => (prev + 1) % bulletins.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="special-offers">
      <h2>Best Offers of the Month</h2>
      <div className="offers">
        {offers.map((offer, index) => (
          <div key={index} className="offer-card">
            <div className="special-tag">Special Offer</div>
            <img src={offer.image} alt={offer.title} />
            <h3><strong>{offer.title}</strong></h3>
            <p>{offer.price}</p>
            <p className="offer-text">{offer.offer}</p>
          </div>
        ))}
      </div>
      <div 
        className="bulletin-box" 
        style={{ 
          backgroundColor: bulletins[currentBulletin].color,
          border: "1px solid rgba(255, 255, 255, 0.3)", 
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
        }}
      >
        <p className="bulletin-text">
          <strong>📢 {bulletins[currentBulletin].hotel}</strong>: "{bulletins[currentBulletin].review}"
        </p>
      </div>
    </div>
  );
};

export default SpecialOffers;
