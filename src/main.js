import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
window.jQuery = $;
window.$ = $;
import { CartProvider } from "./context/CartContext";
import "./index.css";
createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(BrowserRouter, { children: _jsx(CartProvider, { children: _jsx(App, {}) }) }) }));
