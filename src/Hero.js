import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

function Hero() {
    return (
        <div>
            <div className="slide-container" />
            <div className="flex flex-col justify-end w-full h-screen px-10 pb-16 xl:px-32">
                <h1 className="text-4xl text-white md:text-7xl font-garamond title"></h1>
                <p className="mt-4 text-lg font-normal text-white opacity-75 xl:w-96 subtitle"></p>
                <button className="flex items-center justify-center w-48 p-4 py-6 mt-6 font-medium text-white duration-300 ease-out border border-white shadow-touch h-9 rounded-2xl hover:text-white hover:shadow-touch1 hover:border-black" data-aos="fade-up" data-aos-duration="2000">Get in Touch <BsArrowRight className="ml-2" size={30} /></button>
            </div>
        </div>
    )
}

export default Hero;
