import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cursor from './Cursor';

function Catalogues() {

    const catalogs = [
        {
            id: 1,
            title1: "PVC Premium Laminates",
            span1: 2,
            src1: "magazine1",
            file1: "/catalogs/Trend_PVC_Laminates_2020.pdf",
            title2: "Acrylic Premium Laminates",
            span2: 4,
            src2: "magazine2",
            fade: "right",
            file2: "/catalogs/Trend_ACRYLIC_2021.pdf",
        },
        {
            id: 2,
            title1: "Trend Premium Door Skins",
            span1: 4,
            src1: "magazine3",
            file1: "/catalogs/Trend_Door_Skin_2021.pdf",
            title2: "Trend HD Digital Laminates",
            span2: 2,
            src2: "magazine4",
            fade: "left",
            file2: "/catalogs/Trend_HD_Digital_2021.pdf",
        },
        {
            id: 3,
            title1: "Trend Liner Mica 2020",
            span1: 3,
            src1: "magazine5",
            file1: "/catalogs/Trend_Liner_Mica_2020.pdf",
            title2: "Korean Charcoal Panels",
            span2: 3,
            src2: "magazine6",
            fade: "right",
            file2: "/catalogs/Trend_Charcoal_Panels_2020.pdf",
        },
    ]

    return (
        <div>
            <Cursor />
            <Navbar />
            <div className="px-10 pt-36 pb-28 xl:px-44">
                <div data-aos="fade-up">
                    <p className="font-garamond text-7xl">Catalogues</p>
                    <p className="mt-6 text-xl font-light">A range of avant-garde products, all created meticulously with the finest raw material available to the world.
                        Open your arms to the smoothest textures and the most stunning designs, created with laser precision just for you.</p>
                    <div className="grid grid-cols-12 my-10 md:gap-20">
                        <div className="col-span-12 md:col-span-4">
                            <a href="/catalogs/Trend_1MM_2021.pdf" download>
                                <p className="mb-4 text-2xl font-medium cursor-pointer text-trend">Trend 1MM 2021</p>
                                <div className="w-full overflow-hidden rounded-lg h-96">
                                    <div className="w-full h-full overflow-hidden duration-500 transform rounded-lg cursor-pointer hover:scale-125 trend1" />
                                </div>
                            </a>
                        </div>
                        <div className="col-span-12 md:col-span-8">
                            <a href="/catalogs/Trend_0.8MM_2021.pdf" download>
                                <p className="mb-4 text-2xl font-medium cursor-pointer text-trend">Trend 0.8MM 2021</p>
                                <div className="w-full overflow-hidden rounded-lg h-96">
                                    <div className="w-full h-full overflow-hidden duration-500 transform rounded-lg cursor-pointer hover:scale-125 trend8" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <a href="../" />
                <div>
                    {catalogs.map(({ id, src1, src2, title1, title2, span1, span2, fade, file1, file2 }) => {
                        return (<div className="grid grid-cols-6 mt-10 overflow-hidden md:gap-20" data-aos={`fade-${fade}`} key={id}>
                            <div className={`col-span-6 md:col-span-${span1}`} >
                                <a href="../" download>
                                    <p className="mb-4 text-2xl font-medium cursor-pointer text-trend">{title1}</p>
                                    <div className="w-full overflow-hidden rounded-lg h-96">
                                        <div className={"w-full overflow-hidden duration-500 transform rounded-lg cursor-pointer h-full hover:scale-125 " + src1} />
                                    </div>
                                </a>
                            </div>
                            <div className={`col-span-6 md:col-span-${span2}`}>
                                <a href={file2} download>
                                    <p className="mb-4 text-2xl font-medium cursor-pointer text-trend">{title2}</p>
                                    <div className="w-full overflow-hidden rounded-lg h-96">
                                        <div className={"w-full overflow-hidden duration-500 transform rounded-lg cursor-pointer h-full hover:scale-125 " + src2} />
                                    </div>
                                </a>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Catalogues;
