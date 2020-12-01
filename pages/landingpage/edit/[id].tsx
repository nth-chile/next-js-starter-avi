import Container from '@/components/container'
import Nav from '@/components/nav'
import Auth from '@/components/auth'
import EditLandingPageForm from '@/components/edit-landingpage-form'

export default function EditLandingPage() {
  return (
    <Auth>
      <Nav title="Edit" />
      <Container>
        <EditLandingPageForm />
      </Container>
    </Auth>
  )
}
