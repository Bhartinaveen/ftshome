// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
// import Navbar from "./components/Navbar.jsx";

import HeroSection from "./components/HeroSection";
import BookingForm from "./components/BookingForm";
import Categories from "./components/Categories";
import SpecialOffers from "./components/SpecialOffers";
import Footer from "./components/Footer";
import "./styles/BookingForm.css"; 
// import "./styles/Categories.css";
// import "./styles/Footer.css";
// import "./styles/HeroSection.css";
// import "./styles/Navbar.css";
// import "./styles/specialOffers.css";
import "./styles/App.css"; // Import the CSS file

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="app-container">
        <BookingForm />
        <Categories />
        <SpecialOffers />
      </div>
      <Footer />
    </>
  );
}


export default App;
