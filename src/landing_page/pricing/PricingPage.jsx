import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import BrokerageTable from './BrokerageTable';
import OpeningCharges from './OpeningCharges';
import Amc from './Amc';
import OptionalVAS from './OptionalVAS';
import Explaination from './Explaination';
import Footer from '../Footer';

const PricingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BrokerageTable />
      <OpeningCharges />
      <Amc />
      <OptionalVAS />
      <Explaination />
      <Footer />
    </div>
  );
};

export default PricingPage;
