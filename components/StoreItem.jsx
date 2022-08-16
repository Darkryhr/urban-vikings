import React from 'react';

const StoreItem = () => {
  return (
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
  );
};

export default StoreItem;
