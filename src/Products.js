import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsArrowRight } from 'react-icons/bs';
import laminate1 from './images/laminate1.png';
import laminate2 from './images/laminate2.png';
import laminate3 from './images/laminate3.png';
import laminate4 from './images/laminate4.png';
import laminate5 from './images/laminate5.png';
import laminate6 from './images/laminate6.png';
import laminate7 from './images/laminate7.png';
import product1 from './images/decorative.png';
import product2 from './images/customdec.png';
import product3 from './images/bedroom.jpg';


function Products() {

    const ImageSlider = () => {
        return (
            <div className="grid justify-center h-screen grid-cols-2 text-left">
                <div className="h-auto col-span-1">
                    <Carousel axis={'vertical'} verticalSwipe={'standard'} showIndicators={false}>
                        <img src={product1} alt="" />
                        <img src={product2} alt="" />
                        <img src={product3} alt="" />
                    </Carousel>
                </div>
                <div className="col-span-1 p-10">
                    <p className="text-5xl font-bold font-garamond">Decorative Laminates</p>
                    <p className="mt-6 text-3xl font-normal">0.8mm laminates</p>
                    <p className="w-9/12 mt-6 mb-10 text-lg font-normal">Hi-Gloss decorative bring in fashionable, appealing, elegant and durable solutions for home and office decor- an effectual way to obtain superior style and elegance in interior surface design.</p>
                    <button className="flex items-center justify-center w-48 text-lg font-normal duration-700 border border-black shadow-touch hover:shadow-touch1 rounded-3xl h-9 hover:text-white">Enquire <BsArrowRight className="ml-2" /></button>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="relative px-10 pt-40 pb-40 overflow-hidden text-white bg-black md:h-screen xl:pl-48 xl:pr-0">
                <h1 className="font-bold text-7xl font-garamond">Our Products</h1>
                <p className="w-full mt-6 text-xl font-light md:w-2/3">A range of avant-garde products, all created meticulously with the finest raw material available to the world.
                    Open your arms to the smoothest textures and the most stunning designs, created with laser precision just for you.</p>
                <div className="grid grid-cols-4 md:w-1/3">
                    <div className="col-span-4 md:col-span-2">
                        <button className="flex items-center justify-center w-48 p-4 py-6 mt-10 font-medium text-white duration-700 ease-out border border-white laminates1 shadow-get h-9 rounded-3xl hover:text-black hover:shadow-get1">Decorative <BsArrowRight className="ml-2" size={30} /></button>
                        <button className="flex items-center justify-center w-48 p-4 py-6 mt-10 font-medium text-white duration-700 ease-out border border-white laminates2 shadow-get h-9 rounded-3xl hover:text-black hover:shadow-get1">PVC 3D Panel <BsArrowRight className="ml-2" size={30} /></button>
                        <button className="flex items-center justify-center w-48 p-4 py-6 mt-10 font-medium text-white duration-700 ease-out border border-white laminates3 shadow-get h-9 rounded-3xl hover:text-black hover:shadow-get1">PVC Laminates <BsArrowRight className="ml-2" size={30} /></button>
                        <button className="flex items-center justify-center w-48 p-4 py-6 mt-10 font-medium text-white duration-700 ease-out border border-white laminates4 shadow-get h-9 rounded-3xl hover:text-black hover:shadow-get1">PVC Tape <BsArrowRight className="ml-2" size={30} /></button>
                        <img src={laminate1} className="absolute h-1/3 md:h-4/5 lam-image1 -bottom-20 z-70 -right-32 md:-right-40" />
                        <img src={laminate2} className="absolute h-1/3 md:h-4/5 lam-image2 -bottom-20 z-60 -right-20 md:-right-20" />
                        <img src={laminate3} className="absolute z-50 md:right-0 lam-image3 h-1/3 md:h-4/5 -right-10 -bottom-20" />
                        <img src={laminate4} className="absolute right-0 z-40 lam-image4 h-1/3 md:h-4/5 -bottom-20 md:right-20" />
                    </div>
                    <div className="col-span-4 md:col-span-2 mb-96">
                        <button className="flex items-center justify-center w-48 p-4 py-6 mt-10 font-medium text-white duration-700 ease-out border border-white laminates5 shadow-get h-9 rounded-3xl hover:text-black hover:shadow-get1">MDF Board <BsArrowRight className="ml-2" size={30} /></button>
                        <button className="flex items-center justify-center w-48 p-4 py-6 mt-10 font-medium text-white duration-700 ease-out border border-white laminates6 shadow-get h-9 rounded-3xl hover:text-black hover:shadow-get1">WPC Board <BsArrowRight className="ml-2" size={30} /></button>
                        <button className="flex items-center justify-center w-48 p-4 py-6 mt-10 font-medium text-white duration-700 ease-out border border-white laminates7 shadow-get h-9 rounded-3xl hover:text-black hover:shadow-get1">Acrylic Laminates <BsArrowRight className="ml-2" size={30} /></button>
                        <button className="flex items-center justify-center w-48 p-4 py-6 mt-10 font-medium text-white duration-700 ease-out border border-white laminates8 shadow-get h-9 rounded-3xl hover:text-black hover:shadow-get1">Decorative Sheets <BsArrowRight className="ml-2" size={30} /></button>
                        <img src={laminate5} className="absolute z-30 h-1/3 md:h-4/5 lam-image5 right-10 -bottom-20 md:right-40" />
                        <img src={laminate6} className="absolute z-20 h-1/3 md:h-4/5 lam-image6 right-32 -bottom-20 md:right-72" />
                        <img src={laminate7} className="absolute z-10 h-1/3 md:h-4/5 lam-image7 right-40 -bottom-20 md:right-80" />
                        <img src={laminate5} className="absolute z-0 h-1/3 md:h-4/5 lam-image8 right-60 -bottom-20 md:right-96" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center h-screen py-20">
                <Carousel axis={'vertical'} verticalSwipe={'natural'} preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={20} showArrows={false} interval={5000} showThumbs={false} showIndicators={true} showStatus={false} autoPlay={true} swipeable={true} infiniteLoop={true} >
                    <ImageSlider />
                    <ImageSlider />
                    <ImageSlider />
                    <ImageSlider />
                </Carousel>
            </div >
        </div >
    )
}

export default Products;
