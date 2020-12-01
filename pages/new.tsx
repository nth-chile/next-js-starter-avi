import Nav from '@/components/nav'
import Container from '@/components/container'
import LandingPageForm from '@/components/landingpageform'
import Auth from '@/components/auth'

export default function NewLandingPage() {
  return (
    <Auth>
      <Nav title="New" />
      <Container className="w-full lg:w-2/4">
        <LandingPageForm />
      </Container>
    </Auth>
  )
}
