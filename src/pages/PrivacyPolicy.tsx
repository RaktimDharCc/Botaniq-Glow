import React from "react";
import "../assets/css/home-page.css";

function PrivacyPolicy() {

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
            <h2>Privacy Policy</h2>
          </div>

          <div className="sub-page-content">
            <h4>Effective Date: {currentDate}</h4>
            <p className="sub-para">
              At Botaniq Glow, your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit or make a purchase from [www.botaniqglow.com].
            </p>

            <div className="terms-content">
              <h5>1. Information We Collect</h5>
              <p className="fw-semibold ps-4">You may return a product if:</p>
              <ul className="returns-policy-li">
                <li><b>Personal Information:</b> Name, email address, phone number, billing and shipping address.</li>
                <li><b>Payment Details:</b> We do not store credit/debit card or UPI details. All transactions are processed securely.</li>
                <li><b>Browsing Data:</b> Pages visited, device information, browser type, and IP address.</li>
              </ul>
              <br />
              <h5>2. How We Use Your Information</h5>
              <p className="fw-semibold ps-4">We use your data to:</p>
              <ul className="returns-policy-li">
                <li>Process and fulfill your orders.</li>
                <li>Communicate updates, offers, or support.</li>
                <li>Improve our website experience and services.</li>
                <li>Prevent fraudulent activities.</li>
              </ul>
              <br />
              <h5>3. Cookies</h5>
              <p>We use cookies to personalize your experience and understand how our site is used. You can control cookies through your browser settings.</p>
              <br />
              <h5>4. Sharing Your Information</h5>
              <p className="ps-4">We do not sell your personal information. Your data may be shared with:</p>
              <ul className="returns-policy-li">
                <li>Trusted third-party logistics and payment providers.</li>
                <li>Legal authorities when required by law.</li>
              </ul>
              <br />
              <h5>5. Your Rights</h5>
              <p>You can request to view, update, or delete your personal data anytime by contacting us at support@botaniqglow.com.</p>
              <br />
              <h5>6. Data Security</h5>
              <p>We implement reasonable safeguards to protect your personal data from unauthorized access, misuse, or loss.</p>
              <br />
              <h5>7. Policy Updates</h5>
              <p>We may update this policy from time to time. The latest version will always be available on our website.</p>
            </div>
          </div>

            <p style={{ fontSize: "30px" }} className="fw-bold">Questions? Contact us at <br /> <a href="mailto:support@botaniqglow.com" className="terms-mail fw-regular">support@botaniqglow.com
            </a></p>
            
        </div>
      </section>
    </>
    </>
  );
}

export default PrivacyPolicy;
