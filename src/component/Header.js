import React, { useState } from "react";
import profileMine from "../assets/profileMine.jpeg"; // Add the path to your profile picture
import { FaBars } from "react-icons/fa";  // FontAwesome icon for the hamburger

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="header-content">
        <div className="profile-container">
        <img src={profileMine} alt="ProfileMine" className="profile-img" />
      <h1>MANIVEL C.M. </h1>
      <h2>Java Full Stack Developer</h2>
     
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        <FaBars />
      </div>

      {/* Navigation Menu */}
      <nav className={isMenuOpen ? "menu-bar open" : "menu-bar"}>
        <ul>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
  </header>
    
  );
}

export default Header;
