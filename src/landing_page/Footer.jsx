import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <div className="row container links">
            <div className="col">
              <img
                src="static/images/logo.svg"
                alt="Zerodha"
                className="logo"
              />
              <p class="copyright text-grey">
                © 2010 - 2025, Zerodha Broking Ltd.
              </p>
              <p class="copyright text-grey">All rights reserved.</p>
            </div>
            <div className="col">
              <h5>Account</h5>
              <p className="mt-2">Open demat account</p>
              <p>Minor demat account</p>
              <p>NRI demat account</p>
              <p>Commodity</p>
              <p>Dematerialisation</p>
              <p>Fund transfer</p>
              <p>MTF</p>
              <p>Referral program</p>
            </div>
            <div className="col">
              <h5>Support</h5>
              <p className="mt-2">Contact us</p>
              <p>Support portal</p>
              <p>How to file a complaint?</p>
              <p>Status of your complaints</p>
              <p>Bulletin</p>
              <p>Circular</p>
              <p>Z-Connect blog</p>
              <p>Downloads</p>
            </div>
            <div className="col">
              <h5>Company</h5>
              <p className="mt-2">About</p>
              <p>Philosophy</p>
              <p>Press & media</p>
              <p>Careers</p>
              <p>Zerodha Cares (CSR)</p>
              <p>Zerodha.tech</p>
              <p>Open source</p>
            </div>
            <div className="col">
              <h5>Quick Links</h5>
              <p className="mt-2">Upcoming IPOs</p>
              <p>Brokerage charges</p>
              <p>Market holidays</p>
              <p>Economic calendar</p>
              <p>Calculators</p>
              <p>Markets</p>
              <p>Sectors</p>
            </div>
          </div>

          <div className="note container">
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt.
              Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered
              Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars
              Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            </p>
            <p>
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to
              complaints@zerodha.com, for DP related to dp@zerodha.com. Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>
            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>
            <p>
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </p>
            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>
            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p>
              India's largest broker based on networth as per NSE. NSE broker
              factsheet
            </p>
            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please create a ticket here.
            </p>
          </div>
        </div>
        <div className="foot-links">
          <a href="#">NSE</a>
          <a href="#">BSE</a>
          <a href="#">MCX</a>
          <a href="#">Terms & conditions</a>
          <a href="#">Policies & procedures</a>
          <a href="#">Privacy policy Disclosure</a>
          <a href="#">For investor's attention</a>
          <a href="#">Investor charter</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
