import Container from '@/components/container'
import Nav from '@/components/nav'
import EditLandingPageForm from '@/components/edit-landingpage-form'

export default function EditLandingPage() {
  return (
    <>
      <Nav title="Edit" />
      <Container>
        <EditLandingPageForm />
      </Container>
    </>
  )
}
