import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"

function Navbar({cartItems}) {
  return (
    <>
    <div className="navbar">
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/menu"><li>Menu</li></Link>
            <Link to="/cart"><li>Cart({cartItems.length})</li></Link>
        </ul>
    </div>
    </>
  )
}

export default Navbar