import React from "react";
import "../styles/Categories.css"; // Import external CSS

const categories = [
  { name: "Rooms", image: "/images/room.jpg", rating: 4.5, price: "$699/night", hotel: "Hotel Ocean View" },
  { name: "Dining", image: "/images/dining.jpeg", rating: 3.2, price: "$499/table", hotel: "Hotel Ocean View" },
  { name: "Swimming Pool", image: "/images/pool.jpg", rating: 4.7, price: "$299/session", hotel: "Hotel Ocean View" },
  { name: "Gym", image: "/images/gym.jpg", rating: 3.9, price: "$199/month", hotel: "Hotel Ocean View" },
  // { name: "Spa", image: "/images/spa.jpg", rating: 5.0, price: "$599/session", hotel: "Hotel Ocean View" },
  // { name: "Bar", image: "/images/bar.jpg", rating: 2.8, price: "$99/drink", hotel: "Hotel Ocean View" },
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
          <p className="hotel-name">{cat.hotel}</p> {/* Hotel Name Below Image */}
          <p className="category-name">{cat.name}</p>
          <div className="rating">{getStarRating(cat.rating)}</div>
          <p className="price">{cat.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
