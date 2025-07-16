import React from "react";
import "../assets/css/home-page.css";
import { Accordion } from "react-bootstrap";

function FAQs() {
  return (
    <>
    <section className="sub-page-content-container faq-section-content-container">
      <div className="container">
        <div className="sub-page-hdng-content">
          <h2>FAQs</h2>
        </div>
        <div className="sub-page-content">
          <div className="faq-container">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>What skin types is this product suitable for?</Accordion.Header>
                <Accordion.Body>
                 Our product is formulated to be gentle and effective for <strong>all skin types</strong>, including sensitive, dry, oily, and combination skin.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>How often should I use this product?</Accordion.Header>
                <Accordion.Body>
                  For best results, use it <strong>twice daily</strong>—once in the morning and once before bed, after cleansing and before moisturizing.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Can I use it with other skincare products?</Accordion.Header>
                <Accordion.Body>
                  Yes! It’s designed to work well with your existing skincare routine. Just make sure to apply it before heavier creams or sunscreen.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>Is it safe for sensitive skin?</Accordion.Header>
                <Accordion.Body>
                  Absolutely. Our product is <strong>dermatologist-tested</strong> and free from parabens, sulfates, and artificial fragrances—making it ideal for sensitive skin.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>Is the product vegan and cruelty-free?</Accordion.Header>
                <Accordion.Body>
                  Yes, we’re proud to say it’s <strong>100% vegan, cruelty-free</strong>, and ethically sourced.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>How long does one bottle last?</Accordion.Header>
                <Accordion.Body>
                  With regular use, one bottle typically lasts about <strong>4–6 weeks</strong>. A little goes a long way!
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="6">
                <Accordion.Header>Does it have a fragrance?</Accordion.Header>
                <Accordion.Body>
                  It contains <strong>natural botanical extracts</strong> with a light, refreshing scent—no artificial perfumes added.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="7">
                <Accordion.Header>What is the shelf life of the product?</Accordion.Header>
                <Accordion.Body>
                  The product has a shelf life of <strong>24 months unopened</strong> and <strong>6 months after opening</strong>. Store it in a cool, dry place away from direct sunlight.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default FAQs;
