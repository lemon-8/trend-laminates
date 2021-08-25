import React from 'react';
import { BsChevronDown, BsArrowRight } from 'react-icons/bs';
import { MdLocationOn, MdCall, MdMail } from 'react-icons/md';

function Contact() {
    const options = [
        {
            id: 1,
            option: "Select a product or just leave this blank",
        },
        {
            id: 2,
            option: "Decorative Laminates"
        },
        {
            id: 3,
            option: "Acrylic Laminates"
        },
        {
            id: 4,
            option: "PVC 3D Laminates"
        },
        {
            id: 5,
            option: "MDF Boards"
        },
        {
            id: 6,
            option: "WPC Boards"
        },
        {
            id: 7,
            option: "PVC Edge Band Tapes"
        },
        {
            id: 8,
            option: "Korean Charcoal Panels"
        },
        {
            id: 9,
            option: "PVC 3D Panels",
        }
    ]
    return (
        <div>
            <div className="flex items-end pb-12 contact">
                <p className="px-10 text-white xl:px-44 text-7xl font-garamond">Get in Touch</p>
            </div>

            <div className="px-10 mt-12 xl:px-44">
                <p className="text-lg font-light">A range of avant-garde products, all created meticulously with the finest raw material available to the world.
                    Open your arms to the smoothest textures and the most stunning designs, created with laser precision just for you.</p>

                <div className="grid grid-cols-6 mt-12 md:gap-10">
                    <div className="col-span-6 md:col-span-3">
                        <label for="name" className="block">
                            <p className="text-xl font-bold font-garamond">Your Name</p>
                            <input type="text" placeholder="First and Last Name" className="w-full px-4 py-2 mt-2 border rounded-md placeholder-borderColor h-11 border-borderColor focus:outline-none" />
                        </label>
                        <label for="contact" className="block mt-6">
                            <p className="text-xl font-bold font-garamond">How should we contact you?</p>
                            <input type="text" placeholder="Leave your address or phone number here" className="w-full px-4 py-2 mt-2 border rounded-md placeholder-borderColor h-11 border-borderColor focus:outline-none" />
                        </label>
                        <label for="product" className="block mt-6">
                            <p className="text-xl font-bold font-garamond">Any product specific query?</p>
                            <div class="relative">
                                <select class="w-full px-4 py-2 mt-2 text-base text-borderColor transition duration-500 appearance-none ease-in-out transform border border-borderColor rounded-md focus:outline-none">
                                    {options.map(({ option, id }) =>
                                        <option class="block mb-4 text-base tracking-wide text-borderColor " key={id}> {option}</option>
                                    )}
                                </select>
                                <div class="absolute inset-y-0 mt-2 right-0 flex items-center px-4 pointer-events-none">
                                    <BsChevronDown size={16} />
                                </div>
                            </div>
                        </label>
                        <label for="message" className="block mt-6">
                            <p className="text-xl font-bold font-garamond">How can we help you?</p>
                            <textarea type="text" placeholder="Feel free to elaborate on your query here. We’ll get back to you with a great solution for you! " className="w-full px-4 py-2 mt-2 border rounded-md placeholder-borderColor h-36 border-borderColor focus:outline-none" />
                        </label>
                        <button className="flex items-center justify-center p-4 py-6 my-10 text-base font-bold text-black duration-700 ease-out border border-black w-60 shadow-touch hover:text-white hover:shadow-touch1 h-9 rounded-3xl">Submit <BsArrowRight className="ml-2" size={30} /></button>
                    </div>

                    <div className="col-span-6 mt-10 mb-20 md:col-span-3">
                        <div className="flex items-center text-xl">
                            <MdCall size={30} />
                            <p className="ml-4">+91-11 40396922</p>
                        </div>
                        <div className="flex items-center mt-10 text-xl">
                            <MdMail size={30} />
                            <p className="ml-4">info@trendpvc.com</p>
                        </div>
                        <div className="flex items-center mt-10 text-xl">
                            <MdLocationOn size={30} />
                            <p className="ml-4">A-6, Mangolpuri Industrial Area, Phase 2, Delhi 110034, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
