import Button from "@/components/button"
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

export default function CheckoutButton() {
  const goToCheckout = async () => {
    const stripe = await loadStripe('pk_test_51Hu2ytCNkMNtmpAn9AlriAXEYptmTVXS8CuiLrlKU2wZzfrwBLlTcUT3wwIz9vVb5MnXzA3w9bufcqGPETXZ1zVx00tr0xj1N7')
    
    // Get token
    const tokenFetch = await axios.post('/api/stripe/checkout-session-create', {
      priceId: 'price_1Hu2zgCNkMNtmpAnsQ2O2Sj9'
    })

    const { sessionId } = tokenFetch.data

    stripe.redirectToCheckout({ sessionId }).then(res => {
      console.log(res);
    })
  }
  

  return (
    <>
      <Button onClick={goToCheckout}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span className="ml-2">
          Upgrade
        </span>
      </Button>
    </>
  )
}

