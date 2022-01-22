import React, { useState } from 'react';

import products from '../products.json';
import { useCart } from '../lib/useCart';
import Table from '../components/Header/Table';
import Header from '../components/Header/Header';
import styles from '../styles/Cart.module.scss';

const columns = [
  {
    columnId: 'title',
    Header: 'Product',
  },
  {
    columnId: 'quantity',
    Header: 'Quantity',
  },
  {
    columnId: 'pricePerItem',
    Header: 'Price',
  },
  {
    columnId: 'total',
    Header: 'Total',
  },
];

const Cart = () => {
  const { cartItems, checkout, updateCartItem } = useCart();

  const data = cartItems.map(({ id, quantity, pricePerItem }) => {
    const product = products.find(({ id: pid }) => pid === id);
    const { title } = product || {};

    const Quantity = () => {
      const [quant, setQuant] = useState(quantity);
      const handleSubmit = (e) => {
        e.preventDefault();
        updateCartItem(id, +quant);
      };

      return (
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type='number'
            name='quantity'
            min={0}
            value={quant}
            onChange={(e) => setQuant(e.target.value)}
          />
          <button type='submit'>UP</button>
        </form>
      );
    };

    return {
      id,
      title,
      quantity: <Quantity />,
      pricePerItem: pricePerItem.toFixed(2),
      total: (quantity * pricePerItem).toFixed(2),
    };
  });

  return (
    <>
      <div className='nav-block'></div>
      <main className='wrapper'>
        <Header />
        <div className={styles.central}>
          <Table data={data} columns={columns} />
          <button onClick={checkout} className={styles.checkout}>
            Check Out
          </button>
        </div>
      </main>
    </>
  );
};

export default Cart;
