import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
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
                }
                else {
                    header.classList.remove("sticky");
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (_jsxs("header", { children: [_jsx("div", { className: "top-header", children: _jsxs("p", { children: ["Enjoy Free Shipping ", _jsx("span", { children: "On All Orders" })] }) }), _jsx("div", { className: "bottom-header", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "row justify-content-between align-items-center", children: [_jsx("div", { className: "col-md-2", children: _jsx("div", { className: "logo-container", children: _jsx(NavLink, { to: "/", children: _jsx("img", { src: logo, alt: "Logo" }) }) }) }), _jsxs("button", { className: `mobile-header-btn d-md-none ${isMobileMenuOpen ? "clicked" : ""}`, onClick: toggleMobileMenu, "aria-label": "Toggle navigation", children: [_jsx("span", {}), _jsx("span", {}), _jsx("span", {})] }), _jsxs("div", { className: `mobile-holder-container ${isMobileMenuOpen ? "show" : ""}`, children: [_jsx("div", { className: "col-md-8", children: _jsx("nav", { className: "nav-links", children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(NavLink, { to: "/", className: ({ isActive }) => (isActive ? "active" : ""), children: "Home" }) }), _jsx("li", { children: _jsx(NavLink, { to: "/products", className: ({ isActive }) => (isActive ? "active" : ""), children: "Shop" }) }), _jsx("li", { children: _jsx(NavLink, { to: "/ContactUs", className: ({ isActive }) => (isActive ? "active" : ""), children: "Contact" }) }), _jsx("li", { children: _jsx(NavLink, { to: "/TermsConditions", className: ({ isActive }) => (isActive ? "active" : ""), children: "Terms & Conditions" }) }), _jsx("li", { children: _jsx(NavLink, { to: "/faqs", className: ({ isActive }) => (isActive ? "active" : ""), children: "FAQs" }) }), _jsx("li", { className: "d-md-none", children: _jsx("div", { className: "cart-btn-content", children: _jsxs("button", { type: "button", className: "cart-btn", onClick: toggleSidebar, children: [_jsx("img", { src: CartImage, alt: "Cart" }), "Cart"] }) }) })] }) }) }), _jsx("div", { className: "col-md-2 d-none d-md-block", children: _jsx("div", { className: "cart-btn-content", children: _jsxs("button", { type: "button", className: "cart-btn", onClick: toggleSidebar, children: [_jsx("img", { src: CartImage, alt: "Cart" }), "Cart"] }) }) })] })] }) }) })] }));
}
export default Header;
