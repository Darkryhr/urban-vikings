import SearchBar from '@components/SearchBar';
import Logo from '@components/svg/Logo';
import { useCart } from '@lib/useCart';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import CartBar from './CartBar';

const Navbar = () => {
  const { openCart, cartItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searching, setSearching] = useState(false);
  let ref = useRef(null);
  const router = useRouter();

  const closeMenu = () => {
    document.body.style.overflow = 'scroll';
    document.body.style.height = '100%';

    setMobileMenuOpen(false);
  };

  const openMenu = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    setMobileMenuOpen(true);
  };

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) closeMenu();
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
          <button className='mr-2 md:hidden block' onClick={() => openMenu()}>
            <Menu />
          </button>

          <button
            onClick={() => setSearching(prev => !prev)}
            className='md:block hidden'
          >
            <Search />
          </button>
        </div>

        <div className='flex flex-1 justify-center relative'>
          <Link href='/' passHref onClick={() => setOpen(false)}>
            <h1 className='text-3xl uppercase font-logo font-extrabold text-center leading-6 truncate'>
              Urban Vikings
            </h1>
          </Link>
          <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-14 opacity-40 '>
            <Logo />
          </div>
          <div className='h-1 w-64 bg-white absolute top-1/2 -translate-y-1/2'></div>
        </div>

        <button
          className='flex-1 flex justify-end relative'
          onClick={() => {
            closeMenu();
            openCart();
          }}
        >
          <ShoppingBag />
          {!!cartItems?.length && (
            <div className='w-1.5 h-1.5 bg-red-800 absolute top-0 right-0 rounded-lg mt-[2px] mr-[1px]'></div>
          )}
        </button>
      </div>

      <nav
        className={`flex-1 bg-white w-[60%] md:w-full text-black py-4 mx-auto 
      absolute z-50 md:relative top-0 left-0 h-full md:h-fit flex items-start justify-center pt-28 md:pt-4 border-r-2 border-black md:border-r-0 transition-all md:translate-x-0
      ${mobileMenuOpen ? '' : '-translate-x-full'}
      `}
        ref={ref}
      >
        <button
          className='md:hidden absolute top-0 left-0 ml-10 pt-8'
          onClick={() => closeMenu()}
        >
          <X size={32} />
        </button>
        {!searching ? (
          <ul className='flex items-start justify-center md:space-x-16 flex-col md:flex-row space-y-8 md:space-y-0 font-extrabold text-2xl md:text-base uppercase ml-12'>
            <li>
              <SearchBar closeSearch={setSearching} open={searching} />
            </li>
            <li onClick={() => closeMenu()}>
              <Link href='/store'>Explore</Link>
            </li>
            <li onClick={() => closeMenu()}>
              <Link
                href={{
                  pathname: '/store',
                  query: {
                    category: 'apparel',
                  },
                }}
              >
                Apparel
              </Link>
            </li>
            <li onClick={() => closeMenu()}>
              <Link
                href={{
                  pathname: '/store',
                  query: {
                    category: 'accessories',
                  },
                }}
              >
                Accessories
              </Link>
            </li>
            <li onClick={() => closeMenu()}>
              <Link
                href={{
                  pathname: '/store',
                  query: {
                    category: 'merch',
                  },
                }}
              >
                Merch
              </Link>
            </li>
          </ul>
        ) : (
          <SearchBar closeSearch={setSearching} open={searching} />
        )}
      </nav>
      <CartBar />
    </header>
  );
};

export default Navbar;
