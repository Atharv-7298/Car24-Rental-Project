import React, { useState, useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import cart_icon from '../Assets/cart_icon.png';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const { CartItems } = useContext(StoreContext); // Access CartItems from StoreContext
  const [menu, setMenu] = useState("Home");

  // Check if the cart has items
  const hasCartItems = Object.values(CartItems).some((count) => count > 0);

  return (
    <>
      <nav className="navbar">
        <div className="logo">Rent-a-Car</div>

        <ul className="nav-links">
          <Link to="/" onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>
            Home
          </Link>
          <li onClick={() => setMenu("Cars")} className={menu === "Cars" ? "active" : ""}>
            <a href="#explore">Book</a>
          </li>
          <li onClick={() => setMenu("Pricing")} className={menu === "Pricing" ? "active" : ""}>
            <a href="#">Pricing</a>
          </li>
          <li onClick={() => setMenu("About")} className={menu === "About" ? "active" : ""}>
            <a href="#footer">About Us</a>
          </li>
          <li onClick={() => setMenu("Contact")} className={menu === "Contact" ? "active" : ""}>
            <a href="#footer">Contact</a>
          </li>
        </ul>

        <div className="right">
          <Link to="/Cart">
            <div className="cart">
              <img className="cart_icon" src={cart_icon} alt="Cart" />
              {hasCartItems && <span className="cart-badge"></span>} {/* Red dot for cart */}
            </div>
          </Link>
          <button onClick={() => setShowLogin(true)}>SignUp</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
