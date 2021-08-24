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
    return (
        <div>
            <div className="px-10 pt-40 pb-28 xl:px-44">
                <div className="h-screen" data-aos="fade-up">
                    <p className="font-garamond text-7xl">Catalogues</p>
                    <p className="mt-10 text-xl font-light">A range of avant-garde products, all created meticulously with the finest raw material available to the world.
                        Open your arms to the smoothest textures and the most stunning designs, created with laser precision just for you.</p>
                    <div className="grid grid-cols-12 gap-10 mt-10">
                        <div className="col-span-12 md:col-span-4">
                            <p className="text-2xl font-medium text-trend">Trend 1MM 2021</p>
                            <img src={trend1} className="w-full mt-4 rounded-lg h-3/4" alt="" />
                        </div>
                        <div className="col-span-12 md:col-span-8">
                            <p className="text-2xl font-medium text-trend">Trend 0.8MM 2021</p>
                            <img src={trend8} className="w-full mt-4 rounded-lg h-3/4" alt="" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-10" data-aos="fade-right">
                    <div className="col-span-12 md:col-span-5" >
                        <p className="text-2xl font-medium text-trend">Trend 1MM 2021</p>
                        <img src={magazine1} alt="magazine" className="w-full mt-4 rounded-lg h-3/4" />
                    </div>
                    <div className="col-span-12 md:col-span-7">
                        <p className="text-2xl font-medium text-trend">Trend 0.8MM 2021</p>
                        <img src={magazine2} alt="magazine" className="w-full mt-4 rounded-lg h-3/4" />
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-10" data-aos="fade-left">
                    <div className="col-span-12 md:col-span-7">
                        <p className="text-2xl font-medium text-trend">Trend Premium Door Skins</p>
                        <img src={magazine3} alt="magazine" className="w-full mt-4 rounded-lg h-3/4" />
                    </div>
                    <div className="col-span-12 md:col-span-5">
                        <p className="text-2xl font-medium text-trend">Trend HD Digital Laminates</p>
                        <img src={magazine4} alt="magazine" className="w-full mt-4 rounded-lg h-3/4" />
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-10" data-aos="fade-right">
                    <div className="col-span-12 md:col-span-6">
                        <p className="text-2xl font-medium text-trend">Trend Liner Mica 2020</p>
                        <img src={magazine5} alt="magazine" className="w-full mt-4 rounded-lg h-3/4" />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <p className="text-2xl font-medium text-trend">Korean Charcoal Panels</p>
                        <img src={magazine6} alt="magazine" className="w-full mt-4 rounded-lg h-3/4" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Catalogues;
