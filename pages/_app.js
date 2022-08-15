import '@styles/globals.css';
import { CartContext, useCartState } from '@lib/useCart';

function MyApp({ Component, pageProps }) {
  const cart = useCartState();
  return (
    <CartContext.Provider value={cart}>
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}

export default MyApp;
