// Cart.js
import React from 'react';
import '../styles/Cart.css';
import { useCart } from '../contexts/CartProvider';
function Cart() {
  const { cartItems, setCartItems } = useCart();
  const updateQuantity = (id, quantity) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: quantity };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const removeItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: 
                <input
                  type="number"
                  min="1"
                  value={item.quantity || 1} // Ensure default value if undefined
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                />
              </p>
              {item.bread && <p><strong>Bread:</strong> {item.bread}</p>}
              {item.meat.length > 0 && <p><strong>Meat:</strong> {item.meat.join(', ')}</p>}
              {item.veggies.length > 0 && <p><strong>Veggies:</strong> {item.veggies.join(', ')}</p>}
              {item.sauces.length > 0 && <p><strong>Sauces:</strong> {item.sauces.join(', ')}</p>}
              {item.extras.length > 0 && <p><strong>Extras:</strong> {item.extras.join(', ')}</p>}
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="cart-total">
        <h3>Total: ${calculateTotal()}</h3>
        <button className="checkout-button" disabled={cartItems.length === 0}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
