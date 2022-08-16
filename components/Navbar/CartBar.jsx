import React, { useRef, useEffect } from 'react';
import { useCart } from '@lib/useCart';
import { AiOutlineClose } from 'react-icons/ai';
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
      className={`fixed md:w-1/4 w-1/2 top-0 right-0 h-screen bg-white border-l flex flex-col px-3 py-14 z-50 transition-transform duration-500
      ${cartIsOpen ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      <button className='absolute top-4 right-4' onClick={() => closeCart()}>
        <AiOutlineClose size={30} />
      </button>
      <h2 className='text-3xl font-semibold mb-3'>Your cart</h2>
      {!cartItems.length ? (
        <div className='flex flex-col items-center justify-center border rounded p-8 text-center'>
          <HiOutlineShoppingBag size={30} />
          <p className='mt-3'>Your bag is empty. Find something dope.</p>
        </div>
      ) : (
        cartItems.map(item => <CartItem key={item.id} {...item} />)
      )}
      <Link href='/checkout' passHref>
        <button
          className='bg-black text-white py-3 rounded-full mx-auto px-8 disabled:opacity-70 md:text-md text-sm
          md:before:content-[attr(before)]
          '
          disabled={!cartItems.length}
          before='Procceed to '
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
  console.log(quantity);
  return (
    <div className='grid grid-cols-2 mb-3'>
      <img src={product.image} alt={product.title} className='w-full' />
      <div className='px-3'>
        <h3 className=''>{product.title}</h3>
        <h2 className='text-lg'>{quantity * product.price}</h2>
      </div>
    </div>
  );
};
