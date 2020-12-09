import ButtonLinkPrimary from '@/components/button-link-primary'
import { useAuth0 } from '@auth0/auth0-react'

export default function NavSecondary({ title = 'KingsLandingPage' }) {
  const auth0 = useAuth0()

//  {typeof window !== 'undefined' && !auth0.isLoading && auth0.isAuthenticated && 

  return (
    <>
      <div className="bg-white py-3 flex items-center justify-between border-b border-gray-200 mb-4">
            <div className="flex-1 flex justify-center sm:hidden">
           

                <ButtonLinkPrimary href="/landingpage-new">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="ml-2">
                    Create a new Landing Page
                </span>
                </ButtonLinkPrimary>
            
 
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">


                <div className="md:flex md:items-center md:justify-start md:inset-y-0 md:left-0">
                    <div className="inline-flex rounded-md">
                        <div>
                            <div className="md:flex md:items-center md:justify-start md:inset-y-0 md:left-0">
                                <span className="inline-flex rounded-md">
                                    <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
                                        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                        <span className="sr-only">Grid View</span>
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <title>Grid View</title>
                                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                        </svg>
                                        </a>
                                        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-300 hover:bg-gray-50 ">
                                        <span className="sr-only">Table View</span>
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <title>Table View</title>
                                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </nav>
                                </span>
                            </div>
                        </div>
                        <div className="relative ml-4">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <title>Search input</title>
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                />
                                </svg>
                            </div>
                            <input
                                id="search"
                                className="block w-full pl-10 pr-3 py-2 border rounded-md leading-5 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm hover:border-gray-300 hover:shadow transition duration-150 ease-in-out"
                                placeholder="Search"
                                type="search"
                            />
                        </div>
                    </div>
                </div>




                <div>
                        <ButtonLinkPrimary href="/landingpage-new">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="ml-2">
                            Create a new Landing Page
                        </span>
                        </ButtonLinkPrimary>
                    
                </div>
            </div>
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