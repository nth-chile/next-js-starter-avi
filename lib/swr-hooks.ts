import useSWR from 'swr'

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json())
}


export function useLandingPages() {
  const { data, error } = useSWR(`/api/get-landingpages`, fetcher)

  return {
    landingpages: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useLandingPage(id: string) {
  return useSWR(`/api/get-landingpage?id=${id}`, fetcher)
}

export function useLandingPageByUrl(pageurl: string) {
  return useSWR(`/api/get-landingpage-by-url?pageurl=${pageurl}`, fetcher)
}