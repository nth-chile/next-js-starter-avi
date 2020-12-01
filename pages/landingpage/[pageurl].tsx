import { useRouter } from 'next/router'

import { useLandingPageByUrl } from '@/lib/swr-hooks'
import Container from '@/components/container'
import Nav from '@/components/nav'
import Auth from '@/components/auth'

export default function LandingPage() {
  const router = useRouter()
  const pageurl = router.query.pageurl?.toString()
  const { data } = useLandingPageByUrl(pageurl)

  if (data) {
    return (
      <Auth>
        <Nav title="View" />
        <Container>
          <h1 className="font-bold text-3xl my-2">{data.nickname}</h1>
          <p>{data.headline}</p>
        </Container>
      </Auth>
    )
  } else {
    return (
      <Auth>
        <Nav title="View" />
        <Container>
          <h1 className="font-bold text-3xl my-2">...</h1>
          <p>...</p>
        </Container>
      </Auth>
    )
  }
}
