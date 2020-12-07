import '../styles/index.css'
import Auth from '@/components/auth'
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from "react"
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  // Load Stripe on every page as recommended here: https://www.npmjs.com/package/@stripe/stripe-js#ensuring-stripejs-is-available-everywhere
  useEffect(() => {
    loadStripe('pk_test_51Hu2ytCNkMNtmpAn9AlriAXEYptmTVXS8CuiLrlKU2wZzfrwBLlTcUT3wwIz9vVb5MnXzA3w9bufcqGPETXZ1zVx00tr0xj1N7')
  }, [])

  return (
    <Auth>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
    </Auth>
  )
}

export default MyApp
