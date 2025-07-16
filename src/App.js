import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
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
import AboutUs from "./pages/AboutUs";
import CartSidebar from "./components/CartSidebar";
function App() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(CartSidebar, {}), _jsx("main", { className: "", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/products", element: _jsx(ProductListing, {}) }), _jsx(Route, { path: "/product/:id", element: _jsx(ProductDetails, {}) }), _jsx(Route, { path: "/collection/:category", element: _jsx(ProductListing, {}) }), _jsx(Route, { path: "/checkout", element: _jsx(Checkout, {}) }), _jsx(Route, { path: "/order-confirmation", element: _jsx(OrderConfirmation, {}) }), _jsx(Route, { path: "/ContactUs", element: _jsx(ContactUs, {}) }), _jsx(Route, { path: "/faqs", element: _jsx(FAQs, {}) }), _jsx(Route, { path: "/TermsConditions", element: _jsx(TermsConditions, {}) }), _jsx(Route, { path: "/PrivacyPolicy", element: _jsx(PrivacyPolicy, {}) }), _jsx(Route, { path: "/ReturnPolicy", element: _jsx(ReturnPolicy, {}) }), _jsx(Route, { path: "/blogs", element: _jsx(BlogList, {}) }), _jsx(Route, { path: "/blogs/:id", element: _jsx(BlogDetails, {}) }), _jsx(Route, { path: "/AboutUs", element: _jsx(AboutUs, {}) })] }) }), _jsx(Footer, {})] }));
}
export default App;
