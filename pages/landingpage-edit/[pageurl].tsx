import { useLandingPageByUrl } from '@/lib/swr-hooks'
import Router, { useRouter } from 'next/router'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import Container from '@/components/container'
import NavPrimary from '@/components/nav-primary'
import LandingPageForm from '@/components/landingpage-form'
import { useEffect } from 'react'
import filesperfolder from '@/components/utils/filesperfolder'
import { config } from '@/lib/config'

export default function EditLandingPage() {
  const router = useRouter()
  const pageurl = router.query.pageurl?.toString()

  const { data } = useLandingPageByUrl(pageurl,"0")
  const auth0 = useAuth0()

  const isNew = !pageurl || (pageurl && router.query.clone)

  async function submitHandler({
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
  }) {
    setSubmitting(true)

    try {
      const maybeEmail = (auth0.user && auth0.user.email) || ""

      const res = await fetch(isNew ? '/api/landingpage-create' : '/api/landingpage-edit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          landingpage_id,
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

      const { pageurl: pageURLFromDB, landingpage_id: lid } = json[0][0]
      var varfoldersm = filesperfolder(lid,config.foldersm)
      var varfolderlg = filesperfolder(lid,config.folderlg)

      if (!res.ok) {
        throw Error(json.message);
      }

      //GRAB SNAPSHOT
      const colors = ["9900ff", "ff00ff", "0000ff", "4a86e8", "00ffff", "00ff00", "ffff00","ff9900","ff0000","980000"];
      const randomcolor = colors[Math.floor(Math.random() * colors.length)];
      
      //GRAB SNAPSHOT     
      var url = `https://dummyimage.com/1024x768/${randomcolor}/ffffff.png&text=${headline}` //https://picsum.photos/") //TODO: REPLACE THIS WITH REAL THUMBNAIL URL ONCE LIVE - https://kingslanding.page/landingpage/${pageURLFromDB}
      url = encodeURIComponent(url)
      
      //STORE IT IN S3
      await axios.get(`/api/screenshot-save?lid=${lid}&url=${url}&name=${varfolderlg}/${varfoldersm}/${pageURLFromDB}.png`)

      //ROUTE USER
      if (pageURLFromDB) {
        Router.push(`/landingpage/${pageURLFromDB}?track=0`)
      } else {
        Router.push('/')
      }
      
    } catch (e) {
      throw Error(e.message)
    }
  }

  var pageTitle = pageurl ? "Edit Landing Page" : "Create New Page"

  if (router.query && router.query.clone) {
    pageTitle = "Clone Landing Page"
  }

  var d_landingpage_id=""
  var d_nickname=""
  var d_headline=""
  var d_subheadline=""
  var d_description=""
  var d_ctatext=""
  var d_ctaurl=""
  var d_ctasurvey=""
  var d_pagetags=""
  var d_logourl=""
  var d_bgurl=""
  var d_googleanalyticsid=""
  var d_klpbranding=1
  var d_pageurl=""

  if (data) {

    d_landingpage_id=data.landingpage_id 
    d_nickname=data.nickname
    d_headline=data.headline
    d_subheadline=data.subheadline
    d_description=data.description
    d_ctatext=data.ctatext
    d_ctaurl=data.ctaurl
    d_ctasurvey=data.ctasurvey 
    d_pagetags=data.pagetags 
    d_logourl=data.logourl 
    d_bgurl=data.logourl 
    d_googleanalyticsid=data.googleanalyticsid 
    d_klpbranding=data.klpbranding 
    d_pageurl=data.pageurl 
  }

  if (data || isNew) {

    return (
      <>

        <Container>
          <NavPrimary title={pageTitle} />
          <LandingPageForm 
            submitHandler={submitHandler}
            landingpage_id={d_landingpage_id}
            nickname={d_nickname}
            headline={d_headline}
            subheadline={d_subheadline}
            description={d_description}
            ctatext={d_ctatext}
            ctaurl={d_ctaurl}
            ctasurvey={d_ctasurvey} 
            pagetags={d_pagetags} 
            logourl={d_logourl} 
            bgurl={d_logourl} 
            googleanalyticsid={d_googleanalyticsid} 
            klpbranding={d_klpbranding} 
            pageurl={d_pageurl} 
          />
        </Container>
      </>
    )
  } else {
    return "error..."
  }
}