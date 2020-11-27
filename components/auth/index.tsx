import { Auth0Provider } from '@auth0/auth0-react';

function Auth({children}) {
  return (
    <Auth0Provider
      // domain={'test-avi.us.auth0.com'}
      // clientId={'ldJWwBedsvprVO4nvj6MpYfpN7ehjiqh'}
      // redirectUri={'http://localhost:3000/'}>
      domain='dev-c0sbjw99.auth0.com'
      clientId='vT2iLY8nFZrxi7xmBF65377aOWX3W6F6'
      redirectUri='http://localhost:3000/'>
        {children}
    </Auth0Provider>
  )
}

export default Auth
