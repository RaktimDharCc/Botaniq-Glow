import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/product-slider.css"

type ProductImagesSliderProps = {
  images: string[];
};

const ProductImagesSlider: React.FC<ProductImagesSliderProps> = ({ images }) => {
  const mainSliderRef = useRef<Slider>(null);
  const thumbSliderRef = useRef<Slider>(null);

  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  // Set the nav refs after the first render
  useEffect(() => {
    setNav1(mainSliderRef.current);
    setNav2(thumbSliderRef.current);
  }, []);

  const mainSliderSettings = {
    asNavFor: nav2 as Slider | undefined,
    arrows: false,
    fade: true,
  };

  const thumbSliderSettings = {
    asNavFor: nav1 as Slider | undefined,
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    arrows: false,
    infinite: true, // corrected
  };

  return (
    <div className="product-image-slider">
      {/* Main Image Slider */}
      <Slider
        {...mainSliderSettings}
        ref={mainSliderRef}
        className="top-slider"
      >
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Product Image ${index + 1}`} />
          </div>
        ))}
      </Slider>

      {/* Thumbnail Slider */}
      <Slider
        {...thumbSliderSettings}
        ref={thumbSliderRef}
        className="bottom-slider"
      >
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductImagesSlider;
