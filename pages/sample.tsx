import NavPrimary from '@/components/nav-primary'
import Container from '@/components/container'
import LandingPageForm from '@/components/edit-landingpage-form'
import SampleMenu from '@/components/sample-menu'
import SampleDropdown from '@/components/sample-dropdown'
import Router from 'next/router'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'

export default function SamplePage() {
  const auth0 = useAuth0()

  return (
    <>
     
      <Container className="w-full lg:w-2/4">
        <NavPrimary title="Create a New Page" />
        <SampleMenu />
      </Container>
    </>
  )
}
