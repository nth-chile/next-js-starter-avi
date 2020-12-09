import LandingPage from '../landingpage'
import LandingPagePlaceholderNew from '../landingpage-placeholder-new'

function LandingPages({ landingpages }) {
  if (landingpages) {

    return (
      
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        <LandingPagePlaceholderNew />
        {landingpages.map((e) => (
          <LandingPage key={e.landingpage_id} landingpage_id={e.landingpage_id} nickname={e.nickname} headline={e.headline} pageurl={e.pageurl} thumburl={e.thumburl} vstatus={e.status} statviews={e.statviews} statctaclicks={e.statctaclicks} statsurveysaves={e.statsurveysaves} />
        ))}
      </ul>

    )
  } else {
    return null
  }
}

export default LandingPages