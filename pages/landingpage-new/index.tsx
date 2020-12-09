import NavPrimary from '@/components/nav-primary'
import Container from '@/components/container'
import LandingPageForm from '@/components/landingpage-form'
import Router from 'next/router'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'

export default function NewLandingPage() {
  const auth0 = useAuth0()

  async function submitHandler(
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

      //GRAB SNAPSHOT
      const url = encodeURIComponent("https://dummyimage.com/1024x768/${randomcolor}/ffffff.png&text=${headline}")  //https://bggenerator.com/") //https://picsum.photos/") //TODO: REPLACE THIS WITH REAL THUMBNAIL URL ONCE LIVE - https://kingslanding.page/landingpage/${pageURLFromDB}
      const snapshot = await axios.get(`/api/snapshot-get?url=${url}&name=${pageURLFromDB}.png`)
      //const { filepath } = snapshot.data
      //console.log(filepath);
      
      //ROUTE USER
      if (pageURLFromDB) {
        Router.push(`/landingpage/${pageURLFromDB}`)
      } else {
        Router.push('/')
      }
      
    } catch (e) {
      console.log(e)
      throw Error(e.message)
    }
  }

  return (
    <>
     
      <Container className="w-full lg:w-2/4">
        <NavPrimary title="Create a New Page" />
        <LandingPageForm submitHandler={submitHandler} />
      </Container>
    </>
  )
}
