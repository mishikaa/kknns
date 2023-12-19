import React from 'react'
import ProductCard from '@components/ProductCard';

const prodList = [
  {
    title: 'CISCO Routers',
    img: '/assets/products_1.avif',
    description: 'Our Cisco routers are cutting-edge networking solutions designed to provide seamless connectivity and robust performance. With advanced features such as high-speed data transfer, reliable security protocols, and easy configuration, Cisco routers are ideal for both small businesses and large enterprises.'
  },
  {
    title: 'Lease Lines Modem',
    img: '/assets/products_4.png',
    description: 'Lease Lines Modems ensure dedicated and high-speed internet access for businesses. Offering stability and consistent performance, these modems are tailored for enterprises with demanding data transfer needs.'
  },
  {
    title: 'Network Terminal',
    img: '/assets/products_3.png',
    description: 'Our network terminal solutions provide efficient data processing and management. With a focus on performance and reliability, these terminals are suitable for various networking applications, contributing to a seamless and connected business environment.'
  },
  {
    title: 'D-Link Modem',
    img: '/assets/products_5.png',
    description: 'The D-Link modem combines reliability and affordability. Suitable for home users and small businesses, D-Link modems provide hassle-free internet connectivity with a focus on simplicity and ease of use.'
  },
  {
    title: 'ASSCOM Modem',
    img: '/assets/products_2.png',
    description: 'The ASSCOM modem offers reliable and high-speed internet connectivity. Designed with user-friendly features and compatibility, ASSCOM modems ensure a stable connection for homes and businesses. Experience fast and secure internet access with ASSCOM.'
  },
];

const Products = () => {
  return (
    <div className='h-full w-full flex flex-col'>
      <div className='w-full flex flex-col justify-center items-center h-72 lg:h-96 bg-cover bg-no-repeat' style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/assets/products_bg.avif')" }}>
        <h1 className="text-8xl capitalize text-white font-extrabold">our Products</h1>
      </div>

      <div className='w-full grid grid-cols-1 md:grid-cols-2'>
          {prodList.map(product => (
            <ProductCard key={product.title} product={product} />
          ))}
      </div>
    </div>
  )
}

export default Products;
