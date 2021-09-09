import React from 'react';
import leftimage from './images/left_compare.webp';
import leftimage1 from './images/left_compare.png';
import rightimage from './images/right_compare.webp';
import rightimage1 from './images/right_compare.png';
import { BsArrowRight } from 'react-icons/bs';
import trend from './images/trend.webp';
import trend1 from './images/trend.png';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leaf from './images/leaf.webp';
import leaf1 from './images/leaf.png';
import star from './images/star.webp';
import star1 from './images/star.png';
import Carousel from './Carousel';
import office from './images/office.webp';
import living_room from './images/livingroom.webp';
import bed_room from './images/bedroom.webp';
import office1 from './images/office.jpg';
import living_room1 from './images/livingroom.jpg';
import bed_room1 from './images/bedroom.jpg';
import { Link } from 'react-router-dom';
import custom from './images/customdec.webp';
import custom1 from './images/customdec.jpg';
import stunning from './images/home-stunning-designs.webp';
import stunning1 from './images/home-stunning-designs.jpg';
import finest from './images/home-finest-textures.webp';
import finest1 from './images/home-finest-textures.jfif';
import laser from './images/home-laser-precision.webp';
import laser1 from './images/home-laser-precision.jpg';

function Content() {

    const settings1 = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        cssEase: "linear",
        autoplaySpeed: 3500,
        pauseOnHover: false,
    };


    const Reviews = ({ title, src, src1, desc, author }) => {
        return (
            <div className="grid items-center grid-cols-5 gap-10">
                <div className="col-span-5 md:col-span-2">
                    <picture>
                        <source srcSet={src} type="image/webp" />
                        <source srcSet={src1} type="image/jpg" />
                        <img src={src1} className="w-full h-64 md:h-96" alt="" />
                    </picture>
                </div>
                <div className="col-span-5 px-10 lg:px-20 md:col-span-3">
                    <p className="text-5xl font-garamond text-custom">{title}</p>
                    <p className="mt-6 text-2xl font-normal text-customdesc">{desc}</p>
                    <p className="mt-6 mb-10 text-sm italic font-normal text-customdesc">{author}</p>
                </div>
            </div>
        )
    }
    return (

        <div className="mt-20">
            <div className="h-screen px-10 xl:px-44" data-aos="fade-up" data-aos-duration="2000">
                <p className="text-5xl font-bold text-center font-garamond">Unparalleled Product Quality</p>
                <p className="mt-4 mb-2 text-base font-normal text-center text-subtitle">Stunning designs that will give you a taste of the future.</p>
                <div className="relative z-20 flex">
                    <div className="absolute left-0 z-20 flex flex-col md:left-28 top-8 md:top-12">
                        <p className="ml-2 text-lg font-normal text-white">With</p>
                        <picture>
                            <source srcSet={trend} type="image/webp" />
                            <source srcSet={trend1} type="image/jpg" />
                            <img src={trend1} alt="Trend" className="h-10 -mt-4 lg:h-auto" />
                        </picture>
                    </div>
                    <div className="absolute right-0 z-20 flex flex-col md:right-16 top-8 md:top-12">
                        <p className="ml-2 text-lg font-normal text-white">Without</p>
                        <picture>
                            <source srcSet={trend} type="image/webp" />
                            <source srcSet={trend1} type="image/jpg" />
                            <img src={trend1} alt="Trend" className="h-10 -mt-4 lg:h-auto" />
                        </picture>
                    </div>
                </div>
                <div className="bg-black">
                    <ReactCompareSlider className="compare-slider" onlyHandleDraggable={true} style={{ height: "75vh", opacity: "0.8", width: "100%", objectFit: "contain", marginTop: "20px", borderRadius: "5px" }}
                        itemOne={<ReactCompareSliderImage src={leftimage} srcSet={leftimage1} alt="Trending style Image" />}
                        itemTwo={<ReactCompareSliderImage src={rightimage} srcSet={rightimage1} alt="Non Trending style Image" />}
                    />
                </div>
            </div>

            <Carousel />

            <div className="grid items-center justify-center grid-cols-2 py-20 mt-20 md:gap-10 bg-custombg" data-aos="fade-up" data-aos-duration="2000">
                <div className="col-span-2 px-10 xl:pl-60 md:col-span-1" >
                    <p className="text-4xl font-bold lg:text-5xl font-garamond text-custom">Custom solutions catered to your needs.</p>
                    <p className="mt-6 text-xl font-normal text-customdesc">We bring you a dazzling line-up of laminates and PVC sheets for all your needs. From rugged laminates to glossy attractive panels we have you covered.</p>
                    <Link to="/Products">
                        <button className="flex items-center justify-center p-4 py-6 mt-20 text-base font-bold text-black duration-700 ease-out bg-white border border-white w-60 shadow-touch hover:text-white hover:shadow-touch1 h-9 rounded-3xl">See our Products <BsArrowRight className="ml-2" size={30} /></button>
                    </Link>
                </div>
                <div className="relative grid col-span-2 px-10 pr-10 my-20 mt-36 lg:my-16 xl:my-0 md:col-span-1">
                    <div className="mx-auto overflow-hidden rounded-md w-72 h-96 lg:h-100 lg:w-96">
                        <picture>
                            <source srcSet={custom} type="image/webp" />
                            <source srcSet={custom1} type="image/jpg" />
                            <img src={custom1} alt="" className="object-cover w-full h-full duration-500 transform rounded-md hover:scale-125" />
                        </picture>
                    </div>
                    <div className="absolute w-40 h-auto p-3 bg-white rounded-md -top-28 right-2 xl:right-17 opacity-90 xl:w-44 xl:-top-11">
                        <picture>
                            <source srcSet={leaf} type="image/webp" />
                            <source srcSet={leaf1} type="image/jpg" />
                            <img src={leaf1} alt="leaf" className="h-5 md:h-auto" />
                        </picture>
                        <p className="mt-2 text-lg font-bold md:text-xl font-garamond">Eco Friendly</p>
                        <p className="mt-2 text-xs font-normal">All our products are made with exceptional care for the environment. We follow the best sustainable practices in the industry to assemble our unique eco-friendly inventory.</p>
                    </div>
                    <div className="absolute w-40 h-auto p-3 bg-white rounded-md left-2 xl:left-13 opacity-90 -bottom-28 xl:-bottom-11 xl:w-44">
                        <picture>
                            <source srcSet={star} type="image/webp" />
                            <source srcSet={star1} type="image/jpg" />
                            <img src={star1} alt="star" className="h-5 md:h-auto" />
                        </picture>
                        <p className="mt-2 text-lg font-bold md:text-xl font-garamond">High Quality Panels</p>
                        <p className="mt-2 text-xs font-normal">We bring you a dazzling line-up of laminates and PVC sheets with the most illustrious designs from all over the world.</p>
                    </div>
                </div>
            </div>


            <div className="grid items-center grid-cols-2 px-10 mt-20 xl:pl-28 xl:pr-60 md:gap-10 lg:gap-20">
                <div className="mx-auto overflow-hidden rounded-md w-72 h-96 lg:w-100 lg:h-120" data-aos="fade-right" data-aos-duration="2000">
                    <picture>
                        <source srcSet={stunning} type="image/webp" />
                        <source srcSet={stunning1} type="image/jpg" />
                        <img src={stunning1} alt="Sample of a room design" className="object-cover w-full h-full duration-500 transform rounded-md hover:scale-125" />
                    </picture>
                </div>
                <div className="col-span-2 my-16 md:my-10 lg:pr-20 md:col-span-1" data-aos="fade-up" data-aos-duration="1000">
                    <p className="text-4xl font-bold lg:text-5xl font-garamond">Stunning Designs</p>
                    <p className="mt-6 text-xl font-light text-textColor">We bring you a dazzling line-up of laminates and PVC sheets with the most illustrious designs from all over the world.</p>
                    <Link className="relative" to="/Catalogues">
                        <button className="absolute flex items-center justify-center p-4 py-6 mt-6 text-base font-bold text-black duration-700 border border-black w-60 hover:text-white hover:border-transparent h-9 rounded-3xl button-slide">See Catalogues <BsArrowRight className="ml-2" size={30} /></button>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col-reverse grid-cols-2 px-10 mt-20 md:items-center xl:px-44 md:gap-10 lg:gap-20 md:mt-32 md:grid">
                <div className="my-16 lg:pl-16" data-aos="fade-up" data-aos-duration="2000">
                    <p className="text-4xl font-bold lg:text-5xl font-garamond">Finest Textures</p>
                    <p className="mt-6 text-xl font-light text-textColor"><span className="italic">Premium textures right at your fingertips. </span>
                        We pay close attention to the finishing and feel of every sheet during the production process so that you get the shiniest, smoothest, and most pleasing textures, which will make your home come alive.
                    </p>
                    <Link className="relative" to="/About">
                        <button className="absolute flex items-center justify-center p-4 py-6 mt-6 text-base font-bold text-black duration-700 border border-black w-60 hover:text-white hover:border-transparent h-9 rounded-3xl button-slide">Learn About Us <BsArrowRight className="ml-2" size={30} /></button>
                    </Link>
                </div>
                <div className="m-0 overflow-hidden rounded-md lg:mx-auto w-72 h-96 lg:w-100 lg:h-120" data-aos="fade-right" data-aos-duration="2000">
                    <picture>
                        <source srcSet={finest} type="image/webp" />
                        <source srcSet={finest1} type="image/jpg" />
                        <img src={finest1} alt="Sample of a room design" className="object-cover w-full h-full duration-500 transform rounded-md hover:scale-125" />
                    </picture>
                </div>
            </div>

            <div className="grid items-center grid-cols-2 px-10 mt-20 xl:pl-28 xl:pr-60 md:gap-10 lg:gap-20 md:mb-20">
                <div className="mx-auto overflow-hidden rounded-md w-72 h-96 lg:w-100 lg:h-120" data-aos="fade-right" data-aos-duration="2000">
                    <picture>
                        <source srcSet={laser} type="image/webp" />
                        <source srcSet={laser1} type="image/jpg" />
                        <img src={laser1} alt="Sample of a room design" className="object-cover w-full h-full duration-500 transform rounded-md hover:scale-125" />
                    </picture>
                </div>
                <div className="col-span-2 my-16 lg:pr-20 md:col-span-1" data-aos="fade-up" data-aos-duration="1000">
                    <p className="text-4xl font-semibold md:text-5xl font-garamond">Laser Precision</p>
                    <p className="mt-6 text-xl font-light text-textColor">Our sophisticated manufacturing process uses cutting-edge technology handled by a team of experts. This allows us to ensure remarkable product quality across our entire catalogue.</p>
                    <Link className="relative" to="/About">
                        <button className="absolute flex items-center justify-center p-4 py-6 mt-6 text-base font-bold text-black duration-700 border border-black w-60 hover:text-white hover:border-transparent h-9 rounded-3xl button-slide">Learn About Us <BsArrowRight className="ml-2" size={30} /></button>
                    </Link>
                </div>
            </div>


            <div className="mt-20 md:mt-10 bg-custombg">
                <Slider {...settings1}>
                    <Reviews title="Satisfied Clients" src={bed_room} src1={bed_room1} desc='“Trend PVC Laminates are the best quality laminates. They have designs for all needs”' author="- Vibha Arora  (Bedroom renovation)" />
                    <Reviews title="Satisfied Clients" src={living_room} src1={living_room1} desc='“Trend PVC Laminates gave my home a very great ambience. Just loved the design.”' author="- Rajesh Chopra  (Home renovation)" />
                    <Reviews title="Satisfied Clients" src={office} src1={office1} desc='“Trend PVC Laminates changed the entire look of my office. Best recommendation.”' author="- Rahul Kumar  (Office renovation)" />
                </Slider>
            </div>
        </div>
    )
}

export default Content;