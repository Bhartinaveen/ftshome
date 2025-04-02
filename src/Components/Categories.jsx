import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/Categories.css";

const usdToInr = 83;

const categories = [
  { name: "Plot Number 2923, Gali Number 4, Near Sangatrashan Chowk, Paharganj, Delhi", image: "/images/h1.jpg", rating: 4.5, price: 69, unit: "night", hotel: "Hotels in Paharganj, Delhi" },
  { name: "10184, Hotel Landmark I N N, Arya Samaj Road, Karol Bagh, Delhi", image: "/images/h2.jpg", rating: 3.2, price: 49, unit: "table", hotel: "Hotel O Hotel Landmark Inn" },
  { name: "Bella Vista Villa", image: "/images/h3.jpg", rating: 4.7, price: 299, unit: "session", hotel: "Malavli, near Lonavala." },
  { name: "Collection O Radha KanhaiyaOcean View", image: "/images/h4.jpg", rating: 3.9, price: 19, unit: "month", hotel: "En-43, Sector 5, Near Webel More Salt Lake, Kolkata" },
  { name: "ITC Grand Bharat Retreat, Gurugram", image: "/images/h5.jpg", rating: 5.0, price: 59, unit: "session", hotel: "1214056 sq. m. of serenity - a short drive from Delhi" },
];

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
        <Link key={index} to={`/about`} className="category-link">
          <div className="category-card">
            <img src={cat.image} alt={cat.name} className="category-image" />
            <p className="hotel-name">{cat.hotel}</p>
            <p className="category-name">{cat.name}</p>
            <div className="rating">{getStarRating(cat.rating)}</div>
            <p className="price">₹{(cat.price * usdToInr).toLocaleString("en-IN")}/{cat.unit}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
