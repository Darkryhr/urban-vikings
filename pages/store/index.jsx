import React from 'react';
import products from '@data/products';
import { useCart } from '@lib/useCart';
import Link from 'next/link';
import Image from 'next/image';

const Store = () => {
  const { addToCart } = useCart();

  return (
    <main className='max-w-screen-xl mx-auto md:px-8 px-4 pt-4'>
      <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
        {products.map(product => {
          const { id, title, image, price } = product;
          return (
            <div key={id} className=' max-w-[300px] w-full'>
              <Link href={`/products/${id}`} passHref>
                <div className='relative product max-w-[300px]'>
                  <Image src={image} alt={title} width='300px' height='300px' />
                  <button
                    onClick={() => addToCart(id)}
                    className='absolute w-[90%] bottom-6 bg-opacity-75 left-1/2 transform -translate-x-1/2 text-white bg-zinc-900 border border-gray-600 py-2 rounded-full font-semibold'
                  >
                    Add to cart
                  </button>
                </div>
              </Link>
              <div className='flex w-full justify-between text-gray-800 px-1 mt-1 text-sm'>
                <h3 className='font-semibold'>{title}</h3>
                <p className=''>${price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Store;
