import { useCart } from '@lib/useCart';
import { Menu, Search, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import CartBar from './CartBar';

const Navbar = () => {
  const { openCart, cartItems } = useCart();
  const [open, setOpen] = useState(false);
  let ref = useRef(null);
  const router = useRouter();

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () =>
      document.removeEventListener('click', handleClickOutside, true);
  });

  return (
    <header className='flex justify-between items-center py-8 md:px-6 px-4 bg-black text-white relative'>
      <div className='flex-1 flex items-center justify-start'>
        <button className='mr-2 md:hidden block' onClick={() => setOpen(true)}>
          <Menu />
        </button>
        <button>
          <Search />
        </button>
      </div>

      {/* <button className='relative'>
          <a
            className='md:py-0 py-3 md:w-min w-full text-center transition-colors hover:bg-gray-200 md:hover:bg-transparent cursor-pointer'
            onClick={() => {
              setOpen(false);
              openCart();
            }}
          >
            <BiCart size={22} className='mx-auto pb-1' />
            {!!cartItems?.length && (
              <div className='w-1.5 h-1.5 bg-red-800 absolute top-0 right-0 rounded-lg mt-[2px] mr-[1px]'></div>
            )}
          </a>
        </button> */}
      <div className='flex flex-1 justify-center relative'>
        <Link href='/' passHref onClick={() => setOpen(false)}>
          <h1 className='text-3xl uppercase font-logo font-extrabold text-center leading-6 truncate'>
            Urban Vikings
          </h1>
        </Link>
        <div className='h-1 w-64 bg-white absolute top-1/2 -translate-y-1/2'></div>
      </div>
      <button
        className='flex-1 flex justify-end'
        onClick={() => setOpen(false)}
      >
        <ShoppingBag />
      </button>
    </header>
  );
};

export default Navbar;
