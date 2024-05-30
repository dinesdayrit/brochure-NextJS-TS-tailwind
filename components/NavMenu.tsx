"use client";

import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';

const NavMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }

  return (
    <nav className="w-full h-24 shadow-xl z-10">
      <div className="flex justify-end items-center h-full w-full px-4 2xl:px-16 bg-orange-500">
        <div>
            <ul className="hidden sm:flex gap-4">
                <li className="uppercase hover:border-b text-stone-100">
                <Link to="products" smooth={true} duration={800}>Products</Link>
                </li>
                <li className="uppercase hover:border-b text-stone-100">
                <Link to="otherProducts" smooth={true} duration={800}>Other Products</Link>
                </li>
                <li className="uppercase hover:border-b text-stone-100">
                <Link to="industry" smooth={true} duration={800}>Industries we serve</Link>
                </li>
                <li className="uppercase hover:border-b text-stone-100">
                <Link to="contact" smooth={true} duration={800}>Contact</Link>
                </li>
            </ul>
        </div>
        <div onClick={handleNav} className="md:hidden cursor-pointer pl-25">
            <AiOutlineMenu size={35} color="white"/>
        </div>
        <div className={
            menuOpen 
            ? "fixed left-0 top-0 w-[90%] sm:hidden h-screen bg-stone-100 p-10 ease-in duration-500 z-10" 
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
        >
        <div className="flex w-full items-center justify-end">
        <div onClick={handleNav} className="md:hidden cursor-pointer pl-25">
            <AiOutlineClose size={35} color="orange"/>
        </div>
        </div>
            <ul className="flex flex-col">
                <li className="py-4 cursor-pointer">
                <Link to="products" smooth={true} duration={800} onClick={handleNav}>Products</Link>
                </li>

                <li className="py-4 cursor-pointer">
                <Link to="otherProducts" smooth={true} duration={800} onClick={handleNav}>Other Products</Link>
                </li>
               
                <li className="py-4 cursor-pointer">
                <Link to="industry" smooth={true} duration={800} onClick={handleNav}>Industries we serve</Link>
                </li>
                
                <li className="py-4 cursor-pointer">
                <Link to="contact" smooth={true} duration={800} onClick={handleNav}>Contact</Link>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavMenu
