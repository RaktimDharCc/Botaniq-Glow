import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/css/product.css";
import ProductImagesSlider from "../components/ProductImageSlider";
import { useCart } from "../context/CartContext";
import type { Product } from "../types/Product";
import productsData  from "../data/products.json"
import { Accordion } from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Faq = {
  question: string;
  answer: string;
};

const isProduct = (item: any): item is Product => {
  return (
    typeof item.id === "number" &&
    typeof item.title === "string" &&
    typeof item.price === "number"
  );
};

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleSidebar } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const foundProduct = productsData.find(
      (item) => isProduct(item) && item.id === Number(id)
    ) as Product | undefined;

    if (foundProduct) {
      setProduct(foundProduct);

      const related = productsData.filter(
        (item) =>
          isProduct(item) &&
          foundProduct.relatedProducts?.includes(item.id) &&
          item.id !== foundProduct.id
      );
      setRelatedProducts(related);
    }
  }, [id]);

  if (!product) return <p>Loading product details...</p>;

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

  return (
    <>
      <div className="product-det-top-content">
        <div className="container">
          <p className="banner-top-content">
            Home / <b>{product.title}</b>
          </p>
        </div>
      </div>

      <section className="product-details container">
        <div className="product-details-row">
          <div className="row">
            <div className="col-md-6">
              <ProductImagesSlider images={images} />
            </div>

            <div className="col-md-6">
              <h3 className="product-info-hdng">{product.title}</h3>
              <div className="product-rating">
                <img
                  src="assets/images/product-rating-star.png"
                  alt="Rating"
                />
                <p>
                  4.5 <span>2466 Reviews</span>
                </p>
              </div>

              <div className="product-price-content-container">
                <p className="product-price">₹{product.price.toFixed(2)}</p>
                {product.originalPrice && (
                  <p className="product-original-price">
                    ₹{product.originalPrice.toFixed(2)}
                  </p>
                )}
                <div className="inclusive-txt">(inclusive of all taxes)</div>
              </div>

              <div
                className="product-description"
                dangerouslySetInnerHTML={{
                  __html: product.description || "",
                }}
              />
              <b>Key Benefits:</b>
              <div
                className="product-key-benefits"
                dangerouslySetInnerHTML={{
                  __html: product.keyBenefits || "",
                }}
              />

              <div className="product-actions">
                <button className="common-btn" onClick={handleAddToCart}>
                  Add to Cart
                </button>
                <button
                className="common-btn buy-now"
                onClick={() => {
                  addToCart(product);
                  navigate("/checkout");
                }}
              >
                Buy Now
              </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="faq-content-container">
          <div className="container">
            <h2 className="sec-hdng">Frequently Asked Questions (FAQs)</h2>
            <div className="faq-container">
              <Accordion defaultActiveKey="0">
                {product.faqs?.map((faq, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body>{faq.answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="related-products-sec product-content-container">
          <div className="container">
            <h2 className="sec-hdng">You May Also Like</h2>
            <div className="row">
              {relatedProducts.map((relProd) => (
                <div className="col-md-4" key={relProd.id}>
                  <div className="product-card">
                    <div className="product-image">
                      <img src={relProd.image} alt={relProd.title} />
                      {relProd.originalPrice &&
                      relProd.originalPrice > product.price ? (
                        <span className="discount-content">
                          {Math.round(
                            ((relProd.originalPrice - product.price) /
                              relProd.originalPrice) *
                              100
                          )}
                          % OFF
                        </span>
                      ) : null}
                    </div>

                    <div className="product-description-container">
                      <h4>{relProd.title}</h4>
                      <img
                        src="assets/images/product-rating-star.png"
                        alt="Product Rating Star"
                      />
                      <p>
                        ₹ {relProd.price}{" "}
                        {relProd.originalPrice ? (
                          <span>₹ {relProd.originalPrice}</span>
                        ) : null}
                      </p>
                    </div>
                    <div className="button-container">
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => {
                          addToCart(relProd);
                          toggleSidebar();
                        }}
                      >
                        Add to Cart
                      </button>
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => navigate(`/product/${relProd.id}`)}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ProductDetails;
