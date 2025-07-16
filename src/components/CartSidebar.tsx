import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../assets/css/cartSidebar.css";

const CartSidebar = () => {
  const { cartItems, isSidebarOpen, toggleSidebar, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className={`cart-sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="cart-sidebar-top-content">
        <p className="order-summary">Order Summary</p>
        <button className="close-btn" onClick={toggleSidebar}>
          ✖
        </button>
      </div>

      <div className="cart-content">
        {cartItems.length === 0 ? (
          <p>
            You have no items added in your cart. <br /> Visit our{" "}
            <Link to="/products">Products section</Link> to add it.
          </p>
        ) : (
          <>
            <div className="cart-content-hdng">
              <p>Items</p>
              <p>Price</p>
            </div>

            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <strong>
                    {item.quantity}x {item.title}
                  </strong>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ✖
                  </button>
                </li>
              ))}
            </ul>

            <div className="total-content">
              <p className="total-text">Total Price </p>
              <p className="total-price">₹{totalPrice.toFixed(2)}</p>
            </div>

            <div className="cart-buy-now-btn">
              <Link to="/checkout" className="common-btn">
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
