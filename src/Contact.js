import React from 'react';
import { BsChevronDown, BsArrowRight } from 'react-icons/bs';
import { MdLocationOn, MdCall, MdMail } from 'react-icons/md';
import axios from 'axios';
import queryString from 'query-string';

function Contact() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [product, setProduct] = React.useState('');
    const [text, setText] = React.useState('');
    const [nameAttr, setNameAttr] = React.useState('');
    const [mailAttr, setMailAttr] = React.useState('');
    const [productAttr, setProductAttr] = React.useState('');
    const [textAttr, setTextAttr] = React.useState('');
    const [contactForm, setContactForm] = React.useState(false);
    const myRequest = async (url) => {
        let response;
        try {
            response = await axios.get(url, null, null)
        } catch (e) {
            response = e;
        }
        console.log(response);
    }
    const handleSubmit = async (e) => {
        const data = {
            [nameAttr]: name,
            [mailAttr]: email,
            [productAttr]: product,
            [textAttr]: text
        }
        const id = "1FAIpQLSdeWvM0av77-j4hzcli2BCoc8MA8YRer5fNlmIMOEslVLqRMg" //YOUR FORM ID
        e.preventDefault()
        const formUrl = "https://docs.google.com/forms/d/e/" + id + "/formResponse?usp=pp_url&submit=Submit";
        const q = queryString.stringifyUrl({
            url: formUrl,
            query: data
        })
        await myRequest(q);
        setEmail('');
        setName('');
        setProduct('');
        setText('');
        setContactForm(true);
    }

    const options = [
        {
            id: 1,
            option: "Select a product or just leave this blank",
        },
        {
            id: 2,
            option: "Decorative Laminates"
        },
        {
            id: 3,
            option: "Acrylic Laminates"
        },
        {
            id: 4,
            option: "PVC 3D Laminates"
        },
        {
            id: 5,
            option: "MDF Boards"
        },
        {
            id: 6,
            option: "WPC Boards"
        },
        {
            id: 7,
            option: "PVC Edge Band Tapes"
        },
        {
            id: 8,
            option: "Korean Charcoal Panels"
        },
        {
            id: 9,
            option: "PVC 3D Panels",
        }
    ]
    return (
        <div>
            <div className="flex items-end pb-12 contact">
                <p className="px-10 text-5xl text-white xl:px-44 md:text-7xl font-garamond">Get in Touch</p>
            </div>

            <div className="px-10 mt-12 xl:px-44">
                <p className="text-lg font-light">A range of avant-garde products, all created meticulously with the finest raw material available to the world.
                    Open your arms to the smoothest textures and the most stunning designs, created with laser precision just for you.</p>

                <div className="grid grid-cols-6 mt-12 md:gap-10">
                    <form className="col-span-6 md:col-span-3" onSubmit={handleSubmit}>
                        <label htmlFor="name" className="block">
                            <p className="text-xl font-bold font-garamond">Your Name</p>
                            <input type="text" placeholder="First and Last Name" name="entry.125067761" className="w-full px-4 py-2 mt-2 border rounded-md placeholder-borderColor h-11 border-borderColor focus:outline-none" value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    setNameAttr(e.target.getAttribute("name"));
                                }} />
                        </label>
                        <label htmlFor="contact" className="block mt-6">
                            <p className="text-xl font-bold font-garamond">How should we contact you?</p>
                            <input type="text" name="entry.1572957650" placeholder="Leave your address or phone number here" className="w-full px-4 py-2 mt-2 border rounded-md placeholder-borderColor h-11 border-borderColor focus:outline-none" value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setMailAttr(e.target.getAttribute("name"));
                                }}
                            />
                        </label>
                        <label htmlFor="product" className="block mt-6">
                            <p className="text-xl font-bold font-garamond">Any product specific query?</p>
                            <div className="relative">
                                <select value={product} name="entry.1724307251" className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-white border rounded-md appearance-none text-borderColor border-borderColor focus:outline-none"
                                    onChange={(e) => {
                                        setProduct(e.target.value);
                                        setProductAttr(e.target.getAttribute("name"));
                                    }}>
                                    {options.map(({ option, id }) =>
                                        <option className="block mb-4 text-base tracking-wide text-borderColor " key={id}> {option}</option>
                                    )}
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 mt-2 pointer-events-none">
                                    <BsChevronDown size={16} />
                                </div>
                            </div>
                        </label>
                        <label htmlFor="message" className="block mt-6">
                            <p className="text-xl font-bold font-garamond">How can we help you?</p>
                            <textarea type="text" name="entry.687824922" value={text} placeholder="Feel free to elaborate on your query here. We’ll get back to you with a great solution for you! " className="w-full px-4 py-2 mt-2 border rounded-md placeholder-borderColor h-36 border-borderColor focus:outline-none"
                                onChange={(e) => {
                                    setText(e.target.value);
                                    setTextAttr(e.target.getAttribute("name"));
                                }} />
                        </label>
                        <button className="flex items-center justify-center p-4 py-6 my-10 text-base font-bold text-black duration-700 ease-out border border-black w-60 shadow-touch hover:text-white hover:shadow-touch1 h-9 rounded-3xl">Submit <BsArrowRight className="ml-2" size={30} /></button>
                    </form>

                    <div className="col-span-6 mt-10 mb-20 md:col-span-3">
                        <div className="flex items-center text-xl cursor-pointer hover:opacity-75">
                            <MdCall size={30} />
                            <a href="tel:+91-11 40396922" className="ml-4 cursor-pointer">+91-11 40396922</a>
                        </div>
                        <div className="flex items-center mt-10 text-xl cursor-pointer hover:opacity-75">
                            <MdMail size={30} />
                            <a href="mailto:info@trendpvc.com" className="ml-4 cursor-pointer">info@trendpvc.com</a>
                        </div>
                        <div className="flex items-center mt-10 text-xl hover:opacity-75">
                            <MdLocationOn size={30} />
                            <p className="ml-4">A-6, Mangolpuri Industrial Area, Phase 2, Delhi 110034, India</p>
                        </div>
                    </div>
                </div>

                <div className={contactForm ? "block bg-black text-white my-10 text-center p-4 text-lg lg:p-6 lg:text-xl" : "hidden"}>
                    <p>Thank you for contacting. We will reach out to you soon.</p>
                </div>

            </div>
        </div>
    )
}

export default Contact
