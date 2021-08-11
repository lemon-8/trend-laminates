import React from 'react';
import decorative from './images/decorative.png';
import mdf_board from './images/mdf_board.png';
import pvc_laminates from './images/pvc_laminates.png';
import pvc_panel from './images/pvc_panel.png';
import pvc_tape from './images/pvc_tape.png';
import korean from './images/korean.png';
import acrylic from './images/acrylic.png';
import wpc_board from './images/wpc_board.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRight } from 'react-icons/bs';

function Carousel() {
    const Products = ({ title, src, type }) => {
        return (
            <div className="relative items-center mx-4 mt-20 overflow-hidden text-center">
                <div className="rounded-md products">
                    <div className={"product-list " + type} />
                </div>
                <button className="absolute left-0 right-0 w-48 py-2 mx-auto text-center text-black duration-500 bg-white hover:border-black hover:text-white button-slide rounded-3xl bottom-5 product-text">{title}</button>
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
                        <Products title="Decorative" type="decorative" src={decorative} />
                        <Products title="MDF Board" type="mdf_board" src={mdf_board} />
                        <Products title="PVC Laminates" type="pvc_laminates" src={pvc_laminates} />
                        <Products title="Korean Charcoal" type="korean" src={korean} />
                        <Products title="PVC 3D PANEL" type="pvc_panel" src={pvc_panel} />
                        <Products title="PVC Tapes" type="pvc_tape" src={pvc_tape} />
                        <Products title="Acrylic Laminates" type="acrylic" src={acrylic} />
                        <Products title="WPC Board" type="wpc_board" src={wpc_board} />
                    </Slider>
                </div>
                <button className="flex items-center justify-center p-4 py-6 mt-20 text-base font-bold text-black duration-700 ease-out border border-black w-60 shadow-touch hover:text-white hover:shadow-touch1 h-9 rounded-3xl">See our Products <BsArrowRight className="ml-2" size={30} /></button>
            </div>
        </div>
    )
}

export default Carousel
