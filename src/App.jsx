// src/App.js
import React from "react";
import Navbar from "./Components/Navbar";
// import Navbar from "./components/Navbar.jsx";

import HeroSection from "./Components/HeroSection";
import BookingForm from "./Components/BookingForm";
import Categories from "./Components/Categories";
import SpecialOffers from "./Components/SpecialOffers";
import Footer from "./Components/Footer";
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
