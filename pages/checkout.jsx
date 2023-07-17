import { EditBar } from '@components/EditBar';
import React, { useState } from 'react';

import products from '@data/products.json';
import { useCart } from '@lib/useCart';

const getProduct = id => products.find(product => product.id === id);

function getProductTotal(cartItems) {
  return cartItems.reduce(
    (prev, cur) => prev + cur.quantity * getProduct(cur.id).price,
    0
  );
}

const Cart = () => {
  const { cartItems, checkout } = useCart();
  const total = getProductTotal(cartItems);
  return (
    <main className='max-w-screen-xl px-8 mx-auto py-16'>
      <h1 className='text-3xl font-heading'>Your Cart</h1>
      <div className='h-[1px] bg-zinc-300 w-full my-4'></div>
      <div className='grid md:gap-20 gap-8 md:grid-cols-2'>
        <div>
          <h3 className='text-xl mb-4 mt-2'>
            {cartItems.length === 1 ? '1 Item' : `${cartItems.length} items`}
          </h3>
          <section>
            {cartItems.map(item => (
              <CartItem key={item.id} {...item} />
            ))}
          </section>
        </div>
        <section className='flex flex-col'>
          <h3 className='text-xl'>Order Summary</h3>
          <div className='w-3/4 h-[1px] bg-zinc-300 mb-4 mt-2'></div>
          <div className='grid grid-cols-1 space-y-2 items-center'>
            <div className='md:w-1/2 flex justify-between'>
              <p className='text-zinc-500'>Products:</p>
              <span> ${total}</span>
            </div>
            <div className='md:w-1/2 flex justify-between'>
              <p className='text-zinc-500'>Shipping: </p>
              <span> $14.99</span>
            </div>
          </div>
          <div className='w-3/4 h-[1px] bg-zinc-300 mb-2 mt-4'></div>
          <div className='mt-4 mb-6 flex justify-between md:w-1/2'>
            <p className='text-zinc-800 font-semibold'>Sub Total:</p>
            <p className='text-zinc-500'>${14.99 + total}</p>
          </div>
          <button
            className='bg-blue-700 transition-colors hover:bg-blue-600 text-white w-full py-3 '
            onClick={checkout}
          >
            Proceed to Payment
          </button>
        </section>
      </div>
    </main>
  );
};

export default Cart;

const CartItem = ({ id, quantity, size }) => {
  const [openEditor, setOpenEditor] = useState(false);
  const product = products.find(product => product.id === id);
  const { removeItem } = useCart();
  return (
    <div className=' mb-5'>
      <div className='grid grid-cols-2 max-w-xs'>
        <img
          src={product.image}
          alt={product.title}
          className='w-full max-w-[150px] rounded'
        />
        <div className='pl-2'>
          <h3 className='text-md font-semibold'>{product.title}</h3>
          <h2 className='text-lg text-zinc-800 my-1'>
            ${quantity * product.price}
          </h2>
          <p className='text-xs text-zinc-500 mb-1'>Size: {size}</p>
          <p className='text-xs text-zinc-500'>Qty: {quantity}</p>
        </div>
      </div>
      <div className='flex space-x-4'>
        <button
          className='text-xs underline underline-offset-2 text-zinc-600 mt-3'
          onClick={() => removeItem(id)}
        >
          Remove
        </button>
        <button
          className='text-xs underline underline-offset-2 text-zinc-600 mt-3'
          onClick={() => setOpenEditor(true)}
        >
          Edit
        </button>
      </div>
      <EditBar
        id={id}
        product={product}
        quantity={quantity}
        size={size}
        setOpenEditor={setOpenEditor}
        openEditor={openEditor}
      />
    </div>
  );
};
