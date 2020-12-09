// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
import stripeUninitialized from 'stripe'
import { NextApiHandler } from 'next'
import dotenv from 'dotenv'

dotenv.config()

const handler: NextApiHandler = async (req, res) => {
  const { priceId } = req.body;
  const { STRIPE_PUBLISHABLE_KEY, STRIPE_SECRET_KEY } = process.env

  
  
  // See https://stripe.com/docs/api/checkout/sessions/create
  // for additional parameters to pass.  
  try {
    // @ts-ignore
    const stripe = stripeUninitialized(STRIPE_SECRET_KEY)
    
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          // For metered billing, do not pass quantity
          quantity: 1,
        },
      ],
      // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
      // the actual Session ID is returned in the query parameter when your customer
      // is redirected to the success page.
      success_url: 'http://localhost:3000/?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000/',
    });
   
    return res.json({
      sessionId: session.id,
    })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
