import React from 'react';
import { BiMenu } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import Logo from '../images/logoblack.png';
import LogoW from '../images/logowhite.png';

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const menubtn = navbarOpen === false ? <BiMenu style={{ color: '#000' }} /> : <AiFillCloseCircle style={{ color: '#000' }} />
    const [active, setActive] = React.useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 500) {
            setActive(true);
        }
        else {
            setActive(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <nav className={(active ? "bg-white fixed top-0 right-0 z-50 flex flex-wrap justify-between w-full lg:px-12 xl:px-52 text-black" : "fixed top-0 right-0 z-50 flex flex-wrap justify-between w-full lg:px-12 xl:px-48 text-white bg-transparent")}>
                <div className="container flex flex-wrap items-center justify-between px-10 rounded-md md:px-0">
                    <div className="relative flex justify-between w-full lg:w-80 lg:static lg:block lg:justify-start">
                        <a className="inline-block py-2" href="#">
                            {(active ? <img src={Logo} alt="Logo" className="h-10 text-white md:h-16" /> : <img src={LogoW} alt="Logo" className="h-10 md:h-16" />)}
                        </a>
                        <button
                            className="block px-3 py-1 ml-auto text-3xl cursor-pointer lg:hidden"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            {menubtn}
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center text-center" +
                            (navbarOpen ? "flex" : " hidden")
                        }
                    >
                        <ul className="flex flex-col list-none lg:flex-row lg:ml-auto"   >
                            <li className="nav-item">
                                <a
                                    className="flex items-center justify-center px-4 py-2 text-lg font-normal duration-200 hover:opacity-75"
                                    href="#"
                                >
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="flex items-center justify-center px-4 py-2 text-lg font-normal duration-200 hover:opacity-75"
                                    href="#"
                                >
                                    Products
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="flex items-center justify-center px-4 py-2 text-lg font-normal duration-200 hover:opacity-75"
                                    href="#"
                                >
                                    Catalogues
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="flex items-center justify-center py-2 pl-4 text-lg font-normal duration-200 hover:opacity-75" href="#">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}