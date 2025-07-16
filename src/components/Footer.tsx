import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/footer.css";

import Footerlogo from "../assets/images/footer-logo.png";
import FaceBookIcon from "../assets/images/facebook.svg";
import WhatsappIcon from "../assets/images/whatsapp.svg";
import InstagramIcon from "../assets/images/instagram.svg";
import FooterPc1 from "../assets/images/footer-pc1.png";
import FooterPc2 from "../assets/images/footer-pc2.png";
import FooterPc3 from "../assets/images/footer-pc3.png";
import FooterPc4 from "../assets/images/footer-pc4.png";

const ImageSource = "./src/assets/images";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="top-footer">
          <div className="container">
            <div className="top-footer-content-container">
              <div className="top-footer-content">
                <img src={FooterPc1} alt="" />
                <b>Free Shipping</b>
                <p>
                  On all orders above ₹999 — delivered with care, right to your
                  doorstep.
                </p>
              </div>
              <div className="top-footer-content">
                 <img src={FooterPc2} alt="" />
                <b>Returns</b>
                <p>Not in love? Return within 7 days — no questions asked.</p>
              </div>
              <div className="top-footer-content">
                 <img src={FooterPc3} alt="" />
                <b>Online Support</b>
                <p>
                  Our team is here to help — reach out anytime, we're just a
                  message away.
                </p>
              </div>
              <div className="top-footer-content">
                 <img src={FooterPc4} alt="" />
                <b>Flexible Payment</b>
                <p>
                  Pay your way — secure payments via cards, UPI & easy EMI
                  options.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="container">
            <div className="footer-logo">
              <img src={Footerlogo} alt="" />
            </div>
            <div className="footer-nav-links">
              <ul>
                <li>
                  <Link to="/AboutUs">About Us</Link>
                </li>
                <li>
                  <Link to="/ReturnPolicy">Returns Policy</Link>
                </li>
                <li>
                  <Link to="/PrivacyPolicy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/ContactUs">Contact Us</Link>
                </li>
                <li>
                  <Link to="/TermsConditions">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
            <div className="footer-social-media">
              <a href="javascript:void(0);" title="_blank">
                <img src={FaceBookIcon} alt="Facebook" />
              </a>
              <a href="javascript:void(0);" title="_blank">
                <img src={WhatsappIcon} alt="Whatsapp" />
              </a>
              <a href="javascript:void(0);" title="_blank">
                <img src={InstagramIcon} alt="Instagram" />
              </a>
            </div>
            <div className="footer-description">
              <p>© {currentYear} Botaniq Glow. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
