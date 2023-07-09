import Navbar from '@components/Navbar';
import React from 'react';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='min-h-[90vh]'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
