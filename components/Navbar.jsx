"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import '@styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Closing the menu when switching to a larger screen
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    // Adding event listener for window resize
    window.addEventListener('resize', handleResize);

    // Removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="bg-white text-black shadow-lg h-24 flex lg:justify-between lg:items-center p-4 fixed top-0 w-full z-50">
      <Link href="/" className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8">
        <img className="" src="https://i.ibb.co/W6ZXdqN/2021-10-26-16h20-21.png" alt="logo" />
      </Link>

      {/* Menu icon */}
      <div className="lg:hidden absolute right-0 p-5">
        <button
          onClick={toggleMenu}
          className={`text-lg font-semibold focus:outline-none ${isMenuOpen ? 'hidden' : 'visible'}`}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <nav
        className={`text-lg font-semibold lg:flex gap-2 z-20
        ${isMenuOpen ? 'visible flex flex-col gap-4 absolute top-0 right-0 pt-12 p-8 h-screen bg-white bg-opacity-50' 
        : 'hidden'} 
      `}
      >
        {/* Close button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden absolute right-0 top-2 p-5 focus:outline-none"
        >
          <svg className="h-6 w-6 text-gray-600 hover:text-black hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <ul className={`flex items-center lg:gap-6 sm:gap-2 p-4 ${isMenuOpen ? 'flex-col mt-16' : 'flex-row'}`}>
          <li className="link">
            <Link href="/">Home</Link>
          </li>
          <li className="link">
            <Link href="/about">About</Link>
          </li>
          <li className="link">
            <Link href="/products">Products</Link>
          </li>
          <li className="link">
            <Link href="/services">Services</Link>
          </li>
          <li className="link">
            <Link href="/clients">Our Clients</Link>
          </li>
          <li className="link">
            <Link href="/query">Query</Link>
          </li>
        </ul>

        <Link
          className="bg-black hover:bg-gray-800 hover:scale-105 text-white font-bold flex justify-center items-center px-6 py-4 rounded-full border border-gray-300 lg:hidden"
          href="/contact"
        >
          <span>Contact&nbsp;</span>
          <span>Us</span>
        </Link>
      </nav>

      <div className="hidden lg:flex items-center">
        <Link
          className="bg-black hover:bg-gray-800 hover:scale-105 text-white font-bold flex justify-center items-center px-6 py-4 rounded-full border border-gray-300"
          href="/contact"
        >
          <span>Contact&nbsp;</span>
          <span>Us</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
