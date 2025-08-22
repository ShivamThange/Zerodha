import React from "react";

const Types = () => {
  return (
    <>
      <div className="types">
        <div className="container">
          <h1>Explore diffrent account types</h1>

          <div className="types-group row">
            <div className="type-container col-4 ">
              <div className="type">
                <img src="static/images/acop-individual.svg" alt="" />
              </div>
              <div className="type-text">
                <h2>Individual Account</h2>
                <p>Invest in equity, mutual funds and derivatives</p>
              </div>
            </div>
            <div className="type-container col-4 ">
              <div className="type">
                <img src="static/images/acop-huf.svg" alt="" />
              </div>
              <div className="type-text">
                <h2>HUF Account</h2>
                <p>Make tax-efficient investments for your family</p>
              </div>
            </div>
            <div className="type-container col-4">
              <div className="type">
                <img src="static/images/acop-nri.svg" alt="" />
              </div>
              <div className="type-text">
                <h2>NRI Account</h2>
                <p>Invest in equity, mutual funds, debentures, and more</p>
              </div>
            </div>
            <div className="type-container col-4">
              <div className="type">
                <img src="static/images/acop-minor.svg" alt="" />
              </div>
              <div className="type-text">
                <h2>Minor Account</h2>
                <p>
                  Teach your little ones about money & invest for their future
                  with them
                </p>
              </div>
            </div>
            <div className="type-container col-4">
              <div className="type">
                <img src="static/images/acop-corporate.svg" alt="" />
              </div>
              <div className="type-text">
                <h2>Corporate / LLP/ Partnership</h2>
                <p>Manage your business surplus and investments easily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Types;
