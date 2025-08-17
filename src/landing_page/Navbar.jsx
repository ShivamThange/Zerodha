import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="nav-container row">
          <div className="logo-container">
            <a href="/">
              <img src="static/images/logo.svg" alt="Zerodha" className="logo"/>
            </a>
          </div>
          <div className="nav-link-container">
            <div className="nav-link p-3">
              <a href="/signup">Signup</a>
            </div>
            <div className="nav-link p-3">
              <a href="/about">About</a>
            </div>
            <div className="nav-link p-3">
              <a href="/products">Products</a>
            </div>
            <div className="nav-link p-3">
              <a href="/pricing">Pricing</a>
            </div>
            <div className="nav-link p-3">
              <a href="/support">Support</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
