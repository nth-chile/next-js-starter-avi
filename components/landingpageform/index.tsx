import { useState } from 'react'
import Router from 'next/router'
import { useAuth0 } from '@auth0/auth0-react'

import Button from '@/components/button'

export default function LandingPageForm() {

  const [nickname, setNickname] = useState('')
  const [headline, setHeadline] = useState('')
  const [subheadline, setSubheadline] = useState('')
  const [description, setDescription] = useState('')
  const [ctatext, setCtatext] = useState('')
  const [ctaurl, setCtaurl] = useState('')
  const [ctasurvey, setCtasurvey] = useState('')
  const [pagetags, setPagetags] = useState('')
  const [logourl, setLogourl] = useState('')
  const [bgurl, setBgurl] = useState('')
  const [googleanalyticsid, setGoogleanalyticsid] = useState('')
  const [klpbranding, setKlpbranding] = useState('')
  const [pageurl, setPageurl] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const auth0 = useAuth0()

  async function submitHandler(e) {
    setSubmitting(true)
    e.preventDefault()
    try {

      const maybeEmail = (auth0.user && auth0.user.email) || ""

      const res = await fetch('/api/create-landingpage', {
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

      //GRAB SNAPSHOT
      //const url = encodeURIComponent(`${window.origin}/landingpage/${pageURLFromDB}`)
      const url = encodeURIComponent("http://google.com")
      const snapshot = await fetch(`/api/get-snapshot?url=${url}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      setSubmitting(false)

      const jsonss = await snapshot.json()

      const s3url= jsonss[0]

      if (!snapshot.ok) { 
        console.log(snapshot)
        throw Error(jsonss.message)
      }

      //UPDATE DB WITH SNAPSHOT S3 URL
      console.log(s3url);

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
    <form onSubmit={submitHandler}>

      <div className="my-4">
        <label htmlFor="nickname">
          <h3 className="font-bold">Nickname</h3>
        </label>
        <input
          id="nickname"
          className="shadow border rounded w-full"
          type="text"
          name="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </div>

      <div className="my-4">
        <label htmlFor="headline">
          <h3 className="font-bold">Headline</h3>
        </label>
        <input
          id="headline"
          className="shadow border rounded w-full"
          type="text"
          name="headline"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
        />
      </div>


      <div className="my-4">
        <label htmlFor="headline">
          <h3 className="font-bold">Subheadline</h3>
        </label>
        <input
          id="subheadline"
          className="shadow border rounded w-full"
          type="text"
          name="subheadline"
          value={subheadline}
          onChange={(e) => setSubheadline(e.target.value)}
        />
      </div>

      <div className="my-4">
        <label htmlFor="description">
          <h3 className="font-bold">Description</h3>
        </label>
        <textarea
          className="shadow border resize-none focus:shadow-outline w-full h-48"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="my-4">
        <label htmlFor="ctatext">
          <h3 className="font-bold">CTA Text</h3>
        </label>
        <input
          id="ctatext"
          className="shadow border rounded w-full"
          type="text"
          name="ctatext"
          value={ctatext}
          onChange={(e) => setCtatext(e.target.value)}
        />
      </div>

      <div className="my-4">
        <label htmlFor="ctaurl">
          <h3 className="font-bold">CTA url</h3>
        </label>
        <input
          id="ctaurl"
          className="shadow border rounded w-full"
          type="text"
          name="ctaurl"
          value={ctaurl}
          onChange={(e) => setCtaurl(e.target.value)}
        />
      </div>

      <div className="my-4">
        <label htmlFor="ctasurvey">
          <h3 className="font-bold">CTA survey</h3>
        </label>
        <input
          id="ctasurvey"
          className="shadow border rounded w-full"
          type="text"
          name="ctasurvey"
          value={ctasurvey}
          onChange={(e) => setCtasurvey(e.target.value)}
        />
      </div>

      <div className="my-4">
        <label htmlFor="pagetags">
          <h3 className="font-bold">Page Tags</h3>
        </label>
        <input
          id="pagetags"
          className="shadow border rounded w-full"
          type="text"
          name="pagetags"
          value={pagetags}
          onChange={(e) => setPagetags(e.target.value)}
        />
      </div>

      <div className="my-4">
        <label htmlFor="logourl">
          <h3 className="font-bold">Logo url</h3>
        </label>
        <input
          id="logourl"
          className="shadow border rounded w-full"
          type="text"
          name="logourl"
          value={logourl}
          onChange={(e) => setLogourl(e.target.value)}
        />
      </div>

      <div className="my-4">
        <label htmlFor="bgurl">
          <h3 className="font-bold">Background image url</h3>
        </label>
        <input
          id="bgurl"
          className="shadow border rounded w-full"
          type="text"
          name="bgurl"
          value={bgurl}
          onChange={(e) => setBgurl(e.target.value)}
        />
      </div>

      <div className="my-4">
        <label htmlFor="googleanalyticsid">
          <h3 className="font-bold">Google Analytics ID</h3>
        </label>
        <input
          id="googleanalyticsid"
          className="shadow border rounded w-full"
          type="text"
          name="googleanalyticsid"
          value={googleanalyticsid}
          onChange={(e) => setGoogleanalyticsid(e.target.value)}
        />
      </div>    

      <div className="my-4">
        <label htmlFor="klpbranding">
          <h3 className="font-bold">Display KingsLandingPage branding</h3>
        </label>
        <input
          id="klpbranding"
          className="shadow border rounded w-full"
          type="text"
          name="klpbranding"
          value={klpbranding}
          onChange={(e) => setKlpbranding(e.target.value)}
        />
      </div>    

      <div className="my-4">
        <label htmlFor="pageurl">
          <h3 className="font-bold">Pageurl</h3>
        </label>
        <input
          id="pageurl"
          className="shadow border rounded w-full"
          type="text"
          name="pageurl"
          value={pageurl}
          onChange={(e) => setPageurl(e.target.value)}
        />
      </div>

      <Button disabled={submitting} type="submit">
        {submitting ? 'Creating ...' : 'Create'}
      </Button>
    </form>
  )
}
