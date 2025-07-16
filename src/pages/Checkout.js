import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import "../assets/css/checkout-page.css";
import { Link } from "react-router-dom";
const ImageSource = "../src/assets/images";
function Checkout() {
    const { cartItems, updateQuantity, removeFromCart } = useCart();
    // Toggle billing content visibility based on checkbox state
    useEffect(() => {
        const checkbox = document.getElementById("shipping-billing");
        const billingContent = document.querySelector(".billing-content-container");
        if (checkbox && billingContent) {
            const toggleBillingContent = () => {
                if (checkbox.checked) {
                    billingContent.style.display = "block";
                    void billingContent.offsetHeight; // force reflow
                    billingContent.style.maxHeight = billingContent.scrollHeight + "px";
                }
                else {
                    billingContent.style.maxHeight = "0";
                    billingContent.addEventListener("transitionend", function handler() {
                        if (!checkbox.checked) {
                            billingContent.style.display = "none";
                        }
                        billingContent.removeEventListener("transitionend", handler);
                    });
                }
            };
            checkbox.addEventListener("change", toggleBillingContent);
            // Clean up on unmount
            return () => {
                checkbox.removeEventListener("change", toggleBillingContent);
            };
        }
    }, []);
    return (_jsx(_Fragment, { children: _jsx("section", { className: "checkout-section", children: _jsx("div", { className: "container", children: _jsx("div", { className: "checkout-section-content-container", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-md-7", children: _jsxs("div", { className: "checkout-section-left-content", children: [_jsxs("p", { className: "banner-top-content", children: ["Home / Products / ", _jsx("b", { children: "Checkout" })] }), _jsxs("div", { className: "form-group checkout-form-content", children: [_jsx("div", { className: "form-hdng", children: _jsx("h2", { children: "Billing Information" }) }), _jsxs("div", { className: "row", children: [[
                                                            { id: "fname", label: "First Name" },
                                                            { id: "lname", label: "Last Name" },
                                                            { id: "email", label: "Email", type: "email" },
                                                            { id: "phone", label: "Telephone", type: "number" },
                                                        ].map(({ id, label, type = "text" }) => (_jsx("div", { className: "col-md-6", children: _jsxs("div", { className: "checkout-form", children: [_jsx("label", { htmlFor: id, children: label }), _jsx("input", { type: type, name: id, id: id, className: "form-control" })] }) }, id))), _jsx("div", { className: "col-md-12", children: _jsxs("div", { className: "checkout-form", children: [_jsx("label", { htmlFor: "inputAddress", children: "Address" }), _jsx("input", { type: "text", id: "inputAddress", className: "form-control" })] }) }), _jsx("div", { className: "col-md-6", children: _jsxs("div", { className: "checkout-form", children: [_jsx("label", { htmlFor: "inputCity", children: "City" }), _jsx("input", { type: "text", id: "inputCity", className: "form-control" })] }) }), _jsx("div", { className: "col-md-6", children: _jsxs("div", { className: "checkout-form", children: [_jsx("label", { htmlFor: "inputZip", children: "Zip Code" }), _jsx("input", { type: "number", id: "inputZip", className: "form-control" })] }) }), _jsx("div", { className: "col-md-12", children: _jsxs("div", { className: "checkout-form", children: [_jsx("label", { htmlFor: "input-country", children: "Country" }), _jsxs("select", { id: "input-country", className: "form-control", children: [_jsx("option", { value: "India", children: "India" }), _jsx("option", { value: "Sri Lanka", children: "Sri Lanka" }), _jsx("option", { value: "Australia", children: "Australia" })] })] }) })] })] }), _jsxs("div", { className: "newsletter-content", children: [_jsx("input", { type: "checkbox", id: "news-letter", className: "custom-checkbox" }), _jsx("label", { htmlFor: "news-letter", children: "Sign up for newsletter" })] }), _jsxs("div", { className: "newsletter-content mt-4", children: [_jsx("input", { type: "checkbox", id: "shipping-billing", className: "custom-checkbox" }), _jsx("label", { htmlFor: "shipping-billing", children: "Shipping Address Same As Billing Address" })] }), _jsx("div", { className: "billing-content-container mt-4", children: _jsxs("div", { className: "row", children: [[
                                                        { id: "billing-first-name", label: "Billing First Name" },
                                                        { id: "billing-last-name", label: "Billing Last Name" },
                                                        { id: "billing-address", label: "Billing Address" },
                                                        { id: "billing-city", label: "Billing City" },
                                                        { id: "billing-zip-code", label: "Billing Zip Code", type: "number" },
                                                    ].map(({ id, label, type = "text" }) => (_jsx("div", { className: `col-md-${id.includes("address") ? "12" : "6"}`, children: _jsxs("div", { className: "checkout-form", children: [_jsx("label", { htmlFor: id, children: label }), _jsx("input", { type: type, id: id, className: "form-control" })] }) }, id))), _jsx("div", { className: "col-md-12", children: _jsxs("div", { className: "checkout-form", children: [_jsx("label", { htmlFor: "billing-country", children: "Billing Country" }), _jsxs("select", { id: "billing-country", className: "form-control", children: [_jsx("option", { value: "India", children: "India" }), _jsx("option", { value: "Sri Lanka", children: "Sri Lanka" }), _jsx("option", { value: "Australia", children: "Australia" })] })] }) })] }) })] }) }), _jsx("div", { className: "col-md-5", children: _jsxs("div", { className: "checkout-section-right-content", children: [_jsx("div", { className: "form-hdng", children: _jsx("h2", { children: "Order Information" }) }), _jsx("div", { className: "order-information-content-container", children: cartItems.length === 0 ? (_jsxs("p", { children: ["You have no items added in your cart. ", _jsx("br", {}), " Visit our", " ", _jsx(Link, { to: "/products", children: "Products section" }), " to add it."] })) : (cartItems.map((item) => (_jsxs("div", { className: "order-info-content", children: [_jsxs("div", { className: "order-info-left-content", children: [_jsx("div", { className: "product-img", children: _jsx("img", { src: item.image, alt: item.title }) }), _jsxs("div", { className: "product-details", children: [_jsx("p", { children: item.title }), _jsxs("div", { className: "quantity-controls", children: [_jsx("button", { type: "button", className: "sub qtyBtn", onClick: () => updateQuantity(item.id, item.quantity - 1), children: "-" }), _jsx("input", { type: "text", value: item.quantity, className: "quantity-selector", readOnly: true }), _jsx("button", { type: "button", className: "add qtyBtn", onClick: () => updateQuantity(item.id, item.quantity + 1), children: "+" })] })] })] }), _jsxs("div", { className: "order-right-content", children: [_jsx("div", { className: "close-button", onClick: () => removeFromCart(item.id), children: "\u2716" }), _jsxs("p", { className: "order-price", children: ["Rs ", item.price * item.quantity] })] })] }, item.id)))) }), _jsxs("div", { className: "order-summary-content-container", children: [_jsxs("div", { className: "order-summary-hdng", children: [_jsx("img", { src: `${ImageSource}/order-summary-pc.png`, alt: "" }), "Order Summary"] }), _jsxs("div", { className: "order-summary-main-content", children: [_jsxs("div", { className: "order-summary-main-content-hdng", children: [_jsx("p", { children: "Item" }), _jsx("p", { children: "Price" })] }), _jsxs("div", { className: "order-summary-main-content", children: [cartItems.length === 0 ? (_jsxs("p", { children: ["You have no items added in your cart. ", _jsx("br", {}), " Visit our", " ", _jsx(Link, { to: "/products", children: "Products section" }), " to add it."] })) : (cartItems.map((item) => (_jsxs("div", { className: "order-summary-content", children: [_jsxs("p", { className: "item-name", children: [item.title, " \u00D7 ", item.quantity] }), _jsxs("p", { className: "item-price", children: ["\u20B9 ", item.price * item.quantity] })] }, item.id)))), cartItems.length > 0 && (_jsxs(_Fragment, { children: [_jsxs("div", { className: "order-summary-content", children: [_jsx("p", { className: "item-name", children: "Shipping" }), _jsx("p", { className: "item-price", children: "\u20B9 75" })] }), _jsxs("div", { className: "order-summary-content", children: [_jsx("p", { className: "item-name", children: "Discount" }), _jsx("p", { className: "item-price", children: "- \u20B9 75" })] })] }))] })] })] }), cartItems.length > 0 && (_jsx("div", { className: "order-total", children: _jsxs("p", { className: "total-price", children: [_jsx("span", { children: "Total: " }), " ", _jsxs("span", { children: [" Rs ", _jsxs("span", { children: [" ", cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)] })] })] }) })), cartItems.length > 0 && (_jsx(Link, { to: "/order-confirmation", className: "order-confirmation-btn common-btn", children: "Place Your Order" }))] }) })] }) }) }) }) }));
}
export default Checkout;
