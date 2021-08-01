import React from 'react';
import { BiMenu } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import Logo from '../images/logo.png';

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const menubtn = navbarOpen === false ? <BiMenu style={{ color: '#fff' }} /> : <AiFillCloseCircle style={{ color: '#fff' }} />
    return (
        <>
            <nav className="fixed top-0 right-0 z-50 flex flex-wrap justify-between w-full text-white">
                <div className="container flex flex-wrap items-center justify-between px-10 rounded-md lg:px-12 xl:px-28 navbar">
                    <div className="relative flex justify-between w-full lg:w-80 lg:static lg:block lg:justify-start">
                        <a className="inline-block py-2">
                            <img src={Logo} alt="Logo" className="h-16 md:h-28" />
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
                        <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
                            <li className="nav-item">
                                <a className="flex items-center justify-center px-6 py-2 text-lg font-normal hover:opacity-75">
                                    About Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="flex items-center justify-center px-6 py-2 text-lg font-normal hover:opacity-75"
                                    href="#"
                                >
                                    Products
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="flex items-center justify-center px-6 py-2 text-lg font-normal hover:opacity-75"
                                    href="#"
                                >
                                    Catalogues
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="flex items-center justify-center px-6 py-2 text-lg font-normal hover:opacity-75">
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