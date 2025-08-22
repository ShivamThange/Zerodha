import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container pb-0">
        <h1 className="landing-heading text-center">Charges</h1>
        <p className="landing-subheading text-center text-muted">
          List of all charges and taxes
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col p-5 m-5">
            <img src="static/images/pricing-eq.svg" alt="" />
            <h1 className="landing-heading text-center fs-3">
              Free equity delivery
            </h1>
            <p className="landing-subheading text-center fs-6">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col p-5 m-5">
            <img src="static/images/other-trades.svg" alt="" />
            <h1 className="landing-heading text-center fs-3">
              Intraday and F&O trades
            </h1>
            <p className="landing-subheading text-center fs-6">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col p-5 m-5">
            <img src="static/images/pricing-eq.svg" alt="" />
            <h1 className="landing-heading text-center fs-3">Free direct MF</h1>
            <p className="landing-subheading text-center fs-6">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
