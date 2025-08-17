import React from "react";

const HeroSignUp = () => {
  return (
    <>
      <div className="container mt-5 pb-5 mb-5">
        <h1 className="landing-heading text-center">
          Open a free demat and trading account online
        </h1>
        <p className="landing-subheading text-center">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      <div className="container">
        <div className="row mx-auto">
          <div className="col-5 m-0 p-0">
            <img src="static/images/account_open.svg" alt="" />
          </div>
          <div className="col-2"></div>
          <div className="phone-number col-5 mt-2">
            <form>
              <div className="input-group input-group-lg">
                <span class="input-group-text" id="inputGroup-sizing-lg">
                  <img
                    src="static/images/india-flag.svg"
                    className="flag"
                  ></img>
                  +91
                </span>
                <input
                  type="tel"
                  autoFocus
                  min={1000000000}
                  max={9999999999}
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  placeholder="Enter your mobile number"
                ></input>
              </div>
              <br></br>
              <button type="button" class="btn btn-primary btn-lg">
                Get OTP
              </button>
              <p>
                By proceeding, you agree to the Zerodha terms & privacy policy
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSignUp;
