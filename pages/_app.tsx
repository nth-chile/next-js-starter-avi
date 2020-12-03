import '../styles/index.css'
import Footer from '@/components/footer'
import Auth from '@/components/auth'
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from "react"

function MyApp({ Component, pageProps }) {
  // Load Stripe on every page as recommended here: https://www.npmjs.com/package/@stripe/stripe-js#ensuring-stripejs-is-available-everywhere
  useEffect(() => {
    loadStripe('pk_test_51Hu2ytCNkMNtmpAn9AlriAXEYptmTVXS8CuiLrlKU2wZzfrwBLlTcUT3wwIz9vVb5MnXzA3w9bufcqGPETXZ1zVx00tr0xj1N7')
  }, [])

  return (
    <Auth>
      <Component {...pageProps} />
      <Footer />
    </Auth>
  )
}

export default MyApp
