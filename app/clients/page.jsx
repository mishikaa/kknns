import React from 'react'

const clientList = [
  {
    title: 'National Water Development Authority',
    description: 'We are proud to provide high-quality services to the , contributing to water resource management and development projects.'
  },
  {
    title: 'Doordarshan Kendra, Lucknow',
    description: 'Our collaboration with Doordarshan Kendra involves delivering cutting-edge solutions to enhance broadcasting capabilities and reach a wider audience.'
  },
  {
    title: 'UCO Bank, Lucknow',
    description: 'Our services extend to UCO Bank, Lucknow, where we provide tailored solutions to meet banking and financial needs. With a focus on technological innovation and efficiency, we strive to enhance the overall banking experience for UCO Bank customers.'
  },
  {
    title: 'S.G.P.G.I.M.S., Lucknow',
    description: 'We are honored to serve the Sanjay Gandhi Postgraduate Institute of Medical Sciences, Lucknow. Our collaboration involves delivering tailored solutions to meet the unique technological needs of a premier medical institution, contributing to advancements in healthcare.'
  },
  {
    title: 'CANARA Bank U.P.',
    description: 'Our partnership with CANARA Bank U.P. is centered on providing comprehensive and reliable services to meet the diverse banking requirements. We strive to support CANARA Bank in delivering top-notch financial services to its customers.'
  },
  {
    title: 'Central Telegraph Office, Lucknow',
    description: 'Working closely with the Central Telegraph Office, Lucknow, we aim to modernize and optimize communication systems. Our services contribute to the seamless transmission of information, enhancing connectivity and efficiency.'
  },
  {
    title: 'L.E.S.A.',
    description: 'As a service provider for Lucknow Electric Supply Authority (L.E.S.A.), we are dedicated to ensuring the reliability and efficiency of electrical services. Our solutions contribute to the smooth functioning of the power distribution network.'
  },
  {
    title: 'I.T.R.C. (Industrial Toxilogy Research Centre)',
    description: 'Our collaboration with the Industrial Toxilogy Research Centre (I.T.R.C.) involves providing advanced technological solutions to support research initiatives. We are committed to contributing to the advancement of industrial toxicology.'
  },
  {
    title: 'BOBL Lucknow',
    description: 'We extend our services to Bank of Baroda, Lucknow, with a focus on delivering cutting-edge banking solutions. Our partnership aims to enhance the digital banking experience for BOBL Lucknow customers.'
  },
  {
    title: 'Lucknow Development Authority',
    description: 'In collaboration with Lucknow Development Authority, we provide technological solutions to support urban development initiatives. Our services contribute to the planning and execution of projects aimed at enhancing the quality of life in Lucknow.'
  }
]

const Clients = () => {
  return (
    <div className='flex flex-col w-full'>
      <div className='w-full flex flex-col justify-center items-center h-72 lg:h-96 bg-cover bg-no-repeat' style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/assets/clients_bg.avif')", backgroundPosition: 'center' }}>
        <h1 className="text-8xl capitalize text-white font-extrabold">Our Clients</h1>
        <h3 className="text-4xl capitalize text-slate-200 italic mt-4">Discover the Partnerships</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-12">
        {/* Clients */}
        {clientList.map((client, index) => (
          <div key={index} className="group bg-white p-6 mt-4 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <span className='text-[#025464] font-bold mb-2 text-2xl'>{client.title}</span>
            <div className='border-b-2 border-[#025464] my-2 mb-8'></div>
            <p className="text-gray-600 text-md">{client.description}</p>
          </div>
        ))}
      </div>

      <div className="p-12">
        <p className="text-lg">
          We kindly request your esteemed authority to consider registering our company for the purposes mentioned above. Your support is greatly appreciated.
        </p>
      </div>
    </div>
  );
};

export default Clients;