import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Hero = () => {
  return (
    <>

      <div className="hero">
        <div className="container">
          <div className="row text-center p-5">
            <img
              src="./static/images/landing.png"
              className="mb-5 landing-image"
              alt="Online stock brokerage platform for trading and investing in stocks, futures, options, commodities, currency, ETFs, mutual funds, and bonds."
            />
            <h1 className="landing-heading text-center">
              Invest in everything
            </h1>
            <p className="landing-subheading text-center">
              Online platform to invest in stocks, derivatives, mutual funds,
              ETFs, bonds, and more.
            </p>
            <a href="/open-account" class="button">
              Sign up for free
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
