import useSWR from 'swr'

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json())
}


export function useLandingPages(email,page) {
  const encodedEmail = encodeURIComponent(email)
  if (email) {
    const { data, error } = useSWR(`/api/landingpage-array-get?email=${encodedEmail}&page=${page}`, fetcher)

    return {
      landingpages: data,
      isLoading: !error && !data,
      isError: error,
    }
  }
  return {}
}

export function useLandingPage(id: string) {
if (id) {
  return useSWR(`/api/landingpage-get?id=${id}`, fetcher)
}
return useSWR(null)
}

// export function useLandingPageByUrl(pageurl: string, track: string) {
//   return useSWR(`/api/landingpage-get-by-url?pageurl=${pageurl}&track=${track}`, fetcher)
// }


export function useLandingPageByUrl(pageurl: string, track: string) {
  if (pageurl) {
    return useSWR(`/api/landingpage-get-by-url?pageurl=${pageurl}&track=${track}`, fetcher)
  }
  return useSWR(null)
}