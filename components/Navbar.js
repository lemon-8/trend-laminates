import React from 'react';
import { BiMenu } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const menubtn = navbarOpen === false ? <BiMenu style={{ color: '#000' }} /> : <AiFillCloseCircle style={{ color: '#000' }} />
    const [active, setActive] = React.useState(false);

    const location = useRouter();

    React.useEffect(() => {
        if ((location.pathname === "/Catalogues") || (location.pathname === "/About")) {
            setActive(true);
        }
        else {
            setActive(false);
            document.addEventListener('scroll', changeBackground);
        }
        return()=>{
            document.removeEventListener('scroll', changeBackground);
        }
    },[location,setActive])

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setActive(true);
        }
        else {
            setActive(false);
        }
    }

    return (
        <>
            <nav className={(active ? "bg-white fixed top-0 right-0 z-80 pt-2 flex flex-wrap justify-between w-full lg:px-12 xl:px-44 duration-500 text-black" : "fixed duration-500 top-0 pt-4 right-0 z-80 flex flex-wrap justify-between w-full lg:px-12 xl:px-48 text-white bg-transparent")}>
                <div className="container flex flex-wrap items-center justify-between px-10 rounded-md md:px-0">
                    <div className="relative flex justify-between w-full lg:w-80 lg:static lg:block lg:justify-start">
                        <a className="inline-block py-2" href="#">
                            <Link href="/">
                                {(active ? <img src="/logoblack.png" alt="Logo" className="h-8 text-white md:h-12" /> : <img src="/logowhite.png" alt="Logo" className="h-8 md:h-12" />)}
                            </Link>
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
                                <a className="flex items-center justify-center px-4 py-2 text-base font-normal duration-200 hover:opacity-75">
                                    <Link href="/" >
                                        Home
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="flex items-center justify-center px-4 py-2 text-base font-normal duration-200 hover:opacity-75">
                                    <Link href="/About">
                                        About Us
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="flex items-center justify-center px-4 py-2 text-base font-normal duration-200 hover:opacity-75">
                                    <Link href="/Products">
                                        Products
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="flex items-center justify-center px-4 py-2 text-base font-normal duration-200 hover:opacity-75">
                                    <Link href="/Catalogues">
                                        Catalogues
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="flex items-center justify-center px-4 py-2 text-base font-normal duration-200 hover:opacity-75">
                                    <Link href="/Contact">
                                        Contact Us
                                    </Link>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}