import React from 'react';
import trend from './images/left_compare.webp';
import mission from './images/mission.webp';
import principle from './images/principle_bg.webp';
import decorative from './images/decorative.webp';

function About() {
    return (
        <div className="px-10 pt-20 md:pt-28 lg:pt-36 pb-28 xl:px-44">
            
            <div>
                <p className="text-4xl font-bold md:text-5xl font-garamond">Where it all started</p>
                <p className="w-full mt-6 text-xl font-light md:w-11/12">
                    The TCS group was founded by <span className="font-bold">Sh. Vinod Goyal</span> in the year 1984. With a very humble beginning in trading just plywood in Delhi and NCR region. Over the years, through hard work and the support of our loyal customers, we have grown into trading an extensive catalogue of Plywoods, Blockboards, Laminates, Venition and Shuttering Ply. Along this journey we developed a network of over 500 trusted partners in the Delhi/NCR region.
                </p>
            </div>
            
            <div className="grid items-center grid-cols-6 gap-10 mt-20">
                <div className="col-span-6 overflow-hidden rounded-md lg:col-span-3">
                    <img src={trend} alt="" className="h-full duration-500 transform rounded-md hover:scale-125" />
                </div>
                <div className="col-span-6 lg:pr-20 lg:col-span-3">
                    <p className="text-5xl font-bold font-garamond">Trend PVC</p>
                    <p className="mt-6 text-lg font-light">Trend PVC is an industry-defining enterprise by the TCS group established in 2014 by <span className="font-bold"> Mr Akhil Goyal</span> , under the able guidance of the founder of the TCS Group Sh. Vinod Goyal.
                        Trend PVC was created specifically to bring a revolution in the interior and decorative industries with an innovative and path-breaking mindset. Since its inception, Trend PVC has rapidly earned acclaim as industry leaders in providing high-quality laminates, PVC, acrylic and charcoal.</p>
                </div>
            </div>

            <div className="flex flex-col-reverse items-center grid-cols-6 gap-10 my-20 lg:grid">
                <div className="col-span-6 lg:pr-24 lg:col-span-3">
                    <p className="text-5xl font-bold font-garamond">Our Mission</p>
                    <p className="mt-6 text-lg font-light">
                        To embark upon the creative journey of producing modern interior solutions for all our clients. To grow this wholly family-owned business into an enterprise grounded in ethics and gazing into the future with innovation in all our products. To provide supreme products to our clients at the best prices in the market.
                        <br /><span className="font-bold">Our mission is to be trendsetters.</span>
                    </p>
                </div>
                <div className="col-span-6 overflow-hidden rounded-md lg:col-span-3">
                    <img src={mission} alt="" className="w-full duration-500 transform rounded-md hover:scale-125" />
                </div>
            </div>

            <div className="relative z-10 text-center text-white">
                <div className="overflow-hidden rounded-md">
                    <img src={principle} alt="" className="w-full duration-500 transform rounded-md h-96 lg:h-auto hover:scale-125" />
                </div>
                <div className="absolute transform lg:-translate-y-1/2 lg:-translate-x-1/2 top-10 left-10 right-10 lg:top-1/2 lg:left-1/2">
                    <p className="text-2xl font-bold md:text-5xl font-garamond">Our Principles</p>
                    <p className="w-full mt-6 text-base font-light text-center md:mt-6 md:text-lg">
                        Today, we have a network of over 500+ dedicated dealers pan India, with operations in 28 states and repeated business orders from high profile clientele.
                        This exponential growth can only be attributed to our dedication to ensuring customer satisfaction, top quality products and our principles
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-10 mt-20">
                <div className="col-span-3 lg:col-span-1">
                    <p className="text-3xl font-bold font-garamond">Supreme Quality</p>
                    <p className="mt-6 mr-10 text-base font-light">Bringing you elegant design solutions that surpass international quality standards, made with state-of-the-art manufacturing techniques.</p>
                </div>
                <div className="col-span-3 lg:col-span-1">
                    <p className="text-3xl font-bold font-garamond">Customer Satisfaction</p>
                    <p className="mt-6 mr-10 text-base font-light">The needs of every customer are unique, and Trend PVC recognizes this with our wide range of laminates, PVC, charcoal, acrylic to facilitate all our customers with precisely what they want.</p>
                </div>
                <div className="col-span-3 lg:col-span-1">
                    <p className="text-3xl font-bold font-garamond">Inspired Innovation</p>
                    <p className="mt-6 text-base font-light">We use a variety of proprietary methodologies in the production and design process to make our products stand out from the competition.</p>
                </div>
            </div>

            <div className="grid items-center grid-cols-6 gap-10 mt-20">
                <div className="col-span-6 overflow-hidden rounded-md lg:col-span-3">
                    <img src={decorative} alt="" className="duration-500 transform rounded-md hover:scale-125" />
                </div>
                <div className="col-span-6 lg:col-span-3">
                    <p className="text-5xl font-bold font-garamond">Our Vision</p>
                    <p className="mt-6 text-lg font-light">
                        To transform the laminates and PVC industry landscape by introducing cutting-edge technological upgrades and our client-centric business model . We plan to achieve this through the global expansion of our services across all varieties of design solutions by facilitating an extensive gamut of customer requirements. We want to bring a paradigm shift in the interior and design industry with a new catalogue of beautiful designs and unique textures. Our motivated team is working tirelessly every day to manifest this vision into a reality.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default About
