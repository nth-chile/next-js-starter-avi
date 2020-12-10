import Container from '../container'
import Header from '../header'
import NavPrimary from '../nav-primary'
import NavSecondary from '../nav-secondary'

export default function Page({ title = 'Untitled',children }) {
  return (
    <Container className="mx-8">
      <Header />
      <NavPrimary title={title} />
      <NavSecondary />
      {children}
    </Container>
  )
}