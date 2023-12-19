import React from 'react'
import {clientList} from '@constants/clients'

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