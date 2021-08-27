import React from 'react'
import trend1 from './images/trend_1mm.png';
import trend8 from './images/trend_8mm.png';
import magazine1 from './images/magazine1.png';
import magazine2 from './images/magazine2.png';
import magazine3 from './images/magazine3.png';
import magazine4 from './images/magazine4.png';
import magazine5 from './images/magazine5.png';
import magazine6 from './images/magazine6.png';
import trend1file from './catalogs/Trend_1MM_2021.pdf';
import trend8file from './catalogs/Trend_0.8MM_2021.pdf';
import acrylicfile from './catalogs/Trend_ACRYLIC_2021.pdf';
import laminatesfile from './catalogs/Trend_PVC_Laminates_2020.pdf';
import charcoalfile from './catalogs/Trend_Charcoal_Panels_2020.pdf';
import doorfile from './catalogs/Trend_Door_Skin_2021.pdf';
import digitalfile from './catalogs/Trend_HD_Digital_2021.pdf';
import micafile from './catalogs/Trend_Liner_Mica_2020.pdf';

function Catalogues() {

    const catalogs = [
        {
            id: 1,
            title1: "PVC Premium Laminates",
            span1: 5,
            src1: magazine1,
            file1: laminatesfile,
            title2: "Acrylic Premium Laminates",
            span2: 7,
            src2: magazine2,
            fade: "right",
            file2: acrylicfile,
        },
        {
            id: 2,
            title1: "Trend Premium Door Skins",
            span1: 7,
            src1: magazine3,
            file1: doorfile,
            title2: "Trend HD Digital Laminates",
            span2: 5,
            src2: magazine4,
            fade: "left",
            file2: digitalfile,
        },
        {
            id: 3,
            title1: "Trend Liner Mica 2020",
            span1: 6,
            src1: magazine5,
            file1: micafile,
            title2: "Korean Charcoal Panels",
            span2: 6,
            src2: magazine6,
            fade: "right",
            file2: charcoalfile,
        },
    ]

    return (
        <div>
            <div className="px-10 pt-36 pb-28 xl:px-44">
                <div data-aos="fade-up">
                    <p className="font-garamond text-7xl">Catalogues</p>
                    <p className="mt-6 text-xl font-light">A range of avant-garde products, all created meticulously with the finest raw material available to the world.
                        Open your arms to the smoothest textures and the most stunning designs, created with laser precision just for you.</p>
                    <div className="grid grid-cols-12 my-10 md:gap-20">
                        <div className="col-span-12 md:col-span-4">
                            <a href={trend1file} download>
                                <p className="mb-4 text-2xl font-medium cursor-pointer text-trend">Trend 1MM 2021</p>
                                <div className="overflow-hidden rounded-lg">
                                    <img src={trend1} className="w-full duration-500 transform rounded-lg cursor-pointer hover:scale-125 h-96" alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="col-span-12 md:col-span-8">
                            <a href={trend8file} download>
                                <p className="mb-4 text-2xl font-medium cursor-pointer text-trend">Trend 0.8MM 2021</p>
                                <div className="overflow-hidden rounded-lg">
                                    <img src={trend8} className="w-full duration-500 transform rounded-lg cursor-pointer hover:scale-125 h-96" alt="" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    {catalogs.map(({ id, src1, src2, title1, title2, span1, span2, fade, file1, file2 }) => {
                        return (<div className="grid grid-cols-12 mt-10 overflow-hidden md:gap-20" data-aos={`fade-${fade}`} key={id}>
                            <div className={`col-span-12 md:col-span-${span1}`} >
                                <a href={file1} download>
                                    <p className="mb-4 text-2xl font-medium cursor-pointer text-trend">{title1}</p>
                                    <div className="w-11/12 overflow-hidden rounded-lg">
                                        <img src={src1} alt="magazine" className="w-full overflow-hidden duration-500 transform rounded-lg cursor-pointer h-96 hover:scale-125" />
                                    </div>
                                </a>
                            </div>
                            <div className={`col-span-12 md:col-span-${span2}`}>
                                <a href={file2} download>
                                    <p className="mb-4 text-2xl font-medium cursor-pointer text-trend">{title2}</p>
                                    <div className="w-11/12 overflow-hidden rounded-lg">
                                        <img src={src2} alt="magazine" className="w-full overflow-hidden duration-500 transform rounded-lg cursor-pointer h-96 hover:scale-125" />
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
