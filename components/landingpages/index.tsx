import LandingPage from './landingpage'
import LandingPageNew from './landingpage-new'

function LandingPages({ landingpages }) {
  if (landingpages) {

    return (
      
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        <LandingPageNew />
        {landingpages.map((e) => (
          <LandingPage landingpage_id={e.landingpage_id} nickname={e.nickname} headline={e.headline} pageurl={e.pageurl} thumburl={e.thumburl} vstatus={e.status} statviews={e.statviews} statctaclicks={e.statctaclicks} statsurveysaves={e.statsurveysaves} />
        ))}
      </ul>

    )
  } else {
    return null
  }
}

export default LandingPages