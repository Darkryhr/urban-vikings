import React, { useState } from 'react';
import products from '@data/products.json';
import { useCart } from '@lib/useCart';

const ProductPage = ({ product: { id, title, image, price } }) => {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItem,
  } = useCart();

  const [quantity, setQuantity] = useState(0);

  return (
    <main className='pt-4 pb-8 w-full max-w-screen-xl md:px-8 px-2 mx-auto'>
      <div className='md:flex w-full'>
        <img
          src={image}
          alt={title}
          className='max-w-[700px] w-full rounded-lg'
        />
        <div className='px-4 md:px-10 flex flex-col space-y-8 mt-6 flex-1'>
          <h1 className='text-2xl font-semibold md:pl-0'>{title}</h1>
          <div className='grid grid-cols-2  items-center'>
            <p className='mr-6  text-sm'>Color:</p>
            <div className='bg-blue-500 w-8 h-8 rounded-3xl border-4 border-white shadow'></div>
          </div>
          <div className='grid grid-cols-2  items-center'>
            <p className='text-gray-600 mr-8 text-sm'>Price:</p>${price}
          </div>
          <div className='grid grid-cols-2  items-center'>
            <span className='text-gray-600 mr-8 text-sm'>Size:</span>
            <select
              name='size'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            >
              <option value='xs'>X-Small</option>
              <option value='sm'>Small</option>
              <option value='md'>Medium</option>
              <option value='lg'>Large</option>
              <option value='xl'>X-Large</option>
              <option value='2xl'>XX-Large</option>
            </select>
          </div>
          <div className='grid grid-cols-2 items-center'>
            <span className='text-gray-600 mr-8 text-sm'>Quantity:</span>

            <div className='custom-number-input h-10 w-24 '>
              <div className='flex flex-row h-10 w-full rounded relative bg-transparent border border-gray-300'>
                <button
                  className='text-gray-600 bg-white hover:bg-gray-100 h-full w-20 rounded-l border-r cursor-pointer outline-none disabled:text-gray-300 disabled:cursor-default'
                  disabled={!getItemQuantity(id)}
                  onClick={() => decreaseItemQuantity(id)}
                >
                  <span className='m-auto text-xl'>−</span>
                </button>
                <input
                  type='number'
                  className='outline-none focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700'
                  value={getItemQuantity(id)}
                  readOnly
                ></input>
                <button
                  className=' text-gray-600 bg-white hover:bg-gray-100 h-full w-20 rounded-r border-l cursor-pointer'
                  onClick={() => increaseItemQuantity(id)}
                >
                  <span className='m-auto text-xl'>+</span>
                </button>
              </div>
            </div>
          </div>

          <button className='w-full bg-black transition-colors hover:bg-zinc-800 text-white py-3 rounded-full'>
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;

export async function getStaticPaths() {
  const paths = products.map(product => ({
    params: {
      pid: product.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = products.find(({ id }) => id === params.pid);
  return {
    props: {
      product,
    },
  };
}
