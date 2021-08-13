import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsArrowRight } from 'react-icons/bs';
import laminate1 from './images/laminate1.png';
import laminate2 from './images/laminate2.png';
import laminate3 from './images/laminate3.png';
import laminate4 from './images/laminate4.png';

function Products() {

    const ImageSlider = () => {
        return (
            <div className="grid justify-center h-screen grid-cols-2 text-left">
                <div className="col-span-1 product-line">
                    <Carousel axis={'vertical'} verticalSwipe={'standard'} autoPlay={true} interval={1700} infiniteLoop={true} showThumbs={true} showIndicators={false}>
                        <div className="h-screen product1" />
                        <div className="h-screen product2" />
                        <div className="h-screen product3" />
                    </Carousel>
                </div>
                <div className="items-center col-span-1 px-10 py-20">
                    <p className="text-5xl font-bold font-garamond">Decorative Laminates</p>
                    <p className="mt-6 text-3xl font-normal">0.8mm laminates</p>
                    <p className="w-9/12 mt-6 mb-10 text-lg font-normal">Hi-Gloss decorative bring in fashionable, appealing, elegant and durable solutions for home and office decor- an effectual way to obtain superior style and elegance in interior surface design.</p>
                    <button className="flex items-center justify-center w-48 text-lg font-normal duration-700 border border-black shadow-touch hover:shadow-touch1 rounded-3xl h-9 hover:text-white">Enquire <BsArrowRight className="ml-2" /></button>
                </div>
            </div>
        )
    }

    const Button = ({ text,addClass }) => {
        return (
            <button className={`flex items-center justify-center w-48 p-4 py-6 mt-10 font-medium text-white duration-700 ease-out border border-white shadow-get h-9 rounded-3xl hover:text-black hover:shadow-get1 ${addClass}`}>{text} <BsArrowRight className="ml-2" size={30} /></button>
        )
    }

    return (
        <div>
            <div className="relative px-10 pt-40 pb-40 overflow-hidden text-white bg-black md:h-screen xl:pl-48 xl:pr-0">
                <h1 className="font-bold text-7xl font-garamond">Our Products</h1>
                <p className="w-full mt-10 text-xl font-light md:w-1/2">A range of avant-garde products, all created meticulously with the finest raw material available to the world.
                    Open your arms to the smoothest textures and the most stunning designs, created with laser precision just for you.</p>
                <div className="grid grid-cols-4 gap-10 mt-6 md:w-1/3">
                    <div className="col-span-4 md:col-span-2">
                        <Button text="Decorative" addClass="laminates1" />
                        <Button text="PVC Laminates" addClass="laminates2" />
                        <img src={laminate1} className="absolute z-50 h-1/3 md:h-full lam-image1 -bottom-0 -right-32 md:-right-60" />
                        <img src={laminate2} className="absolute z-40 h-1/3 md:h-full lam-image2 -bottom-0 -right-20 md:-right-40" />
                    </div>
                    <div className="col-span-4 md:col-span-2 mb-96">
                        <Button text="MDF Board" addClass="laminates3" />
                        <Button text="WPC Board" addClass="laminates4" />
                        <img src={laminate3} className="absolute z-30 h-1/3 md:h-full lam-image3 right-10 -bottom-0 md:-right-20" />
                        <img src={laminate4} className="absolute z-20 h-1/3 md:h-full lam-image4 right-32 -bottom-0 md:right-0" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center h-screen overflow-x-hidden" style={{ scrollSnapType: "y mandatory" }}>
                <Carousel axis={'vertical'} swipeable={true} emulateTouch={true} useKeyboardArrows={true} onSwipeStart={true} verticalSwipe={'natural'} showArrows={false} interval={5000} showThumbs={false} showStatus={false} autoPlay={false} infiniteLoop={true} >
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
