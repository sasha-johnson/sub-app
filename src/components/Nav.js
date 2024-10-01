import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="path_to_logo" alt="Subway Logo" className="logo" />
      </div>
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="cart-button">
        <Link to="/cart">
          <button>Cart</button>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
