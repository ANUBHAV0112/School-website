import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import Image from '../gallery/download.jpeg'

export default class Header extends Component {
  render() {
    return (
      <div >
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" style={{ color: "black" }}>
              <img
                src={Image}
                alt="School"
                height="40%"
                width="45%"
                style={{ borderRadius: "100px" }}
                
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/home" style={{ color: "black" }}>
                    HOME
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="http://localhost:3000/About" id="navbarDropdownAbout" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "black" }}>
                    ABOUT US
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownAbout">
                    <li><Link className="dropdown-item" to="/Mandatary">MANDATARY PUBLIC DISCLOSURES</Link></li>
                    <li><Link className="dropdown-item" to="/Motto">OUR MOTTO</Link></li>
                    <li><Link className="dropdown-item" to="/Management">Management</Link></li>
                    <li><Link className="dropdown-item" to="/Facilities">Facilities</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="http://localhost:3000/news" id="navbarDropdownNews" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "black" }}>
                    SCHOOL NEWS
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownNews">
                    <li><Link className="dropdown-item" to="/event">Events</Link></li>
                    <li><Link className="dropdown-item" to="/announcement">Announcements</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gallery" style={{ color: "black" }} >
                    GALLERY
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="http://localhost:3000/download" id="navbarDropdownDownload" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "black" }}>
                    DOWNLOAD
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownDownload">
                    <li><Link className="dropdown-item" to="/Tform">Transfer Form</Link></li>
                    <li><Link className="dropdown-item" to="/Document">Checklist Document’s</Link></li>
                    <li><Link className="dropdown-item" to="/Fee">Fees</Link></li>

                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact" style={{ color: "black" }} >
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
