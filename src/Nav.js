import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="path_to_logo" alt="Subway Logo" className="logo" />
      </div>
      <ul className="nav-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
