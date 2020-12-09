function LandingPageNew() {
    return (
        <li className="hidden sm:flex md:flex col-span-1 flex flex-col text-center rounded-lg shadow divide-y divide-gray-200 justify-center">
            <div className="align-start h-full">
                <a href="/landingpage-new" className="block py-2 text-white hover:text-gray-500 bg-gray-300 justify-center rounded-t-lg">
                    <span className="block flex-1 flex flex-col items-center p-2">
                        <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <title>Create a New Page</title>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>                
                    </span>
                    <span className="mt-6 text-sm font-medium">Create a New Page</span>
                </a>
                <div className=" flex divide-x divide-gray-200">

                    <div className="w-0 flex-1 flex justify-center">
                        <a href="#" className="flex-1 inline-flex justify-center items-stretch py-4 text-sm text-gray-400 font-medium border border-transparent rounded-br-lg hover:text-gray-700">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <title>Learn more about validation!</title>
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                            <span className="ml-2">
                                Need help? Learn more!
                            </span>
                        </a>
                    </div>         

                </div>   
            </div> 
        </li>
    )
}

  
  export default LandingPageNew
  