import Button from "@/components/button"
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

export default function CheckoutButton() {
  const goToCheckout = async () => {
    const stripe = await loadStripe('pk_test_51Hu2ytCNkMNtmpAn9AlriAXEYptmTVXS8CuiLrlKU2wZzfrwBLlTcUT3wwIz9vVb5MnXzA3w9bufcqGPETXZ1zVx00tr0xj1N7')
    
    // Get token
    const tokenFetch = await axios.post('/api/stripe/create-checkout-session', {
      priceId: 'price_1Hu2zgCNkMNtmpAnsQ2O2Sj9'
    })

    const { sessionId } = tokenFetch.data

    stripe.redirectToCheckout({ sessionId }).then(res => {
      console.log(res);
    })
  }
  

  return (
    <Button onClick={goToCheckout}>
      Go to checkout
    </Button>
  )
}
