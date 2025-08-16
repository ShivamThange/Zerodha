import React from "react";

const Pricing = () => {
  return (
    <>
      <section className="pricing">
        <div className="container">
          <div className="row m-5">
            <div className="col-5 text-justified">
              <h2>Unbeatable pricing</h2>
              <p>
                We pioneered the concept of discount broking and price
                transparency in India. Flat fees and no hidden charges.
              </p>
            </div>
            <div className="col-1"></div>

            <div className="col-6">
              <div className="pricing-container row m-0 p-0">
                <div className="pricing-box col-4 m-0 p-0">
                  <img src="/static/images/pricing-eq.svg" alt="" />
                  <p>
                    Free account
                    <br /> opening
                  </p>
                </div>

                <div className="pricing-box col-4 m-0 p-0">
                  <img src="/static/images/pricing-eq.svg" alt="" />
                  <p>
                    Free equity delivery
                    <br /> and direct mutual funds
                  </p>
                </div>

                <div className="pricing-box col-4 m-0 p-0">
                  <img src="/static/images/other-trades.svg" alt="" />
                  <p>
                    Intraday <br></br>and F&amp;O
                  </p>
                </div>
              </div>
            </div>
            <p className="product-links">
              <a href="/charges/">
                See pricing <i className="icon-arrow-right"></i>
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
