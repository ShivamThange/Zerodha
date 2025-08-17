import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import all page components
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import ProductsPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SignupPage from "./landing_page/signup/SignupPage";
import SupportPage from "./landing_page/support/SupportPage";
import OpenAccount from "./landing_page/OpenAccount";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/open-account" element={<OpenAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
