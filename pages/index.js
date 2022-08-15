import React from 'react';

const Home = () => {
  return (
    <>
      <div className="bg-[url('/hero3.jpg')] bg-cover absolute top-0 right-0 w-full md:h-[75vh] h-screen -z-10 md:w-1/2 md:bg-top bg-[center_left_-16rem] animate-intro"></div>
      <main className='max-w-screen-xl px-2 mx-auto'>
        <section className='w-1/2 px-8 h-[75vh] md:text-gray-800 text-white flex flex-col justify-center md:pb-0 pb-24'>
          <h1 className='font-bold text-7xl'>Rule the cold.</h1>
          <p className='text-lg'>
            Clothes made to last. Look and feel your best in any situation.
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
