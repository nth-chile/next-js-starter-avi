import { useState } from 'react'
import Router from 'next/router'

import Button from '@/components/button'

export default function LandingPageForm() {
  const [pageurl, setPageurl] = useState('')
  const [nickname, setNickname] = useState('')
  const [headline, setHeadline] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function submitHandler(e) {
    setSubmitting(true)
    e.preventDefault()
    try {
      const res = await fetch('/api/create-landingpage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pageurl,
          nickname,
          headline,
        }),
      })
      setSubmitting(false)
      const json = await res.json()
      if (!res.ok) { 
        throw Error(json.message);
      // } else {
      //   console.log(json.pageurl);
      }
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
          value={pageurl}
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
          value={nickname}
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
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
        />
      </div>
      <Button disabled={submitting} type="submit">
        {submitting ? 'Creating ...' : 'Create'}
      </Button>
    </form>
  )
}
