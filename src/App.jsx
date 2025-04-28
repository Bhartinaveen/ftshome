import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import BookingForm from "./Components/BookingForm";
import Categories from "./Components/Categories";
import HotelDetail from "./pages/HotelDetail";
import HotelListPage from "./pages/HotelListpage";
import SpecialOffers from "./Components/SpecialOffers";
import OfferHotels from "./pages/OfferHotels";
import OfferDetails from "./pages/OfferDetails";
import Register from"./pages/Register";
import Footer from "./Components/Footer";
import ContactUs from "./pages/ContactUs";
import Partner from "./pages/Partner";
import Payment from "./pages/Payment";
import Aboutus from "./pages/Aboutus";
import Blog from "./pages/Blog";
import Support from "./pages/Support";
import Terms from"./pages/Terms";
import Cancel from "./pages/Cancel";
import GuestPolicy from "./pages/Guestpolicy";
import Policy from "./pages/Policy";
import TrustAndSafety from "./pages/Trust&safety";
import CyberSecurity from "./pages/cybersecurity";
import CyberSecurityAwareness from "./pages/CyberAwareness";
import ResponsibleDisclosure from "./pages/ResponsibleDisclosure";
import "./styles/App.css"; 

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
        <Route path="/hotels/:locationId" element={<HotelListPage />} />
        <Route path="/hotel/detail/:hotelId" element={<HotelDetail />} />
        <Route path="/offer/:offerId" element={<OfferHotels />} />
        <Route path="/hotel/offer/:hotelName" element={<OfferDetails />} />
        
        <Route path="/payment" element={<Payment />} /> {/* Fixed About Page Route */}
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/aboutus" element={<Aboutus />} /> {/* Fixed About Page Route */}
        <Route path="/Home" element={<App />} /> {/* Fixed About Page Route */}
        <Route path="/Register" element={<Register />} /> {/* Fixed About Page Route */}
        <Route path="/terms" element={<Terms />} /> {/* Fixed About Page Route */}
        <Route path="/cancel" element={<Cancel />} /> {/* Fixed About Page Route */}
        <Route path="/blogs" element={<Blog />} /> {/* Fixed About Page Route */}
        <Route path="/policy" element={<Policy />} /> {/* Fixed About Page Route */}
        <Route path="/guest-policy" element={<GuestPolicy />} /> {/* Fixed About Page Route */}
        <Route path="/support" element={<Support />} /> {/* Fixed About Page Route */}
        <Route path="/safety" element={<TrustAndSafety />} />
        <Route path="/security" element={<CyberSecurity />} />
        <Route path="/security-awareness" element={<CyberSecurityAwareness />} />
        <Route path="/disclosure" element={<ResponsibleDisclosure />} />
      
        
      </Routes>
    </Router>
  );
}

export default App;




