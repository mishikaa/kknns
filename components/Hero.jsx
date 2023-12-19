import React from 'react';

export const Hero = () => {
  return (
    <div className='h-screen w-full bg-black text-white'>
      <div className='absolute inset-0 bg-cover h-screen opacity-40' style={{ backgroundImage: "url('/assets/hero_bg.gif')" }}></div>
      <div className='flex flex-col h-screen w-full justify-center items-center z-10 gap-4'>
        <h1 className='text-4xl lg:text-8xl z-10 flex flex-col justify-center items-center font-extrabold font-sans'>
          <span>Welcome To</span>
          <span>KKNNS</span>
        </h1>
        <div className='flex flex-col justify-center items-center text-2xl'>
          <span>Your one-stop solution for network services and solutions.</span>
        </div>
      </div>
    </div>
  );
};
