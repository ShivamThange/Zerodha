import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";
import Footer from "../Footer";
import "./productspage.css";

const ProductsPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <LeftImage
        img="static/images/products-kite.png"
        title="Kite"
        des="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        applelink="https://apps.apple.com/in/app/kite-zerodha/id1449453802"
        playlink="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        btn1link="https://kite-demo.zerodha.com/"
        btn1title="Try Demo"
        btn2link="https://zerodha.com/products/kite"
        btn2title="Learn More"
      />
      <RightImage 
        img="static/images/products-console.png"
        title="Console"
        des="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        btn1link="#"
        btn1title="Learn more"
      />
      <LeftImage
        img="static/images/products-coin.png"
        title="Coin"
        des="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        applelink="https://apps.apple.com/in/app/coin-by-zerodha/id1392892554"
        playlink="https://play.google.com/store/apps/details?id=com.zerodha.coin"
        btn1link="https://coin.zerodha.com"
        btn1title="Coin"
      />
      <RightImage
        img="static/images/landing.svg"
        title="Kite Connect API"
        des="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        btn1link="https://zerodha.com/products/api/"
        btn1title="Kite Connect"
      />
      <LeftImage
        img="static/images/varsity-products.png"
        title="Varsity mobile"
        des="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        applelink="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"
        playlink="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
      />
      <Universe />
      <Footer />
    </div>
  );
};

export default ProductsPage;
