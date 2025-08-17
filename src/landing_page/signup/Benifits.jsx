import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const Benifits = () => {
  return (
    <>
      <div className="benefits">
        <div className="container">
          <div className="row">
            <div className="col-6 p-0 text-center">
              <img
                src="/static/images/acop-benefits.svg"
                alt="Benifits of Zerodha"
                className="benifits-image"
              />
              <div className="row p-0 m-0">
                <h3>Benefits of opening a Zerodha demat account</h3>
              </div>
            </div>

            <div className="col-1 p-0"></div>

            <div className="col-5 p-0">
              <div className="our-beni ms-1 text-justified">
                <h3>Unbeatable pricing</h3>
                <p>
                  Zero charges for equity & mutual fund investments. Flat ₹20
                  fees for intraday and F&O trades.
                </p>
              </div>

              <div className="our-beni ms-1 text-justified">
                <h3>Best investing experience</h3>
                <p>
                  Simple and intuitive trading platform with an
                  easy-to-understand user interface.
                </p>
              </div>

              <div className="our-beni ms-1 text-justified">
                <h3>No spam or gimmicks</h3>
                <p>
                  Committed to transparency — no gimmicks, spam, "gamification",
                  or intrusive push notifications.
                </p>
              </div>

              <div className="our-beni ms-1 text-justified">
                <h3>The Zerodha universe</h3>
                <p>
                  More than just an app — gain free access to the entire
                  ecosystem of our partner products.
                </p>
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

export default Benifits;
