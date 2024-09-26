import React from 'react';
import './Main.css';

function Main() {
  return (
    <main className="container">
      <h1>Main Content</h1>
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
