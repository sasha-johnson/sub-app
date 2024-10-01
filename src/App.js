import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from React Router
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './pages/Main';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Customize from './pages/Customize';
import Cart from './components/Cart';
import ReactDOM from 'react-dom';
import { CartProvider } from './contexts/CartProvider';

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
);


function App() {
  const [cartItems, setCartItems] = useState([]);


  return (
    <Router> {/* Wrap your app with Router */}
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/customize" element={<Customize cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
