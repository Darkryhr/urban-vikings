import React from 'react';
import products from '@data/products.json';
import { useCart } from '@lib/useCart';

const ProductPage = ({ product: { id, title, image, price } }) => {
  const { addToCart } = useCart();

  return (
    <main className='pt-4 pb-8 w-full max-w-screen-xl md:px-8 px-2 mx-auto'>
      <div className='md:flex w-full'>
        <img
          src={image}
          alt={title}
          className='max-w-[800px] w-full rounded-lg'
        />
        <div className='px-4 md:px-10 flex flex-col space-y-8 mt-6 flex-1'>
          <h1 className='text-2xl font-semibold md:pl-0'>{title}</h1>
          <div className='flex items-center justify-start'>
            <p className='mr-6  text-sm'>Color:</p>
            <div className='bg-blue-500 w-8 h-8 rounded-3xl border-4 border-white shadow'></div>
          </div>
          <p>
            <span className='text-gray-600 mr-8 text-sm'>Price:</span>${price}
          </p>
          <div className='flex items-center flex-row'>
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
          <button
            onClick={() => addToCart(id)}
            className='w-full bg-black text-white py-3 rounded-full'
          >
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
