import React from "react";
import { Link } from "react-router-dom";
import "../styles/Categories.css";

const usdToInr = 83;

export const categories = [
  {
   
    image: "/images/h1.jpg",
    rating: 4.5,
    price: 69,
    unit: "night",
    hotel: "Hotels in Paharganj, Delhi",
  },
  {
   
    image: "/images/h2.jpg",
    rating: 3.2,
    price: 49,
    unit: "trip",
    hotel: "Hotels in Banjara Hills, Hyderabad",
  },
  {
   
    image: "/images/h3.jpg",
    rating: 4.7,
    price: 299,
    unit: "session",
    hotel: "Hotels in MG Road, Bengaluru",
  },
  {
  
    image: "/images/h4.jpg",
    rating: 3.9,
    price: 19,
    unit: "month",
    hotel: "Hotels in Civil Lines, Jaipur",
  },
  {
   
    image: "/images/h5.jpg",
    rating: 5.0,
    price: 59,
    unit: "suite",
    hotel: "Hotels in Rajpur Road, Dehradun",
  },
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
      <span className="rating-text"> ({rating})</span>
    </>
  );
};

const Categories = () => {
  return (
    <div className="categories">
      {categories.map((cat, index) => (
        <Link key={index} to={`/hotels/${index}`} className="category-link">
          <div className="category-card">
            <img src={cat.image} alt={cat.name} className="category-image" />
            <p className="hotel-name">{cat.hotel}</p>
            <p className="category-name">{cat.name}</p>
            {/* <div className="rating">{getStarRating(cat.rating)}</div> */}
            <p className="price">
              ₹{(cat.price * usdToInr).toLocaleString("en-IN")}/{cat.unit}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
