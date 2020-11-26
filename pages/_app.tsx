import '../styles/index.css'
import Footer from '@/components/footer'
import Auth from '@/components/auth'

function MyApp({ Component, pageProps }) {
  return (
    <Auth>
      <Component {...pageProps} />
      <Footer />
    </Auth>
  )
}

export default MyApp
