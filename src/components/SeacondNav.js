import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "./SeacondNav.css";

const SeacondNav = () => {
  const [hovered, setHovered] = useState(false);
  const username = "User"; // Replace with dynamic username if needed

  return (
    <nav className="navbar navbar-expand-lg mt-5">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">NeuroScanX</a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavDropdown" 
          aria-controls="navbarNavDropdown" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link className="nav-link active text-light" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/features">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/how-it-works">How it works</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">Contact</Link>
            </li>
            
            <li className="nav-item d-flex align-items-center">
              <FaUser className="text-light me-2" size={20} />
              <span className="text-light">{username}</span>
            </li>

            <li className="nav-item ms-3">
              <button 
                className="btn" 
                style={{
                  backgroundColor: hovered ? "white" : "#dc3545",
                  color: hovered ? "black" : "white",
                  border: "1px solid white"
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                Log out
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SeacondNav;
      