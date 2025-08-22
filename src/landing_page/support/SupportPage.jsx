import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import QuickLinks from './QuickLinks';
import RaiseTickets from './RaiseTicket';
import Footer from '../Footer';
import './supportpage.css';

const SupportPage = () => {
  return (
    <div>
      <Navbar />
            <Hero />
      <div className="container my-5">
        <div className="row">
          {/* Left Side: Accordions */}
          <div className="col-md-8">
            <RaiseTickets />
          </div>
          {/* Right Side: Quick Links */}
          <div className="col-md-4">
            <QuickLinks />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SupportPage;
