import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Slider from "react-slick";
import Carousel from './Carousel';
import Image from 'next/image';
import Link  from 'next/link';

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


    const Reviews = ({ title, src, desc, author }) => {
        return (
            <div className="grid items-center grid-cols-3 gap-10">
                <div className="col-span-3 -mb-2 md:col-span-1">
                    <Image height="400" width="500" src={src} className="" alt="" />
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
            <div className="h-screen px-10 mt-20 xl:px-44" data-aos="fade-up" data-aos-duration="2000">
                <p className="text-5xl font-bold text-center font-garamond">Unparalleled Product Quality</p>
                <p className="mt-4 mb-2 text-base font-normal text-center text-subtitle">Stunning designs that will give you a taste of the future.</p>
                <div className="relative z-20 flex">
                    <div className="absolute z-20 flex flex-col left-28 top-12">
                        <p className="ml-2 text-lg font-normal text-white">With</p>
                        <Image height="40px" width="100%" className="h-10 -mt-4 lg:h-auto" src="/logowhite.png" alt="Trend" />
                    </div>
                    <div className="absolute z-20 flex flex-col right-16 top-12">
                        <p className="ml-2 text-lg font-normal text-white">Without</p>
                        <Image height="40px" width="100%" className="h-10 -mt-4 lg:h-auto" src="/logowhite.png" alt="Trend" />
                    </div>
                </div>
                <ReactCompareSlider style={{ height: "75vh", width: "100%", objectFit: "contain", marginTop: "20px", borderRadius: "5px" }}
                    itemOne={<ReactCompareSliderImage src="/left_compare.png" alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage src="/right_compare.png" alt="Image two" />}
                />
            </div>

            <Carousel />

            <div className="grid items-center justify-center grid-cols-2 py-20 mt-20 md:gap-10 bg-custombg" data-aos="fade-up" data-aos-duration="2000">
                <div className="col-span-2 px-10 md:pl-60 md:col-span-1" >
                    <p className="text-5xl font-bold font-garamond text-custom">Custom solutions catered to your needs.</p>
                    <p className="mt-6 text-xl font-normal text-customdesc">We bring you a dazzling line-up of laminates and PVC sheets for all your needs. From rugged laminates to glossy attractive panels we have you covered.</p>
                    <Link href="/Products">
                        <button className="flex items-center justify-center p-4 py-6 mt-20 text-base font-bold text-black duration-700 ease-out bg-white border border-white w-60 shadow-touch hover:text-white hover:shadow-touch1 h-9 rounded-3xl">See our Products <BsArrowRight className="ml-2" size={30} /></button>
                    </Link>
                </div>
                <div className="relative grid col-span-2 pr-10 md:col-span-1">
                    <div className="rounded-md custom-image-container">
                        <div className="custom-image"></div>
                    </div>
                    <div className="absolute h-auto p-3 bg-white rounded-md right-17 opacity-90 w-44 -top-11">
                        <Image height="24" width="24" src="/leaf.png" />
                        <p className="mt-2 text-xl font-bold font-garamond">Eco Friendly</p>
                        <p className="mt-2 text-xs font-normal">All our products are made with exceptional care for the environment. We follow the best sustainable practices in the industry to assemble our unique eco-friendly inventory.</p>
                    </div>
                    <div className="absolute h-auto p-3 bg-white rounded-md left-13 opacity-90 -bottom-11 w-44">
                        <Image height="24" width="24" src="/star.png" />
                        <p className="mt-2 text-xl font-bold font-garamond">High Quality Panels</p>
                        <p className="mt-2 text-xs font-normal">We bring you a dazzling line-up of laminates and PVC sheets with the most illustrious designs from all over the world.</p>
                    </div>
                </div>
            </div>


            <div className="grid items-center grid-cols-2 px-10 mt-20 md:gap-20 xl:pl-28 xl:pr-60">
                <div className="relative col-span-2 overflow-hidden md:col-span-1 rooms" data-aos="fade-right" data-aos-duration="2000" >
                    <div className="rounded-md rooms">
                        <div className="stunning-design room-design"></div>
                    </div>
                </div>
                <div className="col-span-2 pr-20 my-16 md:col-span-1" data-aos="fade-up" data-aos-duration="2000">
                    <p className="text-4xl font-bold md:text-5xl font-garamond">Stunning Designs</p>
                    <p className="mt-6 text-xl font-light text-textColor">We bring you a dazzling line-up of laminates and PVC sheets with the most illustrious designs from all over the world.</p>
                    <div className="relative">
                        <Link href="/Catalogues">
                            <button className="absolute flex items-center justify-center p-4 py-6 mt-6 text-base font-bold text-black duration-700 border border-black w-60 hover:text-white hover:border-transparent h-9 rounded-3xl button-slide">See Catalogues <BsArrowRight className="ml-2" size={30} /></button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse items-center grid-cols-2 px-10 mt-20 xl:px-44 md:gap-20 md:mt-32 md:grid">
                <div className="col-span-2 pl-16 my-16 md:col-span-1" data-aos="fade-up" data-aos-duration="2000">
                    <p className="text-4xl font-bold md:text-5xl font-garamond">Finest Textures</p>
                    <p className="mt-6 text-xl font-light text-textColor"><span className="italic">Premium textures right at your fingertips. </span>
                        We pay close attention to the finishing and feel of every sheet during the production process so that you get the shiniest, smoothest, and most pleasing textures, which will make your home come alive.
                    </p>
                    <div className="relative">
                        <Link href="About">
                            <button className="absolute flex items-center justify-center p-4 py-6 mt-6 text-base font-bold text-black duration-700 border border-black w-60 hover:text-white hover:border-transparent h-9 rounded-3xl button-slide">Learn About Us <BsArrowRight className="ml-2" size={30} /></button>
                        </Link>
                    </div>
                </div>
                <div className="rounded-md rooms" data-aos="fade-left" data-aos-duration="2000">
                    <div className="finest-texture room-design"></div>
                </div>
            </div>
            <div className="grid items-center grid-cols-2 px-10 mt-20 xl:pl-28 xl:pr-60 md:gap-20 md:mb-20 md:mt-32">
                <div className="rounded-md rooms" data-aos="fade-right" data-aos-duration="2000">
                    <div className="laser-precision room-design"></div>
                </div>
                <div className="col-span-2 pr-20 my-16 md:col-span-1" data-aos="fade-up" data-aos-duration="1000">
                    <p className="text-4xl font-semibold md:text-5xl font-garamond">Laser Precision</p>
                    <p className="mt-6 text-xl font-light text-textColor">Our sophisticated manufacturing process uses cutting-edge technology handled by a team of experts. This allows us to ensure remarkable product quality across our entire catalogue.</p>
                    <div className="relative">
                        <Link href="About">
                            <button className="absolute flex items-center justify-center p-4 py-6 mt-6 text-base font-bold text-black duration-700 border border-black w-60 hover:text-white hover:border-transparent h-9 rounded-3xl button-slide">Learn About Us <BsArrowRight className="ml-2" size={30} /></button>
                        </Link>
                    </div>
                </div>
            </div>


            <div className="mt-10 bg-custombg">
                <Slider {...settings1}>
                    <Reviews title="Satisfied Clients" src="/bedroom.jpg" desc='“Trend PVC Laminates are the best quality laminates. They have designs for all needs”' author="- Vibha Arora  (Bedroom renovation)" />
                    <Reviews title="Satisfied Clients" src="/livingroom.jpg" desc='“Trend PVC Laminates gave my home a very great ambience. Just loved the design.”' author="- Rajesh Chopra  (Home renovation)" />
                    <Reviews title="Satisfied Clients" src="/office.jpg" desc='“Trend PVC Laminates changed the entire look of my office. Best recommendation.”' author="- Rahul Kumar  (Office renovation)" />
                </Slider>
            </div>
        </div>
    )
}

export default Content;
{/*  */ }