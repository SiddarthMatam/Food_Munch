import React from 'react'
import "./Cart.css"

function Cart({ cartItems, removeFromCart, increaseQty, decreaseQty }) {
  let total = 0
  for (let item of cartItems) {
    total = total + item.price * item.qty
  }

  if (cartItems.length === 0) {
    return <h2 className="cart-empty">Your Cart is Empty 🛒</h2>
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>
          <div>
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          <button classNam="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  )
}

export default Cart
