import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaShoppingCart } from 'react-icons/fa'; // Importing icons from react-icons

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/movies" className="nav-link">
        <FaHome className="nav-icon" /> Home
      </Link>
      <Link to="/cart" className="nav-link">
        <FaShoppingCart className="nav-icon" /> Cart
      </Link>
    </nav>
  );
}

export default Navbar;
