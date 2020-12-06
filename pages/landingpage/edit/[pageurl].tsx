import { useRouter } from 'next/router'
import { useLandingPageByUrl } from '@/lib/swr-hooks'

import Container from '@/components/container'
import NavPrimary from '@/components/nav-primary'
import EditLandingPageForm from '@/components/edit-landingpage-form'

export default function EditLandingPage() {
  const router = useRouter()
  const pageurl = router.query.pageurl?.toString()
  const { data } = useLandingPageByUrl(pageurl)

  if (data) {

    return (
      <>
        <NavPrimary title="Edit" />
        <Container>
          <EditLandingPageForm 
            landingpage_id={data.landingpage_id}
            nickname={data.nickname}
            headline={data.headline}
            subheadline={data.subheadline}
            description={data.description}
            ctatext={data.ctatext}
            ctaurl={data.ctaurl}
            ctasurvey={data.ctasurvey} 
            pagetags={data.pagetags} 
            logourl={data.logourl} 
            bgurl={data.logourl} 
            googleanalyticsid={data.googleanalyticsid} 
            klpbranding={data.klpbranding} 
            pageurl={data.pageurl} 
          />
        </Container>
      </>
    )
  } else {
    return "error"
  }
}
