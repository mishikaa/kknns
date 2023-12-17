import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className='h-screen w-full relative'>
      <div className='absolute inset-0 bg-cover bg-no-repeat bg-center opacity-40' style={{ backgroundImage: "url('/assets/hero_bg.gif')" }}></div>
      <div className='flex flex-col h-screen w-full justify-center items-center z-10 gap-4'>
        <h1 className='text-8xl  z-10 font-extrabold font-sans'>KKNNS</h1>
        <div className='flex flex-col justify-center items-center text-2xl'>
          <span>Unleashing the Power of Networks,</span>
          <span> Your Gateway to Seamless Communication</span>
        </div>
      </div>
    </div>
  );
};
