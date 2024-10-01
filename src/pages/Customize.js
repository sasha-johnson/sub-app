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
    const sandwich = { bread, meat, veggies, sauces, extras };
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
        <label>
          <input
            type="checkbox"
            value="Ham"
            onChange={(e) => handleCheckboxChange(e, setMeat, meat)}
          /> Ham
        </label>
        <label>
          <input
            type="checkbox"
            value="Turkey"
            onChange={(e) => handleCheckboxChange(e, setMeat, meat)}
          /> Turkey
        </label>
        <label>
          <input
            type="checkbox"
            value="Roast Beef"
            onChange={(e) => handleCheckboxChange(e, setMeat, meat)}
          /> Roast Beef
        </label>
        <label>
          <input
            type="checkbox"
            value="Chicken"
            onChange={(e) => handleCheckboxChange(e, setMeat, meat)}
          /> Chicken
        </label>
      </div>

      <div className="section">
        <h3>Select Your Veggies</h3>
        <label>
          <input
            type="checkbox"
            value="Lettuce"
            onChange={(e) => handleCheckboxChange(e, setVeggies, veggies)}
          /> Lettuce
        </label>
        <label>
          <input
            type="checkbox"
            value="Tomato"
            onChange={(e) => handleCheckboxChange(e, setVeggies, veggies)}
          /> Tomato
        </label>
        <label>
          <input
            type="checkbox"
            value="Onions"
            onChange={(e) => handleCheckboxChange(e, setVeggies, veggies)}
          /> Onions
        </label>
        <label>
          <input
            type="checkbox"
            value="Cucumbers"
            onChange={(e) => handleCheckboxChange(e, setVeggies, veggies)}
          /> Cucumbers
        </label>
      </div>

      <div className="section">
        <h3>Select Your Sauces</h3>
        <label>
          <input
            type="checkbox"
            value="Mayo"
            onChange={(e) => handleCheckboxChange(e, setSauces, sauces)}
          /> Mayo
        </label>
        <label>
          <input
            type="checkbox"
            value="Mustard"
            onChange={(e) => handleCheckboxChange(e, setSauces, sauces)}
          /> Mustard
        </label>
        <label>
          <input
            type="checkbox"
            value="Chipotle Southwest"
            onChange={(e) => handleCheckboxChange(e, setSauces, sauces)}
          /> Chipotle Southwest
        </label>
        <label>
          <input
            type="checkbox"
            value="BBQ Sauce"
            onChange={(e) => handleCheckboxChange(e, setSauces, sauces)}
          /> BBQ Sauce
        </label>
      </div>

      <div className="section">
        <h3>Select Your Extras</h3>
        <label>
          <input
            type="checkbox"
            value="Cheese"
            onChange={(e) => handleCheckboxChange(e, setExtras, extras)}
          /> Cheese
        </label>
        <label>
          <input
            type="checkbox"
            value="Bacon"
            onChange={(e) => handleCheckboxChange(e, setExtras, extras)}
          /> Bacon
        </label>
        <label>
          <input
            type="checkbox"
            value="Avocado"
            onChange={(e) => handleCheckboxChange(e, setExtras, extras)}
          /> Avocado
        </label>
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