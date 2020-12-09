import Link from 'next/link'
import Button from '@/components/button'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import axios from 'axios'
import CheckoutBtn from "@/components/stripe/CheckoutButton"
import { totalmem } from 'os'

export default function Nav({ title = 'Pass a title to NavPrimary' }) {
  const auth0 = useAuth0()
  
  const handleLoginClick = () => {
    auth0.loginWithRedirect()
  }

  const handleLogoutClick = () => {
    auth0.logout()
  }

  useEffect(() => {
    if (auth0.isAuthenticated) {
      axios.post('http://localhost:3000/api/create-user', {
        user: auth0.user
      }).then(res => {
        if (res) {
          console.log(res);
        }
      })
    }
  }, [auth0.isAuthenticated])

  // return (
  //     <nav>
  //       <div className="flex justify-between items-center">
  //         <div>
  //           <Link href="/">
  //             <a className="font-bold text-3xl mr-3">{title}</a>
  //           </Link>
            
  //         </div>
  //         {typeof window !== 'undefined' && !auth0.isLoading && !auth0.isAuthenticated && <Button onClick={handleLoginClick}>Log in</Button>}
  //         {typeof window !== 'undefined' && !auth0.isLoading && auth0.isAuthenticated && <><ButtonLink href="/new">Create Page</ButtonLink><CheckoutBtn /><Button onClick={handleLogoutClick}>Log out</Button></>}
  //       </div>
  //     </nav>
  // )

//   EXAMPLES OF HOW TO DO RESPONSIVE FLEX
//   <div>
//   <div className="border hidden sm:inline-block">sm</div>
//   <div className="border hidden md:inline-block">md</div>
//   <div className="border hidden lg:inline-block">lg</div>
//   <div className="border hidden xl:inline-block">xl</div>
//   <div className="border hidden 2xl:inline-block">2xl</div>
// </div>

  return (
    <>

      <div className="mx-auto py-4  border-b border-gray-200">
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-left justify-between w-full md:w-auto">
              
              <Link href="/">
                <span className="align-text-center">
                  <a href="/" className="font-bold text-klp-darkest hover:text-klp-dark">
                    <span className="inline-block">
                      <svg version="1.1" viewBox="0 0 24 24" fill="#000" stroke="none" className="w-6 h-6 inline-block " xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <title>
                          KingsLanding.Page
                        </title>
                        <clipPath id="p.0">
                            <path d="m0 0l24.0 0l0 24.0l-24.0 0l0 -24.0z" clipRule="nonzero"/>
                        </clipPath>
                        <g clipPath="url(#p.0)">
                            <path fill="none" fillOpacity="0.0" d="m0 0l24.0 0l0 24.0l-24.0 0z" fillRule="evenodd"/>
                            <defs>
                                <linearGradient id="p.1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(4.898988352703109 0.0 0.0 4.898988352703109 0.0 0.0)" spreadMethod="pad" x1="6.419772243792141E-11" y1="-1.7734225357105054E-5" x2="-1.7734225357105054E-5" y2="4.898970618445653">
                                    <stop offset="0.0" stopColor="currentColor"/>
                                    <stop offset="1.0" stopColor="currentColor" />
                                </linearGradient>
                            </defs>
                            <path fill="url(#p.1)" d="m0 4.00008l0 0c0 -2.2091832 1.7908968 -4.00008 4.00008 -4.00008l15.99984 0l0 0c1.0608864 0 2.0783234 0.4214358 2.8284836 1.1715963c0.7501602 0.7501606 1.1715965 1.7675965 1.1715965 2.8284838l0 15.99984c0 2.2091827 -1.7908974 4.00008 -4.00008 4.00008l-15.99984 0c-2.2091832 0 -4.00008 -1.7908974 -4.00008 -4.00008z" fillRule="evenodd"/>
                            <path fill="#ffffff" d="m11.300074 16.642866l0 -7.968503l-7.9685035 7.968503z" fillRule="evenodd"/>
                            <path fill="#ffffff" d="m12.697292 16.642866l0 -7.968503l7.968504 7.968503z" fillRule="evenodd"/>
                            <path fill="#ffffff" d="m2.8184254 7.3635793l3.9370081 3.9842515l-3.9370081 3.984252z" fillRule="evenodd"/>
                            <path fill="#ffffff" d="m21.181347 7.358163l-3.937008 3.984252l3.937008 3.984252z" fillRule="evenodd"/>
                        </g>
                      </svg> 
                    </span>
                  
                    <span className="hidden sm:inline-block ml-2">
                      KingsLanding.Page
                    </span>

                  </a>
                  <span className="inline-block ml-1"> \ {title}
                  </span>
                </span>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <button type="button" className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" id="main-menu" aria-haspopup="true">
                  <span className="sr-only">Open main menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <span className="inline-flex rounded-md shadow">
               {typeof window !== 'undefined' && !auth0.isLoading && !auth0.isAuthenticated && 
                <>
                  <Button onClick={handleLoginClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  <span className="ml-2">
                    Members
                  </span>
                  </Button>
                </>
               }
               {typeof window !== 'undefined' && !auth0.isLoading && auth0.isAuthenticated && 
                <>
                  <CheckoutBtn />
                  <Button onClick={handleLogoutClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  <span className="ml-2">
                    Logout
                  </span>
                  </Button>
                </>
               }
            </span>
          </div>
        </nav>
      </div>
      
      
    </>

  )

}



//<a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
//Log in
//</a> 



// <!--
// Mobile menu, show/hide based on menu open state.

// Entering: "duration-150 ease-out"
//   From: "opacity-0 scale-95"
//   To: "opacity-100 scale-100"
// Leaving: "duration-100 ease-in"
//   From: "opacity-100 scale-100"
//   To: "opacity-0 scale-95"
// -->
// <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
//   <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
//     <div className="px-5 pt-4 flex items-center justify-between">
//       <div>
//         <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
//       </div>
//       <div className="-mr-2">
//         <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//           <span className="sr-only">Close menu</span>
//           <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//       </div>
//     </div>
//     <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
//       <div className="px-2 pt-2 pb-3" role="none">
//         <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Product</a>

//         <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Features</a>

//         <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Marketplace</a>

//         <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Company</a>
//       </div>
//       <div role="none">
//         <a href="#" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100" role="menuitem">
//           Log in
//         </a>
//       </div>
//     </div>
//   </div>
// </div>