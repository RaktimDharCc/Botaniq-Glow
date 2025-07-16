import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ratingStar from "/assets/images/product-rating-star.png";
import "../assets/css/product.css";
function ProductListing() {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();
    const { category } = useParams();
    const handleAddToCart = (product) => {
        addToCart(product);
    };
    useEffect(() => {
        fetch("/data/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    // Get unique collection names dynamically
    const collections = Array.from(new Set(products.map((product) => product.collection)));
    // Component to render product cards
    const renderProducts = (productList) => (_jsx("div", { className: "row", children: productList.map((product) => (_jsx("div", { className: "col-md-4 mb-4", children: _jsxs("div", { className: "product-card", children: [_jsxs("div", { className: "product-image", children: [_jsx("img", { src: product.image, alt: product.title, className: "img-fluid" }), product.originalPrice && product.originalPrice > product.price && (_jsxs("span", { className: "discount-content", children: [Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100), "% OFF"] }))] }), _jsxs("div", { className: "product-description-container", children: [_jsx("h4", { children: product.title }), _jsx("img", { src: ratingStar, alt: "Product Rating" }), _jsxs("p", { children: ["\u20B9 ", product.price, product.originalPrice && _jsxs("span", { children: [" \u20B9 ", product.originalPrice] })] })] }), _jsxs("div", { className: "button-container", children: [_jsx("button", { className: "btn btn-primary me-2", onClick: () => handleAddToCart(product), children: "Add to Cart" }), _jsx(Link, { to: `/product/${product.id}`, className: "btn btn-outline-primary", children: "Buy Now" })] })] }) }, product.id))) }));
    return (_jsxs(_Fragment, { children: [_jsxs("section", { className: "product-page-banner", children: [_jsx("div", { className: "container", children: _jsxs("p", { className: "banner-top-content", children: ["Home / ", _jsx("b", { children: category ? category : "Products" })] }) }), _jsx("div", { className: "product-page-banner-content-container", children: _jsx("div", { className: "container", children: _jsx("div", { className: "product-banner-content", children: _jsxs("div", { className: "product-banner", children: [_jsx("h2", { children: "Glow Starts with Nature" }), _jsx("p", { children: "Explore our plant-powered skincare range \u2014 thoughtfully crafted to nourish, restore, and reveal your natural radiance." })] }) }) }) })] }), _jsx("section", { className: "product-content-container", children: _jsx("div", { className: "container", children: category ? (_jsxs(_Fragment, { children: [_jsx("h2", { className: "sec-hdng", children: category }), renderProducts(products.filter((product) => product.collection === category))] })) : (
                    // No category param — show all collections dynamically
                    collections.map((col) => (_jsxs("div", { className: "mb-5", children: [_jsx("h2", { className: "sec-hdng", children: col }), renderProducts(products.filter((product) => product.collection === col))] }, col)))) }) })] }));
}
export default ProductListing;
