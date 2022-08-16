import React, { useState } from 'react';

import products from '@data/products.json';
import { useCart } from '@lib/useCart';

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <main className='max-w-screen-xl px-8 mx-auto py-16'>
      <h1 className='w-full text-3xl font-semibold mb-6'>Your Cart</h1>
      <div></div>
      <div className='grid md:gap-20 gap-8 md:grid-cols-2'>
        <div>
          <h3 className='text-xl'>
            {cartItems.length === 1 ? '1 Item' : `${cartItems.length} items`}
          </h3>
          <div className='w-full h-[1px] bg-zinc-300 mb-4 mt-2'></div>
          <section>
            {cartItems.map(item => (
              <CartItem key={item.id} {...item} />
            ))}
          </section>
        </div>
        <section>
          <h3 className='text-xl'>Order Summary</h3>
          <div className='w-full h-[1px] bg-zinc-300 mb-4 mt-2'></div>
          <div className='grid grid-cols-2 space-y-2'>
            <p className='text-zinc-500'>Products:</p>
            <p className='text-zinc-500'>$14.99</p>
            <p className='text-zinc-500'>Shipping:</p>
            <p className='text-zinc-500'>$14.99</p>
          </div>
          <div className='w-full h-[1px] bg-zinc-300 mb-2 mt-4'></div>
          <div className='grid grid-cols-2 my-4'>
            <p className='text-zinc-800 font-semibold'>Sub Total:</p>
            <p className='text-zinc-500'>$29.98</p>
          </div>
          <button className='bg-blue-700 transition-colors hover:bg-blue-600 text-white w-full py-3 rounded-full'>
            Proceed to Payment
          </button>
        </section>
      </div>
    </main>
  );
};

export default Cart;

const CartItem = ({ id, quantity, size }) => {
  const product = products.find(product => product.id === id);
  const { removeItem } = useCart();
  return (
    <div className=' mb-5'>
      <div className='grid grid-cols-2 max-w-xs'>
        <img
          src={product.image}
          alt={product.title}
          className='w-full max-w-[150px] rounded'
        />
        <div className='pl-2'>
          <h3 className='text-md font-semibold'>{product.title}</h3>
          <h2 className='text-lg text-zinc-800 my-1'>
            ${quantity * product.price}
          </h2>
          <p className='text-xs text-zinc-500 mb-1'>Size: {size}</p>
          <p className='text-xs text-zinc-500'>Qty: {quantity}</p>
        </div>
      </div>
      <div className='flex space-x-4'>
        <button
          className='text-xs underline underline-offset-2 text-zinc-600 mt-3'
          onClick={() => removeItem(id)}
        >
          Remove
        </button>
        <button className='text-xs underline underline-offset-2 text-zinc-600 mt-3'>
          Edit
        </button>
      </div>
    </div>
  );
};
