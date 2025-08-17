import React, { Component } from "react";

const Options = function () {
  return (
    <>
      <div className="options">
        <div className="container text-center">
          <h1 className="landing-heading text-center">
            Investment options with Zerodha demat account
          </h1>

          <div class="investment-options-group">
            <div class="investment-options">
              <img
                src="/static/images/stocks-acop.svg"
                alt="invest in stocks"
              />
              <div class="investment-options-info">
                <h3>Stocks</h3>
                <p class="text-grey acop-steps-text">
                  Invest in all exchange-listed securities
                </p>
              </div>
            </div>
            <div class="investment-options">
              <img
                src="/static/images/mf-acop.svg"
                alt="invest in mutual funds"
              />
              <div class="investment-options-info">
                <h3>Mutual funds</h3>
                <p class="text-grey acop-steps-text">
                  Invest in commission-free direct mutual funds
                </p>
              </div>
            </div>
            <div class="investment-options">
              <img src="/static/images/ipo-acop.svg" alt="invest in IPO" />
              <div class="investment-options-info">
                <h3>IPO</h3>
                <p class="text-grey acop-steps-text">
                  Apply to the latest IPOs instantly via UPI
                </p>
              </div>
            </div>
            <div class="investment-options">
              <img
                src="/static/images/fo-acop.svg"
                alt="invest in Futures and Options"
              />
              <div class="investment-options-info">
                <h3>Futures &amp; options</h3>
                <p class="text-grey acop-steps-text">
                  Hedge and mitigate market risk through simplified F&amp;O
                  trading
                </p>
              </div>
            </div>
          </div>
          <a href="/products" class="button">
            Explore Investments
          </a>
        </div>
      </div>
    </>
  );
};

export default Options;
