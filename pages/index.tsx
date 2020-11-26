import Skeleton from 'react-loading-skeleton'
import { useAuth0 } from '@auth0/auth0-react'

import Nav from '@/components/nav'
import Container from '@/components/container'
import Entries from '@/components/entries'
import Auth from '@/components/auth'

import { useEntries } from '@/lib/swr-hooks'

export default function IndexPage() {
  const { entries, isLoading } = useEntries()

  const auth0 = useAuth0()
  
  if (!auth0.isLoading && !auth0.isAuthenticated) {
    auth0.loginWithRedirect()
  }

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
          <Entries entries={entries} />
        </Container>
      </div>
    </Auth>
  )
}
