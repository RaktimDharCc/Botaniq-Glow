import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
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
    const handleSubmit = (e) => {
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
    return (_jsx(_Fragment, { children: _jsx("section", { className: "sub-page-content-container contact-us-content", children: _jsxs("div", { className: "container", children: [_jsx("div", { className: "sub-page-hdng-content", children: _jsx("h2", { children: "Contact Us" }) }), _jsxs("div", { className: "sub-page-content", children: [_jsx("h4", { className: "sub-hdng", children: "We\u2019d love to hear from you" }), _jsx("p", { className: "sub-para", children: "Whether you have a question about our product(s), our manufacturers, our pricing, or anything else, our team is ready to answer all of your questions." }), _jsx("form", { onSubmit: handleSubmit, children: _jsxs("div", { className: "contact-us-content", children: [_jsx("div", { className: "contact-us-input", children: _jsx("input", { type: "email", placeholder: "Please enter your email", value: email, onChange: (e) => setEmail(e.target.value) }) }), _jsx("div", { className: "contact-us-input", children: _jsx("input", { type: "number", placeholder: "Please enter your phone number", value: phone, onChange: (e) => setPhone(e.target.value) }) }), _jsx("div", { className: "contact-us-input", children: _jsx("input", { type: "text", placeholder: "Please enter your subject", value: subject, onChange: (e) => setSubject(e.target.value) }) }), _jsx("div", { className: "contact-us-input", children: _jsx("textarea", { placeholder: "Please enter your message", value: message, onChange: (e) => setMessage(e.target.value) }) }), _jsx("button", { type: "submit", className: "common-btn", children: "Submit" })] }) }), successMessage && (_jsx("div", { className: "form-response-message", children: _jsx("p", { children: successMessage }) }))] }), _jsxs("div", { className: "contact-us-bottom-content", children: [_jsx("h4", { children: "Still Need Help?" }), _jsx("p", { children: "If you are looking for more information or need help with your order then our award winning customer service agents are standing by to assist you!" }), _jsx("br", {}), _jsx("br", {}), _jsx("h4", { children: "Contact Us" }), _jsxs("p", { children: ["By Email -: ", _jsx("a", { href: "mailto:support@botaniqglow.com", children: "support@botaniqglow.com" })] }), _jsxs("p", { children: ["By Phone: ", _jsx("a", { href: "tel:0123456789", children: "0123456789" })] })] })] }) }) }));
}
export default ContactUs;
