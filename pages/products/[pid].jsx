import React from 'react';
import products from '@data/products.json';
import { useCart } from '@lib/useCart';

const ProductPage = ({ product: { id, title, image, price } }) => {
  const { addToCart } = useCart();

  return (
    <>
      <div className='nav-block'></div>
      <main className='wrapper'>
        <div>
          <img src={image} alt={title} />
          <div>
            <h1>{title}</h1>
            <h3>{price}</h3>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductPage;

export async function getStaticPaths() {
  const paths = products.map(product => ({
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
