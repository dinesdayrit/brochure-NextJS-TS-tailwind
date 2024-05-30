"use client";

import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';

const NavMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navBg, setNavBg] = useState('bg-transparent');

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    const changeNavBg = () => {
        if (window.scrollY >= 90) {
            setNavBg('bg-stone-800');
        } else {
            setNavBg('bg-transparent');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
        return () => {
            window.removeEventListener('scroll', changeNavBg);
        };
    }, []);

    return (
        <nav className={`fixed w-full h-24 shadow-xl z-10 ${navBg} transition-colors duration-500`}>
            <div className="flex justify-end items-center h-full w-full px-4 2xl:px-16">
                <div>
                    <ul className="hidden sm:flex gap-4">
                        <li className="uppercase hover:border-b text-stone-100">
                            <Link to="home" smooth={true} duration={800} activeClass="active" spy={true} offset={-80} className="cursor-pointer">
                                Home
                            </Link>
                        </li>
                        <li className="uppercase hover:border-b text-stone-100">
                            <Link to="products" smooth={true} duration={800} activeClass="active" spy={true} offset={-80} className="cursor-pointer">
                                Products
                            </Link>
                        </li>
                        <li className="uppercase hover:border-b text-stone-100">
                            <Link to="industry" smooth={true} duration={800} activeClass="active" spy={true} offset={-80} className="cursor-pointer">
                                Industries we serve
                            </Link>
                        </li>
                        <li className="uppercase hover:border-b text-stone-100">
                            <Link to="contact" smooth={true} duration={800} activeClass="active" spy={true} offset={-80} className="cursor-pointer">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div onClick={handleNav} className="md:hidden cursor-pointer pl-25">
                    <AiOutlineMenu size={35} color="orange" />
                </div>
                <div className={
                    menuOpen
                        ? "fixed left-0 top-0 w-[90%] sm:hidden h-screen bg-stone-100 p-10 ease-in duration-500 z-10"
                        : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                }
                >
                    <div className="flex w-full items-center justify-end">
                        <div onClick={handleNav} className="md:hidden cursor-pointer pl-25">
                            <AiOutlineClose size={35} color="orange" />
                        </div>
                    </div>
                    <ul className="flex flex-col">
                    <li className="py-4 cursor-pointer">
                            <Link to="home" smooth={true} duration={800} activeClass="active" spy={true} offset={-80} onClick={handleNav}>
                                Home
                            </Link>
                        </li>
                        <li className="py-4 cursor-pointer">
                            <Link to="products" smooth={true} duration={800} activeClass="active" spy={true} offset={-80} onClick={handleNav}>
                                Products
                            </Link>
                        </li>
                        <li className="py-4 cursor-pointer">
                            <Link to="otherProducts" smooth={true} duration={800} activeClass="active" spy={true} offset={-80} onClick={handleNav}>
                                Other Products
                            </Link>
                        </li>
                        <li className="py-4 cursor-pointer">
                            <Link to="industry" smooth={true} duration={800} activeClass="active" spy={true} offset={-80} onClick={handleNav}>
                                Industries we serve
                            </Link>
                        </li>
                        <li className="py-4 cursor-pointer">
                            <Link to="contact" smooth={true} duration={800} activeClass="active" spy={true} offset={-80} onClick={handleNav}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavMenu;
