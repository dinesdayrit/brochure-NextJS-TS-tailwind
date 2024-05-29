"use client";

import { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

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
                <li className="uppercase hover:border-b text-xl text-stone-100">Products</li>
                <li className="uppercase hover:border-b text-xl text-stone-100">Other Products</li>
                <li className="uppercase hover:border-b text-xl text-stone-100">Industries we serve</li>
                <li className="uppercase hover:border-b text-xl text-stone-100">Contact</li>
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
                <li className="py-4 cursor-pointer" onClick={handleNav}>Products</li>
                <li className="py-4 cursor-pointer" onClick={handleNav}>Other Products</li>
                <li className="py-4 cursor-pointer" onClick={handleNav}>Industries we serve</li>
                <li className="py-4 cursor-pointer" onClick={handleNav}>Contact</li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavMenu
