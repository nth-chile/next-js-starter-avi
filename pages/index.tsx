import Skeleton from 'react-loading-skeleton'
import NavPrimary from '@/components/nav-primary'
import NavSecondary from '@/components/nav-secondary'
import Container from '@/components/container'
import LandingPages from '@/components/landingpages'
import Pagination from '@/components/pagination'
import { useAuth0 } from '@auth0/auth0-react'
import { useLandingPages } from '@/lib/swr-hooks'

function UnauthenticatedIndexPage() {
  return (
    <div>
      <NavPrimary title="KingsLandingPage" />
        <Container>
         Authenticating... please wait.
        </Container>
    </div>
  )
}

function AuthenticatedIndexPage({ email }) {

  const { landingpages, isLoading } = useLandingPages(email)



  if (isLoading) {
    return (
      <div>
        <NavPrimary />
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
      <NavPrimary />
      <Container>
        <NavSecondary />
        <LandingPages landingpages={landingpages.data} />
        <Pagination results={landingpages.meta[0].sum_landingpages} />
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
