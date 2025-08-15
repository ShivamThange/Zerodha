import React from 'react';
import Navbar from '../Navbar';
import HeroSignUp from './HeroSignUp';
import Benifits from './Benifits';
import Steps from './Steps';
import Types from './Types';
import Investments from './Investments';
import Faq from './Faq';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';

const SignupPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSignUp />
      <Steps />
      <Benifits />
      <Types />
      <Faq />
      <OpenAccount />
      <Footer />
    </div>
  );
};

export default SignupPage;
