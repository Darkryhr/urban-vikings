import '@styles/globals.css';
import { CartProvider } from '@lib/useCart';
import Layout from '@components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
