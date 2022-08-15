import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { BiCart } from 'react-icons/bi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useCart } from '@lib/useCart';
import { useRouter } from 'next/router';

const Navbar = () => {
  const { subtotal } = useCart();
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
    <nav
      className={`max-w-screen-xl mx-auto flex justify-between items-center py-4 md:px-8 px-3 ${
        router.pathname === '/' ? 'md:text-gray-800 text-white' : ''
      }`}
    >
      <Link href='/' passHref onClick={() => setOpen(false)}>
        <h1 className='md:text-xl uppercase font-semibold tracking-widest cursor-pointer transition-opacity hover:opacity-80'>
          Urban Vikings
        </h1>
      </Link>
      <button className='md:hidden mb-1' onClick={() => setOpen(true)}>
        <AiOutlineMenu size={18} />
      </button>
      <div
        ref={ref}
        className={`
        ${router.pathname === '/' ? 'md:text-white text-gray-800' : ''}
        md:space-x-6 items-center transition md:flex-row md:space-y-0 md:h-auto md:bg-transparent md:relative md:w-auto md:border-none md:translate-x-0 md:pt-0
        text-sm flex flex-col space-x-0 space-y-3 h-screen bg-gray-50 fixed z-50 top-0 right-0 w-1/2 border-l border-gray-200 pt-4 font-medium
        ${open ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <button className='py-4 md:hidden' onClick={() => setOpen(false)}>
          <AiOutlineClose size={22} />
        </button>
        <Link href='/'>
          <a
            className='md:py-0 py-3 md:w-min w-full text-center transition-colors hover:bg-gray-200 md:hover:bg-transparent md:hover:underline'
            onClick={() => setOpen(false)}
          >
            Home
          </a>
        </Link>
        <Link href='/store'>
          <a
            className='md:py-0 py-3 md:w-min w-full text-center transition-colors hover:bg-gray-200 md:hover:bg-transparent md:hover:underline'
            onClick={() => setOpen(false)}
          >
            Store
          </a>
        </Link>
        <Link href='/about'>
          <a
            className='md:py-0 py-3 md:w-min w-full text-center transition-colors hover:bg-gray-200 md:hover:bg-transparent md:hover:underline'
            onClick={() => setOpen(false)}
          >
            About
          </a>
        </Link>
        <Link href='/cart' passHref>
          <a
            className='md:py-0 py-3 md:w-min w-full text-center transition-colors hover:bg-gray-200 md:hover:bg-transparent'
            onClick={() => setOpen(false)}
          >
            <BiCart size={22} className='mx-auto pb-1' />
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
