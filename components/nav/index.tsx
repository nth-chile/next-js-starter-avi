import Link from 'next/link'
import Container from '@/components/container'
import ButtonLink from '@/components/button-link'
import Button from '@/components/button'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import axios from 'axios'
import CheckoutBtn from "@/components/stripe/CheckoutButton"

export default function Nav({ title = 'Landing Pages' }) {
  const auth0 = useAuth0()
  
  const handleLoginClick = () => {
    auth0.loginWithRedirect()
  }

  const handleLogoutClick = () => {
    auth0.logout()
  }

  useEffect(() => {
    if (auth0.isAuthenticated) {
      axios.post('http://localhost:3000/api/create-user', {
        user: auth0.user
      }).then(res => {
        if (res) {
          console.log(res);
        }
      })
    }
  }, [auth0.isAuthenticated])

  return (
      <nav>
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <a className="font-bold text-3xl mr-3">{title}</a>
            </Link>
            
          </div>
          {typeof window !== 'undefined' && !auth0.isLoading && !auth0.isAuthenticated && <Button onClick={handleLoginClick}>Log in</Button>}
          {typeof window !== 'undefined' && !auth0.isLoading && auth0.isAuthenticated && <><ButtonLink href="/new">Create Page</ButtonLink><CheckoutBtn /><Button onClick={handleLogoutClick}>Log out</Button></>}
        </div>
      </nav>
  )
}
