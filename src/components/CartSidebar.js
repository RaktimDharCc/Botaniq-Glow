import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../assets/css/cartSidebar.css";
const CartSidebar = () => {
    const { cartItems, isSidebarOpen, toggleSidebar, removeFromCart } = useCart();
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return (_jsxs("div", { className: `cart-sidebar ${isSidebarOpen ? "open" : ""}`, children: [_jsxs("div", { className: "cart-sidebar-top-content", children: [_jsx("p", { className: "order-summary", children: "Order Summary" }), _jsx("button", { className: "close-btn", onClick: toggleSidebar, children: "\u2716" })] }), _jsx("div", { className: "cart-content", children: cartItems.length === 0 ? (_jsxs("p", { children: ["You have no items added in your cart. ", _jsx("br", {}), " Visit our", " ", _jsx(Link, { to: "/products", children: "Products section" }), " to add it."] })) : (_jsxs(_Fragment, { children: [_jsxs("div", { className: "cart-content-hdng", children: [_jsx("p", { children: "Items" }), _jsx("p", { children: "Price" })] }), _jsx("ul", { children: cartItems.map((item) => (_jsxs("li", { children: [_jsxs("strong", { children: [item.quantity, "x ", item.title] }), _jsxs("span", { children: ["\u20B9", (item.price * item.quantity).toFixed(2)] }), _jsx("button", { className: "remove-btn", onClick: () => removeFromCart(item.id), children: "\u2716" })] }, item.id))) }), _jsxs("div", { className: "total-content", children: [_jsx("p", { className: "total-text", children: "Total Price " }), _jsxs("p", { className: "total-price", children: ["\u20B9", totalPrice.toFixed(2)] })] }), _jsx("div", { className: "cart-buy-now-btn", children: _jsx(Link, { to: "/checkout", className: "common-btn", children: "Proceed to Checkout" }) })] })) })] }));
};
export default CartSidebar;
