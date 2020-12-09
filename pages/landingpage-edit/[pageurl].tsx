import { useLandingPageByUrl } from '@/lib/swr-hooks'
import Router, { useRouter } from 'next/router'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import Container from '@/components/container'
import NavPrimary from '@/components/nav-primary'
import LandingPageForm from '@/components/landingpage-form'

export default function EditLandingPage() {
  const router = useRouter()
  const pageurl = router.query.pageurl?.toString()
  const { data } = useLandingPageByUrl(pageurl,"0")
  const auth0 = useAuth0()

  const isClone = router.query && router.query.clone

  async function cloneHandler(
    nickname,
    headline,
    subheadline,
    description,
    ctatext,
    ctaurl,
    ctasurvey,
    pagetags,
    logourl,
    bgurl,
    googleanalyticsid,
    klpbranding,
    pageurl,
    setSubmitting
  ) {
    setSubmitting(true)

    try {
      const maybeEmail = (auth0.user && auth0.user.email) || ""

      const res = await fetch('/api/landingpage-create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nickname,
          headline,
          subheadline,
          description,
          ctatext,
          ctaurl,
          ctasurvey,
          pagetags,
          maybeEmail,
          logourl,
          bgurl,
          googleanalyticsid,
          klpbranding,
          pageurl
        }),
      })

      setSubmitting(false)

      const json = await res.json()

      const { pageurl: pageURLFromDB } = json[0][0]

      if (!res.ok) { 
        console.log(res)
        throw Error(json.message);
      }

      setSubmitting(false)

      const colors = ["9900ff", "ff00ff", "0000ff", "4a86e8", "00ffff", "00ff00", "ffff00","ff9900","ff0000","980000"];
      const randomcolor = colors[Math.floor(Math.random() * colors.length)];

      //GRAB SNAPSHOT
      var url = `https://dummyimage.com/1024x768/${randomcolor}/ffffff.png&text=${headline}` //https://picsum.photos/") //TODO: REPLACE THIS WITH REAL THUMBNAIL URL ONCE LIVE - https://kingslanding.page/landingpage/${pageURLFromDB}
      url = encodeURIComponent(url)
      const snapshot = await axios.get(`/api/snapshot-get?url=${url}&name=${pageURLFromDB}.png`)
      //const { filepath } = snapshot.data
      //console.log(filepath);
      
      //ROUTE USER
      if (pageURLFromDB) {
        Router.push(`/landingpage/${pageURLFromDB}?track=0`)
      } else {
        Router.push('/')
      }
      
    } catch (e) {
      console.log(e)
      throw Error(e.message)
    }
  }

  async function editHandler(
    landingpage_id,
    nickname,
    headline,
    subheadline,
    description,
    ctatext,
    ctaurl,
    ctasurvey,
    pagetags,
    logourl,
    bgurl,
    googleanalyticsid,
    klpbranding,
    pageurl,
    setSubmitting
  ) { 
    setSubmitting(true)
    
    try {
      const res = await fetch('/api/landingpage-edit', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          landingpage_id,
          nickname: nickname,
          headline: headline,
          subheadline: subheadline,
          description: description,
          ctatext: ctatext,
          ctaurl: ctaurl,
          ctasurvey: ctasurvey,
          pagetags: pagetags,
          logourl: logourl,
          bgurl: bgurl,
          googleanalyticsid: googleanalyticsid,
          klpbranding: klpbranding,
          pageurl: pageurl
        }),
      })

      setSubmitting(false)
      const json = await res.json()

      const { pageurl: pageURLFromDB } = json[0][0]

      if (!res.ok) { 
        throw Error(json.message);
      }

      const colors = ["9900ff", "ff00ff", "0000ff", "4a86e8", "00ffff", "00ff00", "ffff00","ff9900","ff0000","980000"];
      const randomcolor = colors[Math.floor(Math.random() * colors.length)];

      //GRAB SNAPSHOT
      var url = `https://dummyimage.com/1024x768/${randomcolor}/ffffff.png&text=${headline}` //https://picsum.photos/") //TODO: REPLACE THIS WITH REAL THUMBNAIL URL ONCE LIVE - https://kingslanding.page/landingpage/${pageURLFromDB}
      url = encodeURIComponent(url)
      await axios.get(`/api/snapshot-get?url=${url}&name=${pageURLFromDB}.png`)
      //const { filepath } = snapshot.data
      //console.log(filepath);

      if (pageURLFromDB) {
        Router.push(`/landingpage/${pageURLFromDB}?track=0`)
      } else {
        Router.push('/')
      }
      
    } catch (e) {
      throw Error(e.message)
    }
  }

  const submitHandler = (
      landingpage_id, nickname, headline, subheadline, description, ctatext, ctaurl, ctasurvey, pagetags, logourl, bgurl, googleanalyticsid, klpbranding, pageurl, setSubmitting
  ) => {
    if (isClone) {
      cloneHandler(
        nickname, headline, subheadline, description, ctatext, ctaurl, ctasurvey, pagetags, logourl, bgurl, googleanalyticsid, klpbranding, pageurl, setSubmitting
      )

      return
    }
    editHandler(
      landingpage_id, nickname, headline, subheadline, description, ctatext, ctaurl, ctasurvey, pagetags, logourl, bgurl, googleanalyticsid, klpbranding, pageurl, setSubmitting
    )
  }

  var pageTitle = "Edit Landing Page"

  if (isClone == "true") {
    pageTitle = "Clone Landing Page"
  }

  if (data) {

    return (
      <>

        <Container>
          <NavPrimary title={pageTitle} />
          <LandingPageForm 
            submitHandler={submitHandler}
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