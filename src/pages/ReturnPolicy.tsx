import React from "react";
import "../assets/css/home-page.css";

function ReturnPolicy() {

   const currentDate = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });


  return (
    <>
       <>
      <section className="sub-page-content-container terms-content-container returns-page-content-container">
        <div className="container">
          <div className="sub-page-hdng-content">
            <h2>Return Policy</h2>
          </div>

          <div className="sub-page-content">
            <h4>Effective Date: {currentDate}</h4>
            <p className="sub-para">
              We want you to love every Botaniq Glow product. If something’s not right, here’s how we can help.
            </p>

            <div className="terms-content">
              <h5>1. Returns Eligibility</h5>
              <p className="fw-semibold ps-4">You may return a product if:</p>
              <ul className="returns-policy-li">
                <li>It is unused and in its original packaging.</li>
                <li>The return request is made within 7 days of delivery.</li>
                <li>You have the invoice or order confirmation email.</li>
              </ul>
              <p className="ps-4 fw-semibold fst-italic">We do not accept returns for used products due to hygiene reasons.</p>
              <br />
              <h5>2. How to Initiate a Return</h5>
              <p className="fw-semibold ps-4">Email us at <a href="mailto:support@botaniqglow.com">support@botaniqglow.com</a> with:</p>
              <ul className="returns-policy-li">
                <li>Your order number</li>
                <li>Reason for return</li>
                <li>Photos of the product (if applicable)</li>
              </ul>
              <p className="ps-4 fw-semibold fst-italic">Our team will respond within 1–2 business days with next steps.</p>
              <br />
              <h5>3. Refunds</h5>
              <ul className="returns-policy-li">
                <li>Once approved and received, refunds are processed within 5–7 business days to the original payment method.</li>
                <li>Shipping charges (if any) are non-refundable.</li>
              </ul>
              <br />
              <h5>4. Damaged or Incorrect Items</h5>
              <p className="ps-4">If your order arrived damaged or incorrect, please contact us within 48 hours of delivery. We’ll arrange a replacement or refund immediately.</p>
              <br />
              <h5>5. Cancellations</h5>
              <p>Orders can be canceled before they are shipped. Once dispatched, they cannot be canceled but may be eligible for return as per above terms.</p>
            </div>
          </div>

            <h4>Need Help?</h4>
            <p style={{ fontSize: "18px" }}>Reach us at <a href="mailto:support@botaniqglow.com" className="terms-mail">support@botaniqglow.com
            </a></p>
            
        </div>
      </section>
    </>
    </>
  );
}

export default ReturnPolicy;
