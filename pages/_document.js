import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' dir='ltr'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin={true}
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Belanosima:wght@600;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800;900&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter+Tight:wght@900&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <body className='font-body bg-gray-50 text-gray-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
