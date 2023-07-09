import Arrow from '@components/svg/Arrow';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div>
      <section className='max-w-screen-xl mx-auto px-4'>
        <div className='flex flex-col justify-center w-full h-[90vh]'>
          <div
            className="
         bg-[url('/hero.jpg')] bg-cover bg-left-top absolute w-full -z-10 left-0 top-0 h-screen
        "
          ></div>

          <div className='h-2 w-1/4 mt-4 mb-2 bg-black'></div>
          <h1 className='text-8xl leading-none font-black font-heading text-gray-50 bg-black w-fit py-6 px-8 text-start max-w-3xl'>
            Rule the cold.
          </h1>
          <div className='h-2 w-1/2 mt-2 bg-black'></div>
          <Link href='/store' passHref>
            <button className='bg-gray-50 text-black uppercase border-2 border-black w-fit mt-5 px-6 py-3 font-bold'>
              Shop Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
