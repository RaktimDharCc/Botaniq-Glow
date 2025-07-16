import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import "../assets/css/footer.css";
import Footerlogo from "../assets/images/footer-logo.png";
import FaceBookIcon from "../assets/images/facebook.svg";
import WhatsappIcon from "../assets/images/whatsapp.svg";
import InstagramIcon from "../assets/images/instagram.svg";
import FooterPc1 from "../assets/images/footer-pc1.png";
import FooterPc2 from "../assets/images/footer-pc2.png";
import FooterPc3 from "../assets/images/footer-pc3.png";
import FooterPc4 from "../assets/images/footer-pc4.png";
const ImageSource = "./src/assets/images";
function Footer() {
    const currentYear = new Date().getFullYear();
    return (_jsx(_Fragment, { children: _jsxs("footer", { children: [_jsx("div", { className: "top-footer", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "top-footer-content-container", children: [_jsxs("div", { className: "top-footer-content", children: [_jsx("img", { src: FooterPc1, alt: "" }), _jsx("b", { children: "Free Shipping" }), _jsx("p", { children: "On all orders above \u20B9999 \u2014 delivered with care, right to your doorstep." })] }), _jsxs("div", { className: "top-footer-content", children: [_jsx("img", { src: FooterPc2, alt: "" }), _jsx("b", { children: "Returns" }), _jsx("p", { children: "Not in love? Return within 7 days \u2014 no questions asked." })] }), _jsxs("div", { className: "top-footer-content", children: [_jsx("img", { src: FooterPc3, alt: "" }), _jsx("b", { children: "Online Support" }), _jsx("p", { children: "Our team is here to help \u2014 reach out anytime, we're just a message away." })] }), _jsxs("div", { className: "top-footer-content", children: [_jsx("img", { src: FooterPc4, alt: "" }), _jsx("b", { children: "Flexible Payment" }), _jsx("p", { children: "Pay your way \u2014 secure payments via cards, UPI & easy EMI options." })] })] }) }) }), _jsx("div", { className: "bottom-footer", children: _jsxs("div", { className: "container", children: [_jsx("div", { className: "footer-logo", children: _jsx("img", { src: Footerlogo, alt: "" }) }), _jsx("div", { className: "footer-nav-links", children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, { to: "/AboutUs", children: "About Us" }) }), _jsx("li", { children: _jsx(Link, { to: "/ReturnPolicy", children: "Returns Policy" }) }), _jsx("li", { children: _jsx(Link, { to: "/PrivacyPolicy", children: "Privacy Policy" }) }), _jsx("li", { children: _jsx(Link, { to: "/ContactUs", children: "Contact Us" }) }), _jsx("li", { children: _jsx(Link, { to: "/TermsConditions", children: "Terms & Conditions" }) })] }) }), _jsxs("div", { className: "footer-social-media", children: [_jsx("a", { href: "javascript:void(0);", title: "_blank", children: _jsx("img", { src: FaceBookIcon, alt: "Facebook" }) }), _jsx("a", { href: "javascript:void(0);", title: "_blank", children: _jsx("img", { src: WhatsappIcon, alt: "Whatsapp" }) }), _jsx("a", { href: "javascript:void(0);", title: "_blank", children: _jsx("img", { src: InstagramIcon, alt: "Instagram" }) })] }), _jsx("div", { className: "footer-description", children: _jsxs("p", { children: ["\u00A9 ", currentYear, " Botaniq Glow. All rights reserved."] }) })] }) })] }) }));
}
export default Footer;
