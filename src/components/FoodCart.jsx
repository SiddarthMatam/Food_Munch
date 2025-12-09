import "./FoodCart.css"

function FoodCart({id, name, price, image, desc, type, addToCart, cartImage}) {

  return (
    <div className="food-container">
      <div className="food-card">
        <img src={image} alt="food-item" className="food-image" /><br/>
        <h3 className="food-name">{name}</h3>
        <p className="food-desc">{desc}</p>
        <p>{type === "veg" ? "🟢 Veg" : "🔴 Non-Veg"}</p>
        <div className="food-footer">
          <span className="food-price">₹{price}</span>
          <div className="cart-action">
            <img onClick={() => addToCart({ id, name, price, image})} src={cartImage} alt="cart" className="cart-image" />
            <button className="cart-button" onClick={() => addToCart({ id, name, price, image })}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodCart
