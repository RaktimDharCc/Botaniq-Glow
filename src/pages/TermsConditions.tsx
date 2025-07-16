import React from "react";
import "../assets/css/home-page.css";

function TermsConditions() {
  const currentDate = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <section className="sub-page-content-container terms-content-container">
        <div className="container">
          <div className="sub-page-hdng-content">
            <h2>Terms & Conditions</h2>
          </div>

          <div className="sub-page-content">
            <h4>Last Updated: {currentDate}</h4>
            <p className="sub-para">
              Welcome to Botaniq Glow. These Terms and Conditions (“Terms”) govern your use of our website and the purchase of products through [www.botaniqglow.com] (the “Site”). By accessing or using the Site, you agree to be bound by these Terms.
            </p>

            <div className="terms-content">
              <h5>1. Eligibility</h5>
              <p>You must be at least 18 years old to use our site or make a purchase. By using this site, you represent that you meet this requirement.</p>
              <br />
              <h5>2. Products & Availability</h5>
              <p>All products are subject to availability. We reserve the right to discontinue or modify any product at any time without prior notice.</p>
              <br />
              <h5>3. Orders & Payments</h5>
              <p>By placing an order, you agree to provide current, complete, and accurate purchase and account information. We accept payment via major credit/debit cards, UPI, and other secure payment gateways.</p>
              <br />
              <h5>4. Shipping & Delivery</h5>
              <p>We ship within India and may expand to other regions in the future. Delivery timelines are estimates and may vary due to circumstances beyond our control.</p>
              <br />
              <h5>5. Returns & Refunds</h5>
              <p>You may return unopened, unused products within 7 days of delivery. Please refer to our Return Policy for details on return procedures, eligibility, and refund timelines.</p>
              <br />
              <h5>6. Intellectual Property</h5>
              <p>All content on this site — including logos, product names, descriptions, designs, and images — is the property of Botaniq Glow and may not be copied, reproduced, or distributed without written permission.</p>
              <br />
              <h5>7. User Conduct</h5>
              <p>You agree not to misuse our site, engage in fraudulent activities, or attempt to interfere with our platform’s functionality.</p>
              <br />
              <h5>8. Privacy Policy</h5>
              <p>Your use of this site is also governed by our Privacy Policy, which outlines how we collect, use, and protect your information.</p>
              <br />
              <h5>9. Limitation of Liability</h5>
              <p>Botaniq Glow is not liable for any indirect, incidental, or consequential damages arising from your use of our products or site. All skincare results may vary from person to person.</p>
              <br />
              <h5>10. Governing Law</h5>
              <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in [Your City], India.</p>
              <br />
              <h5>11. Changes to Terms</h5>
              <p>We reserve the right to update these Terms at any time. Continued use of the site following changes constitutes your acceptance of those changes.</p>
            </div>
          </div>

          <div className="terms-bottom-content">
            <h4>If you have any questions regarding these Terms, please contact us at:</h4>
            <br />
            <br />
            <a href="mailto:support@botaniqglow.com" className="terms-mail">
              <img src="./src/assets/images/gmail.png" alt="" /> support@botaniqglow.com
            </a>
            <br />
            <p className="address-content">
              <img src="./src/assets/images/map.png" alt="" />
              Botaniq Glow <br />
              32, Fernleaf Avenue, <br />
              Sector 45, Green Park, <br />
              Bangalore – 560103, <br />
              Karnataka, India
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default TermsConditions;
