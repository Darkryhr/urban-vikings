import React, { useState } from 'react';

import products from '@data/products.json';
import { useCart } from '@lib/useCart';
import Table from '@components/Table';

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
      const handleSubmit = e => {
        e.preventDefault();
        updateCartItem(id, +quant);
      };

      return (
        <form onSubmit={e => handleSubmit(e)}>
          <input
            type='number'
            name='quantity'
            min={0}
            value={quant}
            onChange={e => setQuant(e.target.value)}
          />
          <button type='submit'>btn</button>
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
    <main>
      {cartItems ? (
        <div className='grid grid-cols-2 w-full max-w-screen-lg mx-auto py-56'>
          <div className='w-full'>
            <h3 className='font-semibold text-lg'>Items</h3>
            <span className='w-full h-1 bg-red-600'></span>
          </div>
          <div>
            <h3 className='font-semibold text-lg'>Summary</h3>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </main>
  );
};

export default Cart;
