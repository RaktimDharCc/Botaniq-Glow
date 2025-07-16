import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import "../assets/css/checkout-page.css";
import { Link } from "react-router-dom";

const ImageSource = "../src/assets/images";

function Checkout() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  // Toggle billing content visibility based on checkbox state
  useEffect(() => {
    const checkbox = document.getElementById(
      "shipping-billing"
    ) as HTMLInputElement | null;
    const billingContent = document.querySelector(
      ".billing-content-container"
    ) as HTMLElement | null;

    if (checkbox && billingContent) {
      const toggleBillingContent = () => {
        if (checkbox.checked) {
          billingContent.style.display = "block";
          void billingContent.offsetHeight; // force reflow
          billingContent.style.maxHeight = billingContent.scrollHeight + "px";
        } else {
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

  return (
    <>
      <section className="checkout-section">
        <div className="container">
          <div className="checkout-section-content-container">
            <div className="row">
              {/* Left side — Billing Form */}
              <div className="col-md-7">
                <div className="checkout-section-left-content">
                  <p className="banner-top-content">
                    Home / Products / <b>Checkout</b>
                  </p>

                  <div className="form-group checkout-form-content">
                    <div className="form-hdng">
                      <h2>Billing Information</h2>
                    </div>

                    {/* Form Fields */}
                    <div className="row">
                      {[
                        { id: "fname", label: "First Name" },
                        { id: "lname", label: "Last Name" },
                        { id: "email", label: "Email", type: "email" },
                        { id: "phone", label: "Telephone", type: "number" },
                      ].map(({ id, label, type = "text" }) => (
                        <div className="col-md-6" key={id}>
                          <div className="checkout-form">
                            <label htmlFor={id}>{label}</label>
                            <input
                              type={type}
                              name={id}
                              id={id}
                              className="form-control"
                            />
                          </div>
                        </div>
                      ))}

                      <div className="col-md-12">
                        <div className="checkout-form">
                          <label htmlFor="inputAddress">Address</label>
                          <input
                            type="text"
                            id="inputAddress"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="checkout-form">
                          <label htmlFor="inputCity">City</label>
                          <input type="text" id="inputCity" className="form-control" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="checkout-form">
                          <label htmlFor="inputZip">Zip Code</label>
                          <input type="number" id="inputZip" className="form-control" />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="checkout-form">
                          <label htmlFor="input-country">Country</label>
                          <select id="input-country" className="form-control">
                            <option value="India">India</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Australia">Australia</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Checkbox */}
                  <div className="newsletter-content">
                    <input
                      type="checkbox"
                      id="news-letter"
                      className="custom-checkbox"
                    />
                    <label htmlFor="news-letter">Sign up for newsletter</label>
                  </div>

                  <div className="newsletter-content mt-4">
                    <input
                      type="checkbox"
                      id="shipping-billing"
                      className="custom-checkbox"
                    />
                    <label htmlFor="shipping-billing">
                      Shipping Address Same As Billing Address
                    </label>
                  </div>

                  {/* Billing Content Toggle */}
                  <div className="billing-content-container mt-4">
                    <div className="row">
                      {[
                        { id: "billing-first-name", label: "Billing First Name" },
                        { id: "billing-last-name", label: "Billing Last Name" },
                        { id: "billing-address", label: "Billing Address" },
                        { id: "billing-city", label: "Billing City" },
                        { id: "billing-zip-code", label: "Billing Zip Code", type: "number" },
                      ].map(({ id, label, type = "text" }) => (
                        <div
                          className={`col-md-${id.includes("address") ? "12" : "6"}`}
                          key={id}
                        >
                          <div className="checkout-form">
                            <label htmlFor={id}>{label}</label>
                            <input
                              type={type}
                              id={id}
                              className="form-control"
                            />
                          </div>
                        </div>
                      ))}

                      <div className="col-md-12">
                        <div className="checkout-form">
                          <label htmlFor="billing-country">Billing Country</label>
                          <select id="billing-country" className="form-control">
                            <option value="India">India</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Australia">Australia</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side — Order Info */}
              <div className="col-md-5">
                <div className="checkout-section-right-content">
                  <div className="form-hdng">
                    <h2>Order Information</h2>
                  </div>

                  <div className="order-information-content-container">
                    {cartItems.length === 0 ? (
                      <p>
            You have no items added in your cart. <br /> Visit our{" "}
            <Link to="/products">Products section</Link> to add it.
          </p>
                    ) : (
                      cartItems.map((item) => (
                        <div className="order-info-content" key={item.id}>
                          <div className="order-info-left-content">
                            <div className="product-img">
                              <img src={item.image} alt={item.title} />
                            </div>
                            <div className="product-details">
                              <p>{item.title}</p>
                              <div className="quantity-controls">
                                <button
                                  type="button"
                                  className="sub qtyBtn"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                  }
                                >
                                  -
                                </button>
                                <input
                                  type="text"
                                  value={item.quantity}
                                  className="quantity-selector"
                                  readOnly
                                />
                                <button
                                  type="button"
                                  className="add qtyBtn"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="order-right-content">
                            <div
                              className="close-button"
                              onClick={() => removeFromCart(item.id)}
                            >
                              ✖
                            </div>
                            <p className="order-price">
                              Rs {item.price * item.quantity}
                            </p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                    <div className="order-summary-content-container">
                      <div className="order-summary-hdng">
                        <img src={`${ImageSource}/order-summary-pc.png`} alt="" />
                        Order Summary
                      </div>

                      <div className="order-summary-main-content">
                        <div className="order-summary-main-content-hdng">
                          <p>Item</p>
                          <p>Price</p>
                        </div>
                        <div className="order-summary-main-content">
  {cartItems.length === 0 ? (
    <p>
            You have no items added in your cart. <br /> Visit our{" "}
            <Link to="/products">Products section</Link> to add it.
          </p>
  ) : (
    cartItems.map((item) => (
      <div className="order-summary-content" key={item.id}>
        <p className="item-name">{item.title} × {item.quantity}</p>
        <p className="item-price">₹ {item.price * item.quantity}</p>
      </div>
    ))
  )}

        {/* Shipping */}
        {cartItems.length > 0 && (
          <>
            <div className="order-summary-content">
              <p className="item-name">Shipping</p>
              <p className="item-price">₹ 75</p>
            </div>

            {/* Discount */}
            <div className="order-summary-content">
              <p className="item-name">Discount</p>
              <p className="item-price">- ₹ 75</p>
            </div>
          </>
        )}
</div>
                      </div>
                    </div>

                    {/* Order Total */}
                    {cartItems.length > 0 && (
                      <div className="order-total">
                        <p className="total-price">
                          <span>Total: </span> <span> Rs <span>{" "}
                          {cartItems.reduce(
                            (sum, item) => sum + item.price * item.quantity,
                            0
                          )}</span></span>
                        </p>
                      </div>
                    )}

                    {cartItems.length > 0 && (
                      <Link to="/order-confirmation" className="order-confirmation-btn common-btn">
                        Place Your Order
                      </Link>
                    )}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
