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
    <div className='mb-24'>
    <header className="bg-white text-black shadow-lg h-24 flex xl:justify-between xl:items-center p-4 fixed top-0 w-full z-40">
      <Link href="/" className="flex-shrink-0 flex gap-2 items-center justify-center px-2 lg:px-4">
        <img src="assets/earth.gif" alt="logo" />
        <img className='w-60' src="assets/name.png" alt="name" />
      </Link>

      {/* Menu icon */}
      <div className="xl:hidden absolute right-0 p-5">
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
        className={`text-lg font-semibold xl:flex gap-2 z-20
        ${isMenuOpen ? 'visible flex flex-col gap-4 absolute top-0 right-0 pt-12 p-8 h-screen bg-white bg-opacity-50' 
        : 'hidden'} 
      `}
      >
        {/* Close button */}
        <button
          onClick={toggleMenu}
          className="xl:hidden absolute right-0 top-2 p-5 focus:outline-none"
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
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>

        <Link
          className="bg-black hover:bg-gray-800 hover:scale-105 text-white font-bold flex justify-center items-center px-6 py-4 rounded-full border border-gray-300 xl:hidden"
          href="/contact"
        >
          <span>Contact&nbsp;</span>
          <span>Us</span>
        </Link>
      </nav>

      <div className="hidden xl:flex items-center">
        <Link
          className="bg-black hover:bg-gray-800 hover:scale-105 text-white font-bold flex justify-center items-center px-6 py-4 rounded-full border border-gray-300"
          href="/contact"
        >
          <span>Contact&nbsp;</span>
          <span>Us</span>
        </Link>
      </div>
    </header>
    </div>
  );
};

export default Navbar;
