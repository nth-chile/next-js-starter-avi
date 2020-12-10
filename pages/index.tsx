import Skeleton from 'react-loading-skeleton'
import NavPrimary from '@/components/nav-primary'
import NavSecondary from '@/components/nav-secondary'
import Container from '@/components/container'
import LandingPages from '@/components/landingpage-array'
import Pagination from '@/components/pagination'
import { useAuth0 } from '@auth0/auth0-react'
import { useLandingPages } from '@/lib/swr-hooks'
import pageint from '@/components/utils/pageint'
import Footer from '@/components/footer'
import Router, { useRouter } from 'next/router'
import Page from '@/components/page'

function UnauthenticatedIndexPage() {
  return (
    <>
      <Page title="Dashboard (Not Authenticated)">
        <LandingPages landingpages={[]} />
        <Pagination results={0} />
        <Footer />
      </Page>
    </>
  )
}

function AuthenticatedIndexPage({ email, page }) {

  const { landingpages, isLoading } = useLandingPages(email,page)

  if (isLoading) {
    return (
      <>
        <Page title="Dashboard (Loading)">
          <LandingPages landingpages={[]} />
          <Pagination results={0} />
          <Footer />
        </Page>
      </>
    )
  }

  return (
    <Page title="Dashboard">
        <LandingPages landingpages={landingpages.data} />
        <Pagination results={landingpages.meta[0].sum_landingpages} />
        <Footer />
    </Page>
  )
}

export default function IndexPage() {
  const auth0 = useAuth0()
  const router = useRouter()
  const page = pageint(router.query.page)

  if (auth0.isAuthenticated) {
    return <AuthenticatedIndexPage email={auth0.user.email} page={page} />
  }
  
  return <UnauthenticatedIndexPage />
}
