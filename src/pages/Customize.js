import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartProvider';
import '../styles/Customize.css';



function Customize() {
  const [bread, setBread] = useState('');
  const [meat, setMeat] = useState([]);
  const [veggies, setVeggies] = useState([]);
  const [sauces, setSauces] = useState([]);
  const [extras, setExtras] = useState([]);

  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleCheckboxChange = (e, setState, state) => {
    const value = e.target.value;
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  const handleAddToCart = () => {
    const sandwich = { bread, meat, veggies, sauces, extras, id: Date.now(), price: 5.99, quantity: 1 }; // Add id and price
    addToCart(sandwich);
    navigate('/');
  };

  return (
    <div className="customize-page">
      <h2>Customize Your Sandwich</h2>
      <div className="section">
        <h3>Select Your Bread</h3>
        <select value={bread} onChange={(e) => setBread(e.target.value)}>
          <option value="">-- Select Bread --</option>
          <option value="White Bread">White Bread</option>
          <option value="Wheat Bread">Wheat Bread</option>
          <option value="Italian Bread">Italian Bread</option>
          <option value="Flatbread">Flatbread</option>
        </select>
      </div>

      <div className="section">
        <h3>Select Your Meat</h3>
        {['Ham', 'Turkey', 'Roast Beef', 'Chicken'].map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              onChange={(e) => handleCheckboxChange(e, setMeat, meat)}
            /> {option}
          </label>
        ))}
      </div>

      <div className="section">
        <h3>Select Your Veggies</h3>
        {['Lettuce', 'Tomato', 'Onions', 'Cucumbers'].map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              onChange={(e) => handleCheckboxChange(e, setVeggies, veggies)}
            /> {option}
          </label>
        ))}
      </div>

      <div className="section">
        <h3>Select Your Sauces</h3>
        {['Mayo', 'Mustard', 'Chipotle Southwest', 'BBQ Sauce'].map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              onChange={(e) => handleCheckboxChange(e, setSauces, sauces)}
            /> {option}
          </label>
        ))}
      </div>

      <div className="section">
        <h3>Select Your Extras</h3>
        {['Cheese', 'Bacon', 'Avocado'].map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              onChange={(e) => handleCheckboxChange(e, setExtras, extras)}
            /> {option}
          </label>
        ))}
      </div>

      <div className="summary">
        <h3>Your Sandwich</h3>
        <p><strong>Bread:</strong> {bread || "None selected"}</p>
        <p><strong>Meat:</strong> {meat.length > 0 ? meat.join(', ') : "None selected"}</p>
        <p><strong>Veggies:</strong> {veggies.length > 0 ? veggies.join(', ') : "None selected"}</p>
        <p><strong>Sauces:</strong> {sauces.length > 0 ? sauces.join(', ') : "None selected"}</p>
        <p><strong>Extras:</strong> {extras.length > 0 ? extras.join(', ') : "None selected"}</p>
      </div>

      <button onClick={handleAddToCart} className="add-to-cart-button">
        Add to Cart
      </button>
    </div>
  );
}

export default Customize;
