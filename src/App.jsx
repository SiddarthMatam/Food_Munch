import { Routes, Route } from "react-router-dom";
import {useState} from "react"
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing){
        return prev.map(i => 
          i.id === item.id ? {...i, qty:i.qty+1} : i
        );
      }
      return [...prev, {...item, qty:1}];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const increaseQty = (id) => {
    setCartItems(prev =>
      prev.map(i =>
        i.id === id ? { ...i, qty: i.qty + 1 } : i
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(prev =>
      prev.map(i =>
        i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i
      )
    );
  };


  return (
    <>
      <Navbar cartItems={cartItems}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu addToCart={addToCart}/>}/>
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} increaseQty={increaseQty} decreaseQty={decreaseQty}/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
