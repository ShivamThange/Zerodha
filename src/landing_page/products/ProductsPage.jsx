import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import LeftImage from './LeftImage';
import RightImage from './RightImage';
import Universe from './Universe';
import Footer from '../Footer';

const ProductsPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <LeftImage />
      <RightImage />
      <LeftImage />
      <RightImage />
      <LeftImage />
      <Universe />
      <Footer />
    </div>
  );
};

export default ProductsPage;
