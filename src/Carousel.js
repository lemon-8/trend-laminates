import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import decorative from './images/decorative.webp';
import pvc_laminates from './images/pvc_laminates.webp';
import korean from './images/korean.webp';
import pvc_tape  from './images/pvc_tape.webp';
import acrylic from './images/acrylic.webp';
import wpc_board from './images/wpc_board.webp';

function Carousel() {
    const Products = ({ title, src }) => {
        return (
            <div className="relative items-center mx-4 mt-20 overflow-hidden text-center">
                <div className="mx-auto rounded-md w-72 h-96">
                    <img src={src} alt={`Sample of ${title}`} className="object-cover w-full h-full overflow-hidden duration-500 transform rounded-md hover:scale-125" />
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
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3.1,
                }  
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2.1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <div>
            <div className="flex flex-col items-center px-10 mt-20 lg:mt-0 xl:mt-20" data-aos="fade-up" data-aos-duration="2000">
                <p className="text-5xl font-bold text-center font-garamond">Top Products</p>
                <p className="mt-6 text-base font-normal text-center text-subtitle">We are TrendPVC, a leader in the lamination industry supplying premium flat laminated panels to a diverse clientele.</p>
                <div className="w-full h-full">
                    <Slider {...settings}>
                        <Products title="Decorative" src={decorative} />
                        <Products title="PVC Laminates" src={pvc_laminates} />
                        <Products title="Korean Charcoal" src={korean} />
                        <Products title="PVC Tapes" src={pvc_tape} />
                        <Products title="Acrylic Laminates" src={acrylic} />
                        <Products title="WPC Board" src={wpc_board} />
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
