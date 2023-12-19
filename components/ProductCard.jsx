import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="mx-auto p-5 sm:p-10 md:p-16">
        <div className="rounded-lg overflow-hidden bg-[var(--background-secondary)] shadow-lg mx-auto transition-transform duration-300 transform hover:scale-105">
            <img className="w-full h-64 lg:h-80 object-contain object-center" src={product.img} alt={product.title} />
            <div className="px-6 py-4">
              <span className='text-[#025464] font-bold mb-2 text-2xl'>{product.title}</span>
              <div className='border-b-2 border-[#025464] my-2 mb-8'></div>
              <p className="text-gray-600 text-base">{product.description}</p>
            </div>
        {/* <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-indigo-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2">
            {product.category}
          </span>
        </div> */}
        </div>
    </div>
  );
};

export default ProductCard;
