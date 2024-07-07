
"use client"
import { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "@/public/assets/Isolation_Mode.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="sticky backdrop-blur-lg border-b border-neutral-700/80 shadow-lg m-5 rounded-full">
      <div className="antialiased ">
        <div className={` w-full text-gray-700 bg-white dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75  ${menuOpen ? "rounded-lg " : "rounded-full" } `}>
          <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 rounded-full">
            <div className="flex flex-row items-center justify-between p-4">
              <a href="#" className="">
                <Image src={logo} alt='logo' className='w-8 sm:w-8'/>
              </a>
              <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <FaTimes className="w-6 h-6 text-gray-800 dark:text-gray-400 " />
                ) : (
                  <FaBars className="w-6 h-6 text-gray-800 dark:text-gray-400 " />
                )}
              </button>
            </div>
            <nav className={`flex-col items-center flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${menuOpen ? 'flex' : 'hidden'}`}>
              <a  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:bg-gray-600 dark:focus:bg-gray-600 focus:text-grey-600 hover:text-gray-600 text-gray-800 dark:text-gray-300  md:mt-0 md:ml-4 focus:text-gray-900  focus:outline-none " href="#about">How it works</a>
              <a  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:bg-gray-600 dark:focus:bg-gray-600 focus:text-grey-600 hover:text-gray-600 text-gray-800 dark:text-gray-300 md:mt-0 md:ml-4 focus:text-gray-900  focus:outline-none " href="#skills">Skills</a>
              <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg hover:bg-gray-600 dark:focus:bg-gray-600 focus:text-grey-600 hover:text-gray-600 text-gray-800 dark:text-gray-300 md:mt-0 md:ml-4 focus:text-gray-900  focus:outline-none " href="#projects">Projects</a>
              <a 
              className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
              href="#contact"
              >Contact Us</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

