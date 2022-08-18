import Arrow from '@components/svg/Arrow';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <>
      <div className="bg-[url('/hero3.jpg')] bg-cover bg-no-repeat absolute top-0 right-0 w-full md:h-[100vh] h-screen -z-10 md:w-1/2 md:bg-top animate-intro"></div>
      <main className=''>
        <section className='px-10 h-[90vh] md:text-gray-700 text-white flex flex-col justify-center md:pb-24 sm:pb-48 pb-56 relative max-w-screen-xl mx-auto '>
          <div className='absolute'>
            <h1 className='font-bold text-7xl sm:max-w-none'>Rule the cold.</h1>
            <p className='text-lg md:max-w-none max-w-xs'>
              Clothes made to last. Look and feel your best in any situation.
            </p>
          </div>
          <Arrow />
        </section>
        <section className='w-full bg-black md:h-[50vh] h-[35vh] mt-10 relative z-0'>
          <Image
            src='/bearded-man.jpg'
            layout='fill'
            className='object-cover -z-10'
            alt='a bearded man'
          />
          <div className='relative z-20 flex flex-col w-full items-center justify-center h-full backdrop-blur-sm bg-white/10 text-white space-y-1'>
            <h2 className='md:text-6xl text-5xl'>Clothes</h2>
            <p className='pb-3 md:text-md text-sm md:w-full w-1/2 text-center'>
              Day to day apparel designed for looks, even on the job.
            </p>
            <Link href='/store' passHref>
              <button className='border-2 border-white px-4 pb-1 pt-2 rounded-3xl text-sm transition hover:bg-white hover:border-transparent hover:text-zinc-700'>
                Shop Now
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
