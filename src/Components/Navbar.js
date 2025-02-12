import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { auth } from "../firebase";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">EventX</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><button onClick={() => auth.signOut()}>Logout</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;