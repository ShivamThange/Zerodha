import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import QuickLinks from './QuickLinks';
import RaiseTicket from './RaiseTicket';
import Footer from '../Footer';

const SupportPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <QuickLinks />
      <RaiseTicket />
      <Footer />
    </div>
  );
};

export default SupportPage;
