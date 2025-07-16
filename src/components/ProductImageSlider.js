import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/product-slider.css";
const ProductImagesSlider = ({ images }) => {
    const mainSliderRef = useRef(null);
    const thumbSliderRef = useRef(null);
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    // Set the nav refs after the first render
    useEffect(() => {
        setNav1(mainSliderRef.current);
        setNav2(thumbSliderRef.current);
    }, []);
    const mainSliderSettings = {
        asNavFor: nav2,
        arrows: false,
        fade: true,
    };
    const thumbSliderSettings = {
        asNavFor: nav1,
        slidesToShow: 4,
        swipeToSlide: true,
        focusOnSelect: true,
        arrows: false,
        infinite: true, // corrected
    };
    return (_jsxs("div", { className: "product-image-slider", children: [_jsx(Slider, { ...mainSliderSettings, ref: mainSliderRef, className: "top-slider", children: images.map((img, index) => (_jsx("div", { children: _jsx("img", { src: img, alt: `Product Image ${index + 1}` }) }, index))) }), _jsx(Slider, { ...thumbSliderSettings, ref: thumbSliderRef, className: "bottom-slider", children: images.map((img, index) => (_jsx("div", { children: _jsx("img", { src: img, alt: `Thumbnail ${index + 1}` }) }, index))) })] }));
};
export default ProductImagesSlider;
