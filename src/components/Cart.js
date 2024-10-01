import React from 'react';
import '../styles/Cart.css';

function Cart({ cartItems, setCartItems }) {
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
              <p>
                Quantity: 
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                />
              </p>
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
