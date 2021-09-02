import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Content from './Content';

function Hero() {
    return (
        <div className="overflow-hidden">
            <div className="slide-container" />
            <div className="flex flex-col justify-end w-full h-screen px-10 pb-40 xl:px-44">
                <p className="text-4xl text-white md:text-7xl font-garamond title"></p>
                <p className="mt-4 text-lg font-normal text-white opacity-75 xl:w-96 subtitle"></p>
                <Link to="/Contact">
                    <button className="flex items-center justify-center w-48 p-4 py-6 mt-6 font-medium text-white duration-700 ease-out border border-white shadow-get h-9 rounded-3xl hover:text-black hover:shadow-get1">Get in Touch <BsArrowRight className="ml-2" size={30} /></button>
                </Link>
            </div>
            <Content />
        </div>
    )
}

export default Hero;
