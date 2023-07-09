import { useCart } from '@lib/useCart';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
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
    <header className='flex flex-col justify-between items-center  bg-black text-white'>
      <div className='flex-1 flex w-full py-8 md:px-6 px-4'>
        <div className='flex-1 flex items-center justify-start'>
          <button
            className='mr-2 md:hidden block'
            onClick={() => setOpen(true)}
          >
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
      </div>

      <nav
        className={`flex-1 bg-white w-[60%] md:w-full text-black py-4 
      absolute md:relative top-0 left-0 h-full md:h-fit flex items-start justify-center pt-28 md:pt-4 border-r-2 border-black md:border-r-0 transition-all md:translate-x-0
      ${open ? '' : '-translate-x-full'}
      `}
      >
        <button
          className='md:hidden absolute top-0 left-0 pl-12 pt-8'
          onClick={() => setOpen(false)}
        >
          <X size={32} />
        </button>
        <ul className='flex items-start justify-center md:space-x-16 flex-col md:flex-row space-y-8 md:space-y-0 font-extrabold text-2xl md:text-base uppercase'>
          <li>
            <Link href='/'>Clothes</Link>
          </li>
          <li>
            <Link href='/'>Shoes</Link>
          </li>
          <li>
            <Link href='/'>Accessories</Link>
          </li>
          <li>
            <Link href='/'>Undies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
