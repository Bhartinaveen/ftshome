import React from "react";
import "../styles/Categories.css"; // Import external CSS

const categories = [
  { name: "Rooms", image: "/images/room.jpg", rating: 4.5, price: "$699/night", hotel: "Ocean View" },
  { name: "Dining", image: "/images/dining.jpeg", rating: 3.2, price: "$499/table", hotel: "Ocean View" },
  { name: "Swimming", image: "/images/room.jpg", rating: 4.7, price: "$299/session", hotel: "Ocean View" },
  { name: "Gym", image: "/images/honeymoon.jpg", rating: 3.9, price: "$199/month", hotel: "Ocean View" },
  { name: "Spa", image: "/images/room.jpg", rating: 5.0, price: "$599/session", hotel: "Ocean View" },
  // { name: "Bar", image: "/images/bar.jpg", rating: 2.8, price: "$99/drink", hotel: "Ocean View" },
  // { name: "Parking", image: "/images/parking.jpg", rating: 4.1, price: "$49/day", hotel: "Ocean View" },
  // { name: "Lounge", image: "/images/lounge.jpg", rating: 4.6, price: "$199/session", hotel: "Ocean View" },
  // { name: "Sauna", image: "/images/sauna.jpg", rating: 4.3, price: "$399/session", hotel: "Ocean View" },
  // { name: "Tennis", image: "/images/tennis.jpg", rating: 4.2, price: "$199/hour", hotel: "Ocean View" },
];

// Function to generate star ratings
const getStarRating = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {"⭐".repeat(fullStars)}
      {hasHalfStar ? "⭐½" : ""}
      {"☆".repeat(emptyStars)}
      <span className="rating-text">({rating})</span>
    </>
  );
};

const Categories = () => {
  return (
    <div className="categories">
      {categories.map((cat, index) => (
        <div key={index} className="category-card">
          <img src={cat.image} alt={cat.name} className="category-image" />
          <p className="hotel-name">{cat.hotel}</p>
          <p className="category-name">{cat.name}</p>
          <div className="rating">{getStarRating(cat.rating)}</div>
          <p className="price">{cat.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
