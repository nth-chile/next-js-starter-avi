import Skeleton from 'react-loading-skeleton'

import Nav from '@/components/nav'
import Container from '@/components/container'
import LandingPages from '@/components/landingpages'
import Auth from '@/components/auth'

import { useLandingPages } from '@/lib/swr-hooks'

export default function IndexPage() {
  const { landingpages, isLoading } = useLandingPages()

  if (isLoading) {
    return (
      <Auth>
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
      </Auth>
    )
  }

  return (
    <Auth>
      <div>
        <Nav />
        <Container>
          <LandingPages landingpages={landingpages} />
        </Container>
      </div>
    </Auth>
  )
}
