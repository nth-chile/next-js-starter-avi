import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'

import Button from '../button'

export default function LandingPageForm() {
  const [_nickname, setNickname] = useState('')
  const [_headline, setHeadline] = useState('')
  const [_pageurl, setPageurl] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()
  const { id, pageurl, nickname, headline } = router.query

  useEffect(() => {
    if (typeof pageurl === 'string') {
      setPageurl(pageurl)
    }
    if (typeof nickname === 'string') {
      setNickname(nickname)
    }
    if (typeof headline === 'string') {
      setHeadline(headline)
    }
  }, [pageurl,nickname, headline])

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
          id,
          pageurl: _pageurl,
          nickname: _nickname,
          headline: _headline
        }),
      })
      const json = await res.json()
      setSubmitting(false)
      if (!res.ok) throw Error(json.message)
      Router.push('/')
    } catch (e) {
      throw Error(e.message)
    }
  }

  return (
    <form onSubmit={submitHandler}>
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
        <textarea
          className="shadow border resize-none focus:shadow-outline w-full h-48"
          id="headline"
          name="headline"
          value={_headline}
          onChange={(e) => setHeadline(e.target.value)}
        />
      </div>
      <Button disabled={submitting} type="submit">
        {submitting ? 'Saving ...' : 'Save'}
      </Button>
    </form>
  )
}
