import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import axios from 'axios'

import ButtonPrimary from '../button-primary'

export default function LandingPageForm({ landingpage_id, nickname, headline, subheadline, description, ctatext, ctaurl, ctasurvey, pagetags, logourl, bgurl, googleanalyticsid, klpbranding, pageurl }) {
  const [_landingpage_id, setLandingpage_id] = useState<string | number>('')
  const [_nickname, setNickname] = useState('')
  const [_headline, setHeadline] = useState('')
  const [_subheadline, setSubheadline] = useState('')
  const [_description, setDescription] = useState('')
  const [_ctatext, setCtatext] = useState('')
  const [_ctaurl, setCtaurl] = useState('')
  const [_ctasurvey, setCtasurvey] = useState('')
  const [_pagetags, setPagetags] = useState('')
  const [_logourl, setLogourl] = useState('')
  const [_bgurl, setBgurl] = useState('')
  const [_googleanalyticsid, setGoogleanalyticsid] = useState('')
  const [_klpbranding, setKlpbranding] = useState<string | number>('')
  const [_pageurl, setPageurl] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()
  //const { subheadline, description, ctatext, ctaurl, ctasurvey, pagetags, logourl, bgurl, googleanalyticsid, klpbranding } = router.query

  useEffect(() => {
    if (typeof landingpage_id === 'number') {
      setLandingpage_id(landingpage_id)
    }
    if (typeof nickname === 'string') {
      setNickname(nickname)
    }
    if (typeof headline === 'string') {
      setHeadline(headline)
    }
    if (typeof subheadline === 'string') {
      setSubheadline(subheadline)
    }
    if (typeof description === 'string') {
      setDescription(description)
    }
    if (typeof ctatext === 'string') {
      setCtatext(ctatext)
    }
    if (typeof ctaurl === 'string') {
      setCtaurl(ctaurl)
    }
    if (typeof ctasurvey === 'string') {
      setCtasurvey(ctasurvey)
    }
    if (typeof pagetags === 'string') {
      setPagetags(pagetags)
    }
    if (typeof logourl === 'string') {
      setLogourl(logourl)
    }
    if (typeof bgurl === 'string') {
      setBgurl(bgurl)
    }
    if (typeof googleanalyticsid === 'string') {
      setGoogleanalyticsid(googleanalyticsid)
    }
    if (typeof klpbranding === 'number') {
      setKlpbranding(klpbranding)
    }
    if (typeof pageurl === 'string') {
      setPageurl(pageurl)
    }
  }, [landingpage_id, nickname, headline, subheadline, description, ctatext, ctaurl, ctasurvey, pagetags, logourl, bgurl, googleanalyticsid, klpbranding, pageurl])

  async function submitHandler(e) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/edit-landingpage', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          landingpage_id: _landingpage_id,
          nickname: _nickname,
          headline: _headline,
          subheadline: _subheadline,
          description: _description,
          ctatext: _ctatext,
          ctaurl: _ctaurl,
          ctasurvey: _ctasurvey,
          pagetags: _pagetags,
          logourl: _logourl,
          bgurl: _bgurl,
          googleanalyticsid: _googleanalyticsid,
          klpbranding: _klpbranding,
          pageurl: _pageurl
        }),
      })

      setSubmitting(false)
      const json = await res.json()

      const { pageurl: pageURLFromDB } = json[0][0]

      if (!res.ok) { 
        throw Error(json.message);
      }

      //GRAB SNAPSHOT
      const url = encodeURIComponent("http://yahoo.com") //TODO: REPLACE THIS WITH REAL THUMBNAIL URL ONCE LIVE - https://kingslanding.page/landingpage/${pageURLFromDB}
      const snapshot = await axios.get(`/api/get-snapshot?url=${url}&name=${pageURLFromDB}.png`)
      //const { filepath } = snapshot.data
      //console.log(filepath);

      if (pageURLFromDB) {
        Router.push(`/landingpage/${pageURLFromDB}`)
      } else {
        Router.push('/')
      }
      
    } catch (e) {
      throw Error(e.message)
    }

  }

  return (
    <form onSubmit={submitHandler}>

        <input
          id="landingpage_id"
          className="shadow border rounded w-full"
          type="hidden"
          name="landingpage_id"
          value={_landingpage_id}
          onChange={(e) => setLandingpage_id(e.target.value)}
        />

      <div className="my-4">
        <label htmlFor="nickname">
          <h3 className="font-bold">Nickname</h3>
        </label>
        <input
          id="nickname"
          className="shadow border rounded w-full"
          type="text"
          name="nickname"
          value={_nickname}
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
          value={_headline}
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
          value={_subheadline}
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
          value={_description}
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
          value={_ctatext}
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
          value={_ctaurl}
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
          value={_ctasurvey}
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
          value={_pagetags}
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
          value={_logourl}
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
          value={_bgurl}
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
          value={_googleanalyticsid}
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
          value={_klpbranding}
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
          value={_pageurl}
          onChange={(e) => setPageurl(e.target.value)}
        />
      </div>

      <ButtonPrimary disabled={submitting} type="submit">
        {submitting ? 'Saving ...' : 'Save'}
      </ButtonPrimary>
    </form>
  )
}
