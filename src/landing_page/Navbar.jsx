import React from "react";
import "./Navbar.css";
import { Link } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="nav-container row">
          <div className="logo-container">
            <Link href="/">
              <img src="static/images/logo.svg" alt="Zerodha" className="logo"/>
            </Link>
          </div>
          <div className="nav-link-container">
            <div className="nav-link p-3">
              <Link href="/signup">Signup</Link>
            </div>
            <div className="nav-link p-3">
              <Link href="/about">About</Link>
            </div>
            <div className="nav-link p-3">
              <Link href="/products">Products</Link>
            </div>
            <div className="nav-link p-3">
              <Link href="/pricing">Pricing</Link>
            </div>
            <div className="nav-link p-3">
              <Link href="/support">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
