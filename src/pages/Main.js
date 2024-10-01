import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main.css';

function Main() {
  return (
    <main className="container">
      <section className="hero">
        <img src="hero-image.jpg" alt="Hero" className="hero-image" />
        <div className="hero-content">
          <h1>Welcome to Subway</h1>
          <p>Find the best promotions just for you.</p>
          <Link to="/customize">
            <button className="cta-button">Shop Now</button>
          </Link>
        </div>
      </section>

      <h1>Our Deals</h1>
      <section className="promotions">
        <div className="promotion-box">
          <img src="promo1.jpg" alt="Promo 1" />
          <h3>Deal 1</h3>
          <p>Details of Deal 1</p>
        </div>
        <div className="promotion-box">
          <img src="promo2.jpg" alt="Promo 2" />
          <h3>Deal 2</h3>
          <p>Details of Deal 2</p>
        </div>
      </section>
    </main>
  );
}

export default Main;
