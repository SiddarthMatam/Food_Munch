import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-hero">
        <h1>Welcome to Food Munch 🍽️</h1>
        <p>Delicious food delivered to your doorstep</p>

        <div className="home-buttons">
          <Link to="/menu">
            <button className="home-btn">Explore Menu</button>
          </Link>

          <Link to="/about">
            <button className="home-btn secondary">About Us</button>
          </Link>
        </div>
      </div>

      <div className="home-features">
        <div className="feature-card">
          <h3>🍔 Tasty Food</h3>
          <p>Made with love and fresh ingredients</p>
        </div>

        <div className="feature-card">
          <h3>⚡ Fast Delivery</h3>
          <p>Hot food delivered in minutes</p>
        </div>

        <div className="feature-card">
          <h3>💳 Easy Payment</h3>
          <p>Multiple secure payment options</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
