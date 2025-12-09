import {Link} from 'react-router-dom'
import "./Navbar.css"

function Navbar({cartItems}) {
  return (
    <>
    <div className="navbar">
        <ul>
            <Link to="/" className='link'><li>Home</li></Link>
            <Link to="/about" className='link'><li>About</li></Link>
            <Link to="/menu" className='link'><li>Menu</li></Link>
            <Link to="/cart" className='link'><li>Cart({cartItems.length})</li></Link>
        </ul>
    </div>
    </>
  )
}

export default Navbar

