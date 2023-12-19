import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeComponent = ({comp}) => {
  return (
    <div className={`py-8 lg:px-28 flex justify-center items-center md:h-screen gap-4 bg-[${comp.bg}]`}>
        <div className={`flex flex-col lg:flex-row${comp.rev} justify-center items-center gap-8`}>
            <div className='flex flex-1 flex-col justify-center items-start gap-4'>
              <span className='text-[#025464] font-bold text-4xl capitalize'>{comp.title}</span>
              <p className='flex justify-center items-start text-xl leading-relaxed'>
                {comp.description}
              </p>
              <Link className='bg-[#025464] hover:bg-gray-700 text-white text-lg font-bold py-4 px-6 rounded' href={`/${comp.link}`}>Learn more</Link>
            </div>
            <div className='flex flex-1 items-center justify-center lg:w-full'>
                <Image src={comp.img} alt={comp.title} width={400} height={100} layout="responsive" objectFit="cover" />
            </div>
        </div>
    </div>
  )
}

export default HomeComponent;
