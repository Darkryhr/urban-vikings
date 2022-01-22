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
            className={styles.quant}
            type='number'
            name='quantity'
            min={0}
            value={quant}
            onChange={(e) => setQuant(e.target.value)}
          />
          <button type='submit' className={styles.btn}>
            <svg
              className={styles.update}
              version='1.1'
              width='420.827px'
              height='420.827px'
              viewBox='0 0 420.827 420.827'
            >
              <g>
                <g>
                  <path
                    d='M210.29,0C156,0,104.43,20.693,65.077,58.269C25.859,95.715,2.794,146.022,0.134,199.921
			c-0.135,2.734,0.857,5.404,2.744,7.388c1.889,1.983,4.507,3.105,7.244,3.105h45.211c5.275,0,9.644-4.098,9.979-9.362
			c4.871-76.214,68.553-135.914,144.979-135.914c80.105,0,145.275,65.171,145.275,145.276c0,80.105-65.17,145.276-145.275,145.276
			c-18.109,0-35.772-3.287-52.501-9.771l17.366-15.425c2.686-2.354,3.912-5.964,3.217-9.468c-0.696-3.506-3.209-6.371-6.592-7.521
			l-113-32.552c-3.387-1.149-7.122-0.407-9.81,1.948c-2.686,2.354-3.913,5.963-3.218,9.467L69.71,403.157
			c0.696,3.505,3.209,6.372,6.591,7.521c3.383,1.147,7.122,0.408,9.81-1.946l18.599-16.298
			c31.946,18.574,68.456,28.394,105.581,28.394c116.021,0,210.414-94.392,210.414-210.414C420.705,94.391,326.312,0,210.29,0z'
                  />
                  <path
                    d='M195.112,237.9h118.5c2.757,0,5-2.242,5-5v-30c0-2.757-2.243-5-5-5h-83.5v-91c0-2.757-2.243-5-5-5h-30
			c-2.757,0-5,2.243-5,5v126C190.112,235.658,192.355,237.9,195.112,237.9z'
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </button>
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
