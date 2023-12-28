import React from 'react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <div className='h-screen w-full bg-black text-white flex justify-center items-center relative'>
      <div className='absolute inset-0 bg-cover h-screen opacity-60' style={{ backgroundImage: "url('/assets/hero_bg.gif')" }}></div>
      <div className='flex flex-col h-screen w-full justify-center items-center z-10 gap-8'>
        <h1 className='text-4xl sm:text-6xl z-10 flex flex-col justify-center text-center items-center font-bold font-serif text-white'>
          <span className='text-3xl sm:text-4xl'>Welcome To</span>
          <span className='text-6xl sm:text-7xl font-extrabold'>National Network Services</span>
        </h1>
        <div className='flex flex-col text-center justify-center items-center text-xl gap-6'>
          <Link
            className='link uppercase text-yellow-400 text-3xl font-bold py-3 px-5 hover:text-gray-200 transition duration-300'
            href='/about#certified'
          >
            (ISO 9001-2015 Certified)
          </Link>
          <span className='text-center text-xl lg:text-2xl'>
            Introducing the <span className='text-yellow-400 font-extrabold'>{"\"SSCN MODEL\""}</span> - Revolutionizing cable management, eliminating 98% of clutter from poles.
          </span>
        </div>
      </div>
    </div>
  );
};
