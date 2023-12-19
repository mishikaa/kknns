import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export const Hero = () => {
  return (
    <div className='h-screen w-full bg-black text-white'>
      <div className='absolute inset-0 bg-cover h-screen opacity-40' style={{ backgroundImage: "url('/assets/hero_bg.gif')" }}></div>
      <div className='flex flex-col h-screen w-full justify-center items-center z-10 gap-4'>
        <h1 className='text-4xl lg:text-8xl z-10 flex flex-col justify-center items-center font-extrabold font-sans'>
          <span>Welcome To</span>
          <span>KKNNS</span>
        </h1>
        <div className='flex flex-col justify-center items-center text-2xl gap-4'>
          <span>Your one-stop solution for network services and solutions.</span>
          <Link
            className='flex justify-center items-center outline cursor-pointer z-40 hover:bg-gray-700 text-white text-lg font-bold py-4 px-6 rounded-full'
            href='/assets/certificate.jpg'
            download='certificate.jpg'
          >
            <FontAwesomeIcon icon={faDownload} className='mr-2 w-8' />
            <span>Certificate</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
