import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsArrowRight, BsArrowDown } from 'react-icons/bs';
import laminate1 from './images/laminate1.png';
import laminate2 from './images/laminate2.png';
import laminate3 from './images/laminate3.png';
import laminate4 from './images/laminate4.png';
import decorative from './images/decorative.png';
import korean from './images/korean.png';
import korean1 from './images/korean1.png';
import decorative1 from './images/decorative1.png';
import pvc_panel from './images/pvc_panel.png';
import pvc_panel1 from './images/pvc_panel1.png';
import acrylic from './images/acrylic.png';
import acrylic1 from './images/acrylic1.png';
import pvc_laminate from './images/pvc_laminates.png';
import pvc_laminate1 from './images/pvc_laminates1.png';
import wpc_board from './images/wpc_board.png';
import wpc_board1 from './images/wpc_board1.png';
import mdf_board from './images/mdf_board.png';
import mdf_board1 from './images/mdf_board1.png';
import pvc_tape from './images/pvc_tape.png';
import pvc_tape1 from './images/pvc_tape1.png';

function Products() {

    const ImageSlider = ({ src1, src2, src3, title }) => {
        return (
            <div className="grid justify-center h-screen grid-cols-2 text-left">
                <div className="col-span-1 product-line">
                    <Carousel dynamicHeight={true} thumbWidth={120} showStatus={false} showArrows={false} infiniteLoop={true} showThumbs={true} showIndicators={false}>
                        <img src={src1} className="h-screen" />
                        <img src={src2} className="h-screen" />
                    </Carousel>
                </div>
                <div className="col-span-1 p-10">
                    <p className="text-5xl font-bold font-garamond">{title}</p>
                    <p className="mt-6 text-3xl font-normal">0.8mm laminates</p>
                    <p className="w-9/12 mt-6 mb-10 text-lg font-normal">Hi-Gloss decorative bring in fashionable, appealing, elegant and durable solutions for home and office decor- an effectual way to obtain superior style and elegance in interior surface design.</p>
                    <button className="flex items-center justify-center w-48 text-lg font-normal duration-700 border border-black shadow-touch hover:shadow-touch1 rounded-3xl h-9 hover:text-white">Enquire <BsArrowRight className="ml-2" /></button>
                </div>
            </div>
        )
    }

    const Button = ({ text, addClass }) => {
        return (
            <button className={`flex items-center justify-center w-48 p-4 py-6 mt-10 font-medium text-white duration-700 ease-out border border-white shadow-get h-9 rounded-3xl hover:text-black hover:shadow-get1 ${addClass}`}>{text} <BsArrowRight className="ml-2" size={30} /></button>
        )
    }

    const TabItem = props => <div {...props} />;

    const Tabs = ({ defaultIndex = 1, onTabClick, children }) => {
        const [bindIndex, setBindIndex] = React.useState(defaultIndex);
        const changeTab = newIndex => {
            if (typeof onTabClick === 'function') onTabClick(bindIndex);
            setBindIndex(newIndex);
        };
        const items = children.filter(item => item.type.name === 'TabItem');

        return (
            <div className="wrapper">
                <div className="tab-view">
                    {items.map(({ props }) => (
                        <div key={props}
                            {...props}
                            className={`tab-content ${bindIndex === props.index ? 'block' : 'hidden'}`}
                            key={`tab-content-${props.index}`}
                        />
                    ))}
                </div>
                <div className="absolute right-0 w-1/2 text-center tab-menu bottom-16">
                    {items.map(({ props: { index, label } }) => (
                        <button
                            key={`tab-btn-${index}`}
                            onClick={() => changeTab(index)}
                            className={bindIndex === index ? 'font-semibold px-4 py-2 text-black' : 'font-normal px-4 py-2 text-gray-500 hover:text-black hover:font-semibold'}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="relative px-10 pt-40 pb-40 overflow-hidden text-white bg-black md:h-screen xl:pl-48 xl:pr-0">
                <h1 className="text-7xl font-garamond">Our Products</h1>
                <p className="w-full mt-10 text-xl font-light md:w-3/4">A range of avant-garde products, all created meticulously with the finest raw material available to the world.
                    Open your arms to the smoothest textures and the most stunning designs, created with laser precision just for you.</p>
                <div className="grid justify-center grid-cols-4 gap-10 mt-10 md:max-w-sm">
                    <div className="col-span-4 md:col-span-2">
                        <Button text="Decorative" addClass="laminates1" />
                        <Button text="PVC Laminates" addClass="laminates2" />
                        <img src={laminate1} className="absolute z-50 top-32 lam-image1 md:-right-96" />
                        <img src={laminate2} className="absolute z-40 top-32 lam-image2 -right-20 md:-right-72" />
                    </div>
                    <div className="col-span-4 md:col-span-2 mb-96">
                        <Button text="MDF Board" addClass="laminates3" />
                        <Button text="WPC Board" addClass="laminates4" />
                        <img src={laminate3} className="absolute z-30 top-32 lam-image3 right-10 md:-right-52" />
                        <img src={laminate4} className="absolute z-20 top-32 lam-image4 right-32 md:-right-32" />
                    </div>
                    <a href="#products-container"><p className="absolute flex items-center text-base font-normal bottom-20">View All Products <BsArrowDown className="ml-4" size={30} /></p></a>
                </div>
            </div>
            <div id="products-container" className="relative h-screen">
                <Tabs defaultIndex="1" onTabClick={console.log}>
                    <TabItem label="Decorative" index="1">
                        <ImageSlider src1={decorative} src2={decorative1} title="Decorative Laminates" />
                    </TabItem>
                    <TabItem label="PVC Premium" index="2">
                        <ImageSlider src1={pvc_laminate} src2={pvc_laminate1} title="PVC Premium" />
                    </TabItem>
                    <TabItem label="HD Acryllic" index="3">
                        <ImageSlider src1={acrylic} src2={acrylic1} title="HD Acryllic" />
                    </TabItem>
                    <TabItem label="WPC Boards" index="4">
                        <ImageSlider src1={wpc_board} src2={wpc_board1} title="WPC Boards" />
                    </TabItem>
                    <TabItem label="MDF Boards" index="5">
                        <ImageSlider src1={mdf_board} src2={mdf_board1} title="MDF Boards" />
                    </TabItem>
                    <TabItem label="Korean Charcoal Panels" index="6">
                        <ImageSlider src1={korean} src2={korean1} title="Korean Charcoal Panels" />
                    </TabItem>
                    <TabItem label="PVC Edge Band Tape" index="7">
                        <ImageSlider src1={pvc_tape} src2={pvc_tape1} title="PVC Edge Band Tape" />
                    </TabItem>
                    <TabItem label="PVC 3D Panels" index="8">
                        <ImageSlider src1={pvc_panel} src2={pvc_panel1} title="PVC 3D Panels" />
                    </TabItem>
                </Tabs>
            </div>
        </div>
    )
}

export default Products;
