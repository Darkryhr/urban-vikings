import React from 'react';
import Header from '@components/Header';
import products from '@data/products';
import { useCart } from '@lib/useCart';
import Link from 'next/link';

const Store = () => {
  const { addToCart } = useCart();

  return (
    <>
      <div className='nav-block'></div>
      <main className='wrapper'>
        <Header />
        <h1>Store</h1>

        <ul>
          {products.map(product => {
            const { id, title, image, description, price } = product;
            return (
              <li key={id}>
                <div>
                  <Link href={`/products/${id}`} passHref>
                    <img src={image} alt={title} />
                  </Link>
                  <div>
                    <div>
                      <h3>{title}</h3>
                      <p>${price}</p>
                    </div>
                    <p>{description}</p>
                    <button onClick={() => addToCart(id)}>Add to Cart</button>
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
