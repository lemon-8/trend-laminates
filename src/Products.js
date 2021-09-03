import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsArrowRight, BsArrowDown } from 'react-icons/bs';
import laminate1 from './images/laminate1.webp';
import laminate2 from './images/laminate2.webp';
import laminate3 from './images/laminate3.webp';
import laminate4 from './images/laminate4.webp';
import decorative from './images/decorative.webp';
import korean from './images/korean.webp';
import korean1 from './images/korean1.webp';
import decorative1 from './images/decorative1.webp';
import acrylic from './images/acrylic.webp';
import acrylic1 from './images/acrylic1.webp';
import pvc_laminate from './images/pvc_laminates.webp';
import pvc_laminate1 from './images/pvc_laminates1.webp';
import wpc_board from './images/wpc_board.webp';
import wpc_board1 from './images/wpc_board1.webp';
import pvc_tape from './images/pvc_tape.webp';
import pvc_tape1 from './images/pvc_tape1.webp';
import { Link } from 'react-router-dom';

function Products() {

    const [index, setIndex] = React.useState(1);
    
    const Button = ({ text, addClass,id }) => {
        return (
            <a href="#products-container" className={addClass}><button  onClick={()=>setIndex(id)} className="flex items-center justify-center w-64 p-4 py-6 mt-6 font-medium text-white duration-700 ease-out border border-white md:mt-10 shadow-get h-9 rounded-3xl laminates1 hover:text-black hover:shadow-get1">{text} <BsArrowRight className="ml-2" size={30} /></button></a>
        )
    }

    const tabItems = [
        {
            id: 1,
            src1: decorative,
            src2: decorative1,
            title: 'Decorative Laminates',
            subtitle: '0.8 laminates',
            content: 'Hi-Gloss decorative bring in fashionable, appealing, elegant and durable solutions for home and office decor-an effectual way to obtain superior style and elegance in interior surface design.',
        },
        {
            id: 2,
            src1: pvc_laminate,
            src2: pvc_laminate1,
            title: 'PVC Premium Laminates',
            subtitle: '0.8 laminates',
            content: 'Hi-Gloss decorative bring in fashionable, appealing, elegant and durable solutions for home and office decor-an effectual way to obtain superior style and elegance in interior surface design.',
        },
        {
            id: 3,
            src1: acrylic,
            src2: acrylic1,
            title: 'HD Acrylic Lmainates',
            subtitle: '0.8 laminates',
            content: 'Hi-Gloss decorative bring in fashionable, appealing, elegant and durable solutions for home and office decor-an effectual way to obtain superior style and elegance in interior surface design.',
        },
        {
            id: 4,
            src1: wpc_board,
            src2: wpc_board1,
            title: 'WPC PVC Boards',
            subtitle: '0.8 laminates',
            content: 'Hi-Gloss decorative bring in fashionable, appealing, elegant and durable solutions for home and office decor-an effectual way to obtain superior style and elegance in interior surface design.',
        },
        {
            id: 5,
            src1: korean,
            src2: korean1,
            title: 'Korean Charcoal Panels',
            subtitle: '0.8 laminates',
            content: 'Hi-Gloss decorative bring in fashionable, appealing, elegant and durable solutions for home and office decor-an effectual way to obtain superior style and elegance in interior surface design.',
        },
        {
            id: 6,
            src1: pvc_tape,
            src2: pvc_tape1,
            title: 'PVC Edgeband',
            subtitle: '0.8 laminates',
            content: 'Hi-Gloss decorative bring in fashionable, appealing, elegant and durable solutions for home and office decor-an effectual way to obtain superior style and elegance in interior surface design.',
        },
    ];
    
    const TabItemComponent = ({
        title = '',
        onItemClicked = () => console.error('You passed no action to the component'),
        isActive = false,
    }) => {
        return (
            <div className={isActive ? 'p-2 text-black' : 'p-2 text-product hover:text-black'} onClick={onItemClicked}>
                <p>{title}</p>
            </div>
        )
    };

    return (
        <div>
            <div className="relative px-10 pt-20 overflow-hidden text-white bg-black md:py-36 md:h-screen xl:pl-48 xl:pr-0">
                <h1 className="text-5xl md:text-7xl font-garamond">Our Products</h1>
                <p className="w-full mt-6 text-base font-light md:text-lg md:w-3/4">A range of avant-garde products, all created meticulously with the finest raw material available to the world.
                    Open your arms to the smoothest textures and the most stunning designs, created with laser precision just for you.</p>
                <div className="grid justify-center grid-cols-4 my-10 md:mt-10 md:mb-0 md:gap-10 md:max-w-lg">
                    <div className="col-span-4 md:col-span-2">
                        <Button text="Acrylic Laminates" addClass="laminates1" id={3} />
                        <Button text="PVC Premium" addClass="laminates2" id={2} />
                        <img src={laminate1} className="absolute z-20 bottom-16 md:bottom-12 right-52 h-80 lg:h-full lg:-bottom-96 lam-image1 lg:right-48" alt="Acrylic Laminate" />
                        <img src={laminate2} className="absolute z-30 right-32 md:bottom-12 bottom-16 h-80 lg:h-full lg:-bottom-96 lam-image2 lg:right-24" alt="PVC Laminate" />
                    </div>
                    <div className="col-span-4 md:col-span-2 mb-96">
                        <Button text="WPC PVC Board" addClass="laminates3" id={4} />
                        <Button text="Decorative Laminates" addClass="laminates4" id={1} />
                        <img src={laminate3} className="absolute z-40 h-80 lg:h-full md:bottom-12 bottom-16 right-10 lg:-bottom-96 lam-image3 lg:-right-4" alt="MDF Board" />
                        <img src={laminate4} className="absolute z-50 -right-10 h-80 md:bottom-12 bottom-16 lg:h-full lg:-bottom-96 lam-image4 lg:-right-32" alt="Decorative Laminate" />
                    </div>
                    <a href="#products-container"><p className="absolute flex items-center text-base font-normal bottom-6 md:bottom-20 hover:opacity-75">View All Products <BsArrowDown className="ml-4" size={30} /></p></a>
                </div>
            </div>
            <div id="products-container" className="relative min-h-screen">
                <div>
                    {tabItems.map(({ id, src1, src2, title, subtitle, content }) => {
                        return (
                            index === id ?
                                <div className="relative grid justify-center grid-cols-3 text-left bg-transparent lg:h-screen lg:overflow-hidden tab-content" key={id}>
                                    <div className="col-span-3 lg:col-span-2">
                                        <Carousel dynamicHeight={true} thumbWidth={120} showStatus={false} showArrows={false} infiniteLoop={true} showThumbs={true} showIndicators={false}>
                                            <img src={src1} className="h-96 lg:h-screen" alt={`Sample of ${title}`} />
                                            <img src={src2} className="h-96 lg:h-screen" alt={`Sample of ${title}`} />
                                        </Carousel>
                                    </div>
                                    <div className="relative z-10 w-full col-span-3 px-10 bg-white md:py-20 lg:w-5/12 lg:absolute lg:h-screen lg:z-0 lg:right-10 rounded-18">
                                        <p className="text-4xl font-bold md:text-5xl font-garamond">{title}</p>
                                        <p className="mt-6 text-2xl font-normal md:text-3xl">{subtitle}</p>
                                        <p className="mt-6 mb-6 text-lg font-normal md:mb-10">{content}</p>
                                        <Link to="/Contact">
                                            <button className="flex items-center justify-center w-40 h-10 text-lg font-bold duration-1000 border border-black shadow-touch hover:shadow-touch1 rounded-3xl hover:text-white">Enquire <BsArrowRight className="ml-2" /></button>
                                        </Link>
                                    </div>
                                </div> : ''
                        )
                    })}
                </div>
                <div className="right-0 z-10 flex flex-wrap justify-start w-full pl-8 mb-5 realtive lg:absolute lg:w-5/12 bottom-16">
                    {tabItems.map(({ id, title }) =>
                        <TabItemComponent
                            key={title}
                            title={title}
                            onItemClicked={() => setIndex(id)}
                            isActive={index === id}
                        />
                    )}
                </div>
            </div>
        </div >
    )
}

export default Products;
