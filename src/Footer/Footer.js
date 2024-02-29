import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"; 
import Image from '../gallery/download.jpeg'


function Footer() {
  return (
    <div className="footer-container">
      <div className="logo-container">
        <img src={Image} alt='logo1'/>
      </div>
      <div className='content-container'>
        <div className='text'>
        <p>Our Structure</p>
        <Link className="nav-link" to="/About" style={{ color: "black" }}>About us</Link>
          <Link className="nav-link" to="/Home" style={{ color: "black" }}>Home</Link>
          <Link className="nav-link" to="/Contact" style={{ color: "black" }}>Contact Us</Link>
        </div>
        <div className='text1'>
          <p>Academics</p>
          <Link className="nav-link" to="/Facilites" style={{ color: "black" }}>Facilities</Link>
          <Link className="nav-link" to="/Policy" style={{ color: "black" }}>Admission Policy</Link>
          <Link className="nav-link" to="/News" style={{ color: "black" }}>School News</Link>
        </div>
        <div className='text2'>
          <p>Information</p>
          <Link className="nav-link" to="/Careers" style={{ color: "black" }}>Careers</Link>
          <Link className="nav-link" to="/FAQ" style={{ color: "black" }}>FAQ</Link>
          <Link className="nav-link" to="/Terms" style={{ color: "black" }}>Terms&Conditions</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
