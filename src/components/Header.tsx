import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import "../assets/css/header.css";
import logo from "../assets/images/logo.png";
import CartImage from "../assets/images/cart-pc.png";

function Header() {
  const { toggleSidebar } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".bottom-header");
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className="top-header">
        <p>
          Enjoy Free Shipping <span>On All Orders</span>
        </p>
      </div>

      <div className="bottom-header">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-2">
              <div className="logo-container">
                <NavLink to="/">
                  <img src={logo} alt="Logo" />
                </NavLink>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`mobile-header-btn d-md-none ${isMobileMenuOpen ? "clicked" : ""}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Navigation Menu */}
            <div className={`mobile-holder-container ${isMobileMenuOpen ? "show" : ""}`}>
              <div className="col-md-8">
                <nav className="nav-links">
                  <ul>
                    <li>
                      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
                        Shop
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/ContactUs" className={({ isActive }) => (isActive ? "active" : "")}>
                        Contact
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/TermsConditions" className={({ isActive }) => (isActive ? "active" : "")}>
                        Terms & Conditions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/faqs" className={({ isActive }) => (isActive ? "active" : "")}>
                        FAQs
                      </NavLink>
                    </li>
                    <li className="d-md-none">
                  <div className="cart-btn-content">
                      <button type="button" className="cart-btn" onClick={toggleSidebar}>
                        <img src={CartImage} alt="Cart" />
                        Cart
                      </button>
                  </div>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-2 d-none d-md-block">
                <div className="cart-btn-content">
                  <button type="button" className="cart-btn" onClick={toggleSidebar}>
                    <img src={CartImage} alt="Cart" />
                    Cart
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
