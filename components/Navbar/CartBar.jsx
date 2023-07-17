import products from '@data/products.json';
import { useCart } from '@lib/useCart';
import { X } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';

const CartBar = () => {
  const { closeCart, cartIsOpen, cartItems } = useCart();
  let ref = useRef(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) closeCart();
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () =>
      document.removeEventListener('click', handleClickOutside, true);
  });
  return (
    <aside
      ref={ref}
      className={`fixed md:w-1/4 w-1/2 top-0 right-0 h-screen bg-white border-l flex flex-col px-3 py-16 z-50 transition-transform duration-500 text-zinc-700
      ${cartIsOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      <button className='absolute top-4 right-4' onClick={() => closeCart()}>
        <X size={32} />
      </button>
      <h2 className='md:text-2xl text-xl font-semibold'>Shopping bag:</h2>
      <div className='w-full px-8 h-[1px] bg-zinc-300 my-3'></div>
      {!cartItems ? (
        <div className='flex flex-col items-center justify-center border rounded md:p-8 p-4 text-center'>
          <HiOutlineShoppingBag size={30} />
          <p className='mt-3'>Your bag is empty. Find something dope.</p>
        </div>
      ) : (
        cartItems?.map(item => <CartItem key={item.id} {...item} />)
      )}
      <Link href='/checkout' passHref>
        <button
          className='bg-black text-white py-4 uppercase font-semibold px-8 disabled:opacity-70 md:text-md text-sm mt-3
          md:before:content-[attr(before)]
          '
          disabled={!cartItems}
          before='Proceed to '
          onClick={() => closeCart()}
        >
          Checkout
        </button>
      </Link>
    </aside>
  );
};

export default CartBar;

const CartItem = ({ id, quantity, size }) => {
  const product = products.find(product => product.id === id);
  return (
    <div className='grid grid-cols-2 mb-5'>
      <img src={product.image} alt={product.title} className='w-full rounded' />
      <div className='pl-3 flex flex-col justify-between'>
        <div>
          <h3 className='md:text-base text-sm font-semibold'>
            {product.title}
          </h3>
          <h2 className='md:text-lg text-base text-zinc-800 my-0.5'>
            ${quantity * product.price}
          </h2>
          <p className='md:text-sm text-xs text-zinc-500'>Size: {size}</p>
          <p className='md:text-sm text-xs text-zinc-500'>Qty: {quantity}</p>
        </div>
        <button className='md:text-sm text-xs underline pb-1 mt-2 w-fit text-start'>
          Remove
        </button>
      </div>
    </div>
  );
};
