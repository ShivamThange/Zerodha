import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import "./homepage.css";
const Stats = () => {
  return (
    <>
      <div className="stats">
        <div className="container">
          <div className="row">
            <div className="col-4 p-0">
              <h2 className="heading">Trust with confidence</h2>

              <div className="why-us ms-1 text-justified">
                <h3>Customer-first always</h3>
                <p>
                  That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
                  crores of equity investments, making us India’s largest
                  broker; contributing to 15% of daily retail exchange volumes
                  in India.
                </p>
              </div>

              <div className="why-us ms-1 text-justified">
                <h3>No spam or gimmicks</h3>
                <p>
                  No gimmicks, spam, "gamification", or annoying push
                  notifications. High quality apps that you use at your pace,
                  the way you like. Our philosophies.
                </p>
              </div>

              <div className="why-us ms-1 text-justified">
                <h3>The Zerodha universe</h3>
                <p>
                  Not just an app, but a whole ecosystem. Our investments in 30+
                  fintech startups offer you tailored services specific to your
                  needs.
                </p>
              </div>

              <div className="why-us ms-1 text-justified">
                <h3>Do better with money</h3>
                <p>
                  With initiatives like Nudge and Kill Switch, we don't just
                  facilitate transactions, but actively help you do better with
                  your money.
                </p>
              </div>
            </div>
            <div className="col-1 p-0"></div>
            <div className="col-7 p-0">
              <img
                src="/static/images/ecosystem.png"
                alt="The Zerodha Universe"
                className="ecosystem-image"
              />
              <div className="row p-0 m-0">
                <div className="product-links col-5 text-right">
                  <a href="#">
                    Explore our products&nbsp;&nbsp;
                    <ArrowForwardOutlinedIcon />
                  </a>
                </div>
                <div className="product-links col-4 text-center">
                  <a href="#">
                    Try Kite demo&nbsp;&nbsp;
                    <ArrowForwardOutlinedIcon />
                  </a>
                </div>
              </div>
            </div>
            <img
              src="media/images/press-logos.png"
              alt=""
              className="press-logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
