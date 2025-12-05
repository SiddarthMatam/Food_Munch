import FoodCart from '../components/FoodCart'
import cart from '../assets/cart-logo.png'
import "./Menu.css"


function Menu({addToCart}) {
  const foodItems = [
    {
      id: 1,
      type: "nonveg",
      name: "Hyderabadi Chicken Biryani",
      price: "220",
      image: "https://www.shutterstock.com/image-photo/hyderabadi-chicken-biryani-aromatic-flavorful-260nw-2497040151.jpg",
      desc: "Aromatic basmati rice cooked with tender chicken and rich spices."
    },
    {
      id: 2,
      type: "veg",
      name: "Paneer Butter Masala",
      price: "200",
      image: "https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg",
      desc: "Soft paneer cubes cooked in creamy tomato gravy."
    },
    {
      id: 3,
      type: "veg",
      name: "Hakka Noodles",
      price: "180",
      image: "https://www.ohmyveg.co.uk/wp-content/webp-express/webp-images/uploads/2024/08/hakka-noodles-2-2-900x1200.jpg.webp",
      desc: "Stir-fried noodles tossed with fresh vegetables and sauces."
    },
    {
      id: 4,
      type: "nonveg",
      name: "Chicken Manchurian",
      price: "210",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUta151HE9G0OQEN-Lp6-JZm57FoYZZuJ-HA&s",
      desc: "Crispy chicken tossed in spicy Indo-chinese sauce."
    }
  ]
  
  return (
    <div className="menu-page">
      <h1 className="menu-title">Our Menu</h1>
      <div className="menu-grid">
        {foodItems.map(item => (
            <div className="menu-card">
          <FoodCart
            key={item.id}
            id={item.id}
            type={item.type}
            name={item.name}
            price={item.price}
            image={item.image}
            cartImage={cart}
            addToCart={addToCart}
            desc={item.desc}
          />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu
