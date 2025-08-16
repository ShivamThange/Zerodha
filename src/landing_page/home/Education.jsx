import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const Education = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row m-0 p-0">
            <div className="col-5 m-0 p-0 text-center">
              <a href="https://zerodha.com/varsity/">
                <img
                  className="img-margin"
                  src="/static/images/index-education.svg"
                />
              </a>
            </div>
            <div className="col-1"></div>
            <div className="col-6 m-0 p-0">
              <h2>Free and open market education</h2>
              <p>
                Varsity, the largest online stock market education book in the
                world covering everything from the basics to advanced trading.
              </p>

              <div className="product-links">
                <a href="https://zerodha.com/varsity">
                  Varsity <ArrowForwardOutlinedIcon />
                </a>
              </div>
              <p className="mt-5">
                TradingQ&amp;A, the most active trading and investment community
                in India for all your market related queries.
              </p>

              <div className="product-links">
                <a href="https://tradingqna.com">
                  TradingQ&amp;A <ArrowForwardOutlinedIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
