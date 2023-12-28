import ProductCard from '@components/ProductCard';
import {prodList} from '@constants/products';

const Products = () => {
  return (
    <div className='h-full w-full flex flex-col'>
      <div className='w-full flex flex-col justify-center items-center h-72 lg:h-96 bg-cover bg-no-repeat' style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/assets/products_bg.avif')" }}>
        <h1 className="text-4xl lg:text-8xl capitalize text-white font-extrabold">our Products</h1>
        <h3 className="text-lg p-4 lg:text-4xl text-center capitalize text-slate-200 italic mt-4">Discover Quality Networking Solutions</h3>
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
