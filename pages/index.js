import Arrow from '@components/svg/Arrow';
import Image from 'next/image';
import React from 'react';

const Home = () => {
  return (
    <>
      <div className="bg-[url('/hero3.jpg')] bg-cover bg-no-repeat absolute top-0 right-0 w-full md:h-[100vh] h-screen -z-10 md:w-1/2 md:bg-top animate-intro"></div>
      <main className='max-w-screen-xl px-2 mx-auto'>
        <section className='md:w-1/2 px-8 h-[90vh] md:text-gray-700 text-white flex flex-col justify-center md:pb-24 sm:pb-48 pb-56 relative'>
          <div className='absolute'>
            <h1 className='font-bold text-7xl sm:max-w-none'>Rule the cold.</h1>
            <p className='text-lg md:max-w-none max-w-xs'>
              Clothes made to last. Look and feel your best in any situation.
            </p>
          </div>
          <Arrow />
        </section>
      </main>
    </>
  );
};

export default Home;
