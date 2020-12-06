import NavPrimary from '@/components/nav-primary'
import Container from '@/components/container'
import LandingPageForm from '@/components/landingpageform'

export default function NewLandingPage() {
  return (
    <>
      <NavPrimary title="New" />
      <Container className="w-full lg:w-2/4">
        <LandingPageForm />
      </Container>
    </>
  )
}
