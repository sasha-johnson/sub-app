import React from 'react';
import '../styles/Menu.css';

function Menu({ cartItems, setCartItems }) {
  const menuItems = [
    {
      id: 1,
      name: "Italian B.M.T.",
      description: "A delicious combination of Genoa salami, pepperoni, and ham.",
      price: 7.99,
    },
    {
      id: 2,
      name: "Meatball Marinara",
      description: "Savory meatballs smothered in marinara sauce, topped with melted cheese.",
      price: 6.99,
    },
    {
      id: 3,
      name: "Veggie Delight",
      description: "A fresh selection of vegetables piled high on your choice of bread.",
      price: 5.49,
    },
    {
      id: 4,
      name: "Chicken Teriyaki",
      description: "Teriyaki-glazed chicken with crisp veggies on freshly baked bread.",
      price: 7.49,
    },
    {
      id: 5,
      name: "Tuna Salad",
      description: "Creamy tuna salad topped with crisp lettuce and tomatoes.",
      price: 6.49,
    },
  ];

  const addToCart = (item) => {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  };

  return (
    <div className="menu-container">
      <h2>Our Menu</h2>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span className="price">${item.price.toFixed(2)}</span>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;