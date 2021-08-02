import React from 'react';
import withTrend from './images/with_trend.png';
import withoutTrend from './images/without_trend.png';
import ReactCompareImage from 'react-compare-image';
import leftimage from './images/left_compare.png';
import rightimage from './images/right_compare.png';
import { BsArrowRight } from 'react-icons/bs';
import dots from './images/dots.png';
import room4 from './images/room5.png';
import room5 from './images/room6.png';
import Carousel from 'react-elastic-carousel';
import testimonial from './images/testimonial.png';
import testimonial1 from './images/testimonial1.png';

function Content() {
    return (
        <div className="px-10 mt-20 xl:px-32">
            <div className="flex">
                <div className="flex flex-col">
                    <p className="text-lg font-bold">With</p>
                    <img className="h-10 -mt-4 -ml-1 lg:h-auto" src={withTrend} />
                </div>
                <div className="flex flex-col ml-auto">
                    <p className="ml-1 text-lg font-bold text-without">Without</p>
                    <img className="h-10 -mt-4 lg:h-auto" src={withoutTrend} />
                </div>
            </div>
            <ReactCompareImage leftImage={leftimage} rightImage={rightimage} sliderLineWidth={8} handleSize={60} />
            <p className="mt-6 text-xl font-light text-justify">We are TrendPVC, a <span className="font-bold">leader in the lamination industry</span> supplying premium flat laminated panels to a diverse clientele. We are a fully family-owned business that prides itself on being the trendsetters in the interior industry, because of our innovative and futuristic approach to design solutions</p>
            <div className="flex justify-center">
                <button className="flex items-center justify-center p-4 mt-6 font-medium text-black border border-product w-44 h-9 rounded-2xl">Our Products <BsArrowRight className="ml-0.25" size={30} /></button>
            </div>
            <div className="grid items-center grid-cols-2 mt-20 md:gap-20">
                <div className="relative col-span-2 md:col-span-1">
                    <img src={dots} className="absolute z-0 -right-4 -bottom-10" />
                    <img src={room4} className="relative z-10 w-11/12" />
                </div>
                <div className="col-span-2 my-16 md:col-span-1">
                    <p className="text-4xl font-semibold md:text-5xl font-garamond">Stunning Designs</p>
                    <p className="mt-6 text-xl font-light text-justify text-textColor">Get your apartment fully furnished by a <span className="font-medium"> professional interior designer </span> and rent high-quality furniture on a monthly subscription.</p>
                </div>
            </div>
            <div className="flex flex-col-reverse items-center grid-cols-2 mt-20 md:gap-20 md:mt-32 md:grid">
                <div className="col-span-2 my-16 md:col-span-1">
                    <p className="text-4xl font-semibold md:text-5xl font-garamond">Finest Textures</p>
                    <p className="mt-6 text-xl font-light text-justify text-textColor">Premium textures right at your fingertips.
                        We pay close attention to the finishing and feel of every sheet during the production process so that you get the <span className="font-medium">shiniest, smoothest, and most pleasing textures,</span> which will make your home come alive.
                    </p>
                </div>
                <div className="relative col-span-2 md:col-span-1">
                    <img src={dots} className="absolute z-0 -left-16 -bottom-10" />
                    <img src={room5} className="relative z-10 w-11/12" />
                </div>
            </div>
            <div className="grid items-center grid-cols-2 mt-20 md:gap-20 md:mb-20 md:mt-32">
                <div className="relative col-span-2 md:col-span-1">
                    <img src={dots} className="absolute z-0 -right-4 -bottom-10" />
                    <img src={room4} className="relative z-10 w-11/12" />
                </div>
                <div className="col-span-2 my-16 md:col-span-1">
                    <p className="text-4xl font-semibold md:text-5xl font-garamond">Stunning Designs</p>
                    <p className="mt-6 text-xl font-light text-justify text-textColor">Get your apartment fully furnished by a <span className="font-medium"> professional interior designer </span> and rent high-quality furniture on a monthly subscription.</p>
                </div>
            </div>
            <div className="flex flex-col-reverse items-center grid-cols-2 mt-20 md:gap-20 md:mt-32 md:mb-28 md:grid">
                <div className="col-span-2 my-16 md:col-span-1">
                    <p className="text-4xl font-semibold md:text-5xl font-garamond">Finest Textures</p>
                    <p className="mt-6 text-xl font-light text-justify text-textColor">Premium textures right at your fingertips.
                        We pay close attention to the finishing and feel of every sheet during the production process so that you get the <span className="font-medium">shiniest, smoothest, and most pleasing textures,</span> which will make your home come alive.
                    </p>
                </div>
                <div className="relative col-span-2 md:col-span-1">
                    <img src={dots} className="absolute z-0 -left-16 -bottom-10" />
                    <img src={room5} className="relative z-10 w-11/12" />
                </div>
            </div>
            <div className="relative h-full py-4 mt-10 md:h-96 bg-carousel">
                <hr className="h-1 mx-6 my-5 bg-hr" />
                <Carousel itemsToShow={1} itemsToScroll={1} enableAutoPlay autoPlaySpeed={5000} >
                    <div className="grid items-center grid-cols-8 md:gap-10">
                        <div className="relative w-40 col-span-8 pt-20 mx-20 mt-10 mb-10 rounded-md md:col-span-4 lg:col-span-3 h-36 bg-testimonial">
                            <img src={testimonial} className="absolute z-10 w-full -bottom-5 -right-1/4" />
                            <img src={testimonial1} className="absolute w-full -top-10 -left-10" />
                        </div>
                        <div className="relative col-span-8 md:col-span-4 lg:col-span-5">
                            <p className="text-2xl font-light">“Trend PVC Laminates are the best quality laminates. They have designs for all needs”</p>
                            <p className="mt-6 text-sm italic font-light">- Vibha Arora // Bedroom renovation</p>
                        </div>
                    </div>
                    <div className="grid items-center grid-cols-8 md:gap-10">
                        <div className="relative w-40 col-span-8 pt-20 mx-20 mt-10 mb-10 rounded-md md:col-span-4 lg:col-span-3 h-36 bg-testimonial">
                            <img src={testimonial} className="absolute z-10 w-full -bottom-5 -right-1/4" />
                            <img src={testimonial1} className="absolute w-full -top-10 -left-10" />
                        </div>
                        <div className="col-span-8 md:col-span-4 lg:col-span-5">
                            <p className="text-2xl font-light">“Trend PVC Laminates are the best quality laminates. They have designs for all needs”</p>
                            <p className="mt-6 text-sm italic font-light">- Vibha Arora // Bedroom renovation</p>
                        </div>
                    </div>
                    <div className="grid items-center grid-cols-8 md:gap-10">
                        <div className="relative w-40 col-span-8 pt-20 mx-20 mt-10 mb-10 rounded-md md:col-span-4 lg:col-span-3 h-36 bg-testimonial">
                            <img src={testimonial} className="absolute z-10 w-full -bottom-5 -right-1/4" />
                            <img src={testimonial1} className="absolute w-full -top-10 -left-10" />
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
