import React from "react";
import "../assets/css/sub-page.css";

function AboutUs() {
  const currentDate = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <section className="sub-page-content-container terms-content-container returns-page-content-container">
        <div className="container">
          <div className="sub-page-hdng-content">
            <h2>About Us</h2>
          </div>

          <div className="sub-page-content">
            <h4>Last Updated: {currentDate}</h4>
            <p className="sub-para">
              At Botaniq Glow, we blend the essence of nature with the intelligence of modern skincare to create products that are as gentle as they are effective.
            </p>

            <div className="terms-content">
              <h5>1. Who We Are</h5>
              <p className="ps-4">
                Botaniq Glow is a skincare brand rooted in transparency, simplicity, and science. Our focus is on delivering plant-based skincare solutions that elevate your self-care rituals.
              </p>
              <ul className="returns-policy-li">
                <li>Founded with a passion for clean beauty</li>
                <li>Crafted with ethically sourced botanical ingredients</li>
                <li>Driven by results, backed by nature</li>
              </ul>

              <br />
              <h5>2. What We Offer</h5>
              <p className="ps-4">
                Our curated collection includes rejuvenating facial oils, hydrating serums, and nutrient-rich skincare formulas designed for all skin types.
              </p>
              <ul className="returns-policy-li">
                <li>Non-toxic, cruelty-free products</li>
                <li>Skin-friendly formulations made with care</li>
                <li>Elegant, easy-to-use rollers and packaging</li>
              </ul>

              <br />
              <h5>3. Our Promise</h5>
              <ul className="returns-policy-li">
                <li>No harsh chemicals or parabens</li>
                <li>100% transparency with ingredients</li>
                <li>Customer satisfaction as our top priority</li>
              </ul>

              <br />
              <h5>4. Why Choose Botaniq Glow?</h5>
              <p className="ps-4">
                We’re not just a skincare brand — we’re a community that believes in conscious beauty. Our platform ensures a smooth and secure shopping experience while our products reflect integrity and care.
              </p>
              <ul className="returns-policy-li">
                <li>Fast-loading website with modern UX</li>
                <li>Easy ordering, tracking, and support</li>
                <li>Thoughtful skincare designed for real results</li>
              </ul>

              <br />
              <h5>5. Looking Ahead</h5>
              <p className="ps-4">
                As we grow, so does our commitment to innovation, sustainability, and wellness. We’re here to inspire you to glow from the inside out — naturally.
              </p>
            </div>
          </div>

          <h4>Need Help?</h4>
          <p style={{ fontSize: "18px" }}>
            Reach us at{" "}
            <a
              href="mailto:support@botaniqglow.com"
              className="terms-mail"
            >
              support@botaniqglow.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutUs;