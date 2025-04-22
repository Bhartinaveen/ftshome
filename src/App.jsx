// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import BookingForm from "./Components/BookingForm";
import Categories from "./Components/Categories";
import SpecialOffers from "./Components/SpecialOffers";
import Footer from "./Components/Footer";
import About from "./pages/About"; // Import About Page
import ContactUs from "./pages/ContectUs";
import Payment from "./pages/Payment";
import Aboutus from "./pages/Aboutus";
import Register from"./pages/Register";
import Terms from"./pages/Terms";
import Cancel from "./pages/Cancel";
import "./styles/App.css"; 
import Blog from "./pages/Blog";
import Support from "./pages/Support";
import Sign from "./pages/sign";

function App() {
  return (
    <Router> {/* Router should wrap everything */}
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <div className="app-container">
              {/* <BookingForm /> */}
              <Categories />
              <SpecialOffers />
            </div>
            <Footer />
          </>
        }/>
        <Route path="/about" element={<About />} /> {/* Fixed About Page Route */}
        <Route path="/payment" element={<Payment />} /> {/* Fixed About Page Route */}
        <Route path="/contectus" element={<ContactUs />} /> {/* Fixed About Page Route */}
        <Route path="/aboutus" element={<Aboutus />} /> {/* Fixed About Page Route */}
        <Route path="/Home" element={<App />} /> {/* Fixed About Page Route */}
        <Route path="/Register" element={<Register />} /> {/* Fixed About Page Route */}
        <Route path="/terms" element={<Terms />} /> {/* Fixed About Page Route */}
        <Route path="/cancel" element={<Cancel />} /> {/* Fixed About Page Route */}
        <Route path="/blogs" element={<Blog />} /> {/* Fixed About Page Route */}
        <Route path="/support" element={<Support />} /> {/* Fixed About Page Route */}
        <Route path="/support" element={<Support />} /> {/* Fixed About Page Route */}
        <Route path="/sign" element={<Sign />} /> {/* Fixed About Page Route */}
        
      </Routes>
    </Router>
  );
}

export default App;
