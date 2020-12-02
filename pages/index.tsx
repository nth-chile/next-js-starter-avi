import Skeleton from 'react-loading-skeleton'
import Nav from '@/components/nav'
import Container from '@/components/container'
import LandingPages from '@/components/landingpages'
import { useAuth0 } from '@auth0/auth0-react'
import { useLandingPages } from '@/lib/swr-hooks'

function UnauthenticatedIndexPage() {
  return (
    <div>
      <Nav />
        <Container>
          Not authenticated.
        </Container>
    </div>
  )
}

function AuthenticatedIndexPage({ email }) {

  const { landingpages, isLoading } = useLandingPages(email)

  if (isLoading) {
    return (
      <div>
        <Nav />
        <Container>
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
        </Container>
      </div>
    )
  }

  return (
    <div>
      <Nav />
      <Container>
        <LandingPages landingpages={landingpages} />
      </Container>
    </div>
  )
}

export default function IndexPage() {
  const auth0 = useAuth0()

  if (auth0.isAuthenticated) {
    return <AuthenticatedIndexPage email={auth0.user.email} />
  }
  
  return <UnauthenticatedIndexPage />
}
