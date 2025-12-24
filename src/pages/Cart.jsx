import "./Cart.css"

function Cart({ cartItems, removeFromCart, increaseQty, decreaseQty }) {
  let total = 0
  // for (let item of cartItems) {
  //   total = total + item.price * item.qty
  // }

  for (const i of cartItems){
    total = total + i.price*i.qty
  }

  if (cartItems.length === 0) {
    return (<h2 className="cart-empty">Your Cart is Empty 🛒</h2>)
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>
          <div>
            <button className="btn desc-btn" disabled={item.qty === 1} onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.qty}</span>
            <button className="btn incr-btn" onClick={() => increaseQty(item.id)}>+</button>
          </div>

          <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  )
}

export default Cart















// export default function Cart({ cartItems, updateQuantity, removeFromCart }) {
//   const total = cartItems.reduce((sum, item) => {
//     const price = parseInt(item.price.replace('rs', ''))
//     return sum + (price * item.quantity)
//   }, 0)