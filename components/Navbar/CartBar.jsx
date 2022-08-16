import React, { useRef, useEffect } from 'react';
import { useCart } from '@lib/useCart';
import { AiFillCloseCircle } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import products from '@data/products.json';
import Link from 'next/link';

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
        <AiFillCloseCircle size={26} />
      </button>
      <h2 className='md:text-3xl text-xl font-semibold'>Your cart</h2>
      <div className='w-full px-8 h-[1px] bg-zinc-300 my-2'></div>
      {cartItems.length === 0 ? (
        <div className='flex flex-col items-center justify-center border rounded md:p-8 p-4 text-center'>
          <HiOutlineShoppingBag size={30} />
          <p className='mt-3'>Your bag is empty. Find something dope.</p>
        </div>
      ) : (
        cartItems.map(item => <CartItem key={item.id} {...item} />)
      )}
      <Link href='/checkout' passHref>
        <button
          className='bg-black text-white py-3 rounded-full mx-auto px-8 disabled:opacity-70 md:text-md text-sm mt-3
          md:before:content-[attr(before)]
          '
          disabled={!cartItems.length}
          before='Procceed to '
          onClick={() => closeCart()}
        >
          Checkout
        </button>
      </Link>
    </aside>
  );
};

export default CartBar;

const CartItem = ({ id, quantity }) => {
  const product = products.find(product => product.id === id);
  return (
    <div className='grid grid-cols-2 mb-5'>
      <img src={product.image} alt={product.title} className='w-full rounded' />
      <div className='px-3'>
        <h3 className='md:text-md text-sm'>{product.title}</h3>
        <h2 className='md:text-lg text-md'>{quantity * product.price}</h2>
      </div>
    </div>
  );
};
