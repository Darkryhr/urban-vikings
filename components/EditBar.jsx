import React, { useState, useRef, useEffect } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useCart } from '@lib/useCart';

export const EditBar = ({
  id,
  product,
  quantity,
  size,
  setOpenEditor,
  openEditor,
}) => {
  const { updateCart } = useCart();
  const ref = useRef(null);
  const [editSize, setEditSize] = useState(size);
  const [editQuantity, setEditQuantity] = useState(quantity);
  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target))
      setOpenEditor(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () =>
      document.removeEventListener('click', handleClickOutside, true);
  });

  return (
    <aside
      ref={ref}
      className={`fixed md:w-1/4 w-3/4 top-0 right-0 h-screen bg-white border-l flex flex-col px-3 py-16 z-50 transition-transform duration-500 text-zinc-700
      ${openEditor ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      <button
        className='absolute top-4 right-4'
        onClick={() => setOpenEditor(false)}
      >
        <AiFillCloseCircle size={26} />
      </button>
      <h2 className='md:text-3xl text-xl font-semibold'>Edit Item</h2>
      <div className='w-full px-8 h-[1px] bg-zinc-300 my-2'></div>

      <h3 className='font-semibold text-xl mb-2'>{product.title}</h3>

      <img src={product.image} alt={product.title} className='w-full rounded' />

      <div className='px-2 flex flex-col space-y-8 mt-6 flex-1'>
        <h1 className='text-2xl font-semibold md:pl-0'>{product.title}</h1>
        <div className='grid grid-cols-2  items-center'>
          <p className='text-sm'>Color:</p>
          <div className='bg-blue-500 w-8 h-8 rounded-3xl border-4 border-white shadow'></div>
        </div>
        <div className='grid grid-cols-2 items-center'>
          <p className='text-gray-600 text-sm'>Price:</p>${product.price}
        </div>
        <div className='grid grid-cols-2 items-center'>
          <span className='text-gray-600 text-sm'>Size:</span>
          <select
            name='size'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            value={editSize}
            onChange={e => setEditSize(e.target.value)}
          >
            <option value='X-Small'>X-Small</option>
            <option value='Small'>Small</option>
            <option value='Medium'>Medium</option>
            <option value='Large'>Large</option>
            <option value='X-Large'>X-Large</option>
            <option value='XX-Large'>XX-Large</option>
          </select>
        </div>
        <div className='grid grid-cols-2 items-center'>
          <span className='text-gray-600 mr-8 text-sm'>Quantity:</span>

          <div className='custom-number-input h-10 w-24 '>
            <div className='flex flex-row h-10 w-full rounded relative bg-transparent border border-gray-300'>
              <button
                className='text-gray-600 bg-white hover:bg-gray-100 h-full w-20 rounded-l border-r cursor-pointer outline-none disabled:text-gray-300 disabled:cursor-default'
                disabled={quantity <= 0}
                onClick={() => setEditQuantity((quantity -= 1))}
              >
                <span className='m-auto text-xl'>−</span>
              </button>
              <input
                type='number'
                className='outline-none focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700'
                value={editQuantity}
                readOnly
              ></input>
              <button
                className=' text-gray-600 bg-white hover:bg-gray-100 h-full w-20 rounded-r border-l cursor-pointer'
                onClick={() => setEditQuantity((quantity += 1))}
              >
                <span className='m-auto text-xl'>+</span>
              </button>
            </div>
          </div>
        </div>

        <button
          className='w-full bg-black transition-colors hover:bg-zinc-800 text-white py-3 rounded-full disabled:cursor-default disabled:opacity-70'
          onClick={() => {
            updateCart(id, editQuantity, editSize);
            setOpenEditor(false);
          }}
          disabled={quantity < 1}
        >
          Update
        </button>
      </div>
    </aside>
  );
};
