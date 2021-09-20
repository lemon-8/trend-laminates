import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import decorative from './images/decorative-1.webp';
import decorative1 from './images/decorative-1.jpg';
import pvc_laminates from './images/premium-1.webp';
import pvc_laminates1 from './images/premium-1.jpg';
import korean from './images/korean1.webp';
import korean1 from './images/korean1.jpg';
import pvc_tape from './images/tape-1.webp';
import pvc_tape1 from './images/tape-1.jpg';
import acrylic from './images/glossy-1.webp';
import acrylic1 from './images/glossy-1.jpg';
import wpc_board from './images/wpc-1.webp';
import wpc_board1 from './images/wpc-1.jpg';

function Carousel() {
    const Products = ({ title, src, src1 }) => {
        return (
            <div className="relative items-center mx-4 mt-20 overflow-hidden text-center">
                <div className="mx-auto overflow-hidden rounded-md max-w-72 h-96">
                    <picture>
                        <source srcset={src} type="image/webp" />
                        <source srcset={src1} type="image/jpg" />
                        <img src={src1} alt={`Sample of ${title}`} className="object-cover w-full h-full duration-500 transform rounded-md hover:scale-125" />
                    </picture>
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
                    slidesToShow: 1.05,
                    autoplay: false,
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
                        <Products title="Decorative" src={decorative} src1={decorative1} />
                        <Products title="PVC Laminates" src={pvc_laminates} src1={pvc_laminates1} />
                        <Products title="Korean Charcoal" src={korean}  src1={korean1} />
                        <Products title="PVC Tapes" src={pvc_tape} src1={pvc_tape1} />
                        <Products title="Acrylic Laminates" src={acrylic} src1={acrylic1} />
                        <Products title="WPC Board" src={wpc_board} src1={wpc_board1} />
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
