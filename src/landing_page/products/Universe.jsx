import React from "react";

const Universe = () => {
  return (
    <>
      <section className="text-center container border-bottom pt-5 mt-5">
        <h1>The Zerodha Universe</h1>
        <p className="landing-subheading">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="universe-group row">
          <div className="universe-container col-4 ">
            
              <img src="static/images/zerodhafundhouse.png" alt="" className="universe-logo"/>
            
            <div className="universe-text">
              <p>
                Our asset management venture
                <br />
                that is creating simple and transparent index
                <br />
                funds to help you save for your goals.
              </p>
            </div>
          </div>
          <div className="universe-container col-4 ">
            
              <img src="static/images/sensibull-logo.svg" alt="" className="universe-logo"/>
            
            <div className="universe-text">
              <p>
                Options trading platform that lets you
                <br />
                create strategies, analyze positions, and examine
                <br />
                data points like open interest, FII/DII, and more.
              </p>
            </div>
          </div>
          <div className="universe-container col-4">
            
              <img src="static/images/tijori.svg" alt="" className="universe-logo"/>
            
            <div className="universe-text">
              <p>
                Investment research platform
                <br />
                that offers detailed insights on stocks,
                <br />
                sectors, supply chains, and more.
              </p>
            </div>
          </div>
          <div className="universe-container col-4">
            
              <img src="static/images/streak-logo.png" alt="" className="universe-logo"/>
            
            <div className="universe-text">
              <p>
                Systematic trading platform
                <br />
                that allows you to create and backtest
                <br />
                strategies without coding.
              </p>
            </div>
          </div>
          <div className="universe-container col-4">
            
              <img src="static/images/smallcase-logo.png" alt="" className="universe-logo"/>
            
            <div className="universe-text">
              <p>
                Thematic investing platform
                <br />
                that helps you invest in diversified
                <br />
                baskets of stocks on ETFs.
                <br />
              </p>
            </div>
          </div>
          <div className="universe-container col-4">
            <img
              src="static/images/ditto-logo.png"
              alt=""
              className="universe-logo"
            />

            <div className="universe-text">
              <p>
                Personalized advice on life
                <br />
                and health insurance. No spam
                <br />
                and no mis-selling.
                <br />
              </p>
            </div>
          </div>
        </div>

        <p className="py-5">
          <a href="https://zerodha.com/open-account/" class="button">
            Sign up for free
          </a>
        </p>
      </section>
    </>
  );
};

export default Universe;
