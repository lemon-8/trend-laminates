import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

function Hero() {
    return (
        <div>
            <div className="slide-container" />
            <div className="flex flex-col justify-end w-full h-screen px-10 pb-16 xl:px-32">
                <h1 className="text-4xl text-white md:text-7xl font-garamond title"></h1>
                <p className="mt-4 text-lg font-normal text-white opacity-75 xl:w-96 subtitle"></p>
                <button className="flex items-center justify-center p-4 py-4 mt-6 font-medium text-white border border-white w-44 h-9 rounded-2xl">Get in Touch <BsArrowRight className="ml-0.25" size={30} /></button>
            </div>
        </div>
    )
}

export default Hero;
