import React from 'react';

const Home = () => {
  return (
    <>
      <div className="bg-[url('/hero3.jpg')] bg-cover absolute top-0 right-0 w-full md:h-[75vh] h-screen -z-10 md:w-1/2 md:bg-top bg-[center_left_-16rem]"></div>
      <main className='max-w-screen-xl px-2 mx-auto'>
        <section className='pt-32 w-1/2 px-8 h-[90vh] md:text-gray-800 text-white'>
          <h1 className='font-bold text-7xl '>Rule the cold.</h1>
          <p className=''>
            Clothes made to last. Look and feel your best in any situation.
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
