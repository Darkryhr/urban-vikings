import Link from 'next/link';
import React from 'react';
import Logo from './svg/Logo';

const Footer = () => {
  return (
    <footer className='w-full bg-black h-52 text-gray-200 flex justify-center items-center'>
      <div className='w-28'>
        <Logo />
      </div>
    </footer>
  );
};

export default Footer;
