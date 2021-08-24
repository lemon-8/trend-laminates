import React from 'react'
import trend1 from './images/trend_1mm.png';
import trend8 from './images/trend_8mm.png';
import magazine1 from './images/magazine1.png';
import magazine2 from './images/magazine2.png';
import magazine3 from './images/magazine3.png';
import magazine4 from './images/magazine4.png';
import magazine5 from './images/magazine5.png';
import magazine6 from './images/magazine6.png';

function Catalogues() {

    const catalogues = [
        {
            id: 1,
            title1: "Trend 1MM 2021",
            span1: "5",
            src1: magazine1,
            title2: "Trend 0.8MM 2021",
            span2: "7",
            src2: magazine2,
            fade: "right",
        },
        {
            id: 2,
            title1: "Trend Premium Door Skins",
            span1: "7",
            src1: magazine3,
            title2: "Trend HD Digital Laminates",
            span2: "5",
            src2: magazine4,
            fade: "left",
        },
        {
            id: 3,
            title1: "Trend Liner Mica 2020",
            span1: "6",
            src1: magazine5,
            title2: "Korean Charcoal Panels",
            span2: "6",
            src2: magazine6,
            fade: "right",
        },
    ]

    return (
        <div>
            <div className="px-10 pt-36 pb-28 xl:px-44">
                <div data-aos="fade-up">
                    <p className="font-garamond text-7xl">Catalogues</p>
                    <p className="mt-6 text-xl font-light">A range of avant-garde products, all created meticulously with the finest raw material available to the world.
                        Open your arms to the smoothest textures and the most stunning designs, created with laser precision just for you.</p>
                    <div className="grid grid-cols-12 gap-10 my-10">
                        <div className="col-span-12 md:col-span-4">
                            <p className="mb-4 text-2xl font-medium text-trend">Trend 1MM 2021</p>
                            <div className="overflow-hidden">
                                <img src={trend1} className="w-full duration-500 transform rounded-lg hover:scale-125 h-96" alt="" />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-8">
                            <p className="mb-4 text-2xl font-medium text-trend">Trend 0.8MM 2021</p>
                            <div className="overflow-hidden">
                                <img src={trend8} className="w-full duration-500 transform rounded-lg hover:scale-125 h-96" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {catalogues.map(({ id, src1, src2, title1, title2, span1, span2, fade }) => {
                        return (<div className="grid grid-cols-12 gap-10 mt-10 overflow-hidden" data-aos={`fade-${fade}`} key={id}>
                            <div className={`col-span-12 md:col-span-${span1}`} >
                                <p className="mb-4 text-2xl font-medium text-trend">{title1}</p>
                                <div className="overflow-hidden">
                                    <img src={src1} alt="magazine" className="w-full overflow-hidden duration-500 transform rounded-lg h-96 hover:scale-125" />
                                </div>
                            </div>
                            <div className={`col-span-12 md:col-span-${span2}`}>
                                <p className="mb-4 text-2xl font-medium text-trend">{title2}</p>
                                <div className="overflow-hidden">
                                    <img src={src2} alt="magazine" className="w-full overflow-hidden duration-500 transform rounded-lg h-96 hover:scale-125" />
                                </div>
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
