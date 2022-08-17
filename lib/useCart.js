import { useState, createContext, useContext } from 'react';

import { initiateCheckout } from './payment';
const CartContext = createContext({});

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const cart = useProvideCart();
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

function useProvideCart() {
  const [cartItems, setCartItems] = useState([]);
  const [cartIsOpen, setIsOpen] = useState(false);

  function getItemQuantity(id) {
    return cartItems.find(item => item.id === id)?.quantity || 0;
  }

  function updateCart(id, quantity, size) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity, size }];
      } else {
        return currItems.map(item => {
          if (item.id === id) return { ...item, quantity: quantity };
          else return item;
        });
      }
    });
  }

  function removeItem(id) {
    setCartItems(currItems => currItems.filter(item => item.id !== id));
  }

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const checkout = () => {
    initiateCheckout({
      lineItems: cartItems.map(item => ({
        price: item.id,
        quantity: item.quantity,
      })),
    });
  };

  return {
    cartItems,
    getItemQuantity,
    updateCart,
    removeItem,
    openCart,
    closeCart,
    checkout,
    cartIsOpen,
  };
}

//   useEffect(() => {
//     const stateLocal = localStorage.getItem('urbanviking_cart');
//     const data = stateLocal && JSON.parse(stateLocal);
//     if (data) {
//       setCart(data);
//     }
//   }, []);

//   useEffect(() => {
//     const data = JSON.stringify(cart);
//     localStorage.setItem('urbanviking_cart', data);
//   }, [cart]);

//   const cartItems = Object.entries(cart).map(([key, value]) => {
//     const product = products.find(({ id }) => `${id}` === `${key}`);
//     return {
//       id: key,
//       quantity: value,
//       pricePerItem: product.price,
//     };
//   });

//   const subtotal = cartItems.reduce(
//     (acc, { pricePerItem, quantity }) => acc + pricePerItem * quantity,
//     0
//   );

//   const totalQuantity = cartItems.reduce(
//     (acc, { quantity }) => acc + quantity,
//     0
//   );

//   const addToCart = id => {
//     setCart(state => {
//       let prev = { ...state };
//       if (prev[id]) {
//         prev[id] += 1;
//       } else {
//         prev[id] = 1;
//       }
//       return prev;
//     });
//   };

//   const updateCartItem = (id, quant = 0) => {
//     setCart(state => {
//       let prev = { ...state };
//       if (prev[id]) {
//         prev[id] = quant;
//       }
//       return prev;
//     });
//   };

//   const checkout = () => {
//     initiateCheckout({
//       lineItems: cartItems.map(item => ({
//         price: item.id,
//         quantity: item.quantity,
//       })),
//     });
//   };

//   return {
//     cart,
//     cartItems,
//     setCart,
//     subtotal,
//     totalQuantity,
//     addToCart,
//     updateCartItem,
//     checkout,
//   };
// };
