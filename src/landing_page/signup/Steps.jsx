import React from "react";

const Steps = () => {
  return (
    <>
      <div class="steps">
        <div class="mini-container">
          <h2 class="text-center">
            Steps to open a demat account with Zerodha
          </h2>
          <div class="row">
            <div class="col-6 text-center m-0 p-0">
              <img
                src="/static/images/steps-acop.svg"
                alt="Steps to open a demat account"
              />
            </div>
            <div class="col-6 text-left">
              <div class="acop-steps-container">
                <div class="acop-steps text-center">01</div>
                <p class="acop-steps-text">Enter the requested details</p>
              </div>
              <div class="acop-steps-container">
                <div class="acop-steps text-center">02</div>
                <p class="acop-steps-text">
                  Complete e-sign &amp; verification
                </p>
              </div>
              <div class="acop-steps-container">
                <div class="acop-steps text-center">03</div>
                <p class="acop-steps-text">Start investing!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
