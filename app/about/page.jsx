import Image from 'next/image';
import React from 'react'

const About = () => {
  return (
    <>
    <div className='min-h-screen w-full flex flex-col gap-8'>
      {/* title section */}
      <div className='w-full flex flex-col justify-center items-center h-2/3 py-12' style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/assets/about_bg.avif')" }}>
        <h1 className="text-8xl capitalize text-white font-extrabold">About us</h1>
        <h3 className="text-4xl capitalize text-slate-200 italic mt-4"> A Legacy of Quality and Customer Satisfaction Since 2005</h3>
      </div>
      
      {/* content */}
      <div className='py-8 lg:px-28 mx-12 flex justify-center items-center md:h-screen gap-4'>
        <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-12'>
          {/* <Image src='/assets/about1.jpg' alt='about1' width={400} height={100}/> */}
          <Image src='/assets/certificate.jpg' width={500} height={100}/>
          <div className='flex flex-col justify-center'>
              <span className='text-[#025464] font-bold text-2xl'>Technical Expertise and Operational Experience</span>
              <div className='border-b-2 border-[#025464] my-2 mb-8'></div>
              <p className='flex justify-center items-start text-xl leading-relaxed'>
              National Network Services, registered under NNS, boasts a team of technically and managerially qualified professionals with extensive 
              operational and maintenance experience in the installation, commissioning, and operation of optical fiber and coaxial cable systems. 
              </p>
              <p className='flex justify-center items-start text-xl leading-relaxed'>
              Our dedicated team spans various domains, providing comprehensive support for communication and computing systems, encompassing hardware 
              and software—from leased lines, terminal equipment, and PCs to robust servers tailored to meet diverse user requirements.
              National Network Services, registered under NNS, boasts a team of technically and managerially qualified professionals with extensive operational and maintenance experience in the installation, commissioning, and operation of optical fiber and coaxial cable systems.
              </p>
              <p className='flex justify-center items-start text-xl leading-relaxed'>
              Certified and operating since 2005, National Network Services is committed to delivering reliable solutions and has a proven track record in the field.
              </p>
          </div>
        </div>
      </div>
    </div>

    <div className='md:h-screen w-full flex flex-col gap-8'>
      <div className='md:py-8 px-12 lg:px-40 flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 h-screen bg-[var(--background-secondary)]'>
        <div className='flex flex-col justify-center'>
              <span className='text-[#025464] font-bold text-2xl'>Comprehensive IT Services</span>
              <div className='border-b-2 border-[#025464] my-2 mb-8'></div>
              <p className='flex justify-center items-start text-xl leading-relaxed'>
              Our company's focus extends to key sectors such as Utilities, Banking, Telecom, and more. In the realm of services, NNS Group not only 
              offers robust support for its core business but also provides professional and business consultancy services to its esteemed clientele. 
              </p>
        </div>
        <Image src='/assets/about2.jpg' alt='about2' width={400} height={20}/>
      </div>

      <div className='py-8 lg:px-28 mx-12 flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-12 md:h-screen'>
        <Image src='/assets/about3.jpg' alt='about3' width={400} height={20}/>
        <div className='flex flex-col justify-center'>
              <span className='text-[#025464] font-bold text-2xl'>Strategic Sector Focus</span>
              <div className='border-b-2 border-[#025464] my-2 mb-8'></div>
              <p className='flex justify-center items-start text-xl leading-relaxed'>
              NNS has cultivated a longstanding association with telecom services, and our Utilities line of business collaborates with companies worldwide 
              to enhance customer service, elevate operational efficiency, and bolster competitiveness. Our solutions are holistic, covering system design, 
              installation and commissioning, liaising with government departments, and ongoing operation and maintenance.
              </p>
          </div>
      </div>
    </div>
    </>
  )
}

export default About;