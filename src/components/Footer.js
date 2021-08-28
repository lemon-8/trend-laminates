import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { MdLocationOn, MdCall } from 'react-icons/md';
import { RiFacebookFill, RiTwitterFill } from 'react-icons/ri';
import { FiInstagram } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="bg-whiteSmoke">
            <div className="flex px-10 py-5 text-white xl:px-32 bg-textColor">
                <p className="mr-auto text-xl">Get Connected:</p>
                <div className="flex ml-auto">
                    <a href="https://www.facebook.com/trendpvc/" target="_blank" rel="noreferrer noopener" className="px-3"><RiFacebookFill size={25} /></a>
                    <a href="#" className="px-3"><RiTwitterFill size={25} /></a>
                    <a href="#" className="px-3"><FiInstagram size={25} /></a>
                </div>
            </div>
            <footer className="px-10 text-black md:pr-16 md:pb-10 xl:px-32">
                <div className="grid justify-center grid-cols-6 mt-10 mb-10 text-center md:mt-20 md:text-left">
                    <Link className="col-span-6 text-center md:text-left md:col-span-2" to="/">
                        <p className="w-full text-2xl font-bold uppercase font-garamond">Trend Laminates</p>
                        <p className="text-sm font-normal">A venture by TCS Marketing</p>
                    </Link>
                    <div className="col-span-6 mt-6 md:col-span-1 md:mt-0">
                        <p className="text-2xl font-bold font-garamond">Products</p>
                        <ul className="font-normal list-none">
                            <li className="mt-2">Lorem</li>
                            <li className="mt-2">Ipsum</li>
                            <li className="mt-2">Lorem</li>
                            <li className="mt-2">Ipsum</li>
                        </ul>
                    </div>
                    <div className="col-span-6 mt-6 md:mt-0 md:col-span-1">
                        <p className="text-2xl font-bold font-garamond">Company</p>
                        <ul className="font-normal list-none">
                            <Link to="/"><li className="mt-2 cursor-pointer">Home</li></Link>
                            <Link to="/About"><li className="mt-2 cursor-pointer">About Us</li></Link>
                            <Link to="/Products"><li className="mt-2 cursor-pointer">Products</li></Link>
                            <Link to="/Catalogues"><li className="mt-2 cursor-pointer">Catalogues</li></Link>
                            <Link to="/Contact"><li className="mt-2 cursor-pointer">Contact Us</li></Link>
                        </ul>
                    </div>
                    <div className="col-span-6 mx-auto mt-6 md:mt-0 md:col-span-2">
                        <p className="text-2xl font-bold flex-nowrap font-garamond">Contact Us</p>
                        <div className="flex justify-center mt-4 text-lg font-normal cursor-pointer md:justify-start">
                            <MdCall size={24} />
                            <a href="tel:+91-11 40396922" className="ml-4 text-base cursor-pointer">+91-11 40396922</a>
                        </div>
                        <div className="flex justify-center mt-4 text-lg font-normal cursor-pointer md:justify-start">
                            <AiOutlineMail size={24} />
                            <a href="mailto:info@trendpvc.com" className="ml-4 text-base cursor-pointer">info@trendpvc.com</a>
                        </div>
                        <div className="flex justify-center mt-4 text-lg font-normal md:justify-start">
                            <MdLocationOn size={24} />
                            <p className="ml-4 text-base">A-6, Mangolpuri Industrial Area, Phase 2 Delhi 110034, India</p>
                        </div>
                    </div>
                </div>
            </footer>
            <hr className="px-0 bg-textColor" />
            <p className="py-5 text-base font-semibold text-center">&#169; All rights reserved 2021, designed and developed by lemon8 🍋</p>
        </div>
    )
}

export default Footer;
