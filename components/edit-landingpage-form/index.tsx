import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import ButtonPrimary from '../button-primary'

type Props = {
  submitHandler?: any;
  landingpage_id?: string;
  nickname?: string;
  headline?: string;
  subheadline?: string;
  description?: string;
  ctatext?: string;
  ctaurl?: string;
  ctasurvey?: string;
  pagetags?: string;
  logourl?: string;
  bgurl?: string;
  googleanalyticsid?: string;
  klpbranding?: number;
  pageurl?: string;
}

export default function LandingPageForm({
  submitHandler,
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
  pageurl
}: Props) {
  const [_landingpage_id, setLandingpage_id] = useState<string | number>(landingpage_id || '')
  const [_nickname, setNickname] = useState(nickname || '')
  const [_headline, setHeadline] = useState(headline || '')
  const [_subheadline, setSubheadline] = useState(subheadline || '')
  const [_description, setDescription] = useState(description || '')
  const [_ctatext, setCtatext] = useState(ctatext || '')
  const [_ctaurl, setCtaurl] = useState(ctaurl || '')
  const [_ctasurvey, setCtasurvey] = useState(ctasurvey || '')
  const [_pagetags, setPagetags] = useState(pagetags || '')
  const [_logourl, setLogourl] = useState(logourl || '')
  const [_bgurl, setBgurl] = useState(bgurl || '')
  const [_googleanalyticsid, setGoogleanalyticsid] = useState(googleanalyticsid || '')
  const [_klpbranding, setKlpbranding] = useState<string | number>(klpbranding || '')
  const [_pageurl, setPageurl] = useState(pageurl || '')
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


  function handleSubmit (e) {
    e.preventDefault()

    submitHandler(
      _landingpage_id,
      _nickname,
      _headline,
      _subheadline,
      _description,
      _ctatext,
      _ctaurl,
      _ctasurvey,
      _pagetags,
      _logourl,
      _bgurl,
      _googleanalyticsid,
      _klpbranding,
      _pageurl,
      setSubmitting
    )
  }

  return (
    <form onSubmit={handleSubmit}>
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
