import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsArrowRight, BsArrowDown } from 'react-icons/bs';
import laminate1 from './images/laminate1.webp';
import laminate11 from './images/laminate1.png';
import laminate2 from './images/laminate2.webp';
import laminate21 from './images/laminate2.png';
import laminate3 from './images/laminate3.webp';
import laminate31 from './images/laminate3.png';
import laminate4 from './images/laminate4.webp';
import laminate41 from './images/laminate4.png';
import decorative1 from './images/decorative-1.webp';
import decorative11 from './images/decorative-1.jpg';
import decorative2 from './images/decorative-2.webp';
import decorative21 from './images/decorative-2.jpg';
import decorative3 from './images/decorative-3.webp';
import decorative31 from './images/decorative-3.jpg';
import korean1 from './images/korean1.webp';
import korean11 from './images/korean1.jpg';
import korean2 from './images/korean2.webp';
import korean21 from './images/korean2.jpg';
import korean3 from './images/korean3.webp';
import korean31 from './images/korean3.jpg';
import acrylic1 from './images/glossy-1.webp';
import acrylic11 from './images/glossy-1.jpg';
import acrylic2 from './images/glossy-2.webp';
import acrylic21 from './images/glossy-2.jpg';
import acrylic3 from './images/glossy-3.webp';
import acrylic31 from './images/glossy-3.jpg';
import pvc_laminate1 from './images/premium-1.webp';
import pvc_laminate11 from './images/premium-1.jpg';
import pvc_laminate2 from './images/premium-2.webp';
import pvc_laminate21 from './images/premium-2.jpg';
import pvc_laminate3 from './images/premium-3.webp';
import pvc_laminate31 from './images/premium-3.jpg';
import wpc_board1 from './images/wpc-1.webp';
import wpc_board11 from './images/wpc-1.jpg';
import wpc_board2 from './images/wpc-2.webp';
import wpc_board21 from './images/wpc-2.jpg';
import wpc_board3 from './images/wpc-3.webp';
import wpc_board31 from './images/wpc-3.jpg';
import pvc_tape1 from './images/tape-1.webp';
import pvc_tape11 from './images/tape-1.jpg';
import pvc_tape2 from './images/tape-2.webp';
import pvc_tape21 from './images/tape-2.jpg';
import pvc_tape3 from './images/tape-3.webp';
import pvc_tape31 from './images/tape-3.jpg';
import { Link } from 'react-router-dom';

