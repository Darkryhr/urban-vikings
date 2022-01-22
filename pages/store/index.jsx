import React from 'react';
import Header from '../../components/Header/Header';
import products from '../../products.json';
import styles from '../../styles/Store.module.scss';
import { useCart } from '../../lib/useCart';
import Link from 'next/link';

const Store = () => {
  const { addToCart } = useCart();

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
                <div>
                  <Link href={`/products/${id}`} passHref>
                    <img src={image} alt={title} />
                  </Link>
                  <div className={styles.content}>
                    <div className={styles.heading}>
                      <h3>{title}</h3>
                      <p>${price}</p>
                    </div>
                    <p>{description}</p>
                    <button
                      className={styles.btn}
                      onClick={() => addToCart(id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Store;
