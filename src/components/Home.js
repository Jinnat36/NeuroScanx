import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./Home.css";
import KeyFeatures from "./KeyFeatures";
import UserReviews from "./UserReviews";
import About from "./About";
import { Link } from "react-router-dom";

const Home = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    handleResize(); // Check screen size on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Hero Section with Animation */}
      <motion.div
        className="home-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content - Centered */}
        <motion.div
          className="relative z-10 max-w-3xl text-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-10">
            Predict Your Brain Stroke Risk with AI
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white">
            A smart and easy way to assess your health risk using AI-powered predictions.
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-6 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link to="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn px-6 py-2 bg-danger rounded-lg text-white font-semibold shadow-lg"
              >
                Get Started
              </motion.button>
            </Link>
            <Link to="/predict">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn px-6 py-2 bg-danger rounded-lg text-white font-semibold shadow-lg mx-4"
              >
                Check Now
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Wave Transition Animation - Hidden on Small Screens */}
      {!isSmallScreen && (
        <motion.div
          className="wave-container"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" className="svg">
            <path fill="white" d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"></path>
          </svg>
        </motion.div>
      )}

      {/* Sections with Fade-in Effect */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <About />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <KeyFeatures />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <UserReviews />
      </motion.div>
      {/* <SeacondNav /> */}
    </div>
  );
};

export default Home;