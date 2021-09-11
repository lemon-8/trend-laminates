import React from 'react'
import trend1 from './images/trend_1mm.webp';
import trend11 from './images/trend_1mm.jpg';
import trend8 from './images/trend_8mm.webp';
import trend81 from './images/trend_8mm.jpg';
import magazine1 from './images/magazine1.webp';
import magazine11 from './images/magazine1.jpg';
import magazine2 from './images/magazine2.webp';
import magazine21 from './images/magazine2.jpg';
import magazine3 from './images/magazine3.webp';
import magazine31 from './images/magazine3.jpg';
import magazine4 from './images/magazine4.webp';
import magazine41 from './images/magazine4.jpg';
import magazine5 from './images/magazine5.webp';
import magazine51 from './images/magazine5.jpg';
import magazine6 from './images/magazine6.webp';
import magazine61 from './images/magazine6.jpg';


function Catalogues() {

    const catalogs = [
        {
            id: 1,
            title1: "PVC Premium Laminates",
            span1: 3,
            src1: magazine1,
            src11: magazine11,
            file1: "https://drive.google.com/file/d/1l4TXs6rcqR5JrAuVIPWTv2fkJLuQWc38/view?usp=sharing",
            title2: "Acrylic Premium Laminates",
            span2: 5,
            src2: magazine2,
            src21: magazine21,
            fade: "right",
            file2: "https://drive.google.com/file/d/1YXpS4_aX9RLy8UVp3hftRk0tJcePs0Fj/view?usp=sharing",
        },
        {
            id: 2,
            title1: "Trend Premium Door Skins",
            span1: 5,
            src1: magazine3,
            src11: magazine31,
            file1: "https://drive.google.com/file/d/1PuHkdPj5FPgealRuZ04iC37MYqCXVY5I/view?usp=sharing",
            title2: "Trend HD Digital Laminates",
            span2: 3,
            src2: magazine4,
            src21: magazine41,
            fade: "left",
            file2: "https://drive.google.com/file/d/1su0X5FQIDEFl5-bzGc2NATe1iWNwKe0n/view?usp=sharing",
        },
        {
            id: 3,
            title1: "Trend Liner Mica 2020",
            span1: 4,
            src1: magazine5,
            src11: magazine51,
            file1: "https://drive.google.com/file/d/1NmW3oLe5iiecPVAYcfjtTpWbRc6kvvWm/view?usp=sharing",
            title2: "Korean Charcoal Panels",
            span2: 4,
            src2: magazine6,
            src21: magazine61,
            fade: "right",
            file2: "https://drive.google.com/file/d/1DzPTe6PSOQtrcm37l8RTkP7EVB5DSu-6/view?usp=sharing",
        },
    ]

    return (
        <div>
            <div className="px-10 pt-20 md:pt-36 pb-28 xl:px-44">
                <div data-aos="fade-up">
                    <p className="text-5xl font-garamond md:text-7xl">Catalogues</p>
                    <p className="mt-6 text-base font-light md:text-xl">A range of avant-garde products, all created meticulously with the finest raw material available to the world.
                        Open your arms to the smoothest textures and the most stunning designs, created with laser precision just for you.</p>
                    <div className="grid grid-cols-12 my-10 lg:gap-20">
                        <div className="col-span-12 lg:col-span-4">
                            <a href="https://drive.google.com/file/d/1qu3P7gDuniVGi7_9iDWRgCl_yCdusfcX/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                                <p className="mb-4 text-2xl font-medium cursor-pointer text-trend">Trend 1MM 2021</p>
                                <div className="w-full mx-auto overflow-hidden rounded-md h-96" data-aos="fade-right" data-aos-duration="2000">
                                    <picture>
                                        <source srcset={trend1} type="image/webp" />
                                        <source srcset={trend11} type="image/jpg" />
                                        <img src={trend11} alt="Download the catalog here" className="object-cover w-full h-full duration-500 transform rounded-md hover:scale-125" />
                                    </picture>
                                </div>
                            </a>
                        </div>
                        <div className="col-span-12 mt-6 lg:mt-0 lg:col-span-8">
                            <a href="https://drive.google.com/file/d/1wYw0-3C4CGG550IfQwg5QfElUgq3-95R/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <p className="mb-4 text-2xl font-medium cursor-pointer text-trend">Trend 0.8MM 2021</p>
                                <div className="w-full mx-auto overflow-hidden rounded-md h-96" data-aos="fade-right" data-aos-duration="2000">
                                    <picture>
                                        <source srcset={trend8} type="image/webp" />
                                        <source srcset={trend81} type="image/jpg" />
                                        <img src={trend81} alt="Download the catalog here" className="object-cover w-full h-full duration-500 transform rounded-md hover:scale-125" />
                                    </picture>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    {catalogs.map(({ id, src1, src11, src2, src21, title1, title2, span1, span2, fade, file1, file2 }) => {
                        return (<div className="flex flex-col grid-cols-8 mt-10 overflow-hidden lg:grid lg:gap-20" data-aos={`fade-${fade}`} data-aos-duration="2000" key={id}>
                            <div className={`col-span-${span1}`} >
                                <a href={file1} target="_blank" rel="noreferrer noopener">
                                    <p className="mb-4 text-2xl font-medium cursor-pointer text-trend">{title1}</p>
                                    <div className="w-full mx-auto overflow-hidden rounded-md h-96">
                                        <picture>
                                            <source srcset={src1} type="image/webp" />
                                            <source srcset={src11} type="image/jpg" />
                                            <img src={src11} alt="Download the catalog here" className="object-cover w-full h-full duration-500 transform rounded-md hover:scale-125" />
                                        </picture>
                                    </div>
                                </a>
                            </div>
                            <div className={`col-span-${span2} lg:mt-0 mt-6`}>
                                <a href={file2} target="_blank" rel="noreferrer noopener">
                                    <p className="mb-4 text-2xl font-medium cursor-pointer text-trend">{title2}</p>
                                    <div className="w-full mx-auto overflow-hidden rounded-md h-96">
                                        <picture>
                                            <source srcset={src2} type="image/webp" />
                                            <source srcset={src21} type="image/jpg" />
                                            <img src={src21} alt="Download the catalog here" className="object-cover w-full h-full duration-500 transform rounded-md hover:scale-125" />
                                        </picture>
                                    </div>
                                </a>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Catalogues;
