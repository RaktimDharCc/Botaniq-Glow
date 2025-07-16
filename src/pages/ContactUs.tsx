import React, { useState } from "react";
import "../assets/css/sub-page.css";

function ContactUs() {
  // State for form fields
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // State for success message
  const [successMessage, setSuccessMessage] = useState("");

  // Simple validation helper
  const validateForm = () => {
    if (!email || !phone || !subject || !message) {
      setSuccessMessage("Please fill in all the fields.");
      return false;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSuccessMessage("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccessMessage("We have received your request, and we will get back to you within 2-3 business days.");

      // Reset form after submission
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <>
      <section className="sub-page-content-container contact-us-content">
        <div className="container">
          <div className="sub-page-hdng-content">
            <h2>Contact Us</h2>
          </div>

          <div className="sub-page-content">
            <h4 className="sub-hdng">We’d love to hear from you</h4>
            <p className="sub-para">
              Whether you have a question about our product(s), our manufacturers, our pricing, or anything else, our team is ready to answer all of your questions.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="contact-us-content">
                <div className="contact-us-input">
                  <input
                    type="email"
                    placeholder="Please enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="contact-us-input">
                  <input
                    type="number"
                    placeholder="Please enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="contact-us-input">
                  <input
                    type="text"
                    placeholder="Please enter your subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div className="contact-us-input">
                  <textarea
                    placeholder="Please enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <button type="submit" className="common-btn">
                  Submit
                </button>
              </div>
            </form>

            {/* Success or Error Message */}
            {successMessage && (
              <div className="form-response-message">
                <p>{successMessage}</p>
              </div>
            )}
          </div>
          <div className="contact-us-bottom-content">
            <h4>Still Need Help?</h4>
            <p>If you are looking for more information or need help with your order then our award winning customer service agents are standing by to assist you!</p>
            <br />
            <br />
            <h4>Contact Us</h4>

            <p>By Email -: <a href="mailto:support@botaniqglow.com">support@botaniqglow.com</a></p>
            <p>By Phone: <a href="tel:0123456789">0123456789</a></p>
          </div>


        </div>
      </section>
    </>
  );
}

export default ContactUs;
