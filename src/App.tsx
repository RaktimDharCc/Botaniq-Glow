import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Components
import Header from "./components/Header";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";

// Pages
import HomePage from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";

import { CartProvider } from "./context/CartContext";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <CartSidebar />

      <main className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* ✅ Newly added route for collection/category listing */}
          <Route path="/collection/:category" element={<ProductListing />} />

          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/TermsConditions" element={<TermsConditions />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/ReturnPolicy" element={<ReturnPolicy />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
