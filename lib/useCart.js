import { useState, createContext, useContext, useEffect } from 'react';
import { initiateCheckout } from './payment';
import products from '@data/products.json';

const initialCart = {};

export const CartContext = createContext();
export const useCartState = () => {
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    const stateLocal = localStorage.getItem('urbanviking_cart');
    const data = stateLocal && JSON.parse(stateLocal);
    if (data) {
      setCart(data);
    }
  }, []);

  useEffect(() => {
    const data = JSON.stringify(cart);
    localStorage.setItem('urbanviking_cart', data);
  }, [cart]);

  const cartItems = Object.entries(cart).map(([key, value]) => {
    const product = products.find(({ id }) => `${id}` === `${key}`);
    return {
      id: key,
      quantity: value,
      pricePerItem: product.price,
    };
  });

  const subtotal = cartItems.reduce(
    (acc, { pricePerItem, quantity }) => acc + pricePerItem * quantity,
    0
  );

  const totalQuantity = cartItems.reduce(
    (acc, { quantity }) => acc + quantity,
    0
  );

  const addToCart = id => {
    setCart(state => {
      let prev = { ...state };
      if (prev[id]) {
        prev[id] += 1;
      } else {
        prev[id] = 1;
      }
      return prev;
    });
  };

  const updateCartItem = (id, quant = 0) => {
    setCart(state => {
      let prev = { ...state };
      if (prev[id]) {
        prev[id] = quant;
      }
      return prev;
    });
  };

  const checkout = () => {
    initiateCheckout({
      lineItems: cartItems.map(item => ({
        price: item.id,
        quantity: item.quantity,
      })),
    });
  };

  return {
    cart,
    cartItems,
    setCart,
    subtotal,
    totalQuantity,
    addToCart,
    updateCartItem,
    checkout,
  };
};

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};
