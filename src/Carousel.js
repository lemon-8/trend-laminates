import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Carousel() {
    const Products = ({ title, type }) => {
        return (
            <div className="relative items-center mx-4 mt-20 overflow-hidden text-center">
                <div className="rounded-md products">
                    <div className={"product-list " + type} />
                </div>
                <Link to="/Products"> 
                    <button className="absolute left-0 right-0 w-48 py-2 mx-auto text-center text-black duration-500 bg-white hover:border-black hover:text-white button-slide rounded-3xl bottom-5 product-text">{title}</button>
                </Link>
            </div>
        )
    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5.25,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToScroll: 1,
        cssEase: "linear",
        swipeToSlide: true,
        breakpoint: 600,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className="flex flex-col items-center mt-20" data-aos="fade-up" data-aos-duration="2000">
                <p className="text-5xl font-bold text-center font-garamond">Top Products</p>
                <p className="mt-6 text-base font-normal text-center text-subtitle">We are TrendPVC, a leader in the lamination industry supplying premium flat laminated panels to a diverse clientele.</p>
                <div className="w-full h-full">
                    <Slider {...settings}>
                        <Products title="Decorative" type="decorative" />
                        <Products title="PVC Laminates" type="pvc_laminates" />
                        <Products title="Korean Charcoal" type="korean" />
                        <Products title="PVC Tapes" type="pvc_tape" />
                        <Products title="Acrylic Laminates" type="acrylic" />
                        <Products title="WPC Board" type="wpc_board" />
                    </Slider>
                </div>
                <Link to="/Products">
                    <button className="flex items-center justify-center p-4 py-6 mt-20 text-base font-bold text-black duration-700 ease-out border border-black w-60 shadow-touch hover:text-white hover:shadow-touch1 h-9 rounded-3xl">See our Products <BsArrowRight className="ml-2" size={30} /></button>
                </Link>
            </div>
        </div>
    )
}

export default Carousel
