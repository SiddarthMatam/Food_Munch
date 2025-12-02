import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <h1>About Food Munch</h1>

      <p className="about-text">
        Food Munch is an online food ordering platform where customers can 
        explore delicious dishes and order them easily from the comfort of 
        their home.
      </p>

      <div className="about-sections">
        <div className="about-box">
          <h3>👨‍🍳 Our Mission</h3>
          <p>
            To deliver high-quality, affordable, and delicious food with maximum speed.
          </p>
        </div>

        <div className="about-box">
          <h3>🌍 Our Vision</h3>
          <p>
            To become the most loved food delivery platform in every city.
          </p>
        </div>

        <div className="about-box">
          <h3>💖 Why Choose Us?</h3>
          <p>
            We focus on quality, hygiene, fast delivery, and customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
