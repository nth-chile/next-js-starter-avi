import Link from 'next/link'
import Container from '@/components/container'
import ButtonLink from '@/components/button-link'
import Button from '@/components/button'
import { useAuth0 } from '@auth0/auth0-react'

export default function Nav({ title = 'Entries' }) {
  const auth0 = useAuth0()
  
  const handleLoginClick = () => {
    auth0.loginWithRedirect()
  }

  const handleLogoutClick = () => {
    auth0.logout()
  }

  return (
    <Container className="py-4">
      <nav>
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <a className="font-bold text-3xl mr-3">{title}</a>
            </Link>
            <ButtonLink href="/new">New Entry</ButtonLink>
          </div>
          {typeof window !== 'undefined' && !auth0.isLoading && !auth0.isAuthenticated && <Button onClick={handleLoginClick}>Log in</Button>}
          {typeof window !== 'undefined' && !auth0.isLoading && auth0.isAuthenticated && <Button onClick={handleLogoutClick}>Log out</Button>}
        </div>
      </nav>
    </Container>
  )
}
