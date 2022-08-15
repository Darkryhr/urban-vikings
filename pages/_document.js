import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' dir='ltr'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='font-body bg-gray-100 text-gray-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
