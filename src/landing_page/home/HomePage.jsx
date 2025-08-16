import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";
import "./homepage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </div>
  );
};

export default HomePage;
