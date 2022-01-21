import React from 'react';
import Header from '../components/Header/Header';

const Home = () => {
  return (
    <>
      <div className='hero-img'></div>
      <main className='wrapper'>
        <Header />
        <section className='hero'>
          <h1>Become the kings and queens of the cold.</h1>

          <p className='subhead'>
            Clothes made to last. Look and feel your best in any situation.
          </p>

          <svg
            className='down-arrow'
            viewBox='0 0 16 132'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.29289 131.707C7.68341 132.098 8.31658 132.098 8.7071 131.707L15.0711 125.343C15.4616 124.953 15.4616 124.319 15.0711 123.929C14.6805 123.538 14.0474 123.538 13.6568 123.929L7.99999 129.586L2.34314 123.929C1.95262 123.538 1.31945 123.538 0.928927 123.929C0.538402 124.319 0.538402 124.953 0.928927 125.343L7.29289 131.707ZM7 -4.37114e-08L6.99999 131L8.99999 131L9 4.37114e-08L7 -4.37114e-08Z'
              fill='black'
            />
          </svg>
        </section>

        <section className='more-info'>
          <div className='feature'>
            <div className='content'>
              <p className='title'>Confidence through Style</p>
              <p className='desc'>
                Whether you spend all day chopping lumber or writing code,
                looking and feeling your best becomes seemingly effortless.
              </p>
            </div>
            <img src='/coats.jpg' alt='Rack of coats' />
          </div>
          <div className='feature left'>
            <div className='content'>
              <p className='title'>Calmness through Comfort</p>
              <p className='desc'>
                A calm nature sends a strong message, with fewer discomforts and
                worries you can focus on what truly matters.
              </p>
            </div>
            <img src='/bearded-man.jpg' alt='Bearded man' />
          </div>
          <div className='feature'>
            <div className='content'>
              <p className='title'>Value through Effort</p>
              <p className='desc'>
                Sustainably made, our brand strives to better the public
                perception of fashion with modern, yet long-lasting attire
              </p>
            </div>
            <img src='/a-man.jpg' alt='Just a man' />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
