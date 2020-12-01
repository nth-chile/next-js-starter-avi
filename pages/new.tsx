import Nav from '@/components/nav'
import Container from '@/components/container'
import LandingPageForm from '@/components/landingpageform'

export default function NewLandingPage() {
  return (
    <>
      <Nav title="New" />
      <Container className="w-full lg:w-2/4">
        <LandingPageForm />
      </Container>
    </>
  )
}
