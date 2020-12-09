import useSWR from 'swr'

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json())
}


export function useLandingPages(email,page) {
  const encodedEmail = encodeURIComponent(email)

  const { data, error } = useSWR(`/api/landingpage-array-get?email=${encodedEmail}&page=${page}`, fetcher)

  return {
    landingpages: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useLandingPage(id: string) {
  return useSWR(`/api/landingpage-get?id=${id}`, fetcher)
}

export function useLandingPageByUrl(pageurl: string) {
  return useSWR(`/api/landingpage-get-by-url?pageurl=${pageurl}`, fetcher)
}