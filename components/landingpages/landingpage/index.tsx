import { useState } from 'react'
import Link from 'next/link'
import { mutate } from 'swr'

import ButtonLink from '@/components/button-link'
import Button from '@/components/button'

function LandingPage({ landingpage_id, nickname, headline, pageurl, vstatus }) {
  const [deleting, setDeleting ] = useState(false)
  const [disabling, setDisabling ] = useState(false)

  async function deleteLandingPage() {
    setDeleting(true)
    let res = await fetch(`/api/delete-landingpage?id=${landingpage_id}`, { method: 'DELETE' })
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    mutate('/api/get-landingpages')
    setDeleting(false)
  }

  async function disableLandingPage() {
    setDisabling(true)
    let res = await fetch(`/api/disable-landingpage?id=${landingpage_id}&status=${vstatus}`, { method: 'POST' })
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    mutate('/api/get-landingpages')
    setDisabling(false)
  }

  //BUTTON TEXT FOR ENABLE / DISABLE
  var statusArray = ["Disabling...","Disable"]
  if (vstatus == 0) {
    statusArray = ["Enabling...","Enable"]
  }

  return (
    <div>
      <div className="flex items-center">
        <Link href={`/landingpage/${pageurl}`}>
          <a className="font-bold py-2">{nickname}</a>
        </Link>
        <div className="flex ml-4">
        <ButtonLink
            href={`/landingpage/${pageurl}`}
            className="h-5 py-0 mx-1"
          >
            Preview
          </ButtonLink>
          <ButtonLink
            href={`/landingpage/edit/${landingpage_id}?pageurl=${pageurl}&nickname=${nickname}&headline=${headline}`}
            className="h-5 py-0 mx-1"
          >
            Edit
          </ButtonLink>
          <Button
            disabled={disabling}
            onClick={disableLandingPage}
            className="h-5 py-0 mx-1"
          >
            {disabling ? statusArray[0] : statusArray[1]}
          </Button>
          <Button
            disabled={deleting}
            onClick={deleteLandingPage}
            className="h-5 py-0 mx-1"
          >
            {deleting ? 'Deleting ...' : 'Delete'}
          </Button>
        </div>
      </div>
      <p>{headline}</p>
    </div>
  )
}

export default LandingPage
