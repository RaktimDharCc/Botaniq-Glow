import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import type { Product } from "../types/Product";


import "../assets/css/product.css";

function ProductListing() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  const { category } = useParams<{ category?: string }>();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

useEffect(() => {
  fetch("/data/products.json")
    .then((res) => res.json())
    .then((data) => setProducts(data))
    .catch((err) => console.error("Failed to load products:", err));
}, []);


  // Get unique collection names dynamically
  const collections = Array.from(new Set(products.map((product) => product.collection)));

  // Component to render product cards
  const renderProducts = (productList: Product[]) => (
    <div className="row">
      {productList.map((product) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <div className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.title} className="img-fluid" />
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="discount-content">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>
            <div className="product-description-container">
              <h4>{product.title}</h4>
              <img src="/assets/images/product-rating-star.png" alt="Product Rating" />
              <p>
                ₹ {product.price}
                {product.originalPrice && <span> ₹ {product.originalPrice}</span>}
              </p>
            </div>
            <div className="button-container">
              <button className="btn btn-primary me-2" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
              <Link to={`/product/${product.id}`} className="btn btn-outline-primary">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <section className="product-page-banner">
        <div className="container">
          <p className="banner-top-content">
            Home / <b>{category ? category : "Products"}</b>
          </p>
        </div>
        <div className="product-page-banner-content-container">
          <div className="container">
            <div className="product-banner-content">
              <div className="product-banner">
                <h2>Glow Starts with Nature</h2>
                <p>
                  Explore our plant-powered skincare range — thoughtfully crafted to nourish, restore, and reveal your natural radiance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-content-container">
        <div className="container">
          {/* If category param exists */}
          {category ? (
            <>
              <h2 className="sec-hdng">{category}</h2>
              {renderProducts(products.filter((product) => product.collection === category))}
            </>
          ) : (
            // No category param — show all collections dynamically
            collections.map((col) => (
              <div key={col} className="mb-5">
                <h2 className="sec-hdng">{col}</h2>
                {renderProducts(products.filter((product) => product.collection === col))}
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}

export default ProductListing;
