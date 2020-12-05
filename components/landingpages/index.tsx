import LandingPage from './landingpage'

function LandingPages({ landingpages }) {
  if (landingpages) {

    return (
      <div>
        {landingpages.map((e) => (
          <div key={e.landingpage_id} className="py-2">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <LandingPage landingpage_id={e.landingpage_id} nickname={e.nickname} headline={e.headline} pageurl={e.pageurl} thumburl={e.thumburl} vstatus={e.status} statviews={e.statviews} statctaclicks={e.statctaclicks} statsurveysaves={e.statsurveysaves} />
            </ul>
          </div>
        ))}
      </div>
    )
  } else {
    return null
  }
}

export default LandingPages
