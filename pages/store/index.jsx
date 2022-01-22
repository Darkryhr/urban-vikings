import React from 'react';
import Header from '../../components/Header/Header';
import products from '../../products.json';
import styles from '../../styles/Store.module.scss';

const Store = () => {
  return (
    <>
      <div className='nav-block'></div>
      <main className='wrapper'>
        <Header />
        <h1>Store</h1>
        <ul className={styles.grid}>
          {products.map((product) => {
            const { id, title, image, description, price } = product;
            return (
              <li key={id} className={styles.card}>
                <a href='#'>
                  <img src={image} alt={title} />
                  <div className={styles.content}>
                    <div className={styles.heading}>
                      <h3>{title}</h3>
                      <p>${price}</p>
                    </div>
                    <p>{description}</p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Store;
