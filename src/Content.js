import React from 'react';
import leftimage from './images/left_compare.png';
import rightimage from './images/right_compare.png';
import { BsArrowRight } from 'react-icons/bs';
import room4 from './images/room5.png';
import logo from './images/logowhite.png';
import room5 from './images/room6.png';
import room6 from './images/room7.png';
import Carousel from 'react-elastic-carousel';
import testimonial from './images/testimonial.png';
import testimonial1 from './images/testimonial1.png';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import decorative from './images/decorative.png';
import mdf_board from './images/mdf_board.png';
import pvc_laminates from './images/pvc_laminates.png';
import pvc_panel from './images/pvc_panel.png';
import pvc_tape from './images/pvc_tape.png';
import korean from './images/korean.png';
import acrylic from './images/acrylic.png';
import wpc_board from './images/wpc_board.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import customdec from './images/customdec.png';
import leaf from './images/leaf.png';
import star from './images/star.png';

function Content() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToScroll: 1,
        cssEase: "linear",
        swipeToSlide: true,
    };

    const Products = ({ title, src }) => {
        return (
            <div className="relative px-16 mt-20">
                <img src={src} className="rounded-md product-list h-96" alt="" />
                <h3 className="absolute left-0 right-0 w-48 p-4 mx-auto text-center text-black bg-white rounded-md bottom-20 product-text">{title}</h3>
            </div>
        )
    }
    return (

        <div className="px-10 mt-20 xl:px-32">
            <div className="h-screen" data-aos="fade-up" data-aos-duration="2000">
                <p className="text-5xl font-bold text-center font-garamond">Unparalleled Product Quality</p>
                <p className="mt-4 mb-2 text-base font-normal text-center text-subtitle">Stunning designs that will give you a taste of the future.</p>
                <div className="z-20 flex">
                    <div className="absolute z-20 flex flex-col left-28 top-40">
                        <p className="ml-2 text-lg font-normal text-white">With</p>
                        <img className="h-10 -mt-4 lg:h-auto" src={logo} alt="Trend" />
                    </div>
                    <div className="absolute z-20 flex flex-col right-20 top-40">
                        <p className="ml-2 text-lg font-normal text-white">Without</p>
                        <img className="h-10 -mt-4 lg:h-auto" src={logo} alt="Trend" />
                    </div>
                </div>
                <ReactCompareSlider style={{ height: "75vh", width: "100%", objectFit: "contain", marginTop: "20px" }}
                    itemOne={<ReactCompareSliderImage src={leftimage} alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage src={rightimage} alt="Image two" />}
                />
            </div>


            <div className="flex flex-col items-center">
                <p className="text-5xl font-bold text-center font-garamond">Top Products</p>
                <p className="mt-6 text-base font-normal text-center text-subtitle">We are TrendPVC, a leader in the lamination industry supplying premium flat laminated panels to a diverse clientele.</p>
                <div className="w-full h-full">
                    <Slider {...settings}>
                        <Products title="Decorative" src={decorative} />
                        <Products title="MDF Board" src={mdf_board} />
                        <Products title="PVC Laminates" src={pvc_laminates} />
                        <Products title="Korean Charcoal" src={korean} />
                        <Products title="PVC 3D PANEL" src={pvc_panel} />
                        <Products title="PVC Tapes" src={pvc_tape} />
                        <Products title="Acrylic Laminates" src={acrylic} />
                        <Products title="WPC Board" src={wpc_board} />
                    </Slider>
                </div>
                <button className="flex items-center justify-center p-4 py-6 mt-20 text-base font-bold text-black duration-700 ease-out border border-black w-60 shadow-touch hover:text-white hover:shadow-touch1 h-9 rounded-2xl">See our Products <BsArrowRight className="ml-2" size={30} /></button>
            </div>


            <div className="grid items-center justify-center grid-cols-3 gap-5 py-20 mt-20 bg-custombg">
                <div className="col-span-3 px-10 md:col-span-1" data-aos="fade-up" data-aos-duration="2000">
                    <p className="text-5xl font-bold font-garamond text-custom">Custom solutions catered to your needs.</p>
                    <p className="mt-6 text-xl font-normal text-customdesc">We bring you a dazzling line-up of laminates and PVC sheets for all your needs. From rugged laminates to glossy attractive panels we have you covered.</p>
                    <button className="flex items-center justify-center p-4 py-6 mt-20 text-base font-bold text-black duration-700 ease-out bg-white border border-white w-60 shadow-touch hover:text-white hover:shadow-touch1 h-9 rounded-2xl">See our Products <BsArrowRight className="ml-2" size={30} /></button>
                </div>
                <div className="relative col-span-3 pr-10 md:col-span-2" data-aos="fade-up" data-aos-duration="2000">
                    <img src={customdec} className="w-10/12 mx-auto" alt="Room with books in shelves" />
                    <div className="absolute h-auto p-3 bg-white rounded-md w-44 -top-12 right-10">
                        <img src={leaf} />
                        <p className="mt-2 text-xl font-bold font-garamond">Eco Friendly</p>
                        <p className="mt-2 text-xs font-normal">All our products are made with exceptional care for the environment. We follow the best sustainable practices in the industry to assemble our unique eco-friendly inventory.</p>
                    </div>
                    <div className="absolute left-0 h-auto p-3 bg-white rounded-md -bottom-12 w-44">
                        <img src={star} />
                        <p className="mt-2 text-xl font-bold font-garamond">High Quality Panels</p>
                        <p className="mt-2 text-xs font-normal">We bring you a dazzling line-up of laminates and PVC sheets with the most illustrious designs from all over the world.</p>
                    </div>
                </div>
            </div>


            <div className="grid items-center grid-cols-2 mt-20 md:gap-20">
                <div className="relative col-span-2 overflow-hidden md:col-span-1" data-aos="fade-right" data-aos-duration="2000" >
                    <img src={room4} className="relative z-10 duration-500 transform hover:scale-125" alt="Image of a room" />
                </div>
                <div className="col-span-2 my-16 md:col-span-1" data-aos="fade-up" data-aos-duration="2000">
                    <p className="text-4xl font-semibold md:text-5xl font-garamond">Stunning Designs</p>
                    <p className="mt-6 text-xl font-light text-justify text-textColor">We bring you a dazzling line-up of laminates and PVC sheets with the most illustrious designs from all over the world.</p>
                    <button className="flex items-center justify-center p-4 py-6 mt-6 text-base font-bold text-black duration-700 ease-out bg-white border border-black w-60 shadow-touch hover:text-white hover:shadow-touch1 h-9 rounded-2xl">See our Products <BsArrowRight className="ml-2" size={30} /></button>
                </div>
            </div>
            <div className="flex flex-col-reverse items-center grid-cols-2 mt-20 md:gap-20 md:mt-32 md:grid">
                <div className="col-span-2 my-16 md:col-span-1" data-aos="fade-up" data-aos-duration="2000">
                    <p className="text-4xl font-semibold md:text-5xl font-garamond">Finest Textures</p>
                    <p className="mt-6 text-xl font-light text-justify text-textColor">Premium textures right at your fingertips.
                        We pay close attention to the finishing and feel of every sheet during the production process so that you get the <span className="font-medium">shiniest, smoothest, and most pleasing textures,</span> which will make your home come alive.
                    </p>
                    <button className="flex items-center justify-center p-4 py-6 mt-6 text-base font-bold text-black duration-700 ease-out bg-white border border-black w-60 shadow-touch hover:text-white hover:shadow-touch1 h-9 rounded-2xl">See our Products <BsArrowRight className="ml-2" size={30} /></button>
                </div>
                <div className="relative col-span-2 overflow-hidden md:col-span-1" data-aos="fade-left" data-aos-duration="2000">
                    <img src={room5} className="relative z-10 duration-500 transform hover:scale-125" alt="Image of a room" />
                </div>
            </div>
            <div className="grid items-center grid-cols-2 mt-20 md:gap-20 md:mb-20 md:mt-32">
                <div className="relative col-span-2 overflow-hidden md:col-span-1" data-aos="fade-right" data-aos-duration="2000">
                    {/* <img src={dots} className="absolute z-0 -right-4 -bottom-10" alt="" /> */}
                    <img src={room6} className="relative z-10 duration-500 transform hover:scale-125" alt="Image of a room" />
                </div>
                <div className="col-span-2 my-16 md:col-span-1" data-aos="fade-up" data-aos-duration="2000">
                    <p className="text-4xl font-semibold md:text-5xl font-garamond">Laser Precision</p>
                    <p className="mt-6 text-xl font-light text-justify text-textColor">Our sophisticated manufacturing process uses cutting-edge technology handled by a team of experts. This allows us to ensure remarkable product quality across our entire catalogue.</p>
                    <button className="flex items-center justify-center p-4 py-6 mt-6 text-base font-bold text-black duration-700 ease-out bg-white border border-black w-60 shadow-touch hover:text-white hover:shadow-touch1 h-9 rounded-2xl">See our Products <BsArrowRight className="ml-2" size={30} /></button>
                </div>
            </div>


            <div className="relative h-full py-4 mt-10 md:h-96 bg-carousel" data-aos="fade-up" data-aos-duration="2000">
                <hr className="h-1 mx-6 my-5 bg-hr" />
                <Carousel itemsToShow={1} itemsToScroll={1} enableAutoPlay autoPlaySpeed={5000} >
                    <div className="grid items-center grid-cols-8 md:gap-10">
                        <div className="relative w-40 col-span-8 pt-20 mx-20 mt-10 mb-10 rounded-md md:col-span-4 lg:col-span-3 h-36 bg-testimonial">
                            <img src={testimonial} className="absolute z-10 w-full -bottom-5 -right-1/4" alt="" />
                            <img src={testimonial1} className="absolute w-full -top-10 -left-10" alt="" />
                        </div>
                        <div className="relative col-span-8 md:col-span-4 lg:col-span-5">
                            <p className="text-2xl font-light">“Trend PVC Laminates are the best quality laminates. They have designs for all needs”</p>
                            <p className="mt-6 text-sm italic font-light">- Vibha Arora // Bedroom renovation</p>
                        </div>
                    </div>
                    <div className="grid items-center grid-cols-8 md:gap-10">
                        <div className="relative w-40 col-span-8 pt-20 mx-20 mt-10 mb-10 rounded-md md:col-span-4 lg:col-span-3 h-36 bg-testimonial">
                            <img src={testimonial} className="absolute z-10 w-full -bottom-5 -right-1/4" alt="" />
                            <img src={testimonial1} className="absolute w-full -top-10 -left-10" alt="" />
                        </div>
                        <div className="col-span-8 md:col-span-4 lg:col-span-5">
                            <p className="text-2xl font-light">“Trend PVC Laminates are the best quality laminates. They have designs for all needs”</p>
                            <p className="mt-6 text-sm italic font-light">- Vibha Arora // Bedroom renovation</p>
                        </div>
                    </div>
                    <div className="grid items-center grid-cols-8 md:gap-10">
                        <div className="relative w-40 col-span-8 pt-20 mx-20 mt-10 mb-10 rounded-md md:col-span-4 lg:col-span-3 h-36 bg-testimonial">
                            <img src={testimonial} className="absolute z-10 w-full -bottom-5 -right-1/4" alt="" />
                            <img src={testimonial1} className="absolute w-full -top-10 -left-10" alt="" />
                        </div>
                        <div className="col-span-8 md:col-span-4 lg:col-span-5">
                            <p className="text-2xl font-light">“Trend PVC Laminates are the best quality laminates. They have designs for all needs”</p>
                            <p className="mt-6 text-sm italic font-light">- Vibha Arora // Bedroom renovation</p>
                        </div>
                    </div>
                </Carousel>
                <hr className="h-1 px-10 m-6 bg-hr" />
            </div>
        </div>
    )
}

export default Content;
{/*  */ }