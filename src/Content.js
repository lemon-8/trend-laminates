import React from 'react';
import leftimage from './images/left_compare.png';
import rightimage from './images/right_compare.png';
import { BsArrowRight } from 'react-icons/bs';
import room4 from './images/room5.png';
import logo from './images/logowhite.png';
import room5 from './images/room6.png';
import room6 from './images/room7.png';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import pvc_laminates from './images/pvc_laminates.png';
import pvc_panel from './images/pvc_panel.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import customdec from './images/customdec.png';
import leaf from './images/leaf.png';
import star from './images/star.png';
import Carousel from './Carousel';

function Content() {


    const settings1 = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        cssEase: "linear",
        autoplaySpeed: 4000,
    };



    const Reviews = ({ title, src, desc, author }) => {
        return (
            <div className="grid items-center grid-cols-3 gap-10">
                <div className="col-span-3 md:col-span-1">
                    <img src={src} className="w-full h-96" alt="" />
                </div>
                <div className="col-span-3 px-2 md:px-20 md:col-span-2">
                    <p className="text-5xl font-garamond text-custom">{title}</p>
                    <p className="mt-6 text-2xl font-normal text-customdesc">{desc}</p>
                    <p className="mt-6 mb-10 text-sm italic font-normal text-customdesc">{author}</p>
                </div>

            </div>
        )
    }
    return (

        <div className="mt-20">
            <div className="h-screen px-10 mt-20 xl:px-32" data-aos="fade-up" data-aos-duration="2000">
                <p className="text-5xl font-bold text-center font-garamond">Unparalleled Product Quality</p>
                <p className="mt-4 mb-2 text-base font-normal text-center text-subtitle">Stunning designs that will give you a taste of the future.</p>
                <div className="relative z-20 flex">
                    <div className="absolute z-20 flex flex-col left-28 top-12">
                        <p className="ml-2 text-lg font-normal text-white">With</p>
                        <img className="h-10 -mt-4 lg:h-auto" src={logo} alt="Trend" />
                    </div>
                    <div className="absolute z-20 flex flex-col right-16 top-12">
                        <p className="ml-2 text-lg font-normal text-white">Without</p>
                        <img className="h-10 -mt-4 lg:h-auto" src={logo} alt="Trend" />
                    </div>
                </div>
                <ReactCompareSlider style={{ height: "75vh", width: "100%", objectFit: "contain", marginTop: "20px" }}
                    itemOne={<ReactCompareSliderImage src={leftimage} alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage src={rightimage} alt="Image two" />}
                />
            </div>


            <Carousel />


            <div className="grid items-center justify-center grid-cols-2 py-20 mt-20 md:gap-10 bg-custombg" data-aos="fade-up" data-aos-duration="2000">
                <div className="col-span-2 px-10 md:px-32 md:col-span-1" >
                    <p className="text-5xl font-bold font-garamond text-custom">Custom solutions catered to your needs.</p>
                    <p className="mt-6 text-xl font-normal text-customdesc">We bring you a dazzling line-up of laminates and PVC sheets for all your needs. From rugged laminates to glossy attractive panels we have you covered.</p>
                    <button className="flex items-center justify-center p-4 py-6 mt-20 text-base font-bold text-black duration-700 ease-out bg-white border border-white w-60 shadow-touch hover:text-white hover:shadow-touch1 h-9 rounded-2xl">See our Products <BsArrowRight className="ml-2" size={30} /></button>
                </div>
                <div className="relative grid col-span-2 pr-10 md:col-span-1">
                    {/* <div className="custom-image"></div> */}
                    <img src={customdec} className="w-10/12 h-full mx-auto" alt="Room with books in shelves" />
                    <div className="absolute h-auto p-3 bg-white rounded-md right-10 opacity-90 w-44 -top-12">
                        <img src={leaf} />
                        <p className="mt-2 text-xl font-bold font-garamond">Eco Friendly</p>
                        <p className="mt-2 text-xs font-normal">All our products are made with exceptional care for the environment. We follow the best sustainable practices in the industry to assemble our unique eco-friendly inventory.</p>
                    </div>
                    <div className="absolute h-auto p-3 bg-white rounded-md -left-10 opacity-90 -bottom-12 w-44">
                        <img src={star} />
                        <p className="mt-2 text-xl font-bold font-garamond">High Quality Panels</p>
                        <p className="mt-2 text-xs font-normal">We bring you a dazzling line-up of laminates and PVC sheets with the most illustrious designs from all over the world.</p>
                    </div>
                </div>
            </div>


            <div className="grid items-center grid-cols-2 px-10 mt-20 md:gap-20 xl:px-32">
                <div className="relative col-span-2 overflow-hidden md:col-span-1" data-aos="fade-right" data-aos-duration="2000" >
                    <img src={room4} className="relative z-10 duration-500 transform hover:scale-125" alt="Image of a room" />
                </div>
                <div className="col-span-2 my-16 md:col-span-1" data-aos="fade-up" data-aos-duration="2000">
                    <p className="text-4xl font-semibold md:text-5xl font-garamond">Stunning Designs</p>
                    <p className="mt-6 text-xl font-light text-justify text-textColor">We bring you a dazzling line-up of laminates and PVC sheets with the most illustrious designs from all over the world.</p>
                    <div className="relative">
                        <button className="absolute flex items-center justify-center p-4 py-6 mt-6 text-base font-bold text-black duration-700 border border-black w-60 hover:text-white hover:border-transparent h-9 rounded-2xl button-slide">See our Products <BsArrowRight className="ml-2" size={30} /></button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse items-center grid-cols-2 px-10 mt-20 xl:px-32 md:gap-20 md:mt-32 md:grid">
                <div className="col-span-2 my-16 md:col-span-1" data-aos="fade-up" data-aos-duration="2000">
                    <p className="text-4xl font-semibold md:text-5xl font-garamond">Finest Textures</p>
                    <p className="mt-6 text-xl font-light text-justify text-textColor">Premium textures right at your fingertips.
                        We pay close attention to the finishing and feel of every sheet during the production process so that you get the <span className="font-medium">shiniest, smoothest, and most pleasing textures,</span> which will make your home come alive.
                    </p>
                    <div className="relative">
                        <button className="absolute flex items-center justify-center p-4 py-6 mt-6 text-base font-bold text-black duration-700 border border-black w-60 hover:text-white hover:border-transparent h-9 rounded-2xl button-slide">See our Products <BsArrowRight className="ml-2" size={30} /></button>
                    </div>
                </div>
                <div className="relative col-span-2 overflow-hidden md:col-span-1" data-aos="fade-left" data-aos-duration="2000">
                    <img src={room5} className="relative z-10 duration-500 transform hover:scale-125" alt="Image of a room" />
                </div>
            </div>
            <div className="grid items-center grid-cols-2 px-10 mt-20 xl:px-32 md:gap-20 md:mb-20 md:mt-32">
                <div className="relative col-span-2 overflow-hidden md:col-span-1" data-aos="fade-right" data-aos-duration="2000">
                    {/* <img src={dots} className="absolute z-0 -right-4 -bottom-10" alt="" /> */}
                    <img src={room6} className="relative z-10 duration-500 transform hover:scale-125" alt="Image of a room" />
                </div>
                <div className="col-span-2 my-16 md:col-span-1" data-aos="fade-up" data-aos-duration="1000">
                    <p className="text-4xl font-semibold md:text-5xl font-garamond">Laser Precision</p>
                    <p className="mt-6 text-xl font-light text-justify text-textColor">Our sophisticated manufacturing process uses cutting-edge technology handled by a team of experts. This allows us to ensure remarkable product quality across our entire catalogue.</p>
                    <div className="relative">
                        <button className="absolute flex items-center justify-center p-4 py-6 mt-6 text-base font-bold text-black duration-700 border border-black w-60 hover:text-white hover:border-transparent h-9 rounded-2xl button-slide">See our Products <BsArrowRight className="ml-2" size={30} /></button>
                    </div>
                </div>
            </div>


            <div className="mt-10 bg-custombg">
                <Slider {...settings1}>
                    <Reviews title="Satisfied Clients" src={pvc_laminates} desc='“Trend PVC Laminates are the best quality laminates. They have designs for all needs”' author="- Vibha Arora  (Bedroom renovation)" />
                    <Reviews title="Satisfied Clients" src={pvc_panel} desc='“Trend PVC Laminates are the best quality laminates. They have designs for all needs”' author="- Vibha Arora  (Bedroom renovation)" />
                    <Reviews title="Satisfied Clients" src={pvc_laminates} desc='“Trend PVC Laminates are the best quality laminates. They have designs for all needs”' author="- Vibha Arora  (Bedroom renovation)" />
                    <Reviews title="Satisfied Clients" src={pvc_panel} desc='“Trend PVC Laminates are the best quality laminates. They have designs for all needs”' author="- Vibha Arora  (Bedroom renovation)" />
                </Slider>
            </div>
        </div>
    )
}

export default Content;
{/*  */ }