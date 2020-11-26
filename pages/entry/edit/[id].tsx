import Container from '@/components/container'
import Nav from '@/components/nav'
import Auth from '@/components/auth'
import EditEntryForm from '@/components/edit-entry-form'

export default function EditEntryPage() {
  return (
    <Auth>
      <Nav title="Edit" />
      <Container>
        <EditEntryForm />
      </Container>
    </Auth>
  )
}
