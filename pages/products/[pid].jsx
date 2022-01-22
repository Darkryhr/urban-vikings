import React from 'react';
import Header from '../../components/Header/Header';
import products from '../../products.json';
import styles from './Product.module.scss';
import { useCart } from '../../lib/useCart';

const ProductPage = ({ product: { id, title, description, image, price } }) => {
  const { addToCart } = useCart();

  return (
    <>
      <div className='nav-block'></div>
      <main className='wrapper'>
        <Header />
        <div className={styles.card}>
          <img src={image} alt={title} />
          <div className={styles.content}>
            <h1>{title}</h1>
            <p>{description}</p>
            <h3>{price}</h3>
            <button onClick={() => addToCart(id)}>Buy</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductPage;

export async function getStaticPaths() {
  const paths = products.map((product) => ({
    params: {
      pid: product.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = products.find(({ id }) => id === params.pid);
  return {
    props: {
      product,
    },
  };
}
