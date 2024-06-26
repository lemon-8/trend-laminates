import React from 'react';
import { BiMenu } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import Logo from '../images/logoblack.webp';
import LogoW from '../images/logowhite.webp';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const menubtn = navbarOpen === false ? <BiMenu /> : <AiFillCloseCircle />
    const [active, setActive] = React.useState(false);

    const location = useLocation();

    React.useEffect(() => {
        if ((location.pathname === "/Catalogues") || (location.pathname === "/About")) {
            setActive(true);
        }
        else {
            setActive(false);
            if(navbarOpen === true){                               
                setActive(true);
            }
            else{
                setActive(false);
            }
            window.addEventListener('scroll', changeBackground);
        }
        return () => {
            window.removeEventListener('scroll', changeBackground);
        }
    }, [setActive, location, navbarOpen])

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setActive(true);
        }
        else {
            setActive(false);
        }
    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    return (
        <>
            <nav className={"w-full fixed top-0 z-80 flex flex-wrap justify-between md:px-10 xl:px-44 duration-500 " + (active ? "bg-white text-black" : "pt-2 bg-transparent text-white")}>
                <div className="container flex flex-wrap items-center justify-between px-10 rounded-md md:px-0">
                    <div className="relative flex justify-between w-full lg:w-80 lg:static lg:block lg:justify-start">
                        <Link to="/" className="inline-block py-2">
                            {(active ? <img src={Logo} alt="Logo" className="h-8 md:h-12" /> : <img src={LogoW} alt="Logo" className="h-8 md:h-12" />)}
                        </Link>
                        <button
                            className={"block text-3xl cursor-pointer lg:hidden " + (active ? "text-black": "text-white")}
                            onClick={() => {
                                setNavbarOpen(!navbarOpen);
                        }}
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
                                <Link to="/" onClick={() => setNavbarOpen(!navbarOpen)} className="flex items-center justify-center px-4 py-2 text-base font-normal duration-200 hover:opacity-75">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/About" onClick={() => setNavbarOpen(!navbarOpen)} className="flex items-center justify-center px-4 py-2 text-base font-normal duration-200 hover:opacity-75">
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Products" onClick={() => setNavbarOpen(!navbarOpen)} className="flex items-center justify-center px-4 py-2 text-base font-normal duration-200 hover:opacity-75">
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Catalogues" onClick={() => setNavbarOpen(!navbarOpen)} className="flex items-center justify-center px-4 py-2 text-base font-normal duration-200 hover:opacity-75">
                                    Catalogues
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact" onClick={() => setNavbarOpen(!navbarOpen)} className="flex items-center justify-center py-2 text-base font-normal duration-200 md:pl-4 hover:opacity-75">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}