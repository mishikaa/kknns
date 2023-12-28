import React from 'react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <div className='h-screen w-full bg-black text-white flex justify-center items-center'>
      <div className='absolute inset-0 bg-cover h-screen opacity-40' style={{ backgroundImage: "url('/assets/hero_bg.gif')" }}></div>
      <div className='flex flex-col h-screen w-full justify-center items-center z-10 gap-4'>
        <h1 className='text-6xl sm:text-8xl z-10 flex flex-col justify-center items-center font-extrabold font-sans'>
          <span>Welcome To</span>
          <span>KKNNS</span>
        </h1>
        <div className='flex flex-col justify-center items-center text-xl gap-4'>
          <span>Your one-stop solution for network services and solutions.</span>
          <Link
            className='link flex uppercase justify-center items-center cursor-pointer z-40 text-white text-4xl font-bold py-4 px-6 hover:text-white'
            href='/about#certified'
          >
            <span>Certified</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
