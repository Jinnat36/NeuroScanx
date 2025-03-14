import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import KeyFeatures from "./components/KeyFeatures";
import UserReviews from "./components/UserReviews";
import Footer from "./components/Footer";
import About from "./components/About";
import SeacondNav from "./components/SeacondNav";
import HowItWork from "./components/HowItWork";

function App() {
  return (
    <Router>
      <Navbar />
      <SeacondNav />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={< />} /> */}
          <Route path="/user-reviews" element={<UserReviews />} />

          {/* Uncomment when pages are ready */}
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<KeyFeatures />} /> 
          <Route path="/how-it-works" element={<HowItWork />} />
          {/* <Route path="/contact" element={<Contact />} />
          // <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
