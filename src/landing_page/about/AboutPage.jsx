import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import Leader from './Leader';
import Team from './Team';
import Footer from '../Footer';
import './aboutpage.css';

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Leader />
      <Team />
      <Footer />
    </div>
  );
};

export default AboutPage;
