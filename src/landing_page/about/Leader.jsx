import React from 'react';

const Leader = () => {
  return (
    <section className="about-people py-5">
      <div className="container">
        <h2 className="text-center section-title mb-5">People</h2>
        <div className="row align-items-center ceo-container g-4">
          <div className="col-12 col-md-5 text-center">
            <img
              className="founder-image"
              src="/static/images/nithin-kamath.jpg"
              alt="Nithin Kamath, CEO"
            />
            <h5 className="mt-3 mb-1">Nithin Kamath</h5>
            <p className="text-muted m-0">Founder, CEO</p>
          </div>
          <div className="col-12 col-md-7">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p className="m-0">
              Connect on{' '}
              <a target="_blank" rel="noreferrer" href="https://nithinkamath.me/" title="Homepage">
                Homepage
              </a>{' '}
              /{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://tradingqna.com/u/nithin/summary"
                title="TradingQnA"
              >
                TradingQnA
              </a>{' '}
              /{' '}
              <a target="_blank" rel="noreferrer" href="https://twitter.com/Nithin0dha">
                Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leader;
