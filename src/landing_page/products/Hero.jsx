import React from 'react';
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";


const Hero = () => {
  return (
    <section className="text-center container border-bottom pt-5 mt-5">
      <h1>Zerodha Products</h1>
      <p className="landing-subheading">
        Sleek, modern, and intuitive trading platforms
      </p>
      <p className="product-links">
        Check out our <a href="/investments">investment offerings <ArrowForwardOutlinedIcon /></a>
      </p>
    </section>
  );
};

export default Hero;
