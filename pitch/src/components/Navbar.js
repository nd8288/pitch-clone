import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div id="logo">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" width="50" height="50" />
        <h1 className="logo">Pitch</h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        {/* Nav Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/">Product</Link></li>
          <li><Link to="/algorithms">Use Case</Link></li>
          <li><Link to="/about">Templates</Link></li>
          <li><Link to="/Resources">Resources</Link></li>
          <li><Link to="/Resources">Pricing</Link></li>
        </ul>
        <div id="log_button">
        <button className="log_button">Log In</button>
        <button className="log_button1">Sign up</button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
