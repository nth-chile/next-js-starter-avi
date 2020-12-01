import { useRouter } from 'next/router'

import { useLandingPageByUrl } from '@/lib/swr-hooks'
import Container from '@/components/container'
import Nav from '@/components/nav'

export default function LandingPage() {
  const router = useRouter()
  const pageurl = router.query.pageurl?.toString()
  const { data } = useLandingPageByUrl(pageurl)

  if (data) {
    return (
      <Container>
        <Container className="py-4">
          <Nav title="View" />
        </Container>
        <Container>
          <h1 className="font-bold text-3xl my-2">{data.nickname}</h1>
          <p>{data.headline}</p>
        </Container>
      </Container>
    )
  } else {
    return (
      <>
        <Nav title="View" />
        <Container>
          <h1 className="font-bold text-3xl my-2">...</h1>
          <p>...</p>
        </Container>
      </>
    )
  }
}
