import Link from 'next/link';
import React from 'react';
import Logo from './svg/Logo';

const Footer = () => {
  return (
    <footer className='w-full bg-black h-52 text-gray-200 flex justify-center items-center mt-4'>
      <div className='flex w-full max-w-screen-xl justify-between items-center px-8'>
        <div className='flex flex-col space-y-4 '>
          <Link href='/'>
            <a className='hover:underline transition'>Home</a>
          </Link>
          <Link href='/store'>
            <a className='hover:underline transition'>Store</a>
          </Link>
          <Link href='/about'>
            <a className='hover:underline transition'>About</a>
          </Link>
        </div>
        <div className='w-28 opacity-85 -rotate-[23deg]'>
          <Logo footer />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
