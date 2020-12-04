import LandingPage from './landingpage'

function LandingPages({ landingpages }) {
  if (landingpages) {

    return (
      <div>
        {landingpages.map((e) => (
          <div key={e.landingpage_id} className="py-2">
            <LandingPage landingpage_id={e.landingpage_id} nickname={e.nickname} headline={e.headline} pageurl={e.pageurl} thumburl={e.thumburl} vstatus={e.status} />
          </div>
        ))}
      </div>
    )
  } else {
    return null
  }
}

export default LandingPages
