import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/css/product.css";
import ProductImagesSlider from "../components/ProductImageSlider";
import { useCart } from "../context/CartContext";
import { Accordion } from "react-bootstrap";
const ImageSource = "/assets/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const isProduct = (item) => {
    return (typeof item.id === "number" &&
        typeof item.title === "string" &&
        typeof item.price === "number");
};
function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart, toggleSidebar } = useCart();
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    useEffect(() => {
  fetch("/data/products.json")
    .then((res) => res.json())
    .then((data) => {
      const foundProduct = data.find((item) => item?.id === Number(id));
      if (foundProduct) {
        setProduct(foundProduct);
        const related = data.filter(
          (item) =>
            foundProduct.relatedProducts?.includes(item.id) &&
            item.id !== foundProduct.id
        );
        setRelatedProducts(related);
      }
    })
    .catch((err) => {
      console.error("Failed to fetch products.json:", err);
    });
}, [id]);
    if (!product)
        return _jsx("p", { children: "Loading product details..." });
    const images = [
        product.image1,
        product.image2,
        product.image3,
        product.image4,
    ].filter(Boolean); // removes undefined if any image is missing
    const handleAddToCart = () => {
        addToCart(product);
        toggleSidebar();
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "product-det-top-content", children: _jsx("div", { className: "container", children: _jsxs("p", { className: "banner-top-content", children: ["Home / ", _jsx("b", { children: product.title })] }) }) }), _jsx("section", { className: "product-details container", children: _jsx("div", { className: "product-details-row", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-md-6", children: _jsx(ProductImagesSlider, { images: images }) }), _jsxs("div", { className: "col-md-6", children: [_jsx("h3", { className: "product-info-hdng", children: product.title }), _jsxs("div", { className: "product-rating", children: [_jsx("img", { src: `${ImageSource}/product-rating-star.png`, alt: "Rating" }), _jsxs("p", { children: ["4.5 ", _jsx("span", { children: "2466 Reviews" })] })] }), _jsxs("div", { className: "product-price-content-container", children: [_jsxs("p", { className: "product-price", children: ["\u20B9", product.price.toFixed(2)] }), product.originalPrice && (_jsxs("p", { className: "product-original-price", children: ["\u20B9", product.originalPrice.toFixed(2)] })), _jsx("div", { className: "inclusive-txt", children: "(inclusive of all taxes)" })] }), _jsx("div", { className: "product-description", dangerouslySetInnerHTML: {
                                            __html: product.description || "",
                                        } }), _jsx("b", { children: "Key Benefits:" }), _jsx("div", { className: "product-key-benefits", dangerouslySetInnerHTML: {
                                            __html: product.keyBenefits || "",
                                        } }), _jsxs("div", { className: "product-actions", children: [_jsx("button", { className: "common-btn", onClick: handleAddToCart, children: "Add to Cart" }), _jsx("button", { className: "common-btn buy-now", onClick: () => {
                                                    addToCart(product);
                                                    navigate("/checkout");
                                                }, children: "Buy Now" })] })] })] }) }) }), product.faqs && product.faqs.length > 0 && (_jsx("section", { className: "faq-content-container", children: _jsxs("div", { className: "container", children: [_jsx("h2", { className: "sec-hdng", children: "Frequently Asked Questions (FAQs)" }), _jsx("div", { className: "faq-container", children: _jsx(Accordion, { defaultActiveKey: "0", children: product.faqs?.map((faq, index) => (_jsxs(Accordion.Item, { eventKey: index.toString(), children: [_jsx(Accordion.Header, { children: faq.question }), _jsx(Accordion.Body, { children: faq.answer })] }, index))) }) })] }) })), relatedProducts.length > 0 && (_jsx("section", { className: "related-products-sec product-content-container", children: _jsxs("div", { className: "container", children: [_jsx("h2", { className: "sec-hdng", children: "You May Also Like" }), _jsx("div", { className: "row", children: relatedProducts.map((relProd) => (_jsx("div", { className: "col-md-4", children: _jsxs("div", { className: "product-card", children: [_jsxs("div", { className: "product-image", children: [_jsx("img", { src: relProd.image, alt: relProd.title }), relProd.originalPrice &&
                                                    relProd.originalPrice > product.price ? (_jsxs("span", { className: "discount-content", children: [Math.round(((relProd.originalPrice - product.price) /
                                                            relProd.originalPrice) *
                                                            100), "% OFF"] })) : null] }), _jsxs("div", { className: "product-description-container", children: [_jsx("h4", { children: relProd.title }), _jsx("img", { src: `${ImageSource}/product-rating-star.png`, alt: "Product Rating Star" }), _jsxs("p", { children: ["\u20B9 ", relProd.price, " ", relProd.originalPrice ? (_jsxs("span", { children: ["\u20B9 ", relProd.originalPrice] })) : null] })] }), _jsxs("div", { className: "button-container", children: [_jsx("button", { className: "btn btn-primary me-2", onClick: () => {
                                                        addToCart(relProd);
                                                        toggleSidebar();
                                                    }, children: "Add to Cart" }), _jsx("button", { className: "btn btn-outline-primary", onClick: () => navigate(`/product/${relProd.id}`), children: "Buy Now" })] })] }) }, relProd.id))) })] }) }))] }));
}
export default ProductDetails;
