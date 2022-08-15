import '@styles/globals.css';
import { CartContext, useCartState } from '@lib/useCart';
import Layout from '@components/Layout';

function MyApp({ Component, pageProps }) {
  const cart = useCartState();
  return (
    <CartContext.Provider value={cart}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContext.Provider>
  );
}

export default MyApp;