function Products() {

    const [index, setIndex] = React.useState(1);

    const Button = ({ text, id }) => {
        return (
            <a href="#products-container"><button onClick={() => setIndex(id)} className="flex items-center justify-center w-64 p-4 py-6 mt-6 font-medium text-white duration-700 ease-out border border-white md:mt-10 shadow-get h-9 rounded-3xl laminates1 hover:text-black hover:shadow-get1">{text} <BsArrowRight className="ml-2" size={30} /></button></a>
        )
    }

    const tabItems = [
        {
            id: 1,
            src1: decorative1,
            src11: decorative11,
            src2: decorative2,
            src21: decorative21,
            src3: decorative3,
            src31: decorative31,
            title: 'Decorative Laminates',
            subtitle: '0.8 laminates',
            content: 'TREND Laminates offer fashionable, appealing, elegant and durable solutions for home and office decor. An effective way to get superior style and elegance in interior surface design.',
        },
        {
            id: 2,
            src1: pvc_laminate1,
            src11: pvc_laminate11,
            src2: pvc_laminate2,
            src21: pvc_laminate21,
            src3: pvc_laminate3,
            src31: pvc_laminate31,
            title: 'PVC Premium Laminates',
            subtitle: '0.8 laminates',
            content: 'Lift up the personality of your interiors with some of the widest range of PVC Fabric Premium Laminates. It’s got the texture, feel and impression to delight and inspire spaces. Flexible in application, the PVC Laminates slabs of Trend give you a space make over perfect to enhance the interior.',
        },
        {
            id: 3,
            src1: acrylic1,
            src11: acrylic11,
            src2: acrylic2,
            src21: acrylic21,
            src3: acrylic3,
            src31: acrylic31,
            title: 'HD Acrylic Lmainates',
            subtitle: '0.8 laminates',
            content: 'In a league of its own, Acrylic Hi-Gloss panels enhance high-definition design. The acrylic panels are smooth and soft to the touch as a feather and are resistant to fading, aberration and distortion. Anti-scratch and anti-corrosive.',
        },
        {
            id: 4,
            src1: wpc_board1,
            src11: wpc_board11,
            src2: wpc_board2,
            src21: wpc_board21,
            src3: wpc_board3,
            src31: wpc_board31,
            title: 'WPC PVC Boards',
            subtitle: '0.8 laminates',
            content: 'Trend WPC and PVC boards are life long, environment-friendly, and have excellent performance. They are anti-UV, waterproof, anti-cracking and moth-proof. These high strength, low-cost boards have a low maintenance cost and usually last from 20 to 30 years.',
        },
        {
            id: 5,
            src1: korean1,
            src11: korean11,
            src2: korean2,
            src21: korean21,
            src3: korean3,
            src31: korean31,
            title: 'Korean Charcoal Panels',
            subtitle: '0.8 laminates',
            content: 'Trend exclusive Korean Charcoal panels arrive in various textures, patterns, styles and colours. The layered material gives an embossed structure to the surface and adds volume and depth. The panels give character to interior spaces, enhancing homes, offices or commercial properties.',
        },
        {
            id: 6,
            src1: pvc_tape1,
            src11: pvc_tape11,
            src2: pvc_tape2,
            src21: pvc_tape21,
            src3: pvc_tape3,
            src31: pvc_tape31,
            title: 'PVC Edgeband',
            subtitle: '0.8 laminates',
            content: 'Trend edge banding tapes are much sought-coveted in shopping malls, residential houses and entertainment houses to decorate and cover fine edges of furniture. The entire range is designed by utilizing the finest grade materials in tune with global market standards',
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
                        <div className="laminates1">
                            <Button text="Acrylic Laminates" id={3} />
                            <picture>
                                <source srcset={laminate1} type="image/webp" />
                                <source srcset={laminate11} type="image/jpg" />
                                <img src={laminate11} className="absolute z-20 bottom-16 lam-image1 md:bottom-12 right-52 h-80 lg:h-full lg:-bottom-96 lg:right-48" alt="Acrylic Laminate" />
                            </picture>
                        </div>
                        <div className="laminates2">
                            <Button text="PVC Premium" id={2} />
                            <picture>
                                <source srcset={laminate2} type="image/webp" />
                                <source srcset={laminate21} type="image/jpg" />
                                <img src={laminate21} className="absolute z-30 right-32 md:bottom-12 bottom-16 lam-image2 h-80 lg:h-full lg:-bottom-96 lg:right-24" alt="PVC Premium" />
                            </picture>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-2 mb-96">
                        <div className="laminates3">
                            <Button text="WPC PVC Board" id={4} />
                            <picture>
                                <source srcset={laminate3} type="image/webp" />
                                <source srcset={laminate31} type="image/jpg" />
                                <img src={laminate31} className="absolute z-40 h-80 lg:h-full md:bottom-12 bottom-16 right-10 lam-image3 lg:-bottom-96 lg:-right-4" alt="WPC PVC Board" />
                            </picture>
                        </div>
                        <div className="laminates4">
                            <Button text="Decorative Laminates" id={1} />
                            <picture>
                                <source srcset={laminate4} type="image/webp" />
                                <source srcset={laminate41} type="image/jpg" />
                                <img src={laminate41} className="absolute z-50 -right-10 h-80 md:bottom-12 bottom-16 lg:h-full lam-image4 lg:-bottom-96 lg:-right-32" alt="Decorative Laminates" />
                            </picture>
                        </div>
                    </div>
                    <a href="#products-container"><p className="absolute flex items-center text-base font-normal bottom-6 md:bottom-20 hover:opacity-75">View All Products <BsArrowDown className="ml-4" size={30} /></p></a>
                </div>
            </div>
            <div id="products-container" className="relative min-h-screen">
                <div>
                    {tabItems.map(({ id, src1, src11, src2, src21, src3, src31, title, subtitle, content }) => {
                        return (
                            index === id ?
                                <div className="relative grid justify-center grid-cols-2 text-left bg-transparent lg:h-screen lg:overflow-hidden tab-content" key={id}>
                                    <div className="relative col-span-2 lg:col-span-1">
                                        <Carousel thumbWidth={120} showStatus={false} showArrows={false} infiniteLoop={true} showIndicators={false}>
                                            <picture>
                                                <source srcset={src1} type="image/webp" />
                                                <source srcset={src11} type="image/jpg" />
                                                <img src={src11} className="h-96 lg:h-screen" alt={`Sample of ${title}`} />
                                            </picture>
                                            <picture>
                                                <source srcset={src2} type="image/webp" />
                                                <source srcset={src21} type="image/jpg" />
                                                <img src={src21} className="h-96 lg:h-screen" alt={`Sample of ${title}`} />
                                            </picture>
                                            <picture>
                                                <source srcset={src3} type="image/webp" />
                                                <source srcset={src31} type="image/jpg" />
                                                <img src={src31} className="h-96 lg:h-screen" alt={`Sample of ${title}`} />
                                            </picture>
                                        </Carousel>
                                    </div>
                                    <div className="relative z-10 w-full col-span-2 px-10 bg-white lg:col-span-1 md:py-20 lg:w-1/2 lg:absolute lg:h-screen lg:z-0 lg:right-10 rounded-18">
                                        <p className="text-4xl font-bold md:text-5xl font-garamond">{title}</p>
                                        <p className="mt-2 text-2xl font-normal md:mt-6 md:text-3xl">{subtitle}</p>
                                        <p className="mt-2 mb-6 text-lg font-normal md:mt-6 md:mb-6">{content}</p>
                                        <Link to="/Contact">
                                            <button className="flex items-center justify-center w-40 h-10 mb-2 text-lg font-bold duration-1000 border border-black shadow-touch hover:shadow-touch1 rounded-3xl hover:text-white">Enquire <BsArrowRight className="ml-2" /></button>
                                        </Link>
                                    </div>
                                </div> : ''
                        )
                    })}
                </div>
                <div className="bottom-0 right-0 z-10 flex flex-wrap justify-start w-full pl-8 mb-5 realtive lg:absolute lg:pl-0 lg:w-1/2">
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
