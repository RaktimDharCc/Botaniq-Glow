import React from "react";
import "../assets/css/order-confirmation.css";

function OrderConfirmation() {
  return (
  <div className="order-confirmation-content">
      <img src="/assets/images/order-confirmation.svg" alt="Order Confirmation" />
      <b>Thank You for Your Order!</b>
      <p>We’ve received your order and are carefully preparing it with love and care. You’ll receive a confirmation email shortly with your order details and tracking information once it ships.</p>
  </div>
  );
}

export default OrderConfirmation;
